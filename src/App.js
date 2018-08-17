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
        <header className="App-header">
          <div className="App-menu" onClick={this.toggleMenu}>
            <i class="fa fa-2x fa-bars" />
          </div>
          <svg className="logo" width="32" height="32" viewBox="0 0 256 256">
            <path d="M238.299,63.025c11.246,19.044 17.701,41.248 17.701,64.947c0,70.646 -57.355,128 -128,128c-36.733,0 -69.872,-15.506 -93.224,-40.325l66.661,25.123l107.851,-35.217l29.011,-142.528Zm-195.836,-30.244l-7.087,36.186l161.894,0l-5.04,25.047l-162.141,0l-7.93,39.229l161.905,0l-8.893,44.904l-65.333,21.025l-56.451,-21.025l3.852,-19.615l-39.874,0l-4.899,24.571c-7.991,-16.7 -12.466,-35.397 -12.466,-55.131c0,-37.776 16.4,-71.753 42.463,-95.191Zm3.51,-3.044c22.22,-18.578 50.827,-29.765 82.027,-29.765c31.2,0 59.807,11.187 82.027,29.765l-164.054,0Z" />
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
