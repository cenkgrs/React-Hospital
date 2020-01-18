import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Nav from "./Nav";
import Slidebar from "./Slidebar";
import Services from "./services_container/Services";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Nav />, document.getElementById("navbar"));
ReactDOM.render(<Slidebar />, document.getElementById("slidebar"));
ReactDOM.render(<Services />, document.getElementById("services"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
