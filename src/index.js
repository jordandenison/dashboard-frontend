import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import App from './App'
import store from 'redux/store'
import initialAuth from 'lib/initialAuth'

initialAuth(store)
  .then(() => ReactDOM.render(<App />, document.getElementById('root')))
