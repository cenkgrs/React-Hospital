import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./App";
import Slidebar from "./Components/Slidebar";
import Services from "./Components/Services";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<Slidebar />, document.getElementById("slidebar"));
//ReactDOM.render(<Services />, document.getElementById("services"));*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
