import {Component, PropTypes} from 'react'

export class JobList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="job-list">
        <table>
          <thead>
            <tr>
              <td>Company</td>
              <td>Applied Date</td>
              <td>Position</td>
              <td>Status</td>
              <td>Link</td>
            </tr>
          </thead>
        </table>
      </div>
    );
  }

}