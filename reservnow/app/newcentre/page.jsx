"use client";
import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

import styles from "./page.module.css";
import EstimateModal from "@/components/modals/EstimateModal/EstimateModal";
import { useGetProgressQuery } from "@/features/progress/progressSlice";

const NewCentrePage = ({}) => {
  const [money, setMoney] = useState(5000);
  const [hours, setHours] = useState(1);
  const [isSliderReady, setSliderReady] = useState(false);
  const [estimateModal, setEstimateModal] = useState(false);

  function valuetext(value) {
    return `${value}°C`;
  }

  const handleSliderChange = (event, newValue) => {
    setHours(newValue);
    setMoney(newValue * 5000);
  };

  useEffect(() => {
    setSliderReady(true);
  }, []);

  const id = "652c413c376e3cb68dc91f30";
  const {
    data: progress,
    loading: progressLoading,
    isSuccess: progressSuccess,
    isError: progressError,
    error: progressErrorData,
    refetch: refetchProgress,
  } = useGetProgressQuery(id);

  console.log(progress)

  function DiscreteSlider() {
    return (
      <div>
        {isSliderReady && (
          <Box sx={{ width: 300 }}>
            <Slider
              aria-label="Hours"
              value={hours}
              onChange={handleSliderChange}
              valueLabelDisplay="auto"
              step={1}
              marks
              min={1}
              max={10}
              style={{ color: "black" }}
            />
          </Box>
        )}
      </div>
    );
  }
  return (
    <div className={styles["new-centre-root"]}>
      <div className={styles["newPageHeader"]}>
        <div>
          <Link href={"/"}>
            <img
              src="/images/RNL.svg"
              alt="ReservNow"
              style={{ height: "22px" }}
            />
          </Link>
        </div>
        <div className={styles["pageHeaderBtn"]}>
          <p>Ready to Reserv it?</p>
          <Link
            href={progressSuccess && progress.centreType ? "/" : "/host-an-eventcentre"}
            style={{ textDecoration: "none" }}
          >
            <div className={styles["setUpBtn"]}>ReserveNov SetUp</div>
          </Link>
        </div>
      </div>
      <div className={styles["newPageHolder"]}>
        <div className={styles["newPageText"]}>
          <p className={styles["ReservText"]}>Reserv It.</p>
          <p className={styles["ReservText2"]}>You Could Earn</p>
          <p className={styles["ReservText2"]}>₦</p>
          <p style={{ marginTop: 20 }}>
            {hours} hours at an estimated ₦5000 an hour
          </p>
          <div className={styles["slider"]}>
            <DiscreteSlider />
          </div>
          <p className={styles["newpageLink"]}>
            Learn how we estimate our earnings
          </p>

          <div
            className={styles["estimateSearch"]}
            onClick={() => setEstimateModal(true)}
          >
            <p>Estimate Search</p>
          </div>
          <EstimateModal
            estimateModal={estimateModal}
            setEstimateModal={setEstimateModal}
          />
        </div>
        <div className={styles["newPageMap"]}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.98764031009!2d3.715570274482604!3d6.892081118771481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bd81639e54ec3%3A0x9129b4a8c8367e52!2sBabcock%20University%20Ilishan%20Remo!5e0!3m2!1sen!2sng!4v1687361249418!5m2!1sen!2sng"
            width="600"
            height="530"
            style={{
              border: "none",
              borderRadius: 20,
              boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
            }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default NewCentrePage;
