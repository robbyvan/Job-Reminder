import {Component, PropTypes} from 'react'
import { JobBlock } from './JobBlock'

require('./../stylesheets/JobBoard.scss');

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
          <div className="job-panel">
              {this.props.myJobs.map(
                (job, i) => <JobBlock key={i} 
                                      {...job}
                                      saveMyEdit={this.props.editJob}
                                      removeFromBoard={this.props.removeFromBoard}
                            />
                )
              }  
          </div>
      </div>) :
      //else, currently no job applications
      (<h1 className="no-job-msg">Whoops, you don't have any job applications.</h1>)

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