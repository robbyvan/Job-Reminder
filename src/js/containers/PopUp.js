import { Component, PropTypes } from 'react'
import CheckIcon from 'react-icons/lib/fa/check'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { togglePopUp } from './../actions/togglePopUp.js'

require('./../../stylesheets/Popup.scss');

class Popup extends Component {

  handleClick(){
    this.props.togglePopUp(this.props.hasPopUp);
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
                  onClick={() => this.handleClick()}
                  >
            {this.props.button}
          </button>
        </div>
      </div>
    );
  }

}

function mapStateToProps(store) {
  return ({
    hasPopUp: store.UIReducer.hasPopUp
  });
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    togglePopUp: togglePopUp
  }, dispatch);
}

Popup.PropTypes = {
  msg: PropTypes.string.isrequired,
  button: PropTypes.string.isrequired
}
Popup.defaultProps = {
  msg: 'New Application Added',
  button: 'Got it'
}

export default connect(mapStateToProps, matchDispatchToProps)(Popup)