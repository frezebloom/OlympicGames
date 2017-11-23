import React, { Component } from 'react';
import { connect } from "react-redux";

class Input extends Component {

  value = (event) => {
    event.target.name === "name" ? this.setState({ name: event.target.value }) : console.log('s')

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
    validationSubname: state => {
      dispatch({ type: "VALIDATION_SUBNAME", payload: state });
    },
    validationLogin: state => {
      dispatch({ type: "VALIDATION_LOGIN", payload: state });
    },
    validationPassword: state => {
      dispatch({ type: "VALIDATION_PASSWORD", payload: state });
    }
  })
)(Input);
