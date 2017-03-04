import { Component } from 'react'
import { JobCount } from './JobCount'
import { JobList } from './JobList'


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
          link: '#'
        },
        {
          company: 'Yahoo',
          appliedDate: new Date('2/15/2017'),
          position: '2017 Summer Intern',
          status: 'pending',
          link: '#'
        },
        {
          company: 'LiveRamp',
          appliedDate: new Date('2/15/2017'),
          position: 'Software Engineer',
          status: 'replied',
          link: '#'
        },
        {
          company: 'Redfin',
          appliedDate: new Date('2/10/2017'),
          position: 'Software Engineer',
          status: 'delclined',
          link: '#'
        }
      ]
    };
  }

  render() {
    return (
      <div className="app-container">
        <h1>This is my app</h1>
        <JobList myJobs={this.state.jobs} />
      </div>
    );
  }

}