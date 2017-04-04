import React from 'react'
import { render } from 'react-dom'

import logger from "redux-logger"
import AppRoutes from './js/components/AppRoutes.js'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import allReducers from './js/reducers/all.js'

const middleware = applyMiddleware(logger());

const store = createStore(allReducers, middleware);

window.React = React;

render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>,
  document.getElementById('react-container')
);