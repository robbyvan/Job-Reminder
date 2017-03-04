import { Component, PropTypes } from 'react'

export class JobRow extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let date = this.props.appliedDate;

    return (
      <tr>
        <td>{this.props.company}</td>
        <td>{date.getMonth() + 1} / {date.getDate()} / {date.getFullYear()}</td>
        <td>{this.props.position}</td>
        <td>{this.props.status}</td>
        <td><a href="#">{this.props.jobLink}</a></td>
      </tr>
    );
  }

}

JobRow.propTypes = {
    company: PropTypes.string.isRequired,
    appliedDate: PropTypes.instanceOf(Date).isRequired,
    status: PropTypes.string.isRequired,
    jobLink: PropTypes.string.isRequired
};

JobRow.defaultProps = {
  company: 'Default',
  appliedDate: new Date(),
  status: 'replied',
  jobLink: '#'
};