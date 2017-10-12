import React from 'react'
import { render } from 'react-dom'

import Component from '../../src'
import './demo.scss'

const Demo = () => (
  <div>
    <h1>bisu-print-container Demo</h1>
    <Component isReady>{() => <div>Print only this</div>}</Component>
  </div>
)

render(<Demo />, document.querySelector('#demo'))
