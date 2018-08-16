import React, { Component } from 'react'
import './CSSSelect.css'

export default class CSSSelect extends Component {
  render() {
    const listLibs = this.props.libs
      .sort(function(a, b) {
        return a.name.localeCompare(b.name)
      })
      .map((lib, i) => (
        <li className="csslistitem" key={lib.name}>
          <input
            type="radio"
            name="css"
            id={lib.name}
            value={lib.latest}
            onClick={this.props.changeStyle}
            className="inputcheckbox"
            defaultChecked={i === 0}
          />
          <label htmlFor={lib.name} className="inputlabel">
            {lib.name}
          </label>
        </li>
      ))

    return <ul className="csslist">{listLibs}</ul>
  }
}
