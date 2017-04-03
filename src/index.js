import React from 'react'
import { render } from 'react-dom'

import App from './js/components/App'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import AllReducers from './js/reducers/AllReducers.js'

const store = createStore(AllReducers);

window.React = React;

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-container')
);