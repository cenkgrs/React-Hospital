import React from "react";
import "./Slidebar.css";
import img1 from "./img/kmp1.jpg";
import img2 from "./img/kmp2.jpg";
import img3 from "./img/kmp3.jpg";

function App() {
  return (
    <section className="section-120 nav">
      <div className="container">
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={img1} alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={img2} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={img3} alt="Third slide" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
