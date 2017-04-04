import { Component } from 'react'

import { bindActionsCreator } from 'redux'
import { connect } from 'react-redux'

require('./../../stylesheets/JobBlock.scss');

class JobBlock extends Component {

  renderNormal() {
    return (
        <div className="jobBlock">
          <h2 className="company-display">{this.props.company}</h2>
          <h4 className="appliedDate-display">{this.props.appliedDate}</h4>
          <h3 className="position-display">{this.props.position}</h3>
          <h3 className="status-display">{this.props.status}</h3>
          <a  className="jobLink-display" 
              href={this.props.jobLink} 
              ref="jobLink">
            Career Page
          </a>
          <button className="editJob">Edit</button>
          <button className="removeJob">Remove</button>
        </div>
    );
  }

  render() {
    return (
      this.renderNormal()
    );
  }

}

export default JobBlock
 



