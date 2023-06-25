"use client";

import styles from "./page.module.css";
import { useState } from "react";
import React, { useEffect } from "react";
import Link from "next/link";
import Overview from "@/components/Overview/Overview";
import AboutCentreOverview from "@/components/About Centre Overview/AboutCentreOverview";
import UploadGallery from "@/components/Upload Gallery/UploadGallery";
import StandOut from "@/components/Stand Out/StandOut";
import FinishSetup from "@/components/Finish Setup/FinishSetup";
import Capacity from "@/components/Capacity/Capacity";
import Legal from "@/components/Legal/Legal";
import AmenityPicker from "@/components/Amenities/AmenityPicker";
import LocationPicker from "@/components/LocationPicker/LocationPicker";
import PricePicker from "@/components/PricePicker/PricePicker";
import NamePicker from "@/components/NamePicker/NamePicker";
import DescriptionInfo from "@/components/CentreDescriptionInfo/DescriptionInfo";
import DescriptionPicker from "@/components/CentreDescriptionPicker/DescriptionPicker";
import { a } from "react-spring";

const HostAnEventCentrePage = ({}) => {
  const [active, setActive] = useState("Overview");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const isSubmitDisabled = selectedFiles.length < 5;
  const coverPhoto = selectedFiles.length > 0 ? selectedFiles[0] : null;
  const remainingPhotos = selectedFiles.slice(1);
  const [activeType, setActiveType] = useState(null);
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");

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
            {active === "AboutCentreOverview" && <AboutCentreOverview />}
            {active === "AmenityPicker" && <AmenityPicker />}
            {active === "UploadGallery" && (
              <UploadGallery
                selectedFiles={selectedFiles}
                setSelectedFiles={setSelectedFiles}
                isSubmitDisabled={isSubmitDisabled}
                coverPhoto={coverPhoto}
                remainingPhotos={remainingPhotos}
              />
            )}
            {active === "LocationPicker" && <LocationPicker />}
            {active === "PricePicker" && (
              <PricePicker price={price} setPrice={setPrice} />
            )}
            {active === "NamePicker" && (
              <NamePicker name={name} setName={setName} />
            )}
            {active === "DescriptionInfo" && (
              <DescriptionInfo
                description={description}
                setDescription={setDescription}
              />
            )}
            {active === "DescriptionPicker" && <DescriptionPicker />}
            {active === "CentreTypePicker" && (
              <CentreTypePicker
                activeType={activeType}
                setActiveType={setActiveType}
              />
            )}
            {active === "AmenityPicker" && <AmenityPicker />}
            {active === "StandOut" && <StandOut />}
            {active === "FinishSetup" && <FinishSetup />}
            {active === "Capacity" && <Capacity />}
            {active === "Legal" && <Legal />}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostAnEventCentrePage;
