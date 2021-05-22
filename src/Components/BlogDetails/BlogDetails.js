import React from "react";
import "./BlogDetails.css";

const BlogDetails = () => {
  return (
    <section>
      <div className="blog-header text-center mt-4 py-5">
        <h3>My Blogs</h3>
      </div>
      <div className="container py-5">      
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
    </section>
  );
};

export default BlogDetails;
