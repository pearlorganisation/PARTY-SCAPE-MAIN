import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="inner-content">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-footer f-about">
                  <div className="logo">
                    <a href="index.html">
                      <img src="images/logo/logo.png" alt="#" />
                    </a>
                  </div>
                  <p>
                    Welcome to Partyscape. your ultimate destination for an
                    private theatre and event celebration experience.
                  </p>
                  <span className="social-title">Follow Us On:</span>
                  <ul className="social">
                    <li>
                      <a href="#">
                        <i className="lni lni-facebook-filled"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lni lni-twitter-filled"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lni lni-instagram-filled"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lni lni-linkedin-original"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-footer f-link">
                  <h3>Quick Links</h3>
                  <ul>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Refund Policy</a>
                    </li>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                    <li>
                      <a href="#">Gallery</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-footer f-link">
                  <h3>Our Capability</h3>
                  <ul>
                    <li>
                      <a href="#">Theatres</a>
                    </li>
                    <li>
                      <a href="#">Cakes</a>
                    </li>
                    <li>
                      <a href="#">Food & Beverages</a>
                    </li>
                    <li>
                      <a href="#">Bouquets</a>
                    </li>
                    <li>
                      <a href="#">Gifts</a>
                    </li>
                    <li>
                      <a href="#">Photography</a>
                    </li>
                  </ul>
                </div>
              </div>


              <div className="col-lg-3 col-md-6 col-12">
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
                <p className="copyright-text">Copyright © 2024 PartyScape </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
