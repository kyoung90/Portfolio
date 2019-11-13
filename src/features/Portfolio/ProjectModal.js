import React from "react";

export const ProjectModal = props => {
  return (
    <div
      className="portfolio-modal modal fade"
      id={`portfolioModal${props.id}`}
      tabIndex="-1"
      role="dialog"
      aria-labelledby={`portfolioModal${props.id}Label`}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl" role="document">
        <div className="modal-content">
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">
              <i className="fa fa-times"></i>
            </span>
          </button>
          <div className="modal-body text-center">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                    {props.name}
                  </h2>
                  <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon">
                      <i className="fa fa-star"></i>
                    </div>
                    <div className="divider-custom-line"></div>
                  </div>
                  <img
                    className="img-fluid rounded mb-5"
                    src={`./assets/${props.image_name}`}
                    alt=""
                  />
                  <p className="mb-5">{props.description}</p>
                  <div className="divider-custom">
                    <div className="divider-custom-icon">
                      <a className="bg-custom-dark" href={props.github_link}>
                        <i className="fa fa-github fa-2x" />
                      </a>
                    </div>
                  </div>
                  <button className="btn btn-primary" href="#" data-dismiss="modal">
                    <i className="fa fa-times fa-fw"></i>
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
