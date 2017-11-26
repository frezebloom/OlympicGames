import React, { Component } from 'react';
import { connect } from "react-redux";

class Input extends Component {

  validationName = (event) => {
    let name = event.target.value
    let nameTag = document.getElementById("name")
    if(/^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/.test(name) === false){
      this.props.validationName('Введите правильное имя')
      nameTag.style.color = "#e21b1b"
    }
    else{
      this.props.validationName('')
      nameTag.style.color = "#26a69a"

    }
    if(name.length < 1){
      this.props.validationName('Поле должно быть заполнено')
      nameTag.style.color = "#e21b1b"
    }
  }

  validationSurname = (event) => {
    let surname = event.target.value
    let nameTag = document.getElementById("surname")
    if(/^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/.test(surname) === false){
      this.props.validationSurname('Введите правильную фамилию')
      nameTag.style.color = "#e21b1b"
    }
    else{
      this.props.validationSurname('')
      nameTag.style.color = "#26a69a"

    }
    if(surname.length < 1){
      this.props.validationSurname('Поле должно быть заполнено')
      nameTag.style.color = "#e21b1b"
    }
  }

  value = (event) => {
    event.target.name === "name" ? this.validationName(event) : false
    event.target.name === "surname" ? this.validationSurname(event) : false
    // event.target.name === "login" ? this.props.validationLogin(event.target.value) : false
    // event.target.name === "password" ? this.props.validationPassword(event.target.value) : false
  }

  render() {
    var action
    if(this.props.id === "name"){
      action = this.props.data.validationName[this.props.data.validationName.length - 1]
    }
    if(this.props.id === "surname"){
      action = this.props.data.validationSurname[this.props.data.validationSurname.length - 1]
    }

    return (
      <div className="input">
        <input type={this.props.type} id={this.props.id} name={this.props.name} title="подсказка" placeholder={this.props.placeholder} onChange={this.value}/>
        <div className="errorMessage">{action}</div>
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
