import React from "react";
import "./Nav.css";

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

export default App;
