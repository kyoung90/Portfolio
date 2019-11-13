import React from "react";
import { projects } from "./projects";

export const ProjectModal = props => {
  return (
    <div
      class="portfolio-modal modal fade"
      id={`portfolioModal${props.id}`}
      tabindex="-1"
      role="dialog"
      aria-labelledby={`portfolioModal${props.id}Label`}
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">
              <i class="fa fa-times"></i>
            </span>
          </button>
          <div class="modal-body text-center">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-8">
                  <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">
                    {props.name}
                  </h2>
                  <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon">
                      <i class="fa fa-star"></i>
                    </div>
                    <div class="divider-custom-line"></div>
                  </div>
                  <img
                    class="img-fluid rounded mb-5"
                    src={`./assets/${props.image_name}`}
                    alt=""
                  />
                  <p class="mb-5">{props.description}</p>
                  <div class="divider-custom">
                    <div class="divider-custom-icon">
                      <a className="bg-custom-dark" href={props.github_link}>
                        <i class="fa fa-github fa-2x" />
                      </a>
                    </div>
                  </div>
                  <button class="btn btn-primary" href="#" data-dismiss="modal">
                    <i class="fa fa-times fa-fw"></i>
                    Close Window
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
