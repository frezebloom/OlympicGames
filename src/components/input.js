import React, { Component } from 'react';
import { connect } from "react-redux";

class Input extends Component {

  value = (event) => {
    event.target.name === "name" ? this.props.validationName(event.target.value) : false
    event.target.name === "surname" ? this.props.validationSurname(event.target.value) : false
    event.target.name === "login" ? this.props.validationLogin(event.target.value) : false
    event.target.name === "password" ? this.props.validationPassword(event.target.value) : false
  }

  render() {
    return (
      <div className="input">
        <input type={this.props.type} name={this.props.name} title="подсказка" placeholder={this.props.placeholder} onChange={this.value}/>
      </div>
    )
  }
}

export default connect(
  state => ({
    data: state
  }),
  dispatch => ({
    validationName: state => {
      dispatch({ type: "VALIDATION_NAME", payload: state });
    },
    validationSurname: state => {
      dispatch({ type: "VALIDATION_SURNAME", payload: state });
    },
    validationLogin: state => {
      dispatch({ type: "VALIDATION_LOGIN", payload: state });
    },
    validationPassword: state => {
      dispatch({ type: "VALIDATION_PASSWORD", payload: state });
    }
  })
)(Input);
