import React from "react";
import "../css/Services.css";
import "../css/common.css";

function App() {
  return (
    <section className="section-120 services-container">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h1 className="service_header">Hizmetlerimiz</h1>
          </div>
        </div>
        <div className="row ">
          <div className="col-lg-6 docAsk services"></div>
          <div className="col-lg-6 onlran services"></div>
        </div>
        <div className="row">
          <div className="col-lg-6 hkk services"></div>
          <div className="col-lg-6 hzm services"></div>
        </div>

        <div className="row"></div>
      </div>
    </section>
  );
}

export default App;
