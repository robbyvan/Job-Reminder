import { Component } from 'react'
import { Link } from 'react-router'

import ListIcon from 'react-icons/lib/fa/list-alt'
import RepliedJob from 'react-icons/lib/fa/calendar-check-o'
import PendingJob from 'react-icons/lib/fa/calendar-o'
import DeclinedJob from 'react-icons/lib/fa/calendar-times-o'

class JobBoardNav extends Component {
  render() {
    return(
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
    );
  }
}

export default JobBoardNav