import React from 'react'
import { render } from 'react-dom'

import App from './js/components/App'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import allReducers from './js/reducers/all.js'

const store = createStore(allReducers);

window.React = React;

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-container')
);