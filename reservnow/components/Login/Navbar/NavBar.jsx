"use client";

import { useState } from "react";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

import "./navbar.css";
import LoginModal from "@/components/modals/Auth Modal/LoginModal";

const LoginPageNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const dropdownToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`navbar`}>
      <div className={`extended-content `}></div>
      <div className="header2">
        <div className="Headerlogo">
          <Link href={"/"}>
            <img
              src="/images/RNL.svg"
              alt="ReservNow"
              style={{ height: "22px" }}
            />
          </Link>
        </div>

        <div className="ProfileSection">
          <div className="ReserveLink">
            <Link href={"/newcentre"} style={{ textDecoration: "none" }}>
              <p style={{ fontSize: 12, color: "black" }}> Add Event Centre</p>
            </Link>
          </div>
          <div className="profileHolder" onClick={() => dropdownToggle("menu")}>
            <div className="profileHolderIcons">
              <HiOutlineMenuAlt1 style={{ fontSize: "20px" }} />
              <FaUserCircle style={{ fontSize: "20px" }} />
            </div>
            {isMenuOpen && (
              <div className="DropdownContent">
                <div className="contentSection1">
                  <Link
                    href={"/login"}
                    className="DropdownLinks"
                    style={{ textDecoration: "none" }}
                  >
                    Log in
                  </Link>
                  <Link href={"/login"} className="DropdownLinks">
                    Sign in
                  </Link>
                </div>
                <div className="contentSection2">
                  <Link href={"/newcentre"} className="DropdownLinks">
                    Add your Centre
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPageNavbar;
