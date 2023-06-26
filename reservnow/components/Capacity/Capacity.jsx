"use client";

import React, { useState, useEffect } from "react";
import "./capacity.css";
import { AiOutlineMinus } from "react-icons/ai";
import { IoAddOutline } from "react-icons/io5";
import { MdError } from "react-icons/md";
import { HiOutlineInformationCircle } from "react-icons/hi";

const Capacity = ({ capacity, setCapacity }) => {
  const [eventInfo, setEventInfo] = useState("");

  const handleMinusClick = () => {
    let newValue = parseInt(capacity);
    if (!isNaN(newValue) && newValue > 0) {
      newValue -= 10;
      setCapacity(newValue.toString());
    }
  };

  const handlePlusClick = () => {
    let newValue = parseInt(capacity);
    if (isNaN(newValue)) {
      newValue = 0;
    }
    newValue += 10;
    setCapacity(newValue.toString());
  };

  const handleInputChange = (event) => {
    setCapacity(event.target.value);
  };

  useEffect(() => {
    if (capacity >= 0 && capacity <= 9) {
      setEventInfo("");
    } else if (capacity >= 10 && capacity <= 99) {
      setEventInfo(
        "This event centre is suitable for small events <br /> such as small conferences, workshops, or meetings."
      );
    } else if (capacity >= 100 && capacity <= 500) {
      setEventInfo(
        "This event centre is suitable for medium sized events <br /> such as conferences, trade shows, or social gatherings."
      );
    } else {
      setEventInfo(
        "This event centre is suitable for large events <br /> such as conventions, concerts, or major conferences."
      );
    }
  }, [capacity]);

  return (
    <div className="capacity-root">
      <div className="capacity-content">
        <div className="capacity-header">
          Now, set your event centre capacity
        </div>
        <div className="capacity-sub-header">You can change it anytime</div>
        <div className="capacity-picker-container">
          <div className="capacity-picker">
            <button
              className="minus-btn"
              onClick={handleMinusClick}
              disabled={parseInt(capacity) < 20 || capacity === ""}
            >
              <AiOutlineMinus />
            </button>
            <div className="text-box">
              <input
                type="text"
                inputMode="numeric"
                value={capacity}
                onChange={handleInputChange}
                style={{
                  appearance: "none",
                  border:
                    capacity === "0" || capacity === ""
                      ? "1px solid red"
                      : "1px solid #c9c9c9",
                  background:
                    capacity === "0" || capacity === "" ? "#fff8f6" : "#fff",
                }}
              />
            </div>
            <button className="plus-btn" onClick={handlePlusClick}>
              <IoAddOutline />
            </button>
          </div>
          {capacity <= 0 && (
            <div className="error-message">
              <MdError />
              <div className="text" style={{ marginLeft: "10px" }}>
                Please enter a valid capacity
              </div>
            </div>
          )}
          <div className="other-text">
            <span dangerouslySetInnerHTML={{ __html: eventInfo }} />
            {capacity >= 10 && (
              <HiOutlineInformationCircle
                style={{ marginLeft: "5px", paddingTop: "2px" }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Capacity;
