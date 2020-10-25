import React from 'react';
import './Footer.css';
import RashidulImg from '../../../Images/rashiudl1.png';
import facebookIcon from '../../../Images/Icons/facebook-icon.png';
import twitterIcon from '../../../Images/Icons/twitter-icon.png';
import linkedinIcon from '../../../Images/Icons/linkedin-icon.png';
import githubIcon from '../../../Images/Icons/github-icon.png';

const Footer = () => {
    return (
        <section >
            <div className="footer-area">
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-md-4">

                        </div>
                        <div className="col-md-4">

                        </div>
                        <div className="col-md-4">
                            <form>
                                <div class="form-group">
                                    
                                    <input type="email" class="form-control"  placeholder="name@example.com" />
                                </div>
                                <div>
                                    <input type="text" class="form-control" placeholder="Enter Your Name"/>
                                </div>

                                <div class="form-group">
                                    <label for="exampleFormControlTextarea1">Example textarea</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>

                                <div className="form-group">
                                    <button type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>




                    <div className="mt-5 pt-5 ">
                        <div className="row ">
                            <div className="col-md-8">
                                <p className=" copy-right"> Copyright {(new Date()).getFullYear()} Rashidul </p>
                            </div>

                            <div className="col-md-4">
                                <div className="row ">
                                    <div className="col-md-2">
                                        <a href="https://www.facebook.com/rashidul191r"> <img className="social-icons" src={facebookIcon} alt="" /></a>
                                    </div>
                                    <div className="col-md-2">
                                        <a href="https://twitter.com/Rashidul191"><img className="social-icons" src={twitterIcon} alt="" /></a>
                                    </div>
                                    <div className="col-md-2">
                                        <a href="https://www.linkedin.com/in/rashidul191/"><img className="social-icons" src={linkedinIcon} alt="" /></a>
                                    </div>
                                    <div className="col-md-2">
                                        <a href="https://github.com/rashidul191/"><img className="social-icons" src={githubIcon} alt="" /></a>
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

export default Footer;