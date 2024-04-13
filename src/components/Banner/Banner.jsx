import React from "react";

const Banner = () => {
  return (
    <section className="call-action overlay">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 offset-lg-2 col-md-12 col-12">
            <div className="inner-content">
              <div className="text">
                {/* <h5 className="wow zoomIn" data-wow-delay=".2s">
                  Free Lite Version
                </h5> */}
                <h2 className="wow fadeInUp" data-wow-delay=".4s">
                Let's Make Your Event Memorable!
                </h2>
                <p className="wow fadeInUp" data-wow-delay=".6s">
                Ready to make your next celebration unforgettable? Contact us at Partyscape today!
                </p>
              </div>
              {/* <div className="button wow fadeInUp" data-wow-delay=".8s">
                <a href="javascript:void(0)" className="btn">
                  Buy Now <i className="lni lni-cart-full"></i>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
