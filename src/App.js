import React, { Component } from 'react'
import './App.css'
import StyleGuide from './components/StyleGuide'
import CSSSelect from './components/CSSSelect'
import ReactPaginate from 'react-paginate'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      styleName: '',
      stylePath: '',
      libs: [],
      list: [],
      pageCount: 0
    }

    // This binding is necessary to make `this` work in the callback
    this.changeStyle = this.changeStyle.bind(this)
    this.handlePageClick = this.handlePageClick.bind(this)
  }

  componentDidMount() {
    fetch('./style-explorer.json')
      .then(blob => blob.json())
      .then(data => {
        const libs = data.results

        this.setState({
          libs,
          list: libs.slice(0, this.props.perPage),
          pageCount: Math.ceil(libs.length / this.props.perPage)
        })
      })
  }

  handlePageClick(data) {
    let selected = data.selected
    let offset = Math.ceil(selected * this.props.perPage)
    const list = this.state.libs.slice(offset, offset + this.props.perPage)

    this.setState({
      list
    })
  }

  changeStyle(e) {
    const styleName = e.target.id
    const stylePath = e.target.value
    this.setState(prev => ({
      styleName,
      stylePath
    }))

    const frame = document.getElementById('styleguide1')
    const styleSheet = frame.contentDocument.getElementById('pagestyle')
    styleSheet.setAttribute('href', stylePath)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <svg height="32" width="32" viewBox="0 0 256 256">
            <circle cx="128" cy="128" r="128" fill="white" />
            <path
              d="M100.90241,231.617947 L217.358491,192.964882 L256,0 L37.8672926,0 L29.5704613,43.055701 L204.381692,43.055701 L198.939063,70.5461768 L23.8620565,70.5461768 L15.2994493,113.601878 L190.122235,113.601878 L180.519635,162.88598 L109.973459,185.962264 L49.0183263,162.88598 L53.1782974,141.358129 L10.1225964,141.358129 L0,192.964882 L100.90241,231.617947"
              fill="#24292e"
            />
          </svg>
          <h1 className="App-title">
            Style
            <strong>Guide</strong>
          </h1>
        </header>
        <aside className="App-aside">
          <CSSSelect
            libs={this.state.list}
            changeStyle={this.changeStyle}
            selected={this.state.styleName}
          />
        </aside>
        <div className="paginationwrapper">
          <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={<a href="">...</a>}
            breakClassName={'break'}
            pageCount={this.state.pageCount}
            marginPagesDisplayed={1}
            pageRangeDisplayed={2}
            onPageChange={this.handlePageClick}
            containerClassName={'pagination'}
            activeClassName={'active'}
          />
        </div>
        <main className="App-main">
          <StyleGuide />
        </main>
      </div>
    )
  }
}

export default App
