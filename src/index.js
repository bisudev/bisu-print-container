import React, { Component } from 'react'
import { any, func } from 'prop-types'

class PrintContainer extends Component {

  _print = () => {
    window.print()
  }

  _close = () => {
    window.close()
  }

  _renderButtons() {
    return (
      <div className="print-header text-right hidden-print">
        <button type="button" onClick={this._close} className="btn btn-default">Close</button>{' '}
        <button type="button" onClick={this._print} className="btn btn-warning">Print</button>
      </div>
    )
  }

  render() {
    return (
      <div className="bisu--print-container">
        {this._renderButtons()}
        {this.props.children}
      </div>
    )
  }
}

PrintContainer.propTypes = {
  children: any,
  onClose: func,
}

export default PrintContainer
