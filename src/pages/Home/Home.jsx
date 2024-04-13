import React, { useEffect, useState } from "react";
import "./Home.css";
import Theaters from '../../components/Theaters/Theaters'
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs'
import Banner from '../../components/Banner/Banner'


const Home = () => {
  return (
    <div>
      {/* Start Hero Area */}
      <section className="hero-area">
        <div className="main__circle"></div>
        <div className="main__circle2"></div>
        <div className="main__circle3"></div>
        <div className="main__circle4"></div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 offset-lg-3 col-md-12 col-12">
              <div className="hero-content">
                <h5 className="wow zoomIn" data-wow-delay=".2s">
                  <i className="lni lni-map-marker"></i> Waterfront Hotel, London
                </h5>
                <h2 className="wow fadeInUp" data-wow-delay=".4s">
                  The largest conference in europe 2023
                </h2>
                <p className="wow fadeInUp" data-wow-delay=".6s">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  deleniti voluptatum! Natus beatae laborum veniam distinctio.
                </p>
                <div className="button wow fadeInUp" data-wow-delay=".8s">
                  <a href="pricing.html" className="btn ">
                    Buy Ticket Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* End Hero Area */}

      {/* features area */}

   <Theaters />

{/* features area end */}

<WhyChooseUs />

{/* secondary banner area */}

<Banner />


{/* secondary banner end */}


    </div>
  );
};

export default Home;
