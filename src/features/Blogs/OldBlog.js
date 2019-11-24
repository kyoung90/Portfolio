import React from "react";

export const Blog = props => {
  return (
    // <div className="col-md-6 col-lg-4">
    //   <div className="portfolio-item mx-auto">
    //     <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
    //       <div className="portfolio-item-caption-content text-center text-white">
    <div className="card">
      <img src={props.thumbnail} className="card-img-top" alt="..." />>
      <div className="card-body">
        <a href={props.link} className="btn btn-primary btn-block">
          Visit {props.title}
        </a>
      </div>
    </div>
    //       </div>
    //     </div>
    //     {/* <img className="img-fluid" src={props.thumbnail} alt="" /> */}
    //   </div>
    // </div>
  );
};
