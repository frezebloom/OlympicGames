import React, { Component } from "react";
import { connect } from "react-redux";

import Input from "./input.js";
import Message from "./Message.js";

class App extends Component {
  state = {
    move: false,
    city: "",
    selectCity: "Вы выбрали 0 / 3"
  };
  //координаты мыши
  mouseCoordinates = e => {
    let startX = e.clientX;
    let startY = e.clientY;
    var obj = { x: startX, y: startY };
    return obj;
  };

  //перемещение
  moveAt = event => {
    const city = document.getElementById(this.state.city);
    if (this.state.move) {
      city.style.left = event.pageX - city.offsetWidth / 2 + "px";
      city.style.top = event.pageY - city.offsetHeight / 2 + "px";
    }
    return false;
  };

  //движение элемента
  move = event => {
    this.moveAt(event);
    let mouse = this.mouseCoordinates(event);
    let area = document
      .getElementsByClassName("col s6")[3]
      .getBoundingClientRect();
    var ar = document.getElementById("area");
    if (
      mouse.x > area.left &&
      mouse.x < area.right &&
      mouse.y > area.top &&
      mouse.y < area.bottom
    ) {
      ar.style.border = "1px dashed #147274";
      ar.style.transition = "2s ease-out";
      ar.style.background = "#f7f7f7";
    } else {
      ar.style.border = "1px double #e7e7e7";
      ar.style.transition = "1s ease-out";
      ar.style.background = "#ffffff";
    }
  };

  //клик мышкой
  onCity = event => {
    let city = document.getElementById(`${event.target.id}`);
    city.style.position = "absolute";
    this.mouseCoordinates(event);
    this.moveAt(event);
    document.body.appendChild(city);
    city.style.zIndex = 1000;
    this.setState({ move: true, city: `${event.target.id}` });
  };

  //отпускание мышки
  mouseUp = event => {
    let city = document.getElementById(this.state.city);
    let mouse = this.mouseCoordinates(event);
    let area = document
      .getElementsByClassName("col s6")[3]
      .getBoundingClientRect();
    let childrenPositionSelect = document.getElementById("positionSelect")
      .children.length;
    let childrenPositionStart = document.getElementById("positionStart")
      .children.length;

    if (childrenPositionSelect < 3) {
      let a = document.getElementById("positionSelect").children.length + 1;
      this.setState({ selectCity: `Вы выбрали ${a} / 3` });

      if (
        mouse.x > area.left &&
        mouse.x < area.right &&
        mouse.y > area.top &&
        mouse.y < area.bottom
      ) {
        this.setState({ move: false });
        city.style.position = "inherit";
        document.getElementById("positionSelect").appendChild(city);
        this.props.validationCity(
          document.getElementById("positionSelect").innerText
        );
      } else {
        city.style.position = "inherit";
        document.getElementById("positionStart").appendChild(city);
        this.setState({ move: false });
        let a = document.getElementById("positionSelect").children.length;
        this.setState({ selectCity: `Вы выбрали ${a} / 3` });
      }
    } else {
      city.style.position = "inherit";
      document.getElementById("positionStart").appendChild(city);
      this.setState({ move: false });
    }
  };

  showMessage = () => {
    this.props.showMessage(true);
  };
  render() {
    console.log(this.props.data);
    let showMessage = this.props.data.showMessage[
      this.props.data.showMessage.length - 1
    ];
    return (
      <div className="form">
        <div className="formHeader">Выбор столицы Олимпийских игр - 2032</div>
        <div className="bodyForm" onMouseMove={this.move}>
          {showMessage ? <Message /> : false}
          <div className="row">
            <div className="col s6">
              <div className="col xl12 m4 l2">
                <Input type="text" name="name" placeholder="ИМЯ" id="name" />
              </div>
              <div className="col xl12 m4 l2">
                <Input
                  type="text"
                  name="login"
                  placeholder="ЛОГИН"
                  id="login"
                />
              </div>
            </div>
            <div className="col s6">
              <div className="col xl12 m4 l2">
                <Input
                  type="text"
                  name="surname"
                  placeholder="ФАМИЛИЯ"
                  id="surname"
                />
              </div>
              <div className="col xl12 m4 l2">
                <Input
                  type="password"
                  name="password"
                  placeholder="ПАРОЛЬ"
                  id="password"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="height">
              <div className="col s6">
                <div id="positionStart">
                  <div
                    className="card-panel"
                    id="spb"
                    onMouseDown={this.onCity}
                    onMouseUp={this.mouseUp}
                  >
                    Санкт-Петербург
                  </div>
                  <div
                    className="card-panel"
                    id="madrid"
                    onMouseDown={this.onCity}
                    onMouseUp={this.mouseUp}
                  >
                    Мадрид
                  </div>
                  <div
                    className="card-panel"
                    id="berlin"
                    onMouseDown={this.onCity}
                    onMouseUp={this.mouseUp}
                  >
                    Берлин
                  </div>
                  <div
                    className="card-panel"
                    id="tokyo"
                    onMouseDown={this.onCity}
                    onMouseUp={this.mouseUp}
                  >
                    Токио
                  </div>
                  <div
                    className="card-panel"
                    id="oslo"
                    onMouseDown={this.onCity}
                    onMouseUp={this.mouseUp}
                  >
                    Осло
                  </div>
                  <div
                    className="card-panel"
                    id="london"
                    onMouseDown={this.onCity}
                    onMouseUp={this.mouseUp}
                  >
                    Лондон
                  </div>
                  <div
                    className="card-panel"
                    id="pekin"
                    onMouseDown={this.onCity}
                    onMouseUp={this.mouseUp}
                  >
                    Пекин
                  </div>
                </div>
              </div>
            </div>
            <div className="col s6">
              <div id="area">
                <p>Перетащите в эту область 3 города</p>
                <p id="p">{this.state.selectCity}</p>
                <div id="positionSelect" />
              </div>
            </div>
          </div>
          <a
            className="waves-effect waves-light btn"
            onClick={this.showMessage}
          >
            Отправить
          </a>
        </div>
      </div>
    );
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
    validationCity: state => {
      dispatch({ type: "VALIDATION_CITY", payload: state });
    }
  })
)(App);
