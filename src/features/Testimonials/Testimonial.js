import React from "react";

export const Testimonial = props => {
  return (
    <div className="testimonial-block">
      <img className="avatar" src={props.image} />

      <p className="quote">{props.text}</p>
      <h5>{props.name}</h5>
      <h6>{props.title}</h6>
      <br />
    </div>
  );
};
