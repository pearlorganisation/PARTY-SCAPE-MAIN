import React, { useRef, useState } from "react";
import "./styles.css";

const Gallery = () => {
  const [show, setShow] = useState(false);
  const [img, setImg] = useState(null);
  const handleShow = (item) => {
    setImg(item);
    setShow(true);
  };
  const handleClose = () => setShow(false);

  const images = [
    {
      src: "/images/heaven/1.jpg",
      alt: "Bridge",
    },
    {
      src: "/images/heaven/2.jpg",
      alt: "Bridge",
    },
    {
      src: "/images/heaven/3.jpg",
      alt: "Bridge",
    },
    {
      src: "/images/heaven/4.jpg",
      alt: "Bridge",
    },

    {
      src: "/images/skyline/1.jpeg",
      alt: "Bridge",
    },
    {
      src: "/images/skyline/2.jpeg",
      alt: "Bridge",
    },
    {
      src: "/images/skyline/3.jpeg",
      alt: "Bridge",
    },
    {
      src: "/images/skyline/4.jpeg",
      alt: "Bridge",
    },

    {
      src: "/images/iconic/1.jpg",
      alt: "Bridge",
    },
    {
      src: "/images/iconic/2.jpg",
      alt: "Bridge",
    },
    {
      src: "/images/iconic/3.jpg",
      alt: "Bridge",
    },
    {
      src: "/images/iconic/4.jpeg",
      alt: "Bridge",
    },

    // Add objects for other images following the same structure
  ];

  return (
    <>
      <section className="call-action overlay">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 offset-lg-2 col-md-12 col-12">
              <div className="inner-content">
                <div className="text">
                  <h2 className="wow fadeInUp" data-wow-delay=".4s">
                    Gallery
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="gallery-container">
          <div className="tz-gallery myRow">
            {images.map((image, index) => (
              <div className="col-sm-6 col-md-4" key={index}>
                <img
                  src={image.src}
                  alt={image.alt}
                  onClick={() => handleShow(image)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <div>
        {show && (
          
          <div
            className="modal show"
            id="exampleModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            style={{ display: "block" }}
            onClick={handleClose}
          >
            <div className="modal-dialog modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  
                  <span aria-hidden="true" style={{cursor: 'pointer', fontSize: '34px'}} onClick={handleClose}>&times;</span>
                </div>
                <div className="modal-body">
                  <img src={img.src} alt={img.alt} style={{width: '100%', height: '100%'}} />
                </div>
               
              </div>
            </div>
          </div>
        )}
      </div>
      {show && (
        <div className="bgOverlay" ></div>
      )}
    </>
  );
};

export default Gallery;
