import React from 'react';
import './Service.css';
import { Card, CardDeck } from 'react-bootstrap';
import webDevelopment from '../../../Images/Icons/WebDevolepment.png';
import videoEdit from '../../../Images/Icons/Video Editng.png';
import photoShop from '../../../Images/Icons/Photoshop.png';
import productReview from '../../../Images/Icons/Product Review.png';
import { Link } from 'react-router-dom';


const Service = () => {
    return (
        <section className="service-area">
            <div className="container ">
                <div className="text-center pt-5">
                    <h6>Service</h6>
                    <h3 className="text-success">What I Do</h3>
                </div>

                <div className="service-body pt-3">
                    <div className="row text-center">
                        <div className="col-xm-6  col-md-3">
                        <img className=" img-fluid img-thumbnail" src={webDevelopment} alt="" />
                                <h5 className="mt-3">Web Development</h5>
                        </div>
                        <div className="col-xm-6  col-md-3">
                        <img className="img-thumbnail img-fluid" src={videoEdit} alt="" />
                                <h5 className="mt-3">Video Editing</h5>
                        </div>
                        <div className="col-xm-6  col-md-3">
                        <img className="img-thumbnail img-fluid" src={photoShop} alt="" />
                                <h5 className="mt-3">PhotoShop</h5>
                        </div>
                        <div className="col-xm-6  col-md-3">
                        <img className="img-fluid img-thumbnail" src={productReview} alt="" />
                                <h5 className="mt-3">Product Review</h5>
                        </div>
                    </div>
                </div>                
                <div className="text-center pt-5">
                    <Link to="/blog"> <button className="learn-more-btn" >Learn More</button> </Link>
                </div>
            </div>
        </section>
    );
};

export default Service;