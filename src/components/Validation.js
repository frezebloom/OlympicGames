import React, { Component } from 'react';
import { connect } from "react-redux";

class Validation extends Component {

  state = {
    validationName: 'ss',
    validationSurname: '',
    validationLogin: '',
    validationPassword: ''
  }


  validationName = () => {
    let name = this.props.data.validationName[this.props.data.validationName.length - 1]
    if(name.length === 1){
      console.log(name.length)
      this.setState({
        validationName: 'Введите пожалуйста имя'
      })
    }
  }

  // validationSurname = () => {
  //   let surname = this.props.data.validationSurname[this.props.data.validationSurname.length - 1]
  // }
  //
  // validationLogin = () => {
  //   let login = this.props.data.validationLogin[this.props.data.validationLogin.length - 1]
  // }
  //
  // validationPassword = () => {
  //   let password = this.props.data.validationPassword[this.props.data.validationPassword.length - 1]
  // }

  render() {
    return (
      <div className="validation">
        <ul>
          <li>{this.state.validationName}</li>
        </ul>

      </div>
    )
  }
}

export default connect(
  state => ({
    data: state
  }),
  dispatch => ({

  })
)(Validation);
