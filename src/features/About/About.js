import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlasses } from "@fortawesome/free-solid-svg-icons";

export const About = () => {
  return (
    <section className="page-section bg-light" id="about">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          About
        </h2>

        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <FontAwesomeIcon icon={faGlasses} />
          </div>
          <div className="divider-custom-line"></div>
        </div>
      </div>
    </section>
  );
};
