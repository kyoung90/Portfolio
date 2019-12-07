import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

export const Stack = props => {
  const [activeClass, setActiveClass] = useState("technology");

  const onMouseEnterHandler = () => {
    setActiveClass("technology-active");
    props.setHover(true)
  };

  const onMouseLeaveHandler = () => {
    setActiveClass("technology");
    props.setHover(false)
  };

  return (
    <div
      className={`d-flex pb-5 align-items-center ${activeClass} ${props.hover && activeClass == "technology" ? "technology-blur" : ""}`}
      style={{ maxHeight: "60px", maxWidth: "60px" }}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      <figure>
        <img
          className="img-fluid"
          src={`./assets/logos/${props.tech}.svg`}
          alt=""
        />
        <figcaption className="technology-name text-capitalize">
          {props.tech}
        </figcaption>
      </figure>
    </div>
  );
};
