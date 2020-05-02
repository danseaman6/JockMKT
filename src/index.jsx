/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";

const title = "Jock MKT Code Assignment";

ReactDOM.render(<App title={title} />, document.getElementById("app"));

module.hot.accept();
