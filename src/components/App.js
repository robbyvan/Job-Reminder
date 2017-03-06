import { Component } from 'react'
import { Menu } from './Menu'
import { JobCount } from './JobCount'
import { JobBoard } from './JobBoard'
import { AddJobForm } from './AddJobForm'
import { Popup } from './Popup'

require('./../stylesheets/app.scss');


const getAllJobs = (method, url) => {
  let myPromise = new Promise((resolve, reject) => {

    let xhr = (window.XMLHttpRequest)?
                new XMLHttpRequest() : 
                new ActiveXObject("Microsoft.XMLHTTP");

    xhr.open(method, url, true);

    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300){
        resolve(xhr.response);
      }else {
        reject({
          status: xhr.status,
          statusText: xhr.statusText
        });
      }
    };

    xhr.onerror = () => {
      reject({
        status: xhr.status,
        statusText: xhr.statusText
      });
    };

    xhr.send();
  });
  return myPromise;
}

export class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      jobs: [],
      loading: false,
      hasPopup: false
    };

    this.addJob = this.addJob.bind(this);
    this.editJob = this.editJob.bind(this);
    this.removeJob = this.removeJob.bind(this);
    this.renderJobBoard = this.renderJobBoard.bind(this);
    this.togglePopup = this.togglePopup.bind(this);
  }

  componentDidMount() {
    this.setState({loading: true});
    
    getAllJobs('GET', 'https://robbyvan.github.io/Job-Reminder/dist/data/applications.json')
      .then((res) => {
        let allJobs = JSON.parse(res);
        console.log(allJobs);
        this.setState({jobs: allJobs, loading: false});
      })
      .catch((err) => {
        console.log(err);
      });
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
              <JobCount jobs={this.state.jobs}/> :
            (this.props.location.pathname === "/add-job")?
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