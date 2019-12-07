import React from "react";

export const Testimonial = props => {
  return (
    <div className="testimonial-block">
      <img className="avatar" src={props.image} />
      <br />
      <br />
     
      <div className="container">
        <div class="row d-flex justify-content-center">
          <div class="col-6">
            <h5 className="quote" style={{ fontWeight:"normal" }}>{props.text}</h5>
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
