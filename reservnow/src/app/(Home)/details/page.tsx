// Import necessary types from Next.js
"use client"
import { NextPage } from "next";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { AiFillStar } from "react-icons/ai";

import styles from "./page.module.css";
import DetailsGallery from "@/src/components/Details/Details Gallery/DetailsGallery";
import DetailsInformation from "@/src/components/Details/Details Information/DetailsInformation";
import BookingForm from "@/src/components/Details/Booking Form/BookingForm";
import MapSection from "@/src/components/Details/Map Section/MapSection";
import ReviewSection from "@/src/components/Details/Review Section/ReviewSection";
import ContactOwner from "@/src/components/Details/Contact Venue Owner/ContactOwner";
import ThingsToKnow from "@/src/components/Details/Things To Know/ThingsToKnow";
import { DetailsSkeleton } from "@/src/components/Skeleton/Skeleton";
import { useGetEventCentreQuery } from "@/src/api/features/eventCenter/eventCenterSlice";
import { useGetReviewQuery } from "@/src/api/features/Details/reviewSlice";
import React from "react";
import { isUserLoggedIn } from "@/src/api/auth";

interface DetailsProps {}

const Details: NextPage<DetailsProps> = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const checkUserLoggedIn = isUserLoggedIn()
  

  const {
    data: eventCentre,
    isLoading: eventCentreLoading,
    isSuccess: eventCentreSuccess,
  } = useGetEventCentreQuery(id);

  const {
    data: review,
    isLoading: reviewLoading,
    isSuccess: reviewSuccess,
  } = useGetReviewQuery(id);
  

  // to move to the review section once a button is clicked
  const reviewSection = () => {
    const section = document.getElementById("reviewSection");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    let scrollPosition = 0;

    const handleScroll = () => {
      if (eventCentreLoading && reviewLoading && eventCentreSuccess) {
        window.scrollTo(0, scrollPosition);
      }
    };

    if (eventCentreLoading && reviewLoading && eventCentreSuccess) {
      scrollPosition = window.scrollY;
      document.body.classList.add("popup-open");
      document.body.style.paddingRight = `${
        window.innerWidth - document.documentElement.clientWidth
      }px`;
      window.addEventListener("scroll", handleScroll);
      return () => {
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      document.body.classList.remove("popup-open");
    }
  }, [eventCentreLoading]);

  return (
    <div className={styles["details-root"]}>
      {eventCentreSuccess === false ? (
        <DetailsSkeleton />
      ) : (
        <div className={styles["details-root-cont"]}>
          <div className={styles["details-header"]}>
            <h1>{eventCentre.name}</h1>
            <div className={styles["details-sub-header"]}>
              <b>
                <AiFillStar />
                <span className={styles["rating"]}>{eventCentre.rating} .</span>
                <span className={styles["review-btn"]} onClick={reviewSection}>
                  {review?.length} Reviews
                </span>
                .
              </b>

              <span className={styles["location"]}>
                {eventCentre.city}, {eventCentre.state}
              </span>
            </div>
          </div>
          <div className={styles["details-content"]}>
            <DetailsGallery />
            <div className={styles["details-card"]}>
              <div className={styles["left"]}>
                <DetailsInformation eventCentre={eventCentre} />
              </div>
              <div className={styles["right"]}>
                <BookingForm
                  eventCentre={eventCentre}
                  review={review}
                  id={id}
                  checkUserLoggedIn={checkUserLoggedIn}
                />
              </div>
            </div>
            <hr style={{ marginTop: "20px", marginBottom: "20px" }} />
            <div className={styles["review-section"]}>
              <ReviewSection eventCentre={eventCentre} review={review} />
            </div>
          </div>
          <div className={styles["map-container"]}>
            <MapSection eventCentre={eventCentre} />
          </div>
          <hr />
          <div className={styles["contact-container"]}>
            <ContactOwner eventCentre={eventCentre} review={review} />
          </div>
          <hr />
          <div className="things-to-know-section">
            <ThingsToKnow />
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;