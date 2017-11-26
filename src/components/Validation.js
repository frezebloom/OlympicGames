import React, { Component } from 'react';
import { connect } from "react-redux";

class Validation extends Component {

  ok = (event) => {
    // event.preventDefault()
    this.props.showValidation(false)
  }

  render() {

    return (
      <div className="validation">
        <div className="row">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <ul>
                {Object.keys(this.state).map(error => (
                  <li key={error}>{this.state[error]}</li>
                ))}
              </ul>
              <div className="card-action">
                <a href="#" onClick={this.ok()}>ОКЕЙ</a>
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
    showValidation: state => {
      dispatch({ type: "SHOW_VALIDATION", payload: state });
    }
  })
)(Validation);
