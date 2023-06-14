"use client";
import React, { useState, useEffect } from "react";
import "../CentreGallery/CentreGallery.css";
import config from "@/config";
import CentreCard from "./CentreCard";

const CentreGallery = () => {
  const [centres, getCentres] = useState(null);

  useEffect(() => {
    const fetchCentres = async () => {
      try {
        const response = await fetch(`${config.baseURL}/eventcentre/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          // body: JSON.stringify({
          //   duplicatedButton: duplicatedButton,
          //   duplicatedButton3: duplicatedButton3,
          // }),
        });
        const data = await response.json();
        if (response.ok) {
          getCentres(data);
        } else {
          console.log("Error:", data.message);
        }
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchCentres();
  }, []);

  console.log(centres);

  const [isImageClicked, setIsImageClicked] = useState(false);

  const handleClick = () => {
    setIsImageClicked(!isImageClicked);
  };

  return (
    <div className="galleryHolder">
      <div className="galleryCardHolder">
        {centres &&
          centres.map((centre, index) => (
            <CentreCard key={index} centre={centre} />
          ))}
      </div>
    </div>
  );
};

export default CentreGallery;
