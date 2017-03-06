import { Component, PropTypes } from 'react'

require('./../stylesheets/JobBlock.scss');

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
    // console.log(new Date(this.refs.appliedDate.value));
    let newInfo = {
      company: this.refs.company.value,
      appliedDate: this.refs.appliedDate.value,
      position: this.refs.position.value,
      status: this.refs.status.value,
      jobLink: this.refs.jobLink.value
    };

    console.log('newInfo: ');
    console.log(newInfo);
    
    this.props.saveMyEdit(this.props.key, newInfo);


    this.setState({
      editing: !this.state.editing
    });

  }

  handleRemove() {
    //remove
    this.props.removeFromBoard(this.props.key);
    console.log('removed');
  }


  renderNormal(){
    let date = this.props.appliedDate;

    return (
        <div className="jobBlock">
          <h2 className="company-display" ref="company">{this.props.company}</h2>
          <h4 className="appliedDate-display" ref="appliedDate">{this.props.appliedDate}</h4>
          <h3 className="position-display" ref="position">{this.props.position}</h3>
          <h3 className="status-display" ref="status">{this.props.status}</h3>
          <a  className="jobLink-display" 
              href={this.props.jobLink} 
              ref="jobLink">
                Career Page
          </a>
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
                  placeholder="Company" 
                  ref="company" 
                  defaultValue={this.props.company}
                  className="company-input"
          />

          <input  type="date" 
                  placeholder="Applied Date"
                  ref="appliedDate" 
                  defaultValue={
                    this.props.appliedDate
                  }
                  className="appliedDate-input"
          />

          <input  type="text" 
                  placeholder="Applied Postion"
                  ref="position"
                  defaultValue={this.props.position}
                  className="position-input" 
          />

          <input  type="text" 
                  ref="status" 
                  defaultValue={this.props.status}
                  className="status-input"
          />

          <input  type="text" 
                  placeholder="Application Status"
                  ref="jobLink" 
                  defaultValue={this.props.jobLink}
                  className="jobLink-input"
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
  appliedDate: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  jobLink: PropTypes.string.isRequired
};

JobBlock.defaultProps = {
  company: 'Default',
  appliedDate: 'mm-dd-yyyy',
  status: 'replied',
  jobLink: '#'
};