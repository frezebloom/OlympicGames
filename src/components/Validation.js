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
    this.validationLogin();
    this.validationPassword();
  }

  validationName = () => {
    let name = this.props.data.validationName[this.props.data.validationName.length - 1]
    if(name === undefined){
      this.setState({
        validationName: "→ Заполните поле ИМЯ"
      })
    }
  }

  validationSurname = () => {
    let surname = this.props.data.validationSurname[this.props.data.validationSurname.length - 1]
    if(surname === undefined){
      this.setState({
        validationSurname: "→ Заполните поле ФАМИЛИЯ"
      })
    }
  }

  validationLogin = () => {
    let login = this.props.data.validationLogin[this.props.data.validationLogin.length - 1]
    if(login === undefined){
      this.setState({
        validationLogin: "→ Заполните поле ЛОГИН"
      })
    }
  }

  validationPassword = () => {
    let password = this.props.data.validationPassword[this.props.data.validationPassword.length - 1]
    if(password === undefined){
      this.setState({
        password: "→ Заполните поле ПАРОЛЬ"
      })
    }
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
                <a href="#">ОКЕЙ</a>
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

  })
)(Validation);
