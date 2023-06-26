"use client";

import styles from "./page.module.css";
import { useState } from "react";
import React, { useEffect } from "react";
import Link from "next/link";
import Overview from "@/components/Overview/Overview";
import AboutCentreOverview from "@/components/About Centre Overview/AboutCentreOverview";
import CentreTypePicker from "@/components/CentreType/CentreTypePicker";
import AmenityPicker from "@/components/Amenities/AmenityPicker";
import LocationPicker from "@/components/LocationPicker/LocationPicker";
import PricePicker from "@/components/PricePicker/PricePicker";
import NamePicker from "@/components/NamePicker/NamePicker";
import DescriptionInfo from "@/components/CentreDescriptionInfo/DescriptionInfo";
import DescriptionPicker from "@/components/CentreDescriptionPicker/DescriptionPicker";


const HostAnEventCentrePage = ({}) => {

  const [active, setActive] = useState("LocationPicker");

  const [activeType, setActiveType] = useState(null);
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [descriptionsPick, setDescriptionsPick] = useState([]);
  const [activeAmenities, setActiveAmenities] = useState([]);

 
  return (
    <div className={styles["host-root"]}>
      <div className={styles["host-container"]}>
        <div className={styles["host-top"]}>
          <div className={styles["host-header"]}>
            <img
              src="/images/RNL.svg"
              alt="ReservNow"
              style={{ height: "22px" }}
            />
            <Link href={"/newcentre"}>
              <button>Exit</button>
            </Link>
          </div>
          <div className={styles["host-content"]}>
            {active === "Overview" && <Overview />}
            {active === "AboutCentreOverview" && <AboutCentreOverview  />}
            {active === "CentreTypePicker" && <CentreTypePicker activeType={activeType} setActiveType={setActiveType} />}
            {active === "AmenityPicker" && <AmenityPicker activeAmenities={activeAmenities} setActiveAmenities={setActiveAmenities} />}
            {active === "LocationPicker" && <LocationPicker/>}
            {active === "PricePicker" && <PricePicker price={price} setPrice={setPrice}/>}
            {active === "NamePicker" && <NamePicker name={name} setName={setName}/>}
            {active === "DescriptionInfo" && <DescriptionInfo description={description} setDescription={setDescription}/>} 
            {active === "DescriptionPicker" && <DescriptionPicker descriptionsPick={descriptionsPick} setDescriptionsPick={setDescriptionsPick}/>}
          </div>
        </div>
        <div className={styles["pagefooter-section"]}>
          <div className={styles["loader-background"]}>
          <div
            className={`${styles["page-loader"]} ${
              active === "Overview"
                ? styles["loader-zero-width"]
                : active === "AboutCentreOverview"
                ? styles["loader-medium-width"]
                : active === "CentreTypePicker"
                ? styles["loader-medium2-width"]
                : active === "AmenityPicker"
                ? styles["loader-medium3-width"]
                : active === "LocationPicker"
                ? styles["loader-medium4-width"]
                : active === "PricePicker"
                ? styles["loader-medium5-width"]
                : active === "NamePicker"
                ? styles["loader-medium6-width"]
                : active === "DescriptionInfo"
                ? styles["loader-medium7-width"]
                : active === "DescriptionPicker"
                ? styles["loader-medium8-width"]
                : styles["loader-full-width"]

                // : styles["loader-full-width"]
            }`}
          ></div>
          </div>
          <div className={styles["host-footer"]}>
            {active === "Overview" && <div></div>}
            {active === "Overview" && (
              <button onClick={() => setActive("AboutCentreOverview")}>
                Get started
              </button>
            )}
            {active === "AboutCentreOverview" && (
              <div
                className={styles["back-btn"]}
                onClick={() => setActive("Overview")}
              >
                Back
              </div>
            )}
            {active === "AboutCentreOverview" && (
              <button
                onClick={() => setActive("CentreTypePicker")}
                style={{ backgroundColor: "black", color: "white" }}
              >
                Next
              </button>
            )}
            {active === "CentreTypePicker" && (
              <div
                className={styles["back-btn"]}
                onClick={() => setActive("AboutCentreOverview")}
              >
                Back
              </div>
            )}
            {active === "CentreTypePicker" && (
              <button
                onClick={() => setActive("AmenityPicker")}
                disabled={!activeType}
                style={{ backgroundColor: "black", color: "white" }}
              >
                Next
              </button>
            )}
              {active === "AmenityPicker" && (
              <div
                className={styles["back-btn"]}
                onClick={() => setActive("CentreTypePicker")}

              >
                Back
              </div>
            )}
            {active === "AmenityPicker" && (
              <button
               disabled={activeAmenities.length === 0}
                onClick={() => setActive("LocationPicker")}
                style={{ backgroundColor: "black", color: "white" }}
              >
                Next
              </button>
            )}
             {active === "LocationPicker" && (
              <div
                className={styles["back-btn"]}
                onClick={() => setActive("AmenityPicker")}
              >
                Back
              </div>
            )}
             {active === "LocationPicker" && (
              <button
                onClick={() => setActive("PricePicker")}
                style={{ backgroundColor: "black", color: "white" }}
              >
                Next
              </button>
            )}
             {active === "PricePicker" && (
              <div
                className={styles["back-btn"]}
                onClick={() => setActive("LocationPicker")}
              >
                Back
              </div>
            )}
             {active === "PricePicker" && (
              <button
                disabled={price === 0}
                onClick={() => setActive("NamePicker")}
                style={{ backgroundColor: "black", color: "white" }}
              >
                Next
              </button>
            )}
               {active === "NamePicker" && (
              <div
                className={styles["back-btn"]}
                onClick={() => setActive("PricePicker")}
              >
                Back
              </div>
            )}
             {active === "NamePicker" && (
              <button
                disabled={!name}
                onClick={() => setActive("DescriptionInfo")}
                style={{ backgroundColor: "black", color: "white" }}
              >
                Next
              </button>
            )}
                {active === "DescriptionInfo" && (
              <div
                className={styles["back-btn"]}
                onClick={() => setActive("NamePicker")}
              >
                Back
              </div>
            )}
             {active === "DescriptionInfo" && (
              <button
              disabled={!description}
                onClick={() => setActive("DescriptionPicker")}
                style={{ backgroundColor: "black", color: "white" }}
              >
                Next
              </button>
            )}
             {active === "DescriptionPicker" && (
              <div
                className={styles["back-btn"]}
                onClick={() => setActive("DescriptionInfo")}
              >
                Back
              </div>
            )}
             {active === "DescriptionPicker" && (
              <button
                onClick={() => setActive("NamePicker")}
                style={{ backgroundColor: "black", color: "white" }}
                disabled={descriptionsPick.length === 0}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostAnEventCentrePage;
