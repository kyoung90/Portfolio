import React, { useEffect, useState } from "react";
import { Blog } from "./Blog";

export const BlogsContainer = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@kenneth.young90"
    )
      .then(resp => resp.json())
      .then(blogData => {
        setBlogs(
          blogData["items"].filter(blog => blog.thumbnail.endsWith(".png"))
        );
      });
  }, []);

  const generateBlogs = () => {
    return blogs.map(blog => <Blog key={blog.guid} {...blog} />);
  };

  return (
    <section class="page-section bg-primary text-white mb-0" id="blog">
      <div class="container">
        <h2 class="page-section-heading text-center text-uppercase text-white">
          Blog
        </h2>

        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fa fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>

        <div className="row">{generateBlogs()}</div>
      </div>
    </section>
  );
};
