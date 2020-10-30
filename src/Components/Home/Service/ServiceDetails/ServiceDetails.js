import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import webDevelopment from '../../../../Images/Icons/WebDevolepment.png';
import videoEdit from '../../../../Images/Icons/Video Editng.png';
import photoShop from '../../../../Images/Icons/Photoshop.png';
import productReview from '../../../../Images/Icons/Product Review.png';
import './ServiceDetails.css';

const ServiceDetails = () => {
    return (
        <section>
             <div className=" servicer-header mt-5 pt-4">  
                    <h3> My Service</h3>
                </div>
             <div className="container ">
               
                <div className="mt-5">
                    <CardDeck>
                        <Card >                            
                            <Card.Body className="text-center service-card">
                                <img className="service-img-size" src={webDevelopment} alt=""/>
                                <Card.Title className="mt-3">Web Development</Card.Title>
                            </Card.Body>
                        </Card>

                        <Card>                           
                            <Card.Body className="text-center service-card">
                                <img className="service-img-size" src={videoEdit} alt=""/>
                                <Card.Title className="mt-3">Video Editing</Card.Title>
                            </Card.Body>
                        </Card>

                        <Card>                            
                            <Card.Body className="text-center service-card">
                                <img className="service-img-size" src={photoShop} alt=""/>
                                <Card.Title className="mt-3">PhotoShop</Card.Title>
                            </Card.Body>
                        </Card>

                        <Card>                           
                            <Card.Body className="text-center service-card">
                                <img  className="service-img-size" src={productReview} alt=""/>
                                <Card.Title className="mt-3">Product Review</Card.Title>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </div>
            </div>
        </section>
    );
};

export default ServiceDetails;