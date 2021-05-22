import React from "react";
import "./Footer.css";
import { useForm } from "react-hook-form";
import facebookIcon from "../../../Images/Icons/facebook-icon.png";
import twitterIcon from "../../../Images/Icons/twitter-icon.png";
import linkedinIcon from "../../../Images/Icons/linkedin-icon.png";
import githubIcon from "../../../Images/Icons/github-icon.png";

const Footer = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    alert("SUBSCRIBE DONE");
  };
  return (
    <section className="">
      <div className="footer-bot ">
        <div className="container p-3">
          <div className="test-center">
            <div className="row">
              <div className="col-md-4">
                <div>
                  <h6 className="text-white">Follow Me</h6>
                  <div className="row">
                    <div className="">
                      <a target="_blank" href="https://www.linkedin.com/in/rashidul191/">
                        <img className="social-icons" src={linkedinIcon} alt="" />
                      </a>
                    </div>
                    <div className="">
                      <a target="_blank" href="https://github.com/rashidul191/">
                        <img className="social-icons" src={githubIcon} alt="" />
                      </a>
                    </div>
                    <div className="">
                      <a target="_blank" href="https://www.facebook.com/rashidul191r">                       
                        <img className="social-icons" src={facebookIcon} alt="" />
                      </a>
                    </div>
                    <div className="">
                      <a target="_blank" href="https://twitter.com/Rashidul191">
                        <img className="social-icons" src={twitterIcon} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-8 ">
                <form className="footer-form" onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <div class="form-group col-md-8 col-sm-7 mb-2">
                      <input type="email" class="form-control" name="email" ref={register({ required: true })} placeholder="email@gmail.com" />
                      {errors.email && <span className="error-text">This field is required</span>}
                    </div>
                    <div className="col-md-4 col-sm-5">
                      <input class="btn btn-danger-btn mb-2" type="submit" value="SUBSCRIBE ME" />
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="">
              <p className="text-white text-center">
                <small className=""> copyright © {new Date().getFullYear()} rashidul islam</small>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
