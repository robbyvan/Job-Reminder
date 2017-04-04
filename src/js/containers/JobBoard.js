import { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import ListIcon from 'react-icons/lib/fa/list-alt'
import RepliedJob from 'react-icons/lib/fa/calendar-check-o'
import PendingJob from 'react-icons/lib/fa/calendar-o'
import DeclinedJob from 'react-icons/lib/fa/calendar-times-o'

import { connect } from 'react-redux'

require('./../../stylesheets/JobBoard.scss');

class JobBoard extends Component {

  render() {
    return (
      <div>
        <h1>{this.props.filteredJobs.length}</h1>
      </div>
    );
  }

}

function mapStateToProps (store) {
  return ({
      filteredJobs: store.filteredJobs
  });
}

export default connect(mapStateToProps)(JobBoard)