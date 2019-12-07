import React, { useState } from "react";
import ScrollspyNav from "react-scrollspy-nav";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar1 = () => {
  const [shrinkNav, setShrinkNav] = useState("");
  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (currPos.y < -80) {
        setShrinkNav("navbar-shrink");
      } else {
        setShrinkNav("");
      }
    },
    [],
    false,
    false,
    300
  );

  return (
    <nav
      className={
        "navbar navbar-expand-lg bg-secondary text-uppercase fixed-top " +
        shrinkNav
      }
      id="mainNav"
    >
      <div className="container">
        <a className="navbar-brand" href="#page-top">
          Kenneth Young
        </a>
        <button
          className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu <FontAwesomeIcon icon={faBars} />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <div className="ml-auto">
            <ScrollspyNav
              scrollTargetIds={["about", "portfolio", "blog", "testimonial"]}
              activeNavClass="active"
            >
              <ul className="navbar-nav">
                <li className="nav-item mx-0 mx-lg-1">
                  <a
                    className="nav-link py-3 px-0 px-lg-3 rounded"
                    href="#about"
                  >
                    About
                  </a>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <a
                    className="nav-link py-3 px-0 px-lg-3 rounded"
                    href="#portfolio"
                  >
                    Portfolio
                  </a>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <a
                    className="nav-link py-3 px-0 px-lg-3 rounded"
                    href="#blog"
                  >
                    Blog
                  </a>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <a
                    className="nav-link py-3 px-0 px-lg-3 rounded"
                    href="#testimonial"
                  >
                    Testimonials
                  </a>
                </li>
              </ul>
            </ScrollspyNav>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar1;
