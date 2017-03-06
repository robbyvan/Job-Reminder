import { Component, PropTypes } from 'react'
import { Link } from 'react-router'
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
    let jobs = this.props.jobs;
    let totalSum, repliedSum, pendingSum, declinedSum;
    totalSum = repliedSum = pendingSum = declinedSum = 0;
    for (let i = 0; i < jobs.length; ++i){
      totalSum += 1;
      (jobs[i].status === "Replied")? repliedSum += 1 :
        (jobs[i].status === "Pending")? pendingSum +=1 : 
          declinedSum += 1;
    }

    return (
      <div className="jobCount-container">
        <div className="totalJobs">
          <PaperPlane />
          <h1>Total {totalSum}</h1>
        </div>
        <div className="jobStatus">
          <Link to="/joblist/replied">
              <div className="repliedJobs">
              <RepliedJob />
              <h2>Replied {repliedSum}</h2>
            </div>
          </Link>
          
          <Link to="/joblist/pending">
            <div className="pendingJobs">
              <PendingJob />
              <h2>Pending {pendingSum}</h2>
            </div>
          </Link>

          <Link to="/joblist/declined">
            <div className="declinedJobs">
              <DeclinedJob />
              <h2>Declined {declinedSum}</h2>
            </div>
          </Link>
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