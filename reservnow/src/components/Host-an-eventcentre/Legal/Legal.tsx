"use client";
import React from "react";
import { NextPage } from "next";
import { GrCircleInformation } from "react-icons/gr";
import "./legal.css";

interface LegalProps {
  isRadioButtonSelected: any;
  setIsRadioButtonSelected: any;
}

const Legal: NextPage<LegalProps> = ({
  isRadioButtonSelected,
  setIsRadioButtonSelected,
}) => {
  const handleRadioButtonChange = (event: any) => {
    setIsRadioButtonSelected(event.target.value !== "");
  };

  return (
    <div className="legal-root">
      <div className="legal-container">
        <div className="legal-header">Just one last step!</div>
        <div className="first-section">
          <div className="first-section-header">
            How are you hosting on ReservNow ?
            <div className="info-icon">
              <GrCircleInformation />
            </div>
          </div>
          <div className="first-section-form">
            <div className="form-item">
              <input
                type="radio"
                name="hosting"
                id="private-individual"
                value="private-individual"
                onChange={handleRadioButtonChange}
              />
              <label htmlFor="private-individual">
                I'm hosting as a private individual
              </label>
            </div>
            <div className="form-item">
              <input
                type="radio"
                name="hosting"
                id="business"
                value="business"
                onChange={handleRadioButtonChange}
              />
              <label htmlFor="business">I'm hosting as a business</label>
            </div>
          </div>
        </div>
        <div className="second-section">
          <div className="second-section-header">
            Does your place have any of these ?
            <div className="info-icon">
              <GrCircleInformation />
            </div>
          </div>
          <div className="second-section-form">
            <div className="form-item">
              <label htmlFor="security-camera">Security camera(s)</label>
              <input type="checkbox" name="hosting" id="security-camera" />
            </div>
            <div className="form-item">
              <label htmlFor="dangerous-animals">Dangerous animals</label>
              <input type="checkbox" name="hosting" id="dangerous-animals" />
            </div>
          </div>
        </div>
        <hr />
        <div className="important-notice">
          <div className="header">Important things to know</div>
          <div className="content">
            Be sure to comply with your local laws and review ReservNow's
            nondiscrimination policy and guest and Host fees.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;
