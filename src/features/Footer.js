import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedium, faFacebook, faTwitter, faGithub} from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
  return (
    <div>
      <footer class="footer text-center">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 mb-5 mb-lg-0">
              <h4 class="text-uppercase mb-4">Location</h4>
              <p class="lead mb-0">
                2215 John Daniel Drive
                <br />
                >Clark, MO 65243
              </p>
            </div>

            <div class="col-lg-4 mb-5 mb-lg-0">
              <h4 class="text-uppercase mb-4">Around the Web</h4>
              <a class="btn btn-outline-light btn-social mx-1" href="#">
              <i class="fab fa-medium"></i>
              </a>
              <a class="btn btn-outline-light btn-social mx-1" href="#">
              <i class="fab fa-linked-in"></i>
              </a>
              <a class="btn btn-outline-light btn-social mx-1" href="#">
              <i class="fab fa-twitter"></i>
              </a>
              <a class="btn btn-outline-light btn-social mx-1" href="#">
              <i class="fab fa-github"></i>
              </a>
            </div>

            <div class="col-lg-4">
              <h4 class="text-uppercase mb-4">About Freelancer</h4>
              <p class="lead mb-0">
                Freelance is a free to use, MIT licensed Bootstrap theme created
                by
                <a href="http://startbootstrap.com">Start Bootstrap</a>.
              </p>
            </div>
          </div>
        </div>
      </footer>

      <section class="copyright py-4 text-center text-white">
        <div class="container">
          <small>Copyright &copy; Your Website 2019</small>
        </div>
      </section>
    </div>
  );
};
