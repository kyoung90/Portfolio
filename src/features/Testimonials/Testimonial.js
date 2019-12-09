import React from "react";

export const Testimonial = props => {
  return (
    <div className="testimonial-block">
      <img className="testimonial-img" src={props.image} />
      <br />
      <br />
     
      <div className="container">
        <div class="row d-flex justify-content-center">
          <div class="col-lg-6 col-md-8 col-sm-12">
            <h5 className="quote" style={{ fontWeight:"normal" }}>{"“" + props.text + "”"}</h5>
            <br />
            <h4>{props.name}</h4>
            <h6 style={{ fontWeight:"normal" }}>{props.title}</h6>
          </div>
        </div>
      </div>
      
      <br />
    </div>
  );
};
