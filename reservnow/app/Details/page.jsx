"use client";

import styles from "./page.module.css";
import React from "react";
import DetailsGallery from "@/components/Details Gallery/DetailsGallery";
import DetailsCardLeft from "@/components/Details Card Left/DetailsCardLeft";
import DetailsCardRight from "@/components/Details Card Right/DetailsCardRight";
import MapSection from "@/components/Map Section/MapSection";
import ReviewSection from "@/components/Review Section/ReviewSection";
import ContactOwner from "@/components/Contact Venue Owner/ContactOwner";
import ThingsToKnow from "@/components/Things To Know/ThingsToKnow";
import { useEffect, useRef, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { useAuth } from "@/Context/context";
import LoginModal from "@/components/modals/Login Modal/LoginModal";
import { useSearchParams } from "next/navigation";
import config from "@/config";

export default function Details() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const { state } = useAuth();
  const { isLoggedIn } = state;
  const [emailVerification, setEmailVerification] = useState(false);
  const [centreDetails, setCentreDetails] = useState(""); // to get the centre data from db
  const [reviewData, setReviewData] = useState(""); // to get the review data from db

  const handleBook = () => {
    if (isLoggedIn) {
      // Perform add to cart action
    } else {
      // Show login modal or trigger login popup
      setEmailVerification(true);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${config.baseURL}/eventcentre/${id}`); // Replace with your API endpoint
        const jsonData = await res.json();
        setCentreDetails(jsonData);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);

  // to get the  review data from the db and compare it to get the specific reviews
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${config.baseURL}/review/eventcentre-review/${id}`
        ); // Replace with your API endpoint
        const data = await res.json();
        setReviewData(data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);

  // to move to the review section once a button is clicked
  const reviewSection = () => {
    const section = document.getElementById("reviewSection");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles["details-root"]}>
      <div className={styles["details-header"]}>
        <h1>{centreDetails.name}</h1>
        <div className={styles["details-sub-header"]}>
          <b>
            <AiFillStar />
            <span className={styles["rating"]}>{centreDetails.rating} .</span>
            <span className={styles["review-btn"]} onClick={reviewSection}>
              {reviewData.length} Reviews
            </span>
            .
          </b>

          <span className={styles["location"]}>
            {centreDetails.city}, {centreDetails.state}
          </span>
        </div>
      </div>
      <div className={styles["details-content"]}>
        <DetailsGallery />
        <div className={styles["details-card"]}>
          <div className={styles["left"]}>
            <DetailsCardLeft centreDetails={centreDetails} />
          </div>
          <div className={styles["right"]}>
            <DetailsCardRight
              centreDetails={centreDetails}
              reviewData={reviewData}
              id={id}
            />
          </div>
        </div>
        <hr style={{ marginTop: "20px", marginBottom: "20px" }} />
        <div className={styles["review-section"]}>
          <ReviewSection
            centreDetails={centreDetails}
            reviewData={reviewData}
          />
        </div>
      </div>
      <div className={styles["map-container"]}>
        <MapSection centreDetails={centreDetails} />
      </div>
      <hr  />
      <div className={styles["contact-container"]}>
        <ContactOwner centreDetails={centreDetails} reviewData={reviewData} />
      </div>
      <hr  />
      <div className="things-to-know-section">
        <ThingsToKnow />
      </div>
      <LoginModal
        emailVerification={emailVerification}
        setEmailVerification={setEmailVerification}
      />
    </div>
  );
}
