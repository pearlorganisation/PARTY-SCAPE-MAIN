import React from "react";

const AboutUsSection = () => {
  return (
    <>
    
    <section id="pricing" className="pricing-table section extra-page bg-white">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h3 className="wow zoomIn" data-wow-delay=".2s">
                Life is Nothing but Celebration of Events
              </h3>
              <h2 className="wow fadeInUp" data-wow-delay=".4s">
                PartyScape
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
            <div style={{display:'flex', flexDirection:'column', gap:'15px' }}>
              <h6
                className="wow zoomIn"
                data-wow-delay=".2s"
                style={{ width: "80px", color:"red" }}
              >
                About Us
              </h6>
              <h2 className="wow fadeInUp" data-wow-delay=".4s">
                Partyscape: Your Private Cinema and Celebration Haven
              </h2>
              <p className="wow fadeInUp" data-wow-delay=".6s">
                Step into the world of exclusive entertainment with Partyscape!
                Our private theaters offer a lavish cinematic experience,
                perfect for watching your favorite movies and shows on a grand
                scale. Equipped with cutting-edge 4K video and Dolby Atmos
                high-fidelity audio systems, we promise an audio-visual feast.
                Whether it’s a birthday, anniversary, a romantic date, or any
                special occasion, make it unforgettable at Partyscape, where
                every event becomes a blockbuster celebration
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 mt-5 mt-lg-0 " >
            <img src="/images/AboutUs/HomeImg.jpg" alt="" style={{width:'100%'}}/>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default AboutUsSection;
