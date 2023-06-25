"use client";
import React, { useState, useEffect } from "react";
import "./LocationPicker.css";

const LocationPicker = () => {
  const [address, setAddress] = useState("");
  const defaultLocation = "New York, NY";
  const [showGetLocationButton, setShowGetLocationButton] = useState(false);

  useEffect(() => {
    setAddress(defaultLocation);
    loadMap(defaultLocation);
  }, []);

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleSearch = () => {
    loadMap(address);
  };

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const location = `${latitude},${longitude}`;
          loadMap(location);
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const loadMap = (location) => {
    const encodedAddress = encodeURIComponent(location);
    const iframe = document.getElementById("map-iframe");
    const src = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.7996105457046!2d3.3814625749447713!3d6.546968393445971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d74a1d96faf%3A0xc6ca00ab91edfc5c!2s${encodedAddress}!5e0!3m2!1sen!2sng!4v1686910536404!5m2!1sen!2sng`;
    iframe.src = src;
  };

  const handleInputFocus = () => {
    setShowGetLocationButton(true);
  };

  return (
    <div className="mapholder">
      <p style={{ fontSize: "35px", marginBottom: "10px" }}>
        Is the Pin in the right spot ?
      </p>
      <p>
        Your address is only shared with guests after they have made thier
        reservation
      </p>
      <div className="mapContainer">
        <div className="searchHolder">
          <div style={{display:"flex", flexDirection:"row"}}>
            <input
              type="text"
              placeholder="Enter an address"
              // value={address}
              onChange={handleAddressChange}
              onFocus={handleInputFocus}
              style={{ border: "none", width: "400px" }}
            />
            {/* <button onClick={handleSearch}>Search</button> */}
          </div>
          {/* <div
            className={`get-location-dropdown ${
              showGetLocationButton ? "show" : ""
            }`}
          >
            <button onClick={handleGetLocation}>Get Location</button>
          </div> */}
        </div>
        <iframe
          id="map-iframe"
          src=""
          style={{
            width: "650px",
            height: "450px",
            border: "none",
            borderRadius: 20,
            marginTop: -30,
          }}
          title="Google Maps"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default LocationPicker;
