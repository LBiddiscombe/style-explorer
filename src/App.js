import React, { Component } from 'react'
import './App.css'
import StyleGuide from './components/StyleGuide'
import CSSSelect from './components/CSSSelect'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      styleName: '',
      stylePath: '',
      libs: [],
      list: [],
      pageCount: 0,
      menuActive: false
    }

    // This binding is necessary to make `this` work in the callback
    this.changeStyle = this.changeStyle.bind(this)
    this.handlePageClick = this.handlePageClick.bind(this)
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  componentDidMount() {
    fetch('./style-explorer.json')
      .then(blob => blob.json())
      .then(data => {
        const libs = data.results.sort(function(a, b) {
          return a.name.localeCompare(b.name)
        })

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

  toggleMenu() {
    this.setState(prev => ({
      menuActive: !this.state.menuActive
    }))
  }

  render() {
    return (
      <div className="App">
        <div className="App-menu" onClick={this.toggleMenu}>
          <i class="fa fa-2x fa-bars" />
        </div>
        <header className="App-header">
          <svg className="logo" width="32" height="32" viewBox="0 0 256 256">
            <path d="M230.084,50.808c16.263,21.466 25.916,48.21 25.916,77.192c0,70.645 -57.355,128 -128,128c-42.226,0 -79.703,-20.491 -103.023,-52.063l80.195,30.223l93.828,-30.638l31.084,-152.714Zm-206.038,151.852c-15.13,-21.02 -24.046,-46.807 -24.046,-74.66c0,-70.645 57.355,-128 128,-128c41.554,0 78.51,19.844 101.899,50.565l-175.515,0l-6.685,34.129l140.846,0l-4.385,21.791l-141.06,0l-6.899,34.128l140.855,0l-7.737,39.066l-56.839,18.292l-49.111,-18.292l3.351,-17.064l-34.69,0l-7.984,40.045Z" />
          </svg>
          <h1 className="App-title">
            Style
            <strong>Explorer</strong>
          </h1>
        </header>
        <aside className={this.state.menuActive ? 'App-aside is-active' : 'App-aside'}>
          <CSSSelect
            libs={this.state.list}
            changeStyle={this.changeStyle}
            selected={this.state.styleName}
            pageCount={this.state.pageCount}
            onPageChange={this.handlePageClick}
          />
        </aside>
        <main className="App-main">
          <StyleGuide />
        </main>
      </div>
    )
  }
}

export default App
