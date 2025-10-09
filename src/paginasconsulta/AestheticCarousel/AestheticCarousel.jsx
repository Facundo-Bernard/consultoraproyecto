// src/components/AestheticCarousel/AestheticCarousel.jsx
import React, { useEffect, useRef } from 'react';

const AestheticCarousel = ({
  slides = [],
  interval = 5000,
  className = '',
  style = {}
}) => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = new window.bootstrap.Carousel(
      carouselRef.current,
      {
        interval,
        ride: 'carousel',
        pause: false,
        wrap: true
      }
    );
    return () => carousel.dispose();
  }, [interval]);

  return (
    <div
      className={`position-relative overflow-hidden ${className}`}
      style={style}
    >
      <div
        id="aestheticCarousel"
        ref={carouselRef}
        className="carousel slide carousel-fade w-100"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className={`carousel-item position-relative ${idx === 0 ? 'active' : ''}`}
            >
              <img
                src={slide.imgSrc}
                alt={slide.alt || `slide-${idx}`}
                className="d-block w-100"
                style={{
                  objectFit: 'cover',
                  height: slide.height || '55vh'
                }}
              />

              {/* dark overlay */}
              <div className="carousel-dark-overlay position-absolute top-0 start-0 w-100 h-100" />

              {/* caption */}
              <div className="carousel-caption d-flex flex-column justify-content-center align-items-center h-100 p-0">
                <div className="text-center px-4">
                  <h1 className="text-white mb-3 headline-fade">
                    {slide.title}
                  </h1>
                  <p className="text-light lead caption-fade">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#aestheticCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"/>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#aestheticCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"/>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* inline CSS for overlay & animations */}
      <style>{`
        .carousel-dark-overlay {
          background-color: rgba(0, 0, 0, 0.6);
          z-index: 1;
        }
        .carousel-item img {
          z-index: 0;
        }
        .carousel-caption {
          z-index: 2;
        }
        .headline-fade {
          animation: fadeLift 0.8s ease-out both;
          text-shadow: 0 2px 8px rgba(0,0,0,0.7);
        }
        .caption-fade {
          animation: fadeSlow 1.2s ease-out both;
          text-shadow: 0 1px 4px rgba(0,0,0,0.5);
        }
        @keyframes fadeLift {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeSlow {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default AestheticCarousel;