import React from "react";

const Banner = () => {
  return (
    <section className="call-action overlay">
      Name
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 offset-lg-2 col-md-12 col-12">
            <div className="inner-content">
              <div className="text">
                <h5 className="wow zoomIn" data-wow-delay=".2s">
                  Free Lite Version
                </h5>
                <h2 className="wow fadeInUp" data-wow-delay=".4s">
                  Currently you are using free LiteVersion of EventGrids
                </h2>
                <p className="wow fadeInUp" data-wow-delay=".6s">
                  Please, purchase full version of the template to get all
                  pages, features and commercial license.
                </p>
              </div>
              <div className="button wow fadeInUp" data-wow-delay=".8s">
                <a href="javascript:void(0)" className="btn">
                  Buy Now <i className="lni lni-cart-full"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
