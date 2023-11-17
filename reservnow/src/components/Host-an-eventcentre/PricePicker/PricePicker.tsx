"use client";
import React from "react";
import { NextPage } from "next";
import { AiOutlineMinus } from "react-icons/ai";
import { IoAddOutline } from "react-icons/io5";

import "./PricePicker.css";

interface PricePickerProps {
  price: any;
  setPrice: any;
}

const PricePicker: NextPage<PricePickerProps> = ({ price, setPrice }) => {
  const handlePlusClick = () => {
    setPrice(price + 1000);
  };

  const handleMinusClick = () => {
    if (price > 0) {
      setPrice(price - 1000);
    }
  };

  const handleInputChange = (event: any) => {
    const value = event.target.value;
    if (value === "") {
      setPrice(0);
    } else {
      const parsedValue = parseInt(value);
      if (!isNaN(parsedValue)) {
        setPrice(parsedValue);
      }
    }
  };

  return (
    <div className="pricePickerPage">
      <div className="pricePickerHolder">
        <div className="pricePrompt">
          <p style={{ fontSize: 35, marginBottom: 10 }}>Now, set your Price.</p>
          <p>You can change it anytime.</p>
        </div>
        <div className="pickerHolder">
          <div className="pickHolder">
            <div onClick={handleMinusClick} className="increamentBtn">
              <AiOutlineMinus />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <p style={{ position: "relative", left: 20 }}>₦</p>
              <input
                type="text"
                value={price === "" ? 0 : price}
                onChange={handleInputChange}
                style={{
                  height: 50,
                  borderRadius: 10,
                  border: "2px solid rgb(196, 196, 196)",
                  fontSize: 30,
                  width: 200,
                  paddingLeft: 20,
                }}
              />
            </div>
            <div onClick={handlePlusClick} className="increamentBtn">
              <IoAddOutline />
            </div>
          </div>
          <div style={{ marginTop: 10, fontWeight: "500" }}>per hour</div>
        </div>
      </div>
    </div>
  );
};

export default PricePicker;
