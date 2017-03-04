import { Component, PropTypes } from 'react'

export class AddJobForm extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    console.log(this);
  }

  render() {
    return (
      <form className="add-job">

        <label htmlFor="company">Company</label>
        <input id="company"
               type="text"
               required
               defaultValue={this.props.company}
        />

        <label htmlFor="appliedDate">Applied Date</label>
        <input id="appliedDate"
               type="date"
               required
               defaultValue={this.props.appliedDate}
        />

        <label htmlFor="status">Current Status</label>
        <input id="status"
               type="text"
               required
               defaultValue={this.props.status}
        />

        <label htmlFor="jobLink">Job Link</label>
        <input id="jobLink"
               type="text"
               required
               defaultValue={this.props.jobLink}
        />

        <button onClick={this.handleSubmit}>Add to Application Reminder</button>
      </form>
    );
  }

}

AddJobForm.defaultProps = {
  company: 'Alibaba',
  appliedDate: '2017-03-04',
  status: 'replied',
  jobLink: 'https://campus.alibaba.com/traineePositions.htm?refno=11762'
}

AddJobForm.propTypes = {
  company: PropTypes.string.isRequired,
  appliedDate: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  jobLink: PropTypes.string.isRequired
}