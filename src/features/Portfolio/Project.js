import React from "react";
import { ProjectModal } from "./ProjectModal";

export const Project = props => {
  return (
    <div className="col-md-6 col-lg-4">
      <div
        className="portfolio-item mx-auto"
        data-toggle="modal"
        data-target={`#portfolioModal${props.id}`}
      >
        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
          <div className="portfolio-item-caption-content text-center text-white">
            <i className="fa fa-plus fa-3x"></i>
          </div>
        </div>
        <img
          className="img-fluid"
          src={`./assets/${props.image_name}`}
          alt=""
        />
      </div>
      <ProjectModal {...props}/>
    </div>
  );
};
