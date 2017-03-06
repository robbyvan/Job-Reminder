import {Component, PropTypes} from 'react'
import { Link } from 'react-router'
import { JobBlock } from './JobBlock'
import ListIcon from 'react-icons/lib/fa/list-alt'
import RepliedJob from 'react-icons/lib/fa/calendar-check-o'
import PendingJob from 'react-icons/lib/fa/calendar-o'
import DeclinedJob from 'react-icons/lib/fa/calendar-times-o'

require('./../stylesheets/JobBoard.scss');

export class JobBoard extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    let jobLength = this.props.myJobs.length;

    let filteredJobs = this.props.statusFilter?
            this.props.myJobs.filter((job) => 
                              job.status.toLowerCase() === this.props.statusFilter) :
            this.props.myJobs;

    return (
      (this.props.loading)? 
        <h1 className="loading-list">Loading...</h1>:
        (jobLength > 0)?
        //myJob is not empty
        (<div className="job-board">
          <div className="filter-panel">
            <Link to="/joblist" className="alljobs">
              <ListIcon />
            </Link>
            <Link to="/joblist/replied" className="replied-filter">
              <RepliedJob />
            </Link>
            <Link to="/joblist/pending" className="pending-filter">
              <PendingJob />
            </Link>
            <Link to="/joblist/declined" className="declined-filter">
              <DeclinedJob />
            </Link>
          </div>
            
            <div className="job-panel">
                {filteredJobs.map(
                  (job, i) => <JobBlock key={i} 
                                        {...job}
                                        saveMyEdit={this.props.editJob}
                                        removeFromBoard={this.props.removeFromBoard}
                              />
                  )
                }
                <div className="jobBlock"></div>
                <div className="jobBlock"></div>
                <div className="jobBlock"></div>
                <div className="jobBlock"></div>
            </div>
        </div>) :
        //else, currently no job applications
        (<h1 className="no-job-msg">
          Whoops, you don't have any job applications.
          </h1>)

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