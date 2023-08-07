"use client"
import { useState } from "react";
import { EstimatePopup } from "../Popup/Popup";
import "./estimatemodal.css";
const EstimateModal = ({ estimateModal, setEstimateModal }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div>
      <EstimatePopup trigger={estimateModal} setTrigger={setEstimateModal}>
        <div className="popupHolder">
          <div className="addressHolder">
            <p style={{ textAlign: "left" }}>Address or area</p>
            <input className="locationInput" />
          </div>
          <div className="addressHolder selectHolder">
            <p>Capacity</p>
            <select value={selectedOption} onChange={handleSelectChange} className="locationInput" >
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
