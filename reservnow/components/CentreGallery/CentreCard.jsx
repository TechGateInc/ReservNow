"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

import "./CentreGallery.css";
import {
  AiFillStar,
  AiFillCreditCard,
  AiOutlineCreditCard
} from "react-icons/ai";
import ImageSlider from "./ImageSlider";
import { BsPeopleFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5"
import { BsPeople } from "react-icons/bs"


const CentreCard = ({ centre }) => {

  return (
    <Link href={`/details?id=${centre._id}`} style={{ textDecoration: "none", color: "black" }}>

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
              <p style={{ color: "gray", marginLeft: 10 }}>₦{centre.price}/hr</p>
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
