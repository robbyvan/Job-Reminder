import { Component } from 'react'
import { Menu } from './Menu'
import { JobCount } from './JobCount'
import { JobBoard } from './JobBoard'
import { AddJobForm } from './AddJobForm'
import { Popup } from './Popup'

require('./../stylesheets/app.scss');

export class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      jobs: [
        {  
           "id": 0,       
           "company": "Alibaba",
           "appliedDate": "03-01-2017",
           "position": "Front-End Engineer",
           "status": "Replied",
           "jobLink": "http://www.alibabagroup.com/en/global/careers"
        },
        {
           "id": 1,
           "company": "Tencent",
           "appliedDate": "03-01-2017",
           "position": "Front-End Developer",
           "status": "Pending",
           "jobLink": "http://join.qq.com/"
        },
        {
           "id": 2,
           "company": "LiveRamp",
           "appliedDate": "02-07-2017",
           "position": "2017 Summer Intern",
           "status": "Declined",
           "jobLink": "https://www.redfin.com/about/jobs"
        }
      ],
      loading: false,
      hasPopup: false
    };

    this.addJob = this.addJob.bind(this);
    this.editJob = this.editJob.bind(this);
    this.removeJob = this.removeJob.bind(this);
    this.renderJobBoard = this.renderJobBoard.bind(this);
    this.togglePopup = this.togglePopup.bind(this);
  }

  togglePopup() {
    this.state.hasPopup = this.setState({
      hasPopup: !this.state.hasPopup
    });
  }

  addJob(newJob) {
    let arr = this.state.jobs.slice(0);
    arr.push(newJob);
    this.setState({
      jobs: arr
    });
    this.togglePopup();
  }

  editJob(i, newInfo) {
    console.log('editing at App.js: ' + i);
    let arr = this.state.jobs.slice(0);
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
            <JobBoard   loading={this.state.loading}
                        myJobs={this.state.jobs} 
                        editJob={this.editJob}
                        removeFromBoard={this.removeJob}
                        statusFilter={this.props.params.filter}
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
              <JobCount jobs={this.state.jobs}/> :
            (this.props.location.pathname === "/addjob")?
              <AddJobForm addNewJob={this.addJob} /> :
              this.renderJobBoard()
          }  
        </div>
        {this.state.hasPopup? 
            <Popup closePopup={this.togglePopup} /> : null}
      </div>
    );
  }

}