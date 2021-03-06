import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers";

import App from './components/App';

import './style/index.css'
import './style/materialize/css/materialize.min.css'

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
