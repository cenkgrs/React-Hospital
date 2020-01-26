import React from "react";
import "../css/Nav.css";

//import Docs from "./docs/docs";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <section className="section-120 nav" style={{ border: "none" }}>
      <div className="container-fluid" style={{ width: "80%" }}>
        <div className="top-panel">
          <div className="row">
            <div className="col-lg-12">
              <div className="col-lg-5 hours" style={{ float: "left" }}>
                <span>
                  <i className="far fa-clock"></i> Çalışma Saatlerimiz: Hafta
                  içi: 09-18
                </span>
              </div>
              <div className="col-lg-7 infos">
                <ul>
                  <li>
                    <span>
                      <i
                        className="far fa-envelope"
                        style={{ marginRight: "10px" }}
                      ></i>
                    </span>
                    info@dentalhospital.com.tr
                  </li>
                  <li>
                    <span>
                      <i
                        className="fas fa-phone"
                        style={{ marginRight: "10px" }}
                      ></i>
                    </span>
                    +90 212 000 00 00
                  </li>
                  <li>
                    <span>
                      <i
                        className="fab fa-whatsapp"
                        style={{ marginRight: "10px" }}
                      ></i>
                    </span>
                    +90 539 000 00 00
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid nav-bar">
          <div className="row">
            <div className="col-lg-2">
              <Router>
                <Link to="/">
                  <h3 className="nav-header" style={{ float: "left" }}>
                    Hospital Dent
                  </h3>
                </Link>
              </Router>
            </div>
            <div className="col-lg-7">
              <ul className="nav-ul">
                <li>
                  <Router>
                    <Link to="/docs"> Hekimlerimiz </Link>
                  </Router>
                </li>
                <li>
                  <a href="#">Online Randevu</a>
                </li>
                <li>
                  <a href="#">Hizmetlerimiz</a>
                </li>
                <li>
                  <Router>
                    <Link to="/about">Hakkımızda</Link>
                  </Router>
                </li>
                <li>
                  <a href="#">İletişim</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3" style={{ float: "right" }}>
              <div className="search-area">
                <ul>
                  <li>
                    <input
                      type="text"
                      id="search-area"
                      className="form-control"
                      placeholder="Arama"
                    />
                  </li>
                  <li>
                    <button className="search-button">
                      <i className="fas fa-search"></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Docs() {
  return (
    <div>
      <h2>Docs</h2>
    </div>
  );
}

export default App;
