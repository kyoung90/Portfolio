import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlasses } from "@fortawesome/free-solid-svg-icons";

export const About = () => {
  return (
    <section className="page-section bg-light" id="about">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          About Me
        </h2>

        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
          • • •
            {/* <FontAwesomeIcon icon={faGlasses} /> */}
          </div>
          <div className="divider-custom-line"></div>
        </div>

        <div className="container pt-2">
          <div className="row d-flex justify-content-around">
            <div className="col-md-6 col-sm-8 d-flex flex-column align-items-center align-self-center">
              <h3 className="text-secondary">
                Get My Resume!
              </h3>
              <br/>
              <a className="anchor-resume" href="/assets/kenneth_resume.pdf" target="_blank">
                <img
                  style={{ height: "250px", width: "250px" }}
                  src="/assets/resume-icon.svg"
                />
              </a>
            </div>
            <div className="col-md-6 col-sm-8">
              <h3 className="text-secondary">
                Hi, I'm Kenneth. Nice to meet you.
              </h3>
              <br />
              <p className="text-secondary heavy-text">
                I began my coding journey when I was a senior in High School. I
                started as a tutor in university and have teached code to High
                School teachers and students both remotely and in the classroom.{" "}
              </p>
              <br />
              <p className="text-secondary heavy-text">
                I enjoy contributing to open source organizations and writing
                tech blogs on Medium.{" "}
              </p>
              <br />
              <p className="text-secondary heavy-text">
                Take a look at what I'm working on recently on my{" "}
                <a className="anchor-purple" href="https://github.com/kyoung90">
                  github
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
