"use client";

import { useState } from "react";
import React from "react";
import { NextPage } from "next";

import "./estimatemodal.css";
import { EstimatePopup } from "../Popup/Popup";

interface EstimateModalProps {
  estimateModal: boolean;
  setEstimateModal: any;
}

const EstimateModal: NextPage<EstimateModalProps> = ({
  estimateModal,
  setEstimateModal,
}) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event: any) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div>
      <EstimatePopup trigger={estimateModal} setTrigger={setEstimateModal}>
        <div className="popupHolder">
          <div className="addressHolder">
            <p style={{ textAlign: "left" }}>Address or area</p>
            <input
              className="locationInput"
              style={{
                outline: "none",
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
            />
          </div>
          <div className="addressHolder selectHolder">
            <p>Capacity</p>
            <select
              value={selectedOption}
              onChange={handleSelectChange}
              className="locationInput"
              style={{
                outline: "none",
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
            >
              <option value="">Select an option</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
          <div className="estimateBtn">
            <p>Update your Estimate</p>
          </div>
        </div>
      </EstimatePopup>
    </div>
  );
};

export default EstimateModal;
