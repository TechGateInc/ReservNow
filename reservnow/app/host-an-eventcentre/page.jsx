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

const HostAnEventCentrePage = ({}) => {
  const [active, setActive] = useState("Legal");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const isSubmitDisabled = selectedFiles.length < 5;
  const coverPhoto = selectedFiles.length > 0 ? selectedFiles[0] : null;
  const remainingPhotos = selectedFiles.slice(1);

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
            {active === "StandOut" && <StandOut />}
            {active === "FinishSetup" && <FinishSetup />}
            {active === "Capacity" && <Capacity />}
            {active === "Legal" && <Legal />}
          </div>
        </div>
        <div className={styles["pagefooter-section"]}>
          <div className={styles["page-loader"]}></div>
          <div className={styles["host-footer"]}>
            {active === "Overview" && <div></div>}
            {active === "Overview" && (
              <div
                onClick={() => setActive("AboutCentreOverview")}
                className={styles["get-started-btn"]}
              >
                Get started
              </div>
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
              <div
                onClick={() => setActive("AmenityPicker")}
                className={styles["next-btn"]}
              >
                Next
              </div>
            )}
            {active === "AmenityPicker" && (
              <div
                className={styles["back-btn"]}
                onClick={() => setActive("AboutCentreOverview")}
              >
                Back
              </div>
            )}
            {active === "AmenityPicker" && (
              <div
                onClick={() => setActive("UploadGallery")}
                className={styles["next-btn"]}
              >
                Next
              </div>
            )}
            {active === "UploadGallery" && (
              <div
                className={styles["back-btn"]}
                onClick={() => setActive("AmenityPicker")}
              >
                Back
              </div>
            )}
            {active === "UploadGallery" && (
              <div
                onClick={() => !isSubmitDisabled && setActive("StandOut")}
                className={`${styles["next-btn"]} ${
                  isSubmitDisabled ? styles["disabled"] : ""
                }`}
              >
                Next
              </div>
            )}
            {active === "StandOut" && (
              <div
                className={styles["back-btn"]}
                onClick={() => setActive("UploadGallery")}
              >
                Back
              </div>
            )}
            {active === "StandOut" && (
              <div onClick={() => setActive("")} className={styles["next-btn"]}>
                Next
              </div>
            )}
            {active === "FinishSetup" && (
              <div
                className={styles["back-btn"]}
                onClick={() => setActive("UploadGallery")}
              >
                Back
              </div>
            )}
            {active === "FinishSetup" && (
              <div onClick={() => setActive("")} className={styles["next-btn"]}>
                Next
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostAnEventCentrePage;
