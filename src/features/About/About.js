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
            • • •{/* <FontAwesomeIcon icon={faGlasses} /> */}
          </div>
          <div className="divider-custom-line"></div>
        </div>

        <div className="container pt-2">
          <div className="row d-flex justify-content-around">
            <div className="col-md-6 col-sm-8 mb-5 d-flex flex-column align-items-center align-self-center">
              <h3 className="text-secondary">🠛Resume🠛</h3>
              <br/>
              <a
                className="anchor-resume"
                href="/assets/kenneth_resume.pdf"
                target="_blank"
              >
                <img
                  style={{ height: "250px", width: "250px" }}
                  src="/assets/resume-icon.svg"
                />
              </a>
            </div>
            <div className="col-md-6 col-sm-8 mb-5">
              <h3 className="text-secondary">
                Hi, I'm Kenneth. Nice to meet you.
              </h3>
              <br />
              <p className="text-secondary heavy-text">
                I create websites and teach others how to code. I've taught
                students of a wide variety of ages in school and university.
                I've even mentored high school students in their science fair
                project that went on to win special awards in the Intel ISEF
                2019.
              </p>
              <br />
              <p className="text-secondary heavy-text">
                I've recently picked up writing tech blogs as well! My goal with
                it is to explain abstract concepts more visually with GIFs and
                images. Take a{" "}
                <a className="anchor-purple" href="https://medium.com/@kenneth.young90">
                  look
                </a>
                !
              </p>
              <br />
              <p className="text-secondary heavy-text">
                I'm also working on some cool web applications, including
                open-source ones. Check them out at my{" "}
                <a className="anchor-purple" href="https://github.com/kyoung90">
                  GitHub
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
