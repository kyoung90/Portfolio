import React, { useState } from "react";
import ScrollspyNav from "react-scrollspy-nav";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
// import {scrollToTop} from "../common/layout/scrollToTop"

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

  const scrollToTop = () => {
    try {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    } catch (error) {
      window.scrollTo(0, 0);
    }
  }

  return (
    <nav
      className={
        "navbar navbar-expand-lg bg-secondary text-uppercase fixed-top " +
        shrinkNav
      }
      id="mainNav"
    >
      <div className="container">
        <a className="navbar-brand" onClick={() => scrollToTop()}>
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
              scrollTargetIds={["about", "portfolio", "blog", "testimonial", "contact"]}
              activeNavClass="active"
            >
              <ul className="navbar-nav">
                <li className="nav-item mx-0 mx-lg-1">
                  <a
                    className="nav-link py-3 px-0 px-lg-3 rounded"
                    href="#about"
                  >
                    About Me
                  </a>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <a
                    className="nav-link py-3 px-0 px-lg-3 rounded"
                    href="#portfolio"
                  >
                    Projects
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
                <li className="nav-item mx-0 mx-lg-1">
                  <a
                    className="nav-link py-3 px-0 px-lg-3 rounded"
                    href="#contact"
                  >
                    Contact
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
