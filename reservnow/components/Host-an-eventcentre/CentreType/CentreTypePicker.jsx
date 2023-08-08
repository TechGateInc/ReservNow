"use client";
import "./CentreTypePicker.css";
import React, { useState } from "react";
import { useGetCentreTypeQuery } from "@/features/centreType/centreTypeSlice";

const CentreTypePicker = ({ activeType, setActiveType }) => {
  const { data: centreType } = useGetCentreTypeQuery();
  
  const handleTypeChange = (_id) => {
    setActiveType(_id);
  };

  return (
    <div className="AmmenityHolder">
      <p style={{ fontSize: "35px" }}>
        What type of centre best describes your Event Centre ?
      </p>
      <div className="centreTypeHolder">
        {centreType?.map((centreTypes, index) => (
          <div
            className={`centreTypeCard ${
              activeType === centreTypes._id ? "centreActive" : ""
            }`}
            key={index}
            onClick={() => handleTypeChange(centreTypes._id)}
          >
            <div>{/* <img src={centreTypes.icon} width={50} alt="" /> */}</div>
            <p>{centreTypes.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CentreTypePicker;
