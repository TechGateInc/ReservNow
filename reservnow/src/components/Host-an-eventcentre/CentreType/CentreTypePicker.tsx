"use client";
import "./CentreTypePicker.css";
import { useGetCentreTypeQuery } from "@/src/api/features/centreType/centreTypeSlice";
import React from "react";
import { NextPage } from "next";

interface CentreTypePickerProps {
  activeType: any;
  setActiveType: any;
}

const CentreTypePicker: NextPage<CentreTypePickerProps> = ({
  activeType,
  setActiveType,
}) => {
  const { data: centreType } = useGetCentreTypeQuery({});

  const handleTypeChange = (_id: String) => {
    setActiveType(_id);
  };

  return (
    <div className="AmmenityHolder">
      <p style={{ fontSize: "35px" }}>
        What type of centre best describes your Event Centre ?
      </p>
      <div className="centreTypeHolder">
        {centreType?.map((centreTypes: any, index: any) => (
          <div
            className={`centreTypeCard ${
              activeType === centreTypes._id ? "centreActive" : ""
            }`}
            key={index}
            onClick={() => handleTypeChange(centreTypes._id)}
          >
            <p>{centreTypes.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CentreTypePicker;
