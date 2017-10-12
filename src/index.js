import React, { Component } from 'react'
import Loading from 'bisu-react-loading'
import Print from 'react-icons/lib/md/print'

class PrintContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isReady: props.isReady,
      error: null,
    }
  }

  componentDidMount() {
    if (this.props.autoPrint) {
      window.print()
    }
  }

  _print = () => {
    window.print()
  }

  _close = () => {
    window.close()
  }

  _setReady = () => {
    this.setState({ isReady: true })
  }

  _setError = error => {
    this.setState({ error })
  }

  _renderToolbar() {
    const { isReady, error } = this.state
    if (error) {
      return (
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <hr />
            <p className="alert alert-danger">{error}</p>
          </div>
        </div>
      )
    } else {
      if (!isReady) {
        return <Loading />
      } else {
        return this._renderButtons()
      }
    }
  }

  _renderButtons() {
    return (
      <div className="print-header text-right hidden-print">
        <button
          type="button"
          onClick={this._close}
          className="btn btn-sm btn-light"
        >
          Close
        </button>{' '}
        <button
          type="button"
          onClick={this._print}
          className="btn btn-sm btn-warning"
        >
          <Print /> Print
        </button>
      </div>
    )
  }

  render() {
    return (
      <div className="bisu--print-container">
        {this._renderToolbar()}
        {this.props.children({
          setReady: this._setReady,
          setError: this._setError,
        })}
      </div>
    )
  }
}

export default PrintContainer
