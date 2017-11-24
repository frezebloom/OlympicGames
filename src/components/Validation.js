import React, { Component } from 'react';
import { connect } from "react-redux";

class Validation extends Component {

  state = {
    validationName: '',
    validationSurname: '',
    validationLogin: '',
    validationPassword: ''
  }

  componentDidMount(){
    this.validationName();
    this.validationSurname();
  }

  validationName = () => {
    let name = this.props.data.validationName[this.props.data.validationName.length - 1]
    if(name === undefined){
      this.setState({
        validationName: "Заполните поле ИМЯ"

      })
    }
  }


  validationSurname = () => {
    let surname = this.props.data.validationSurname[this.props.data.validationSurname.length - 1]
    if(surname === undefined){
      this.setState({
        validationSurname: "Заполните поле ФАМИЛИЯ"
      })
    }
  }

  // validationLogin = () => {
  //   let login = this.props.data.validationLogin[this.props.data.validationLogin.length - 1]
  // }
  //
  // validationPassword = () => {
  //   let password = this.props.data.validationPassword[this.props.data.validationPassword.length - 1]
  // }

  render() {
    console.log(this.state)
    return (
      <div className="validation">
        <ul>
          {Object.keys(this.state).map(error => (
            <li key={error}>{this.state[error]}</li>
          ))}
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
