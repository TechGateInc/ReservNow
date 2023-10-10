"use client";

import React from "react";
import Link from "next/link";
import { AiFillStar, AiOutlineCreditCard } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";

import "../CentreGallery/CentreGallery.css";
import ImageSlider from "./ImageSlider";

const CentreCard = ({ centre }) => {
  return (
    <Link
      href={`/details?id=${centre._id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div className="galleryCardV1">
        <div className="centreImageholder">
          <div className="imgSliderHold">
            <ImageSlider />
          </div>
        </div>
        <div className="centreDesc">
          <div>
            <p style={{ fontSize: 17, fontFamily: "700" }}>{centre.name}</p>
            <div
              className="centreDesc-content"
              style={{ marginTop: 5, fontSize: 13 }}
            >
              <IoLocationOutline />
              <p style={{ color: "gray", marginLeft: 10 }}>
                {centre.city}, {centre.state}
              </p>
            </div>
            <div className="centreDesc-content" style={{ fontSize: 13 }}>
              <BsPeople />
              <p style={{ color: "gray", marginLeft: 10 }}>{centre.capacity}</p>
            </div>
            <div className="centreDesc-content" style={{ fontSize: 13 }}>
              <AiOutlineCreditCard />{" "}
              <p style={{ color: "gray", marginLeft: 10 }}>
                ₦{centre.price}/hr
              </p>
            </div>
          </div>
          <div className="ratingSection">
            <AiFillStar />
            {centre.rating}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CentreCard;
