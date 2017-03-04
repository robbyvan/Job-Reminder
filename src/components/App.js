import { Component } from 'react'
import { JobCount } from './JobCount'
import { JobBoard } from './JobBoard'
import { AddJobForm } from './AddJobForm'


export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      jobs: [
        {
          company: 'Alibaba',
          appliedDate: new Date('3/1/2017'),
          position: 'Front-End Engineer',
          status: 'pending',
          jobLink: 'aliLink'
        },
        {
          company: 'Yahoo',
          appliedDate: new Date('2/15/2017'),
          position: '2017 Summer Intern',
          status: 'pending',
          jobLink: 'YahooCareer'
        },
        {
          company: 'LiveRamp',
          appliedDate: new Date('2/15/2017'),
          position: 'Software Engineer',
          status: 'replied',
          jobLink: 'LRCareer'
        },
        {
          company: 'Redfin',
          appliedDate: new Date('2/10/2017'),
          position: 'Software Engineer',
          status: 'delclined',
          jobLink: 'RFCareer'
        }
      ]
    };

    this.editJobInfo = this.editJobInfo.bind(this);
  }

  editJobInfo(index) {
    console.log('editing at App.js: ' + index);
  }

  render() {
    return (
      <div className="app-container">
        <h1>This is my app</h1>
        <JobCount />
        <JobBoard myJobs={this.state.jobs} editJob={this.editJobInfo}/>
        <br />
        <AddJobForm />
      </div>
    );
  }

}