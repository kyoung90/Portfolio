import React, { useEffect, useState } from "react";
import { Blog } from "./Blog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

export const BlogsContainer = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@kenneth.young90"
    )
      .then(resp => resp.json())
      .then(blogData => {
        console.log(blogData["items"]);
        setBlogs(
          blogData["items"].filter(blog => blog.thumbnail.endsWith(".png"))
        );
      });
  }, []);

  const generateBlogs = () => {
    return blogs.map(blog => <Blog key={blog.guid} {...blog} />);
  };

  return (
    <section className="page-section bg-primary text-white mb-0" id="blog">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-white">
          Blog
        </h2>

        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <FontAwesomeIcon icon={faPen} />
          </div>
          <div className="divider-custom-line"></div>
        </div>

        <div className="card-deck">{generateBlogs()}</div>
      </div>
    </section>
  );
};
