"use client";
import "../Header/header.css";
import Search from "../Search/Search";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Location from "../LocationsCarousel/Location";
import Events from "../LocationsCarousel/Events";
import LoginModal from "@/components/modals/Auth Modal/LoginModal";
import config from "@/config";
import { Provider } from "react-redux";
import { store } from "@/store";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";

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
    <Provider store={store}>

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
              <Link href={"/newcentre"} style={{textDecoration: "none"}}>
                <p style={{ fontSize: 12, color: "black" }}> Add Event Centre</p>
              </Link>

            </div>
            <div className="profileHolder" onClick={() => dropdownToggle("menu")}>
              <div className="profileHolderIcons">
                <HiOutlineMenuAlt1 style={{ fontSize: '20px' }} />
                <FaUserCircle style={{ fontSize: '20px' }} />
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
    </Provider>
  );
};

export default Header;
