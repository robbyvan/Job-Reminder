import { Component, PropTypes } from 'react'

require('./../stylesheets/AddJobForm.scss');

export class AddJobForm extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    let newJob = {
      company: this.refs.company.value,
      appliedDate: new Date(this.refs.appliedDate.value),
      position: this.refs.position.value,
      status: this.refs.status.value,
      jobLink: this.refs.jobLink.value
    };

    this.props.addNewJob(newJob);
    alert('New Job Application Added.');
  }

  render() {
    return (
      <form className="add-job-form">

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

        <button onClick={this.handleSubmit}>Add to Application Reminder</button>
      </form>
    );
  }
}

AddJobForm.defaultProps = {
  company: 'Alibaba',
  position: 'Front-End Developer',
  appliedDate: '2017-03-04',
  status: 'replied',
  jobLink: 'https://campus.alibaba.com/traineePositions.htm?refno=11762'
}

AddJobForm.propTypes = {
  company: PropTypes.string.isRequired,
  appliedDate: PropTypes.instanceOf(Date).isRequired,
  status: PropTypes.string.isRequired,
  jobLink: PropTypes.string.isRequired
}