"use client";

import React, { useState, useEffect, useRef } from "react";

import "./LocationPicker.css";

const LocationPicker = ({ address, setAddress, city, setCity, state, setisState }) => {
  const [houseNo, setHouseNo] = useState("");
  const [streetEstate, setStreetEstate] = useState("");

  // Update state when input values change
  const handleHouseNoChange = (e) => setHouseNo(e.target.value);
  const handleStreetEstateChange = (e) => setStreetEstate(e.target.value);
  const handleCityChange = (e) => setCity(e.target.value);
  const handleStateChange = (e) => setisState(e.target.value);

  // Combine the values into one text
  const combinedText = `${houseNo} ${streetEstate}, ${city}, ${state}`;

  const [showMap, setShowMap] = useState("form");
  setAddress(houseNo && streetEstate && city && state && showMap === "map" ? combinedText : "")

  // const handleGetLocation = () => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       async (position) => {
  //         const { latitude, longitude } = position.coords;
  //         const location = `${latitude},${longitude}`;
  //         setSearchResult(location); // Update the search result state
  //         loadMap(location);

  //         try {
  //           const response = await fetch(
  //             `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
  //           );
  //           const data = await response.json();
  //           if (data.address) {
  //             const { road, city, state, postcode, country } = data.address;
  //             const address = `${road}, ${city}, ${state}, ${postcode}, ${country}`;
  //             setAddress(address); // Update the address state with the obtained address
  //           }
  //         } catch (error) {
  //           console.error("Error geocoding coordinates:", error);
  //         }
  //       },
  //       (error) => {
  //         console.error("Error getting location:", error);
  //       }
  //     );
  //   } else {
  //     console.error("Geolocation is not supported by this browser.");
  //   }
  // };
  


  return (
    <div className="mapholder">
      <p style={{ fontSize: "35px", marginBottom: "10px" }}>
        Is the Pin in the right spot ?
      </p>
      <p>
        Your address is only shared with guests after they have made their
        reservation
      </p>

      {showMap === "form" && (
        <div className="location-form">
          <input
            type="text"
            placeholder="House No."
            value={houseNo}
            onChange={handleHouseNoChange}
          />
          <input
            type="text"
            placeholder="Street and Estate"
            value={streetEstate}
            onChange={handleStreetEstateChange}
          />
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={handleCityChange}
          />
          <input
            type="text"
            placeholder="State"
            value={state}
            onChange={handleStateChange}
          />
          <div className="showMapBtn">
            <button
              disabled={
                houseNo === "" ||
                streetEstate === "" ||
                city === "" ||
                state === ""
              }
              onClick={() => setShowMap("map")}
            >
              Show on Map
            </button>
          </div>
        </div>
      )}

      {showMap !== "form" && (
        <div className="mapContainer">
          <div className="searchHolder">
            <div
              style={{ display: "flex", flexDirection: "row" }}
              className="input"
            >
              <input
                type="text"
                placeholder="Enter an address"
                value={combinedText}
                style={{ border: "none", width: "100%", padding: 10 }}
                disabled
              />
            </div>
          </div>
          <iframe
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.7996105457046!2d3.3814625749447713!3d6.546968393445971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d74a1d96faf%3A0xc6ca00ab91edfc5c!2s${combinedText}!5e0!3m2!1sen!2sng!4v1686910536404!5m2!1sen!2sng`}
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
      )}
    </div>
  );
};

export default LocationPicker;
