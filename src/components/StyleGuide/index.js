import React, { Component } from 'react'
import STYLEGUIDE_HTML from '../../assets/styleguide'

export default class StyleGuide extends Component {
  render() {
    return (
      <div className="stylecontainer">
        <iframe
          id="styleguide1"
          title="styleguide"
          srcDoc={STYLEGUIDE_HTML}
          style={{ border: 'none' }}
        />
      </div>
    )
  }
}
