import React from 'react'
import { render } from 'react-dom'
import {  Router, Route, hashHistory } from 'react-router'

import App from './js/components/App'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import allReducers from './js/reducers/all.js'

const store = createStore(allReducers,);

window.React = React;

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App} />

      <Route path="/joblist" component={App}>
        <Route path=":filter" component={App} />
      </Route>

      <Route path="/addjob" component={App} />

    </Router>
  </Provider>,
  document.getElementById('react-container')
);