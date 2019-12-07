import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { testimonials } from "./testimonials";
import { Testimonial } from "./Testimonial";
import "react-responsive-carousel/lib/styles/carousel.min.css";
var Carousel = require("react-responsive-carousel").Carousel;

export const TestimonialContainer = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const onChange = index => {
    if (currentSlide != index) {
      setCurrentSlide(index);
    }
  };

  const generateTestimonials = () => {
    return testimonials.map(testimonial => <Testimonial {...testimonial} />);
  };
  return (
    <section className="page-section testimonial" id="testimonial">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Testimonials
        </h2>

        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <FontAwesomeIcon icon={faQuoteLeft} />
            <span>{"      "}</span>
            <FontAwesomeIcon icon={faQuoteRight} />
          </div>
          <div className="divider-custom-line"></div>
        </div>

        <Carousel
          selectedItem={currentSlide}
          showStatus={false}
          showThumbs={false}
          showArrows={true}
          onChange={onChange}
          emulateTouch
          useKeyboardArrows
          infiniteLoop
        >
          {generateTestimonials()}
        </Carousel>
      </div>
    </section>
  );
};
