import {Component, PropTypes} from 'react'
import { JobBlock } from './JobBlock'

export class JobBoard extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    let jobLength = this.props.myJobs.length;

    return (
      (jobLength > 0)?
      //myJob is not empty
      (<div className="job-board">
          <h1>Current Applications</h1>
          <div className='job-blocks'>
            {this.props.myJobs.map(
              (job, i) => <JobBlock key={i} 
                                  index={i}
                                  {...job}
                                  saveMyEdit={this.props.editJob}
                                  removeFromBoard={this.props.removeFromBoard}
                          />
              )
            }  
          </div>
      </div>) :
      //else, currently no job applications
      (<h1 className="no-job">No applications now</h1>)

    );
  }
}

JobBoard.propTypes = {
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