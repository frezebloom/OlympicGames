import React, { Component } from "react";
import { connect } from "react-redux";

class Input extends Component {
  //Проверка поля имени (name)
  validationName = event => {
    let name = event.target.value;
    let nameTag = document.getElementById("name");
    if (
      /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/.test(name) === false
    ) {
      this.props.validationName("Введите правильное имя");
      nameTag.style.color = "#e21b1b";
    } else {
      this.props.validationName("");
      nameTag.style.color = "#26a69a";
      this.props.userName(name);
    }
    if (name.length < 1) {
      this.props.validationName("Поле должно быть заполнено");
      nameTag.style.color = "#e21b1b";
    }
  };

  //Проверка поля фамилии (surname)
  validationSurname = event => {
    let surname = event.target.value;
    let nameTag = document.getElementById("surname");
    if (
      /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/.test(surname) ===
      false
    ) {
      this.props.validationSurname("Введите правильную фамилию");
      nameTag.style.color = "#e21b1b";
    } else {
      this.props.validationSurname("");
      nameTag.style.color = "#26a69a";
      this.props.userSurname(surname);
    }
    if (surname.length < 1) {
      this.props.validationSurname("Поле должно быть заполнено");
      nameTag.style.color = "#e21b1b";
    }
  };

  //Проверка поля Логин (login)
  validationLogin = event => {
    let login = event.target.value;
    let nameTag = document.getElementById("login");
    if (/^[a-zA-Z1-9]+$/.test(login) === false) {
      this.props.validationLogin("В логине должны быть только латинские буквы");
      nameTag.style.color = "#e21b1b";
    } else {
      this.props.validationLogin("");
      nameTag.style.color = "#26a69a";
    }
    if (login.length < 4 || login.length > 20) {
      this.props.validationLogin("Логин должен состоять от 4 до 20 символов");
      nameTag.style.color = "#e21b1b";
    }
    if (parseInt(login.substr(0, 1))) {
      this.props.validationLogin("Логин должен начинаться с буквы");
      nameTag.style.color = "#e21b1b";
    }
    if (login.length < 1) {
      this.props.validationLogin("Поле должно быть заполнено");
      nameTag.style.color = "#e21b1b";
    }
  };

  //Проверка поля Пароль (password)
  validationPassword = event => {
    let password = event.target.value;
    let nameTag = document.getElementById("password");
    if (/([0-9])+/g.test(password) === false) {
      this.props.validationPassword(
        "Пароль должен содержать хотя бы одну цифру"
      );
      nameTag.style.color = "#e21b1b";
    } else {
      this.props.validationPassword("");
      nameTag.style.color = "#26a69a";
    }
    if (password.length < 1) {
      this.props.validationPassword("Поле должно быть заполнено");
      nameTag.style.color = "#e21b1b";
    }
  };

  value = event => {
    event.target.name === "name" ? this.validationName(event) : false;
    event.target.name === "surname" ? this.validationSurname(event) : false;
    event.target.name === "login" ? this.validationLogin(event) : false;
    event.target.name === "password" ? this.validationPassword(event) : false;
  };

  render() {
    var errorMessage;
    if (this.props.id === "name") {
      errorMessage = this.props.data.validationName[
        this.props.data.validationName.length - 1
      ];
    }
    if (this.props.id === "surname") {
      errorMessage = this.props.data.validationSurname[
        this.props.data.validationSurname.length - 1
      ];
    }
    if (this.props.id === "login") {
      errorMessage = this.props.data.validationLogin[
        this.props.data.validationLogin.length - 1
      ];
    }
    if (this.props.id === "password") {
      errorMessage = this.props.data.validationPassword[
        this.props.data.validationPassword.length - 1
      ];
    }
    return (
      <div className="input">
        <input
          type={this.props.type}
          id={this.props.id}
          name={this.props.name}
          title="подсказка"
          placeholder={this.props.placeholder}
          onChange={this.value}
        />
        <div className="errorMessage">{errorMessage}</div>
      </div>
    );
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
    },
    userName: state => {
      dispatch({ type: "USER_NAME", payload: state });
    },
    userSurname: state => {
      dispatch({ type: "USER_SURNAME", payload: state });
    }
  })
)(Input);
