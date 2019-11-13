import React from "react";
import { Project } from "./Project";
import { projects } from "./projects";

export const PortfolioContainer = () => {
  const generateProjects = () => {
    return projects.map(project => <Project {...project} />);
  };
  return (
    <section className="page-section portfolio" id="portfolio">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Portfolio
        </h2>

        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fa fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>

        <div className="row">{generateProjects()}</div>
      </div>
    </section>
  );
};
