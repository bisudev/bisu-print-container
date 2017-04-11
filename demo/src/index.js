import React from 'react'
import {render} from 'react-dom'

import Component from '../../src'
import './demo.scss'

const Demo = () => (
  <div>
    bisu-print-container Demo
    <Component>
      <div>Print only this</div>
    </Component>
  </div>
)

render(<Demo/>, document.querySelector('#demo'))
