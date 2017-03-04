import { Component } from 'react'
import { JobCount } from './JobCount'
import { JobList } from './JobList'
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
          jobLink: '#'
        },
        {
          company: 'Yahoo',
          appliedDate: new Date('2/15/2017'),
          position: '2017 Summer Intern',
          status: 'pending',
          jobLink: '#'
        },
        {
          company: 'LiveRamp',
          appliedDate: new Date('2/15/2017'),
          position: 'Software Engineer',
          status: 'replied',
          jobLink: '#'
        },
        {
          company: 'Redfin',
          appliedDate: new Date('2/10/2017'),
          position: 'Software Engineer',
          status: 'delclined',
          jobLink: '#'
        }
      ]
    };
  }

  render() {
    return (
      <div className="app-container">
        <h1>This is my app</h1>
        <JobCount />
        <JobList myJobs={this.state.jobs} />
        <br />
        <AddJobForm />
      </div>
    );
  }

}