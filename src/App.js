import React from "react";
import "./App.css";

function App() {
  return (
    <section className="section-120 nav">
      <div className="container">
        <div className="top-panel">
          <div className="row">
            <div className="col-lg-12">
              <div className="col-lg-6 hours" style={{ float: "left" }}>
                <span>
                  <i className="far fa-clock"></i> Çalışma Saatlerimiz: Hafta
                  içi: 09-18
                </span>
              </div>
              <div className="col-lg-6 infos" style={{ float: "left" }}>
                <ul>
                  <li>
                    <span>
                      <i className="far fa-envelope"></i>
                    </span>
                    info@dentalhospital.com.tr
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-phone"></i>
                    </span>
                    +90 212 000 00 00
                  </li>
                  <li>
                    <span>
                      <i className="fab fa-whatsapp"></i>
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
              <a href="#">
                <h3 className="nav-header" style={{ float: "left" }}>
                  Hospital Dent
                </h3>
              </a>
            </div>
            <div className="col-lg-7">
              <ul className="nav-ul">
                <li>
                  <a href="#">Hekimlerimiz</a>
                </li>
                <li>
                  <a href="#">Online Randevu</a>
                </li>
                <li>
                  <a href="#">Hizmetlerimiz</a>
                </li>
                <li>
                  <a href="#">Hakkımızda</a>
                </li>
                <li>
                  <a href="#">İletişim</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3" style={{ float: "left" }}>
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

export default App;
