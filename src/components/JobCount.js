import { Component, PropTypes } from 'react'
import Pencil from 'react-icons/lib/fa/pencil'
import RepliedJob from 'react-icons/lib/fa/calendar-check-o'
import PendingJob from 'react-icons/lib/fa/calendar-o'
import DeclinedJob from 'react-icons/lib/fa/calendar-times-o'


export class JobCount extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="jobCount-container">
        <Pencil />
        <h1 className="totalJobs">Total {this.props.total}</h1>
        <RepliedJob />
        <h2 className="repliedJobs">Replied {this.props.replied}</h2>
        <PendingJob />
        <h2 className="pendingJobs">Pending {this.props.pending}</h2>
        <DeclinedJob />
        <h2 className="declinedJobs">Declined {this.props.declined}</h2>
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