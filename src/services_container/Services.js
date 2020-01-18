import React from "react";
import "./Services.css";
import "../css/common.css";
import img1 from "../img/docSor.png";
import img2 from "../img/onlran.jpg";
import img3 from "../img/hkm.jpg";
import img4 from "../img/hzm.png";

function App() {
  return (
    <section className="section-120 services-container">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h1 className="service_header">Hizmetlerimiz</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <img className="d-block  h-50 w-100" src={img1} alt="First slide" />
          </div>
          <div className="col-lg-6">
            <img className="d-block h-50 w-100" src={img2} alt="First slide" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <img className="d-block h-50 w-100" src={img3} alt="First slide" />
          </div>
          <div className="col-lg-6">
            <img className="d-block h-50 w-100" src={img4} alt="First slide" />
          </div>
        </div>

        <div className="row"></div>
      </div>
    </section>
  );
}

export default App;
