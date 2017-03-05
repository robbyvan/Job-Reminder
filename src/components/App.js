import { Component } from 'react'
import { Menu } from './Menu'
import { JobCount } from './JobCount'
import { JobBoard } from './JobBoard'
import { AddJobForm } from './AddJobForm'
require('./../stylesheets/app.scss')



export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      jobs: [
        {
          company: 'Alibaba',
          appliedDate: new Date('3/1/2017'),
          position: 'Front-End Engineer',
          status: 'Pending',
          jobLink: 'aliLink'
        },
        {
          company: 'Yahoo',
          appliedDate: new Date('2/15/2017'),
          position: '2017 Summer Intern',
          status: 'Pending',
          jobLink: 'YahooCareer'
        },
        {
          company: 'LiveRamp',
          appliedDate: new Date('2/15/2017'),
          position: 'Software Engineer',
          status: 'Replied',
          jobLink: 'LRCareer'
        },
        {
          company: 'Redfin',
          appliedDate: new Date('2/10/2017'),
          position: 'Software Engineer',
          status: 'Delclined',
          jobLink: 'RFCareer'
        }
      ]
    };

    this.addJob = this.addJob.bind(this);
    this.editJob = this.editJob.bind(this);
    this.removeJob = this.removeJob.bind(this);
    this.renderJobBoard = this.renderJobBoard.bind(this);
  }

  addJob(newJob) {
    let arr = this.state.jobs;
    arr.push(newJob);
    this.setState({
      jobs: arr
    });
  }

  editJob(i, newInfo) {
    console.log('editing at App.js: ' + i);
    let arr = this.state.jobs;
    arr[i] = newInfo;
    this.setState({
      jobs: arr
    });
  }

  removeJob(i) {
    let arr = this.state.jobs;
    arr.splice(i, 1);
    this.setState({
      jobs: arr
    });
  }

  renderJobBoard() {
    return (
      <JobBoard   myJobs={this.state.jobs} 
                  editJob={this.editJob}
                  removeFromBoard={this.removeJob}
      />
    );
  }

  render() {
    return (
      <div className="app-container">
        <Menu />
        <h1 className="app-name">Job Application Reminder</h1>
        <div className="page-content">
          {(this.props.location.pathname === "/")?
              <JobCount /> :
            (this.props.location.pathname === "/add-job")?
              <AddJobForm addNewJob={this.addJob} /> :
              this.renderJobBoard()
          }  
        </div>
      </div>
    );
  }

}