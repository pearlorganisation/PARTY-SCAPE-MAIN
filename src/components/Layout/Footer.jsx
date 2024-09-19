import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="inner-content">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12">
                <div className="single-footer f-about">
                  <div className="logo">
                    <a href="/">
                      <img src="images/logo/logo.png" />
                    </a>
                  </div>
                  <p>
                    Welcome to Partyscape. your ultimate destination for an
                    private theatre and event celebration experience.
                  </p>
                  {/* <span className="social-title">Follow Us On:</span>
                  <ul className="social">
                    <li>
                      <a href="/">
                        <i className="lni lni-facebook-filled"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="lni lni-twitter-filled"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="lni lni-instagram-filled"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="lni lni-linkedin-original"></i>
                      </a>
                    </li>
                  </ul> */}
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="single-footer f-link">
                  <h3>Quick Links</h3>
                  <ul>
                    <li>
                      <a href="/TermsAndConditions">Terms & Conditions</a>
                    </li>
                    <li>
                      <a href="/refundpolicy">Refund Policy</a>
                    </li>
                    <li>
                      <a href="aboutus">About Us</a>
                    </li>
                    <li>
                      <a href="/contactus">Contact Us</a>
                    </li>
                    <li>
                      <a href="/gallery">Gallery</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div className="col-lg-3 col-md-6 col-12">
                <div className="single-footer f-link">
                  <h3>Our Capability</h3>
                  <ul>
                    <li>
                      <a href="/privatetheaters">Theatres</a>
                    </li>
                  </ul>
                </div>
              </div> */}


              <div className="col-lg-4 col-md-6 col-12">
                <div className="single-footer">
                  <h3>Contact Info</h3>
                  <ul>
                    <li>
                      H.NO: 8-1-284/OU/385/1 & 2
                    </li>
                    <li>
                      4th Floor
                    </li>
                    <li>
                      OU Colony, Shaikpet, Hyderabad-500008
                    </li>
                    <li>
                      Mobile No: 9030690101
                    </li>
                    <li>
                      Email: partyscape24@gmail.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright">
        <div className="container">
          <div className="inner-content">
            <div className="row">
              <div className="col-12">
                <p className="copyright-text">Copyright © <a href="https://pearlorganisation.com">Pearl Organisation</a> {new Date().getFullYear()} </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
