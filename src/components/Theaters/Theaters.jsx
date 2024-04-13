import React from "react";

const Theaters = () => {
  return (
    <section id="pricing" className="pricing-table section extra-page bg-white">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h3 className="wow zoomIn" data-wow-delay=".2s">
              PRIVATE THEATRES
              </h3>
              <h2 className="wow fadeInUp" data-wow-delay=".4s">
                Our Theaters
              </h2>
              {/* <p className="wow fadeInUp" data-wow-delay=".6s">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </p> */}
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-lg-4 col-md-6 col-12 wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="single-table">
              <div className="table-head">
                <h4 className="title">HEAVEN</h4>
                <p>Available tickets for this price</p>
                {/* <div className="price">
                  <h2 className="amount">$10</h2>
                </div> */}
              </div>

              <div className="button">
                <a href="https://booking.partyscape.in/heaven" className="btn">
                  Book now
                </a>
              </div>

              {/* <div className="table-content">
                <ul className="table-list">
                  <li>One Day Conference Ticket</li>
                  <li>Posters Session</li>
                  <li>Coffee-break & Networking</li>
                  <li>Lunch & Networing</li>
                  <li>Keynote talk</li>
                </ul>
              </div> */}
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 col-12 wow fadeInUp"
            data-wow-delay=".6s"
          >
            <div className="single-table middle">
              <div className="table-head">
                <h4 className="title">ICONIC</h4>
                <p>Available tickets for this price</p>
                {/* <div className="price">
                  <h2 className="amount">$99</h2>
                </div> */}
              </div>

              <div className="button">
                <a href="https://booking.partyscape.in/iconic" className="btn btn-alt">
                  Book now
                </a>
              </div>
{/* 
              <div className="table-content">
                <ul className="table-list">
                  <li>Three Day Conference Ticket</li>
                  <li>Posters Session</li>
                  <li>Coffee-break & Networking</li>
                  <li>Lunch & Networing</li>
                  <li>Keynote talk</li>
                </ul>
              </div> */}
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 col-12 wow fadeInUp"
            data-wow-delay=".8s"
          >
            <div className="single-table">
              <div className="table-head">
                <h4 className="title">SKYLINE</h4>
                <p>Available tickets for this price</p>
                {/* <div className="price">
                  <h2 className="amount">$289</h2>
                </div> */}
              </div>

              <div className="button">
                <a href="https://booking.partyscape.in/skyline" className="btn">
                  Book now
                </a>
              </div>

              {/* <div className="table-content">
                <ul className="table-list">
                  <li>Five Day Conference Ticket</li>
                  <li>Posters Session</li>
                  <li>Coffee-break & Networking</li>
                  <li>Lunch & Networing</li>
                  <li>Keynote talk</li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Theaters;
