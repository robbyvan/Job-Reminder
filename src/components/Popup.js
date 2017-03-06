import { Component, PropTypes } from 'react'
import CheckIcon from 'react-icons/lib/fa/check'

require('./../stylesheets/Popup.scss');

export class Popup extends Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.closePopup();
  }

  render() {
    return (
      <div className="Popup-mask">
        <div className="Popup-content">

          <div className="Popup-msg">
            <CheckIcon className="check-icon" />  
            <h2>{this.props.msg}</h2>
          </div>
          <button className="Popup-button" 
                  onClick={this.handleClick}>
              {this.props.button}
          </button>
        </div>
      </div>
    );
  }

}

Popup.PropTypes = {
  msg: PropTypes.string.isrequired,
  button: PropTypes.string.isrequired
}
Popup.defaultProps = {
  msg: 'New Application Added',
  button: 'Got it'
}