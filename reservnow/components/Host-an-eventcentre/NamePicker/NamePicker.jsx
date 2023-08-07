import React, { useState, useEffect } from "react";
import "./NamePicker.css";

const NamePicker = ({ name, setName, progress, progressSuccess }) => {

  const handleInputChange = (e) => {
    const inputName = e.target.value;
    if (inputName.length <= 32) {
      setName(inputName);
    }
  };

  return (
    <div className="NamePickerPage">
      <div className="NamePickerHolder">
        <div className="namePrompt">
          <p style={{ fontSize: 30, marginBottom: 10 }}>
            Now, Let's give your Centre a title
          </p>
          <p style={{ color: "grey" }}>
            Short titles work best. Have fun with it — you can always change it
            later
          </p>
        </div>
        <textarea
          rows={8}
          maxLength={32}
          value={name}
          onChange={handleInputChange}
          className="NametextArea"
          style={{ resize: "none", fontSize: 20 }} // Disable resizing
        />
        <p style={{ marginTop: 20, color: "grey" }}></p>
      </div>
    </div>
  );
};

export default NamePicker;
