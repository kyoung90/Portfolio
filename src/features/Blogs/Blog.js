import React from "react";

export const Blog = props => {
  const handleClick = url => {
    var win = window.open(url, "_blank");
    win.focus();
  };

  const getDate = () => {
    let date = new Date(props.pubDate);
    return (
      date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear()
    );
  };
  return (
    // <div className="col-md-6 col-lg-4">
    //   <div className="portfolio-item mx-auto">
    //     <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
    //       <div className="portfolio-item-caption-content text-center text-white">
    <div
      className="card mb-5"
      style={{ minWidth: "16rem" }}
      onClick={() => handleClick(props.link)}
    >
      <img src={props.thumbnail} className="card-img-top" alt="..." />>
      <div className="card-body">
        <h5 className="card-title" style={{ color: "black" }}>
          {props.title}
        </h5>
        <p className="card-text">
          <small className="text-muted">Published on {getDate()}</small>
        </p>
      </div>
    </div>
    //       </div>
    //     </div>
    //     {/* <img className="img-fluid" src={props.thumbnail} alt="" /> */}
    //   </div>
    // </div>
  );
};
