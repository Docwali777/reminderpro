import React, { Component } from "react";
import { render } from "react-dom";
import css from "style-loader!css-loader!./App.css";
import App from "./components/App";
import { Provider } from "react-redux"
import { createStore } from "redux";
import reducer from "./reducers"

const store  = createStore(reducer);

render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'))
