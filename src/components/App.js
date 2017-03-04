import { Component } from 'react'
import { JobCount } from './JobCount'

export class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-container">
        <h1>This is my app</h1>
        <JobCount />
      </div>
    );
  }

}