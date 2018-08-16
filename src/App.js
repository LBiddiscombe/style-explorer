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
          <div>
            <h1 className="App-title">Style Explorer</h1>
            <div className="App-subtitle">
              A curated CSS list for HTML Elements
            </div>
          </div>
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
