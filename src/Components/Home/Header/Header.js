import React from "react";
import "./Header.css";
import RashidulImg from "../../../Images/rashiudl1.png";
import facebookIcon from "../../../Images/Icons/facebook-icon.png";
import twitterIcon from "../../../Images/Icons/twitter-icon.png";
import linkedinIcon from "../../../Images/Icons/linkedin-icon.png";
import githubIcon from "../../../Images/Icons/github-icon.png";

const Header = () => {
  // document.title ="home";
  return (
    <section id="header-section">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <img className="img-size1 img-fluid d-none d-md-block pl-5" src={RashidulImg} alt="" />
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="">
              <h4>Hello, I'm</h4>
              <h1>Md Rashidul Islam</h1>
              <h4 className="text-animation"> Web Developer </h4>
              <div className="row pt-3">
                <div>
                  <a href="mailto:md.rashidul371@gmail.com">
                    <button className="header-btn-hire"> HIRE ME</button>
                  </a>
                </div>
                <div>
                  <a href="https://drive.google.com/u/0/uc?id=163zEw4V0DUeRFnh3gcs44hrB3nkc_FR9&export=download">
                    {" "}
                    <button className="header-btn-cv"> DOWNLOAD CV </button>{" "}
                  </a>
                </div>
              </div>
              <div className="row ">
                <div>
                  <a target="_blank" href="https://www.linkedin.com/in/rashidul191/">
                    <img className="social-icons img-fluid" src={linkedinIcon} alt="" />
                  </a>
                </div>
                <div>
                  <a target="_blank" href="https://github.com/rashidul191/">
                    <img className="social-icons img-fluid" src={githubIcon} alt="" />
                  </a>
                </div>
                <div>
                  <a target="_blank" href="https://www.facebook.com/rashidul191r">
                    <img className="social-icons img-fluid" src={facebookIcon} alt="" />
                  </a>
                </div>
                <div>
                  <a target="_blank" href="https://twitter.com/Rashidul191">
                    <img className="social-icons img-fluid" src={twitterIcon} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
