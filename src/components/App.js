import React, { Component } from 'react';

import Input from './input.js';

class App extends Component {

  state = {
    move: false,
    city: ''
  }

  componentDidMount(){
    this.Height();
  }

  Height = (e) => {
    let heightBlock = document.getElementById('spb').clientHeight
    document.getElementById('area').style.height = 3 * heightBlock+"px";
  }

  mouseCoordinates = (e) => {
    let startX = e.clientX;
    let startY = e.clientY
    var obj = {x: startX, y:startY}
    return obj;
  }

  //перемещение
  moveAt = (event) => {
    const city = document.getElementById(this.state.city);
    if(this.state.move){
      city.style.left = event.pageX - city.offsetWidth / 2 + 'px';
      city.style.top = event.pageY - city.offsetHeight / 2 + 'px';
    }
    return false;
  }

  //движение элемента
  move = (event) => {
    this.moveAt(event);
  }

  //клик мышкой
  onCity = (event) => {
    let city = document.getElementById(`${event.target.id}`);
    city.style.position = 'absolute';
    this.mouseCoordinates(event);
    this.moveAt(event);
    document.body.appendChild(city);
    city.style.zIndex = 1000;
    this.setState({move: true, city: `${event.target.id}`})
  }

  //отпускание мышки
  mouseUp = (event) => {

    let city = document.getElementById(this.state.city);
    let mouse = this.mouseCoordinates(event);
    let area = document.getElementsByClassName('col s6')[3].getBoundingClientRect();
    if(mouse.x > area.left && mouse.x < area.right && mouse.y > area.top && mouse.y < area.bottom){
      this.setState({move: false})
      // city.style.position = 'relative'
      document.getElementsByClassName('col s6')[3].appendChild(city);
      console.log(area)
      console.log(city)
      // this.setState({move: false})
      // document.getElementById("area").appendChild(SPB);
      //
      //
      // city.style.position = 'relative';
      //
      // city.parentNode.removeChild(SPB);
      // let city = '<div class=card-panel id=SPB onMouseDown="onSPB();">Санкт-перербург</div>'
      // document.getElementById("area").innerHTML+= city

    }
    else{
      // let city = '<div class=card-panel id=SPB>Санкт-перербург</div>'
      // document.getElementById("area").innerHTML+= city
    }
  }


  render() {
    return (
      <div className="form">
        <div className="formHeader">
          Выбор столицы Олимпийских игр - 2032
        </div>
        <div className="bodyForm" onMouseMove={this.move}>
          <div className="row">
            <div className="col s6">
              <div className="col xl12 m4 l2">
                <Input type="text" name="name" placeholder="ИМЯ" />
              </div>
              <div className="col xl12 m4 l2">
                <Input type="text" name="login" placeholder="ЛОГИН" />
              </div>
            </div>
            <div className="col s6">
              <div className="col xl12 m4 l2">
                <Input type="text" name="country" placeholder="СТРАНА"/>
              </div>
              <div className="col xl12 m4 l2">
                <Input type="password" name="password" placeholder="ПАРОЛЬ"/>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="height">
              <div className="col s6">
                  <div className="card-panel" id="spb" onMouseDown={this.onCity} onMouseUp={this.mouseUp}>
                    Санкт-Петербург
                  </div>
                  <div className="card-panel" id="madrid" onMouseDown={this.onCity} onMouseUp={this.mouseUp}>
                    Мадрид
                  </div>
                  <div className="card-panel" id="berlin" onMouseDown={this.onCity} onMouseUp={this.mouseUp}>
                    Берлин
                  </div>
                  <div className="card-panel" id="tokyo" onMouseDown={this.onCity} onMouseUp={this.mouseUp}>
                    Токио
                  </div>
                  <div className="card-panel" id="oslo" onMouseDown={this.onCity} onMouseUp={this.mouseUp}>
                    Осло
                  </div>
                  <div className="card-panel" id="london" onMouseDown={this.onCity} onMouseUp={this.mouseUp}>
                    Лондон
                  </div>
                  <div className="card-panel" id="pekin" onMouseDown={this.onCity} onMouseUp={this.mouseUp}>
                    Пекин
                  </div>
                </div>
                </div>
                <div className="col s6">
                  <div id="area" onMouseMove={this.pointing}>
                    <div className="card-panel" id="berlin">
                      Берлин
                    </div>
                  </div>
                </div>
          </div>



        <a className="waves-effect waves-light btn">Отправить</a>
      </div>
      </div>

    )
  }
}

export default App;
