import React from "react";

export const Home = () => {
  return (
    <header className="masthead bg-primary text-white text-center">
      <div className="container d-flex align-items-center flex-column">
        <img
          className="masthead-avatar mb-5"
          src="./assets/cartoonImageKenneth.png"
          alt=""
        />
        <h1 className="masthead-heading text-uppercase mb-0">Kenneth Young</h1>
        <br />
        <p className="masthead-subheading font-weight-light mb-0">
          Coding Teacher ● Fullstack Developer ● Tech Blogger
        </p>
      </div>
    </header>
  );
};
