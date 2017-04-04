import { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { addJob } from './../actions/addJob.js'

require("./../../stylesheets/AddJobForm.scss")


class AddJobForm extends Component {

  handleSubmit() {
    let newJob = {
      id: this.refs.id.value,
      company: this.refs.company.value,
      appliedDate: this.refs.appliedDate.value,
      position: this.refs.position.value,
      status: this.refs.status.value,
      jobLink: this.refs.jobLink.value,
      editing: false
    }

    this.props.addJob(newJob.id, newJob);
  }

  render() {
    return (
      <form className="add-job-form">
        <label htmlFor="company">Unique ID</label>
        <input id="id"
               type="text"
               placeholder="Define a unique id to this application"
               ref="id"
        />

        <label htmlFor="company">Company</label>
        <input id="company"
               type="text"
               placeholder="Company"
               ref="company"
        />

        <label htmlFor="position">Position</label>
        <input id="position"
               type="text"
               placeholder="Position"
               ref="position"
        />

        <label htmlFor="appliedDate">Applied Date</label>
        <input id="appliedDate"
               type="date"
               placeholder="mm/dd/yyyy"
               ref="appliedDate"
        />

        <label htmlFor="status">Current Status</label>
        <input id="status"
               type="text"
               placeholder="Current Status"
               ref="status"
        />

        <label htmlFor="jobLink">Job Link</label>
        <input id="jobLink"
               type="text"
               placeholder="Career page"
               ref="jobLink"
        />

        <button onClick={() => this.handleSubmit()}>Add to Application Reminder</button>
      </form>
    );
  }

}


function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    addJob: addJob
  }, dispatch);
}

export default connect(null, matchDispatchToProps)(AddJobForm)

