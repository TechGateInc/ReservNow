"use client";
import React, { useState } from "react";
import "./NamePicker.css";

const NamePicker = ({name, setName}) => {
  

  const handleInputChange = (event) => {
    const inputName = event.target.value;
    if (inputName.length <= 32) {
      setName(inputName);
    }
  };

  return (
    <div className="NamePickerPage">
      <div className="NamePickerHolder">
        <div className="namePrompt">
        <p style={{fontSize:30, marginBottom:10}}>Now, Lets give your Centre a title</p>
          <p style={{color:"grey"}}>Short titles work best. Have fun with it --- you can always change it later</p>
        </div>
        <textarea
          rows={10}
          maxLength={32}
          value={name}
          onChange={handleInputChange}
          className="NametextArea"
        />
        <p style={{marginTop:20, color:"grey"}}>{name.length} / 32</p>
      </div>
    </div>
  );
};

export default NamePicker;
