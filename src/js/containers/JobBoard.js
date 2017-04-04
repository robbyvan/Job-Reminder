import { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import JobBoardNav from './../components/JobBoardNav.js'
import JobBlock from './JobBlock.js'

require('./../../stylesheets/JobBoard.scss');

class JobBoard extends Component {

  render() {
    return (
      <div className="job-board">
        <JobBoardNav />

        {
          this.props.filteredInfo.filteredJobs.length > 0?
            (<div className="job-panel">
            {
              this.props.filteredInfo.filteredJobs.map((job) => <JobBlock   key={job.id}
                                                                            {...job}
                                                                            />
                                      )
            }
              <div className="jobBlock"></div>
              <div className="jobBlock"></div>
              <div className="jobBlock"></div>
              <div className="jobBlock"></div>
          </div>):
          // When there's no job
          this.props.filteredInfo.jobFilter !== false?
            (<h1 className="no-job-msg">
              Whoops, you don't have any job applications here.
              </h1>):
          // When there's no such route, 404
          (<h1 className="no-job-msg">
            Whoops, 404. Nothing is here.
          </h1>)
        }
        
      </div>
    );
  }

}

function mapStateToProps (store) {
  return ({
      filteredInfo: store.filteredJobsInfo
  });
}

export default connect(mapStateToProps)(JobBoard)