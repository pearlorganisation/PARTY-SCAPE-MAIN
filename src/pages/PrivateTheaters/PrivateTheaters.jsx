import React from "react";
import Theaters from "../../components/Theaters/Theaters";


const PrivateTheaters = () => {
  return (
    <>
    <section className="call-action overlay">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 offset-lg-2 col-md-12 col-12">
            <div className="inner-content">
              <div className="text">
                {/* <h2 className="wow fadeInUp" data-wow-delay=".4s">
                  Comming Soon
                </h2> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Theaters />
    </>
  );
};

export default PrivateTheaters;
