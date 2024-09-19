import React from "react";

const Header = () => {
  return (
    <header className="header navbar-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="nav-inner">
              {/* Navbar content */}
              <nav className="navbar navbar-expand-lg">
                {/* Navbar brand */}
                <a className="navbar-brand" href="/">
                  <img src="/images/logo/logo.png" alt="Logo" />
                </a>


                <div className="button btn-center">
                  <a href="/privatetheaters" className="btn">
                    Book Now<i className="lni lni-ticket"></i>
                  </a>
                </div>


                {/* Mobile menu toggle button */}
                <button
                  className="navbar-toggler mobile-menu-btn"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                </button>
                {/* Navbar links */}
                <div
                  className="collapse navbar-collapse sub-menu-bar"
                  id="navbarSupportedContent"
                >
                  <ul id="nav" className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <a
                        href="/"
                        // className="active"
                        aria-label="Toggle navigation"
                      >
                        Home
                      </a>
                    </li>
                    {/* <li className="nav-item">
                      <a
                        className="dd-menu collapsed"
                        href="#"
                        data-bs-toggle="collapse"
                        data-bs-target="#submenu-1-1"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        Pages
                      </a>
                      <ul className="sub-menu collapse" id="submenu-1-1">
                        <li className="nav-item">
                          <a href="about-us.html">About Us</a>
                        </li>
                        <li className="nav-item">
                          <a href="gallery.html">Gallery</a>
                        </li>
                        <li className="nav-item">
                          <a href="pricing.html">Pricing</a>
                        </li>
                        <li className="nav-item">
                          <a href="sponsors.html">Sponsors</a>
                        </li>
                        <li className="nav-item">
                          <a href="mail-success.html">Mail Success</a>
                        </li>
                        <li className="nav-item">
                          <a href="404.html">404 Error</a>
                        </li>
                      </ul>
                    </li> */}


                    <li className="nav-item">
                      <a href="privatetheaters" aria-label="Toggle navigation">
                        Private Theaters
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="gallery" aria-label="Toggle navigation">
                        Gallery
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="dd-menu collapsed"
                        href="aboutus"
                        // data-bs-toggle="collapse"
                        // data-bs-target="#submenu-1-2"
                        // aria-controls="navbarSupportedContent"
                        // aria-expanded="false"
                        // aria-label="Toggle navigation"
                      >
                        About Us
                      </a>
                      {/* <ul className="sub-menu collapse" id="submenu-1-2">
                        <li className="nav-item">
                          <a href="blog-grid.html">Blog Grid</a>
                        </li>
                        <li className="nav-item">
                          <a href="blog-single.html">Blog Single</a>
                        </li>
                      </ul> */}
                    </li>
                    <li className="nav-item">
                      <a href="contactus" aria-label="Toggle navigation">
                        Contact
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="refundpolicy" aria-label="Toggle navigation">
                        Refund Policy
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Navbar collapse */}
                <div className="button btn-right">
                  <a href="/privatetheaters" className="btn">
                    Book Now<i className="lni lni-ticket"></i>
                  </a>
                </div>
              </nav>
              {/* End Navbar */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
