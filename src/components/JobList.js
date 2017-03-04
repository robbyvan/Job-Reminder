import {Component, PropTypes} from 'react'
import { JobRow } from './JobRow'

export class JobList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="job-list">
        <table>
          <thead>
            <tr>
              <td>Company</td>
              <td>Applied Date</td>
              <td>Position</td>
              <td>Status</td>
              <td>Link</td>
            </tr>
          </thead>
          <tbody>
            {this.props.myJobs.map(
              (job, i) => <JobRow key={i} 
                                  index={i}
                                  {...job}
                          />
              )
            }
            
          </tbody>
        </table>
      </div>
    );
  }

}