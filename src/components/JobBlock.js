import { Component, PropTypes } from 'react'

export class JobBlock extends Component {

  constructor(props) {
    super(props);

    this.handleEdit = this.handleEdit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleEdit() {
    console.log('editing ');
    console.log(this.props.company);
    console.log(this.props.editJob(this.props.index));
  }

  handleRemove() {
    console.log(this.props.company);
    console.log('removed');
  }

  render() {
    let date = this.props.appliedDate;

    return (
        <div className="jobBlock">
          <h2>{this.props.company}</h2>
          <h4>{date.getMonth() + 1} / {date.getDate()} / {date.getFullYear()}</h4>
          <h3>{this.props.position}</h3>
          <h3>{this.props.status}</h3>
          <a href={this.props.jobLink}>Career Page</a>
          <button className="editJob" onClick={this.handleEdit}>Edit</button>
          <button className="removeJob" onClick={this.handleRemove}>Remove</button>
        </div>
      
    );
  }

}

JobBlock.propTypes = {
    company: PropTypes.string.isRequired,
    appliedDate: PropTypes.instanceOf(Date).isRequired,
    status: PropTypes.string.isRequired,
    jobLink: PropTypes.string.isRequired
};

JobBlock.defaultProps = {
  company: 'Default',
  appliedDate: new Date(),
  status: 'replied',
  jobLink: '#'
};