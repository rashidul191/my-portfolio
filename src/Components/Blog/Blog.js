import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <section id="blog-section">
      <div className="container py-5">
        <div className="blog-body">
          <div className="text-center">
            <h6>My Blogs</h6>
            <h3 className="text-success">Latest News</h3>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div class="card">
                <a target="_blank" href="https://rashidul-191cse-gub.medium.com/react-js-some-concepts-method-discretion-adc98b3433e5">
                  <img class="card-img-top" src="https://miro.medium.com/max/804/1*CHyFATmXWkMOSEOVhzD5Cw.jpeg" alt="blog image" />{" "}
                </a>
                <div class="card-body">
                  <h5 class="card-title">React.js some concepts method discretion.</h5>
                  <p class="card-text"></p>
                </div>
                <div class="card-footer">
                  <div className="text-center">
                    <a target="_blank" href="https://rashidul-191cse-gub.medium.com/react-js-some-concepts-method-discretion-adc98b3433e5">
                      <button className="site-link-btn mr-2">Read Blog</button>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6"></div>
            <div className="col-lg-4 col-md-6"></div>
          </div>
        </div>
        <div className="text-center">
          <Link to="/blog">
            {" "}
            <button className="learn-more-btn">Learn More</button>{" "}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
