import React from "react";

export const Contact = () => {
  return (
    <section
      className="bg-light"
      id="contact"
      style={{ padding: "8rem", lineHeight: "1.5rem" }}
    >
      <div className="container d-flex flex-column align-items-center">
        <h2 className="text-secondary mb-4">
          Interested in collaborating or just wanna say hi?
        </h2>
        <p className="text-secondary heavy-text mb-4">
          I'm always interested in discussing possible opportunities. Get in
          touch!
        </p>
        <a
          href="mailto:kenneth.young90@gmail.com?Subject=Hey%20Kenneth!"
          target="_top"
          className="btn btn-outline-primary rounded btn-lg"
        >
          Start a conversation
        </a>
      </div>
    </section>
  );
};
