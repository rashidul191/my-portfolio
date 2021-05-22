import React from "react";
import { Card, CardDeck } from "react-bootstrap";
import webDevelopment from "../../../../Images/Icons/WebDevolepment.png";
import videoEdit from "../../../../Images/Icons/Video Editng.png";
import photoShop from "../../../../Images/Icons/Photoshop.png";
import productReview from "../../../../Images/Icons/Product Review.png";
import "./ServiceDetails.css";

const ServiceDetails = () => {
  return (
    <section className="text-center">
      <div className=" servicer-header mt-4 py-5">
        <h3> My Service</h3>
      </div>
      <div className="container py-4 ">
        <div className="row service-img-size">
          <div className="col-lg-3 col-md-6">
            <img className="img-fluid img-thumbnail" src={webDevelopment} alt="" />
            <h5 className="mt-3">Web Development</h5>
          </div>
          <div className="col-lg-3 col-md-6">
            <img className="img-fluid img-thumbnail" src={videoEdit} alt="" />
            <h5 className="mt-3">Video Editing</h5>
          </div>
          <div className="col-lg-3 col-md-6">
            <img className="img-fluid img-thumbnail" src={photoShop} alt="" />
            <h5 className="mt-3">PhotoShop</h5>
          </div>
          <div className="col-lg-3 col-md-6">
            <img className="img-fluid img-thumbnail" src={productReview} alt="" />
            <h5 className="mt-3">Product Review</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
