import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { filterJobs } from './../actions/filterJobs.js'

import Menu from './Menu.js'
import JobCount from './../containers/JobCount.js'
import JobBoard from './../containers/JobBoard.js'

require('./../../stylesheets/app.scss')

class App extends Component {

  componentDidMount() {
    this.props.filterJobs(this.props.jobs, this.props.params.filter);
  }

  render() {
    return (
      <div className="app-container">
          <Menu />
          <h1 className="app-name">Job Application Reminder</h1>

          <div className="page-content">
            <JobBoard /> 
          </div>

      </div>
    );
  }
}

function mapStateToProps(store) {
  return ({
    jobs: store.jobs
  });
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    filterJobs: filterJobs
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(App)

