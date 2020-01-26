import React from "react";

import "../css/common.css";
import "../css/footer.css";

import hosp1 from "../img/hzm.png";
import hosp2 from "../img/hs3.jpg";
import hosp3 from "../img/hf3.jpg";

const Footer = () => {
  return (
    <div
      className="container-fluid"
      style={{ marginBottom: "15%", width: "80%" }}
    >
      <div className="row">
        <div className="col-lg-12 text-center">
          <h1 className="sub-header">Şubelerimiz</h1>
        </div>
      </div>
      <div className="col-lg-4 ist text-center"> İstanbul </div>
      <div className="col-lg-4 ank text-center"> Ankara </div>
      <div className="col-lg-4 izm text-center"> İzmir </div>
    </div>
  );
};

export default Footer;
