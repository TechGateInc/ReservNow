"use client";
import React, { useState, useEffect } from "react";
import "../CentreGallery/CentreGallery.css";
import {
  AiFillStar,
  AiOutlineHeart,
  AiFillHeart,
  AiFillCreditCard,
} from "react-icons/ai";
import ImageSlider from "./ImageSlider";
import { BsPeopleFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";

const CentreCard = ({ centre }) => {
  const [isImageClicked, setIsImageClicked] = useState(false);

  const handleClick = () => {
    setIsImageClicked(!isImageClicked);
  };
  return (
    <div className="galleryCardV1">
      <div className="centreImageholder">
        <div className="iconWrapper" onClick={handleClick}>
          {!isImageClicked ? (
            <AiOutlineHeart className="likeIcon1" />
          ) : (
            <AiFillHeart className="likeIcon2" />
          )}
        </div>
        <ImageSlider />
      </div>
      <div className="centreDesc">
        <div>
          <p style={{ fontSize: 20, fontFamily: "700" }}>{centre.centreName}</p>
          <div className="centreDesc-content" style={{marginTop:5}}>
            <MdLocationOn />
            <p style={{ color: "gray", marginLeft:10 }}>
              {centre.centreCity}, {centre.centreState}
            </p>
          </div>
          <div className="centreDesc-content">
            <BsPeopleFill /> 
            <p style={{ color: "gray", marginLeft:10 }}>{centre.capacity}</p>
          </div>
          <div className="centreDesc-content">
            <AiFillCreditCard />{" "}
            <p style={{ color: "gray", marginLeft:10 }}>₦{centre.price}/hr</p>
          </div>
        </div>
        <div className="ratingSection">
          <AiFillStar />
          4.7
        </div>
      </div>
    </div>
  );
};

export default CentreCard;
