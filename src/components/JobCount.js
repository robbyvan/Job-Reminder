import { Component, PropTypes } from 'react'
import PaperPlane from 'react-icons/lib/fa/paper-plane-o'
import RepliedJob from 'react-icons/lib/fa/calendar-check-o'
import PendingJob from 'react-icons/lib/fa/calendar-o'
import DeclinedJob from 'react-icons/lib/fa/calendar-times-o'
require('./../stylesheets/JobCount.scss')

export class JobCount extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="jobCount-container">
        <div className="totalJobs">
          <PaperPlane />
          <h1>Total {this.props.total}</h1>
        </div>
        <div className="jobStatus">
          <div className="repliedJobs">
            <RepliedJob />
            <h2>Replied {this.props.replied}</h2>
          </div>
          <div className="pendingJobs">
            <PendingJob />
            <h2>Pending {this.props.pending}</h2>
          </div>
          <div className="declinedJobs">
            <DeclinedJob />
            <h2>Declined {this.props.declined}</h2>
          </div>
        </div>
        
        
      </div>
    );
  }

}

JobCount.propTypes = {
    total: PropTypes.number.isRequired,
    replied: PropTypes.number.isRequired,
    pending: PropTypes.number.isRequired,
    declined: PropTypes.number.isRequired
};

JobCount.defaultProps = {
  total: 20,
  replied: 5,
  pending: 10,
  declined: 5
};