import React from 'react';
import './Footer.css';
import { useForm } from "react-hook-form";
import facebookIcon from '../../../Images/Icons/facebook-icon.png';
import twitterIcon from '../../../Images/Icons/twitter-icon.png';
import linkedinIcon from '../../../Images/Icons/linkedin-icon.png';
import githubIcon from '../../../Images/Icons/github-icon.png';

const Footer = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <section >

            <div className="footer-bot mt-5">
                <div className="container ">
                    <div className="test-center">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="row">
                                    <div className="col-md-4 text-white">
                                        <h6>Follow Me</h6>
                                    </div>
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
                            
                            <div className="col-md-8">
                                <form className="footer-form" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="row">
                                        <div class="form-group col-md-8 mb-2">
                                            <input type="email" class="form-control" name="email" ref={register({ required: true })} placeholder="email@gmail.com" />
                                            {errors.email && <span className="error-text">This field is required</span>}
                                        </div>
                                        <div className="  col-md-4">
                                            <button type="submit" class="btn btn-danger-btn mb-2">SUBSCRIBE ME</button>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>



                        <div className="">
                            <p className=" copy-right"> <small className="copy-text-color"> Copyright © {(new Date()).getFullYear()} rashidul </small> </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;