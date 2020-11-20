import React from 'react';
import './Header.css';
import RashidulImg from '../../../Images/rashiudl1.png';
import facebookIcon from '../../../Images/Icons/facebook-icon.png';
import twitterIcon from '../../../Images/Icons/twitter-icon.png';
import linkedinIcon from '../../../Images/Icons/linkedin-icon.png';
import githubIcon from '../../../Images/Icons/github-icon.png';


const Header = () => {
    // document.title ="home";
    return (
        <section>
            <div className="header-style">
                <div className="container">
                    <div className="row  header-part">
                        <div className="col-md-6 ">
                            <img className="img-size1 img-responsive" src={RashidulImg} alt="" />
                        </div>
                        <div className="col-md-6">
                            <div className="">
                                <h4>Hello, I'm</h4>
                                <h1>Md Rashidul Islam</h1>
                                <h4 className="text-animation" > Web Developer </h4>
                                <div className="row pt-3">
                                    <div className="col-md-5">
                                        <button className="header-btn-hire"> HIRE ME</button>
                                    </div>
                                    <div className="col-md-6">
                                        <a href="https://drive.google.com/u/0/uc?id=163zEw4V0DUeRFnh3gcs44hrB3nkc_FR9&export=download"> <button className="header-btn-cv">  DOWNLOAD CV </button> </a>
                                    </div>
                                </div>
                                <div className="row pt-5">
                                   
                                    <div className="col-md-2">
                                        <a href="https://www.linkedin.com/in/rashidul191/"><img className="social-icons" src={linkedinIcon} alt="" /></a>
                                    </div>
                                    <div className="col-md-2">
                                        <a href="https://github.com/rashidul191/"><img className="social-icons" src={githubIcon} alt="" /></a>
                                    </div>
                                    <div className="col-md-2">
                                        <a href="https://www.facebook.com/rashidul191r"> <img className="social-icons" src={facebookIcon} alt="" /></a>
                                    </div>
                                    <div className="col-md-2">
                                        <a href="https://twitter.com/Rashidul191"><img className="social-icons" src={twitterIcon} alt="" /></a>
                                    </div>
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