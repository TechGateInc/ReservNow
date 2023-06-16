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
        const response = await fetch(`${config.baseURL}/eventcentre/`); // Replace with your API endpoint
        const jsonData = await response.json();
        getCentres(jsonData);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchCentres();
  }, []);

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
