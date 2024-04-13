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
              <div className="col-lg-2 col-md-6 col-12">
                <div className="single-footer f-link">
                  <h3>Quick Links</h3>
                  <ul>
                    <li>
                      <a href="#">Get Direction</a>
                    </li>
                    <li>
                      <a href="#">Sponsor</a>
                    </li>
                    <li>
                      <a href="#">What We Offer</a>
                    </li>
                    <li>
                      <a href="#">Ricent Projects</a>
                    </li>
                    <li>
                      <a href="#">Insights</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-12">
                <div className="single-footer f-link">
                  <h3>Know More</h3>
                  <ul>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Our Pricing</a>
                    </li>
                    <li>
                      <a href="#">Faq</a>
                    </li>
                    <li>
                      <a href="#">Guides</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
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
