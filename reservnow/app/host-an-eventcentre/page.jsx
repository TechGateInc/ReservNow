"use client";

import styles from "./page.module.css";
import { useState } from "react";
import React, { useEffect } from "react";
import Link from "next/link";
import Overview from "@/components/Overview/Overview";
import AboutCentreOverview from "@/components/About Centre Overview/AboutCentreOverview";

const HostAnEventCentrePage = ({}) => {
  const [active, setActive] = useState("Overview");

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
          </div>
        </div>
        <div className={styles["page-loader"]}></div>
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
              onClick={() => setActive("TypeOfPlace")}
              style={{ backgroundColor: "black", color: "white" }}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HostAnEventCentrePage;
