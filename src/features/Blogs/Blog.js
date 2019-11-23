import React from "react";

export const Blog = props => {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="portfolio-item mx-auto">
        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
          <div className="portfolio-item-caption-content text-center text-white">
            <i className="fa fa-plus fa-3x"></i>
          </div>
        </div>
        <img className="img-fluid" src={props.thumbnail} alt="" />
      </div>
    </div>
  );
};
