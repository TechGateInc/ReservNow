"use client";

import React from "react";
import { NextPage } from "next";

import "./AmenityPicker.css";
import { useGetAmenityQuery } from "@/src/api/features/amenity/amenitySlice";

interface AmenityPickerProps {
  activeAmenities: any;
  setActiveAmenities: any;
}

const AmenityPicker: NextPage<AmenityPickerProps> = ({
  activeAmenities,
  setActiveAmenities,
}) => {
  const { data: amenity, isLoading, isError } = useGetAmenityQuery({});

  const amenityByCategory = {};

  // Check if amenity data is loading or if there is an error
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching amenity data</div>;
  }

  // Check if amenity data is available
  if (!amenity) {
    return <div>No amenity data available</div>;
  }

  amenity.forEach((item: any) => {
    const category = item.category.name;
    if (!amenityByCategory[category]) {
      amenityByCategory[category] = [];
    }
    amenityByCategory[category].push(item);
  });

  const AmenityCard = ({ amenityItem }) => {
    const isActive = activeAmenities.includes(amenityItem._id);

    const handleClick = () => {
      if (isActive) {
        setActiveAmenities((prevAmenities: any) =>
          prevAmenities.filter((a: any) => a !== amenityItem._id)
        );
      } else {
        setActiveAmenities((prevAmenities: any) => [
          ...prevAmenities,
          amenityItem._id,
        ]);
      }
    };

    return (
      <div
        className={`amenity-card ${isActive ? "amenityActive" : ""}`}
        onClick={handleClick}
      >
        {/* <img src={amenityItem.icon} width={50} alt="" /> */}
        <span className="amenity-type">{amenityItem.name}</span>
      </div>
    );
  };

  return (
    <div className="AmenityHolder">
      <p style={{ fontSize: "35px", marginBottom: 20 }}>
        Tell guests what your place has to offer
      </p>
      <p>You can add more amenities after you publish your listings</p>
      <div className="AmenityTypeHolder">
        {Object.entries(amenityByCategory).map(([category, amenities]) => (
          <div key={category}>
            <h2 style={{ marginBottom: 30 }}>{category}</h2>
            <div className="amenity-list">
              {(amenities as any[]).map((amenityItem: any, index: any) => (
                <AmenityCard key={index} amenityItem={amenityItem} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AmenityPicker;
