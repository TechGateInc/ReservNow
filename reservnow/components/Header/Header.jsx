"use client";
import "../Header/header.css";
import Search from "../Search/Search";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Location from "../LocationsCarousel/Location";
import Events from "../LocationsCarousel/Events";
import LoginModal from "@/components/modals/Login Modal/LoginModal";
import config from "@/config";

const Header = () => {
  const [emailVerification, setEmailVerification] = useState(false);

  const [centres, getCentres] = useState(null);

  useEffect(() => {
    const fetchCentres = async () => {
      try {
        const response = await fetch(`${config.baseURL}/eventcentre/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const data = await response.json();
          getCentres(data);
          // setIsLoading(false);
        } else {
          const errorData = await response.json();
          throw new Error(
            errorData.message || "Error occurred while fetching centres"
          );
        }
      } catch (error) {
        console.log("Error:", error.message);
      }
    };

    fetchCentres();
  }, []);

  const eventTypes = [
    "Weddings",
    "Concerts",
    "Parties",
    "Seminars",
    "Graduation",
    "Corperate Events",
  ];

  const [isCapacityOpen, setIsCapacityOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const dropdownToggle = (type) => {
    if (type === "capacity") {
      setIsCapacityOpen(!isCapacityOpen);
    } else if (type === "menu") {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  const [isLocationExtended, setIsLocationExtended] = useState(false);
  const [isEventExtended, setIsEventExtended] = useState(false);
  const navbarRef = useRef(null);

  const extendToggle = (type) => {
    if (type === "location") {
      setIsLocationExtended(!isLocationExtended);
    } else if (type === "event") {
      setIsEventExtended(!isEventExtended);
    }
  };

  const removeLocationExtend = () => {
    setIsLocationExtended(false);
  };

  const removeCapacityMenu = () => {
    setIsCapacityOpen(false);
  };

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setIsLocationExtended(false);
      setIsEventExtended(false);
      setIsMenuOpen(false);
      setIsCapacityOpen(false);
    }
  };

  const handleScroll = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setIsLocationExtended(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [location, setLocation] = useState(null);

  const handleLocation = (label) => {
    setLocation(label);
  };

  const handleRemove = () => {
    setLocation(null);
  };

  return (
    <div
      ref={navbarRef}
      className={`navbar ${isLocationExtended ? "extended" : ""}`}
      onScroll={handleScroll}
    >
      <div
        className={`extended-content  ${isLocationExtended ? "slide-down" : ""
          }`}
      >
        <div className="locationCardHolder">
          {centres &&
            [...new Set(centres.map((centre) => centre.city))]
              .map((city) => ({
                city,
                count: centres.filter((centre) => centre.city === city).length,
              }))
              .sort((a, b) => b.count - a.count)
              .slice(0, 6) // Get only the top 6 values
              .map((item, index) => (
                <Location
                  key={index}
                  label={item.city}
                  handleLocation={handleLocation}
                  removeLocationExtend={removeLocationExtend}
                />
              ))}
        </div>
      </div>
      <div
        className={`extended-content  ${isEventExtended ? "slide-down" : ""}`}
      >
        <div className="locationCardHolder">
          {eventTypes.map((button2, index) => (
            <Events
              key={index}
              label={button2}
              onClick={() => handleDuplicate2(button2)}
            />
          ))}
        </div>
      </div>

      <div className="header">
        <div className="Headerlogo">
          <Link href={"/"}>
            <img
              src="/images/RNL.svg"
              alt="ReservNow"
              style={{ height: "22px" }}
            />
          </Link>
        </div>
        <div className="SearchBarHolder">
          <Search
            dropdownToggle={dropdownToggle}
            extendToggle={extendToggle}
            isCapacityOpen={isCapacityOpen}
            location={location}
            handleRemove={handleRemove}
            setLocation={setLocation}
            removeCapacityMenu={removeCapacityMenu}
          />
        </div>
        <div className="ProfileSection">
          <div className="ReserveLink">
            <Link href={"/newcentre"}>
              <p style={{ fontSize: 12, color: "black" }}> Add Event Centre</p>
            </Link>
          </div>
          <div className="profileHolder" onClick={() => dropdownToggle("menu")}>
            <div className="profileHolderIcons">
              <div>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAANUlEQVR4nO3Vs
             QkAMAwDwd9/rGiwZIIUAYs0f6DaIBAGSQUBdjn5dXg1GpOunJM0Jn4nSTw4Ff6YkoE1i0QAAAAASUVORK5CYII="
                  width={20}
                />
              </div>
              <div>
                <img
                  src="data:image/png;base64,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"
                  width={20}
                />
              </div>
            </div>
            {isMenuOpen && (
              <div className="DropdownContent">
                <div className="contentSection1">
                  <Link
                    href={""}
                    className="DropdownLinks"
                    onClick={() => setEmailVerification(true)}
                    style={{ textDecoration: "none" }}
                  >
                    Log in
                  </Link>
                  <Link href={""} className="DropdownLinks">
                    Sign in
                  </Link>
                </div>
                <div className="contentSection2">
                  <Link href={""} className="DropdownLinks">
                    Reserve your Centre
                  </Link>
                  <Link href={""} className="DropdownLinks">
                    Help
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <LoginModal
        emailVerification={emailVerification}
        setEmailVerification={setEmailVerification}
      />
    </div>
  );
};

export default Header;
