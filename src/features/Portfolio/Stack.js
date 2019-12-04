import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

export const Stack = props => {
  return (
    <div
      className="d-flex mb-5 align-items-center technology"
      style={{ maxHeight: "60px", maxWidth: "60px" }}
    >
      <figure>
        <img
          className="img-fluid"
          src={`./assets/logos/${props.tech}.svg`}
          alt=""
        />
        <figcaption className="technology-name text-capitalize">{props.tech}</figcaption>
      </figure>
    </div>
  );
};
