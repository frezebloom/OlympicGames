import React, { Component } from 'react';
import { connect } from "react-redux";

class Message extends Component {

  state = {
    name: this.props.data.validationName[this.props.data.validationName.length - 1],
    surname: this.props.data.validationSurname[this.props.data.validationSurname.length - 1],
    login: this.props.data.validationLogin[this.props.data.validationLogin.length - 1],
    password: this.props.data.validationPassword[this.props.data.validationPassword.length - 1]
  }

  ok = () => {
    this.props.showMessage(false)
  }

  formationJson = () => {

  }

  render() {
    console.log(this.state)
    console.log(this.props.data)
    return (
      <div className="message">
        <div className="row">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <ul>
              {Object.keys(this.state).map(error => (
                <li key={error}>{this.state[error]}</li>
              ))}
              {this.props.data.validationCity}
              </ul>
              <div className="card-action">
                <a href="#" onClick={this.ok}>ОКЕЙ</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    data: state
  }),
  dispatch => ({
    showMessage: state => {
      dispatch({ type: "SHOW_MESSAGE", payload: state });
    }
  })
)(Message);
