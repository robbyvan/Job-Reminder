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
    // console.log("=====didMount=====");
    // console.log("---Parameters---");
    // console.log(this.props.params.filter);
    this.props.filterJobs(this.props.jobs, this.props.params.filter);
    // console.log("=====didMount=====");
  }

  shouldComponentUpdate(nextProps) {
    // console.log("=====shouldUpdate=====")
    // console.log("currenrt Props: ");
    // console.log(this.props.params.filter);
    // console.log("next Props: ");
    // console.log(nextProps.params.filter);
    // console.log(this.props.params.filter !== nextProps.params.filter);
    return this.props.params.filter !== nextProps.params.filter; //必须比较值
    // console.log("=====shouldUpdate=====")
    
  }

  componentWillUpdate(nextProps) {
    // console.log("=====willUpdate=====");
    // console.log("next filter is: ", nextProps.params.filter);
    this.props.filterJobs(this.props.jobs, nextProps.params.filter);
    // console.log("=====willUpdate=====");
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