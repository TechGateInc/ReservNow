"use client";
import React, { useState, useEffect } from "react";
import "../CentreGallery/CentreGallery.css";
import config from "@/config";
import CentreCard from "./CentreCard";
import { Skeleton } from "../Skeleton/Skeleton";
import { useGetAllCentresQuery } from "../../features/eventCentreHome/EventCentreSlice"

const CentreGallery = () => {
  const [centres, getCentres] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCentres = async () => {
      try {
        const response = await fetch(`${config.baseURL}/eventcentre/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const data = await response.json();
          getCentres(data);
          setIsLoading(false);
        } else {
          const errorData = await response.json();
          throw new Error(
            errorData.message || "Error occurred while fetching centres"
          );
        }
      } catch (error) {
        console.log("Error:", error.message);
      }
    };

    fetchCentres();
  }, []);

  const [isImageClicked, setIsImageClicked] = useState(false);

  const handleClick = () => {
    setIsImageClicked(!isImageClicked);
  };

  const { data } = useGetAllCentresQuery();
  console.log(data)

  return (
    <div className="galleryHolder">
      <div className="galleryCardHolder">
        {isLoading ? (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              marginTop: 35,
            }}
          >
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
        ) : (
          data &&
          data.map((centre, index) => (
            <CentreCard key={index} centre={centre} />
          ))
        )}
      </div>
    </div>
  );
};

export default CentreGallery;
