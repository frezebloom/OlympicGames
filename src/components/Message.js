import React, { Component } from 'react';
import { connect } from "react-redux";

class Message extends Component {
  // {Object.keys(this.state).map(error => (
  //   <li key={error}>{this.state[error]}</li>
  // ))}

  ok = () => {
    this.props.showMessage(false)
  }

  render() {
    return (
      <div className="message">
        <div className="row">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <ul>

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
