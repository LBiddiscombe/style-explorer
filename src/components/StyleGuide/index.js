import React, { Component } from 'react'
import Iframe from 'react-iframe'

export default class StyleGuide extends Component {
  render() {
    return (
      <div className="stylecontainer">
        <Iframe
          url="styleguide1.html"
          id="styleguide1"
          position="relative"
          height="calc(100vh - 75px)"
        />
      </div>
    )
  }
}
