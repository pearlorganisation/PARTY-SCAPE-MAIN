import React from "react";

const Hero = () => {
  return (
    <section className="hero-area">
      <div className="main__circle"></div>
      <div className="main__circle2"></div>
      <div className="main__circle3"></div>
      <div className="main__circle4"></div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 offset-lg-3 col-md-12 col-12">
            <div className="hero-content">
              {/* <h5 className="wow zoomIn" data-wow-delay=".2s">
                <i className="lni lni-map-marker"></i> Waterfront Hotel, London
              </h5> */}
              <h1 className="wow fadeInUp" style={{color: '#fff'}} data-wow-delay=".4s">
                Best Private Theatres for Celebrations in Hyderabad
              </h1>
              <p className="wow fadeInUp" data-wow-delay=".6s">
                Welcome to Partyscape. your ultimate destination for an private
                theatre and event celebration experience
              </p>
              {/* <div className="button wow fadeInUp" data-wow-delay=".8s">
                <a href="pricing.html" className="btn ">
                  Buy Ticket Now
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
