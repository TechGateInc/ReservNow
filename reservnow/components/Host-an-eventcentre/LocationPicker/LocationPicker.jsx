
"use client";
import React, { useState, useEffect, useRef } from "react";
import "./LocationPicker.css";

const LocationPicker = ({address, setAddress}) => {
  
  const defaultLocation = "New York, NY";
  const [searchResult, setSearchResult] = useState("");

  useEffect(() => {
    setAddress(address != "" ? address : defaultLocation);
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
        async (position) => {
          const { latitude, longitude } = position.coords;
          const location = `${latitude},${longitude}`;
          setSearchResult(location); // Update the search result state
          loadMap(location);
  
          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
            );
            const data = await response.json();
            if (data.address) {
              const { road, city, state, postcode, country } = data.address;
              const address = `${road}, ${city}, ${state}, ${postcode}, ${country}`;
              setAddress(address); // Update the address state with the obtained address
            }
          } catch (error) {
            console.error("Error geocoding coordinates:", error);
          }
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

  const [searchHolderHeight, setSearchHolderHeight] = useState("auto");
  const [showHiddenSection, setShowHiddenSection] = useState(false);
  const hiddenSectionRef = useRef(null);

  const handleInputClick = () => {
    setShowHiddenSection(true);
    setSearchHolderHeight("100px");
  };

  const handleOutsideClick = (event) => {
    if (!event.target.closest(".mapContainer")) {
      setShowHiddenSection(false);
      setSearchHolderHeight("50px");
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="mapholder">
      <p style={{ fontSize: "35px", marginBottom: "10px" }}>
        Is the Pin in the right spot ?
      </p>
      <p>Your address is only shared with guests after they have made their reservation</p>
      <div className="mapContainer">
        <div className="searchHolder" style={{ height: searchHolderHeight }}>
          <div style={{ display: "flex", flexDirection: "row" }} className="imnput">
            <input
              type="text"
              placeholder="Enter an address"
              value={address}
              onChange={handleAddressChange}
              style={{ border: "none", width: "100%", height:30 }}
              onClick={handleInputClick}
            />
          </div>
          
            <div style={{ marginTop: 10 }} 
            className={`hiddenMapSection ${
              showHiddenSection ? "show" : ""}`
            }
             ref={hiddenSectionRef}>
              {/* Contents of the hidden section */}
              <button
                onClick={() => {
                  handleSearch();
                  setShowHiddenSection(false);
                  setSearchHolderHeight("50px");
                }}
                className="mapSearchBtn"
              >
                Search
              </button>
              or
              <div
                onClick={() => {
                  handleGetLocation();
                  setShowHiddenSection(false);
                  setSearchHolderHeight("50px");
                }}
                className="locationLink"
              >
                Get Location via GPS
              </div>
            </div>
        
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
