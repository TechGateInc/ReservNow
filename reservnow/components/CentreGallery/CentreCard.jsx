"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
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
    <div>
      <div className="iconWrapper" onClick={handleClick}>
        {!isImageClicked ? (
          <AiOutlineHeart className="likeIcon1" />
        ) : (
          <AiFillHeart className="likeIcon2" />
        )}
      </div>
      <Link href={`/details?id=${centre._id}`} style={{textDecoration: "none", color: "black"}}>
        <div className="galleryCardV1">
          <div className="centreImageholder">
            <ImageSlider />
          </div>
          <div className="centreDesc">
            <div>
              <p style={{ fontSize: 20, fontFamily: "700" }}>
                {centre.name}
              </p>
              <div className="centreDesc-content" style={{ marginTop: 5 }}>
                <MdLocationOn />
                <p style={{ color: "gray", marginLeft: 10 }}>
                  {centre.city}, {centre.state}
                </p>
              </div>
              <div className="centreDesc-content">
                <BsPeopleFill />
                <p style={{ color: "gray", marginLeft: 10 }}>
                  {centre.capacity}
                </p>
              </div>
              <div className="centreDesc-content">
                <AiFillCreditCard />{" "}
                <p style={{ color: "gray", marginLeft: 10 }}>
                  ₦{centre.price}/hr
                </p>
              </div>
            </div>
            <div className="ratingSection">
              <AiFillStar />
              4.7
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CentreCard;
