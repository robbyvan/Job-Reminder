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
        <td><a href="#">{this.props.link}</a></td>
      </tr>
    );
  }


}