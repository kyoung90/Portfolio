import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlasses } from "@fortawesome/free-solid-svg-icons";

export const Home = () => {
  return (
    <header className="masthead bg-primary text-white text-center">
      <div className="container d-flex align-items-center flex-column">
        <img
          className="masthead-avatar mb-5"
          src="./assets/avatarPic.png"
          alt=""
        />
        <h1 className="masthead-heading text-uppercase mb-0">Kenneth Young</h1>
        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <FontAwesomeIcon icon={faGlasses} />
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <p className="masthead-subheading font-weight-light mb-0">
          Fullstack Developer - Tech Blogger - Coding Teacher
        </p>
      </div>
    </header>
  );
};
