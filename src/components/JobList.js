import {Component, PropTypes} from 'react'
import { JobRow } from './JobRow'

export class JobList extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    let jobLength = this.props.myJobs.length;

    return (
      (jobLength > 0)?
      //myJob is not empty
      (<div className="job-list">
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
      </div>) :
      //currently no job applications
      (<h1 className="no-job">No applications now</h1>)

    );
  }
}

JobList.propTypes = {
  myJobs: function(props){
    if (!Array.isArray(props.myJobs)){
      return new Error(
        "myJobs should be an array"
      );
    }else{
        return null;
    }
  }
}