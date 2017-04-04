import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import { connect } from 'react-redux'

import PaperPlane from 'react-icons/lib/fa/paper-plane-o'
import RepliedJob from 'react-icons/lib/fa/calendar-check-o'
import PendingJob from 'react-icons/lib/fa/calendar-o'
import DeclinedJob from 'react-icons/lib/fa/calendar-times-o'

require('./../../stylesheets/JobCount.scss')

class JobCount extends Component {

  countJobs() {
    let jobCounter = {
      total: 0,
      replied: 0,
      pending: 0,
      declined: 0
    };

    jobCounter.total = this.props.jobs.length;
    for (let i = 0; i < this.props.jobs.length; ++i){
      this.props.jobs[i].status === "Replied"? jobCounter.replied += 1:
      this.props.jobs[i].status === "Pending"? jobCounter.pending += 1:
                                               jobCounter.declined += 1;
    }
    return jobCounter;
  }

  render() {
    let counter = this.countJobs();

    return (
      <div className="jobCount-container">

        <div className="totalJobs">
          <PaperPlane />
          <h1>Total {counter.total}</h1>
        </div>

        <div className="jobStatus">
          <Link to="/joblist/replied">
              <div className="repliedJobs status-block">
              <RepliedJob />
              <h2>Replied {counter.replied}</h2>
            </div>
          </Link>
          
          <Link to="/joblist/pending">
            <div className="pendingJobs status-block">
              <PendingJob />
              <h2>Pending {counter.pending}</h2>
            </div>
          </Link>

          <Link to="/joblist/declined">
            <div className="declinedJobs status-block">
              <DeclinedJob />
              <h2>Declined {counter.declined}</h2>
            </div>
          </Link>

          <div className="status-block blank-status"></div>
        </div>
        
        
      </div>
    );
  }
}

function mapStateToProps(store) {
  return ({
    jobs: store.jobs
  });
}

JobCount.propTypes = {
    jobs: PropTypes.array.isRequired,
    total: PropTypes.number.isRequired,
    replied: PropTypes.number.isRequired,
    pending: PropTypes.number.isRequired,
    declined: PropTypes.number.isRequired
};

JobCount.defaultProps = {
  jobs: [],
  total: 0,
  replied: 0,
  pending: 0,
  declined: 0
};


export default connect(mapStateToProps)(JobCount);