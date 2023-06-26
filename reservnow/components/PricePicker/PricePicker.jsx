import React, { useState } from "react";
import "./PricePicker.css";

const PricePicker = ({ price, setPrice }) => {
  const [currentPrice, setCurrentPrice] = useState(0);

  const handlePlusClick = () => {
    setCurrentPrice(currentPrice + 1);
    setPrice(currentPrice + 1);
  };

  const handleMinusClick = () => {
    if (currentPrice > 0) {
      setCurrentPrice(currentPrice - 1);
      setPrice(currentPrice - 1);
    }
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    if (value === "") {
      setCurrentPrice(0);
      setPrice(0);
    } else {
      const parsedValue = parseInt(value);
      if (!isNaN(parsedValue)) {
        setCurrentPrice(parsedValue);
        setPrice(parsedValue);
      }
    }
  };

  return (
    <div className="pricePickerPage">
      <div className="pricePickerHolder">
        <div className="pricePrompt">
          <p style={{ fontSize: 35, marginBottom: 10 }}>
            Now, set your Price.
          </p>
          <p>You can change it anytime.</p>
        </div>
        <div className="pickerHolder">
          <div className="pickHolder">
            <div onClick={handleMinusClick} className="increamentBtn">
              -
            </div>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              <p style={{ position: "relative", left: 20 }}>₦</p>
              <input
                type="text"
                value={currentPrice === "" ? 0 : currentPrice}
                onChange={handleInputChange}
                style={{
                  height: 50,
                  borderRadius: 10,
                  border: "2px solid rgb(196, 196, 196)",
                  fontSize: 30,
                  width: 200,
                  paddingLeft: 20
                }}
              />
            </div>
            <div onClick={handlePlusClick} className="increamentBtn">
              +
            </div>
          </div>
          <div style={{ marginTop: 10, fontWeight: "500" }}>
            per hour
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricePicker;
