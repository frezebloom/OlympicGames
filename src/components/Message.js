import React, { Component } from 'react';
import { connect } from "react-redux";

class Message extends Component {

  state = {
    validationName: this.props.data.validationName[this.props.data.validationName.length - 1],
    validationSurname: this.props.data.validationSurname[this.props.data.validationSurname.length - 1],
    validationLogin: this.props.data.validationLogin[this.props.data.validationLogin.length - 1],
    validationPassword: this.props.data.validationPassword[this.props.data.validationPassword.length - 1],
    und: ""
  }

  st = () => {
    this.setState({
      und: "Заполните все поля"
    })
  }

  componentDidMount(){
    var validationNull = [
      this.props.data.userName[this.props.data.userName.length - 1],
      this.props.data.userSurname[this.props.data.userSurname.length - 1],
      this.props.data.userLogin[this.props.data.userLogin.length - 1],
      this.props.data.userPassword[this.props.data.userPassword.length - 1],
      this.props.data.validationCity[this.props.data.validationCity.length - 1]
    ]
    validationNull.forEach((item, index) => {
      if(!item){
        this.props.messageFlag(true)
        this.st()
      }
    })
  }


  ok = () => {
    this.props.showMessage(false)
  }

  render() {
    var flag = this.props.data.messageFlag[this.props.data.messageFlag.length - 1]
    var userName = this.props.data.userName[this.props.data.userName.length - 1]
    var userSurname = this.props.data.userSurname[this.props.data.userSurname.length - 1]

    if(flag){
      var messages = {
                       validationName: this.state.validationName,
                       validationSurname: this.state.validationSurname,
                       validationLogin: this.state.validationLogin,
                       validationPassword: this.state.validationPassword,
                       validationPasswords: this.state.und
                     }
    }
    else{
      var messages = {
                      fullName: `${userName} ${userSurname}`,
                     }
      var city = this.props.data.validationCity[this.props.data.validationCity.length - 1]
    }

    console.log(this.props.data.validationCity[this.props.data.validationCity.length - 1])

    return (
      <div className="message">
        <div className="row">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <ul>
              {Object.keys(messages).map(message => (
                <li key={message}>{messages[message]}</li>
              ))}
              {city}
              </ul>
              <div className="card-action">
                <a onClick={this.ok}>ОКЕЙ</a>
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
    },
    messageFlag: state => {
      dispatch({ type: "FLAG_MESSAGE", payload: state });
    }
  })
)(Message);
