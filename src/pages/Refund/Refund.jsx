import React from 'react'
import AboutUsSection from '../../components/AboutUsSection/AboutUsSection'

const Refund = () => {
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
    <section
      id="pricing"
      className="pricing-table section extra-page bg-white"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h3 className="wow zoomIn" data-wow-delay=".2s">
              ⭕
              </h3>
              <h2 className="wow fadeInUp" data-wow-delay=".4s">
              Refund Policy
              </h2>
              {/* <p className="wow fadeInUp" data-wow-delay=".6s">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form.
            </p> */}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
              }}
            >
              <h6
                className="wow zoomIn"
                data-wow-delay=".2s"
                style={{ width: "80px", color: "red" }}
              >
                Privacy Policy
              </h6>
              <h2 className="wow fadeInUp" data-wow-delay=".4s">
                Partyscape: Your Private Cinema and Celebration Haven
              </h2>
              <p className="wow fadeInUp" data-wow-delay=".6s">
                Step into the world of exclusive entertainment with
                Partyscape! Our private theaters offer a lavish cinematic
                experience, perfect for watching your favorite movies and
                shows on a grand scale. Equipped with cutting-edge 4K video
                and Dolby Atmos high-fidelity audio systems, we promise an
                audio-visual feast. Whether it’s a birthday, anniversary, a
                romantic date, or any special occasion, make it unforgettable
                at Partyscape, where every event becomes a blockbuster
                celebration
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 mt-5 mt-lg-0 ">
            <img
              src="/images/AboutUs/HomeImg.jpg"
              alt=""
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
    </section>
  </>
  )
}

export default Refund
