import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

export const Footer = () => {
  return (
    <div>
      <footer className="footer text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <a href="/assets/kenneth_resume.pdf" target="_blank">
                <h4 className="text-uppercase mb-4">Resume</h4>
              </a>
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Follow Me At:</h4>
              <a
                href="https://medium.com/@kenneth.young90"
                target="_blank"
                className="btn btn-outline-light btn-social mx-1"
              >
                <FontAwesomeIcon
                  style={{ fontSize: "1.4em" }}
                  icon={["fab", "medium"]}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/kenneth-young-castro-8a558b138/"
                target="_blank"
                className="btn btn-outline-light btn-social mx-1"
              >
                <FontAwesomeIcon
                  style={{ fontSize: "1.4em" }}
                  icon={["fab", "linkedin"]}
                />
              </a>
              <a
                href="https://twitter.com/KennethYoungCas"
                target="_blank"
                className="btn btn-outline-light btn-social mx-1"
              >
                <FontAwesomeIcon
                  style={{ fontSize: "1.4em" }}
                  icon={["fab", "twitter"]}
                />
              </a>
              <a
                href="https://github.com/kyoung90"
                target="_blank"
                className="btn btn-outline-light btn-social mx-1"
              >
                <FontAwesomeIcon
                  style={{ fontSize: "1.4em" }}
                  icon={["fab", "github"]}
                />
              </a>
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0">
              <a
                href="mailto:kenneth.young90@gmail.com?Subject=Hey%20Kenneth!"
                target="_top"
              >
                <h4 className="text-uppercase mb-4">Contact me</h4>
              </a>
            </div>
          </div>
        </div>
      </footer>

      <section className="copyright py-4 text-center text-white">
        <div className="container">
          <small>Copyright &copy; Kenneth Young Castro 2019</small>
        </div>
      </section>
    </div>
  );
};
