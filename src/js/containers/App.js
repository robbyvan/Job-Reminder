import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { filterJobs } from './../actions/filterJobs.js'

import Menu from './../components/Menu.js'
import JobCount from './JobCount.js'
import JobBoard from './JobBoard.js'
import AddJobForm from './AddJobForm.js'

require('./../../stylesheets/app.scss')

class App extends Component {

  componentDidMount() {
    // console.log("=====didMount=====");
    // console.log("---Parameters---");
    // console.log(this.props.params.filter);
    this.props.filterJobs(this.props.jobs, this.props.params.filter);
    // console.log("=====didMount=====");
  }

  // shouldComponentUpdate(nextProps) {
  //   // console.log("=====shouldUpdate=====")
  //   // console.log("currenrt Props: ");
  //   // console.log(this.props.params.filter);
  //   // console.log("next Props: ");
  //   // console.log(nextProps.params.filter);
  //   // console.log(this.props.params.filter !== nextProps.params.filter);

  //   return this.props !== nextProps;
  //   // return this.props.params.filter !== nextProps.params.filter ||
  //          // this.props.jobs !== nextProps.jobs; //必须比较值

  //   // console.log("=====shouldUpdate=====")
    
  // }

  componentWillUpdate(nextProps) {
    // console.log("=====willUpdate=====");
    if (this.props.params.filter !== nextProps.params.filter){
      this.props.filterJobs(this.props.jobs, nextProps.params.filter);  
    }
    // console.log("next filter is: ", nextProps.params.filter);
    // console.log("=====willUpdate=====");
  }

  render() {
    // console.log("!!!render!!!");
    return (
      <div className="app-container">
          <Menu />
          <h1 className="app-name">Job Application Reminder</h1>

          <div className="page-content">
            {
              (this.props.location.pathname === "/") ?
                <JobCount /> :
              (this.props.location.pathname === "/addjob")?
                <AddJobForm /> :
              <JobBoard />
            }
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