import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./Components/Nav";
import Slidebar from "./Components/Slidebar";
import Services from "./Components/Services";
import Footer from "./Components/Footer";
import About from "./Components/About";

import * as serviceWorker from "./serviceWorker";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Switch>
          <Route path="/" component={Nav} exact />
        </Switch>
        <Slidebar />
        <Services />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
