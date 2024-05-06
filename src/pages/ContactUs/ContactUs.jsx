import React from "react";

const ContactUs = () => {
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
                  Contact Us
                </h2>
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
                  justifyContent: 'center'
                }}
              >
                <h4 className="wow fadeInUp" data-wow-delay=".4s" style={{lineHeight: '50px'}}>
                <ul>
                    <li>
                      <strong>
                      Address: 
                      </strong>
                    </li>
                    <li style={{fontWeight:'400'}}>H.NO: 8-1-284/OU/385/1 & 2, 4th Floor, OU Colony, Shaikpet, Hyderabad-500008</li>
                  
                    <li style={{fontWeight:'400'}}>
                      <strong>Mobile No:</strong> 9030690101
                    </li>
                    <li style={{fontWeight:'400'}}>
                      <strong>Email: </strong>
                      partyscape24@gmail.com
                    </li>
                  </ul>
                </h4>
                <p className="wow fadeInUp" data-wow-delay=".6s"></p>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 mt-5 mt-lg-0 ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.118003525325!2d78.3896384230505!3d17.406123722784574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97d077cc0941%3A0x35e860e7db76f247!2sPARTYSCAPE!5e0!3m2!1sen!2sin!4v1713008520922!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
