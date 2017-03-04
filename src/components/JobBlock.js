import { Component, PropTypes } from 'react'

export class JobBlock extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editing: false
    };

    this.renderEdit = this.renderEdit.bind(this);
    this.renderNormal = this.renderNormal.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleEdit() {
    console.log('editing ');
    this.setState({
      editing: !this.state.editing
    });
  }

  handleSave() {

    let newInfo = {
      company: this.refs.company.value,
      appliedDate: new Date(this.refs.appliedDate.value),
      position: this.refs.position.value,
      status: this.refs.status.value,
      jobLink: this.refs.jobLink.value
    };

    console.log('newInfo: ');
    console.log(newInfo);
    
    this.props.saveMyEdit(this.props.index, newInfo);


    this.setState({
      editing: !this.state.editing
    });

  }

  handleRemove() {
    this.props.removeFromBoard(this.props.index);
    console.log('removed');
  }


  renderNormal(){
    let date = this.props.appliedDate;

    return (
        <div className="jobBlock">
          <h2 ref="company">{this.props.company}</h2>
          <h4 ref="appliedDate">{date.getMonth() + 1} / {date.getDate()} / {date.getFullYear()}</h4>
          <h3 ref="position">{this.props.position}</h3>
          <h3 ref="status">{this.props.status}</h3>
          <a href={this.props.jobLink} ref="jobLink">Career Page</a>
          <button className="editJob" onClick={this.handleEdit}>Edit</button>
          <button className="removeJob" onClick={this.handleRemove}>Remove</button>
        </div>
    );
  }

  renderEdit(){
    let date = this.props.appliedDate;

    return (
        <div className="jobBlock">
          <input  type="text" 
                  ref="company" 
                  defaultValue={this.props.company} 
          />

          <input  type="text" 
                  ref="appliedDate" 
                  defaultValue={
                    date.getMonth() + 1 + '-' + date.getDate() + '-' + date.getFullYear()
                  } 
          />

          <input  type="text" 
                  ref="position"
                  defaultValue={this.props.position} 
          />

          <input  type="text" 
                  ref="status" 
                  defaultValue={this.props.status} 
          />

          <input  type="text" 
                  ref="jobLink" 
                  defaultValue={this.props.jobLink}
          />
          
          <button className="saveJob" onClick={this.handleSave}>Save</button>

        </div>
    );
  }

  render() {
    return (
      this.state.editing? this.renderEdit(): this.renderNormal()
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