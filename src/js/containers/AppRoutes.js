import { Component } from 'react'
import {  Router, Route, hashHistory } from 'react-router'

import App from './App.js'

class AppRoutes extends Component {
  render(){
    return (
    <Router history={hashHistory}>
      <Route path="/" component={App} />

      <Route  path="/joblist" component={App} >
        <Route  path=":filter" component={App} />
      </Route>

      <Route path="/addjob" component={App} />

    </Router>
    );  
  }   
}

export default AppRoutes
