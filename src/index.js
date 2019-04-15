import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './App'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

const store = createStore(reducer, applyMiddleware(thunk, logger))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
