import React from 'react'
import { render } from 'react-dom'
// 新的组件 
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'

// React有这种 指令组件

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'))

