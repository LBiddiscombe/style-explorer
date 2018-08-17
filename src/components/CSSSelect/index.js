import React, { Component } from 'react'
import './CSSSelect.css'
import ReactPaginate from 'react-paginate'

export default class CSSSelect extends Component {
  render() {
    const listLibs = this.props.libs.map((lib, i) => (
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

    return (
      <React.Fragment>
        <ul className="csslist">{listLibs}</ul>
        <div className="paginationwrapper">
          <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={<a href="">...</a>}
            breakClassName={'break'}
            pageCount={this.props.pageCount}
            marginPagesDisplayed={1}
            pageRangeDisplayed={2}
            onPageChange={this.props.onPageChange}
            containerClassName={'pagination'}
            activeClassName={'active'}
          />
        </div>
      </React.Fragment>
    )
  }
}
