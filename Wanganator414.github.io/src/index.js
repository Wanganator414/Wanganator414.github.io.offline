//React core
import React from "react";
import ReactDOM from "react-dom";

//Routing
import { BrowserRouter } from "react-router-dom";

//React-bootstrap
import Container from "react-bootstrap/Container";

//Pages/Components
import Main from "./Components/Main";

//Other
import * as serviceWorker from "./serviceWorker";
import "./CSS/index.css";

//BR can only have a single component inside it
//Make sure NavLinks/Links are inside BR/HR, or else it will throw error
ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  document.getElementById("root")
);
//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
