"use client";
import React, { useState, useEffect } from "react";
import "../CentreGallery/CentreGallery.css";
import { AiFillStar, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import ImageSlider from "./ImageSlider";

const CentreCard = ({centre}) => {
  const [isImageClicked, setIsImageClicked] = useState(false);

  const handleClick = () => {
    setIsImageClicked(!isImageClicked);
  };
  return(
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
        <p style={{ fontSize: 20, fontFamily: "700" }}>{centre.centreName
}</p>
        <p style={{ color: "gray" }}>Lagos1 Nigeria</p>
        <p style={{ color: "gray" }}> {centre.capacity}</p>
        <p style={{ color: "gray" }}>{centre.price}/hr</p>
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
