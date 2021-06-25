import React from "react";
import ReactDOM from "react-dom";
//bootstrap just makes everything look better xD
// import "./index.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/styles.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
