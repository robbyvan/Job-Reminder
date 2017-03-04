import React from 'react'
import { render } from 'react-dom'
import { App } from './components/App'
import { Whoops404 } from './components/Whoops404'
import { Router, Route, hashHistory } from 'react-router'

window.React = React;

render(
  <Router history={hashHistory}>
    <Route path="/" component={App} />
    <Route path="/job-list" component={App} />
    <Route path="/add-job" component={App} />
    <Route path="*" component={Whoops404} />
  </Router>,
  document.getElementById('react-container')
);