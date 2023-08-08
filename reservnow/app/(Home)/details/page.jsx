"use client";

import styles from "./page.module.css";
import React from "react";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { useGetReviewQuery } from "@/features/review/reviewSlice";
import { Providers } from "@/Provider";

import DetailsGallery from "@/components/Details/Details Gallery/DetailsGallery";
import DetailsInformation from "@/components/Details/Details Information/DetailsInformation";
import BookingForm from "@/components/Details/Booking Form/BookingForm";
import MapSection from "@/components/Details/Map Section/MapSection";
import ReviewSection from "@/components/Details/Review Section/ReviewSection";
import ContactOwner from "@/components/Details/Contact Venue Owner/ContactOwner";
import ThingsToKnow from "@/components/Details/Things To Know/ThingsToKnow";
import LoginModal from "@/components/modals/Auth Modal/LoginModal";

import { AiFillStar } from "react-icons/ai";
import { DetailsSkeleton } from "@/components/Skeleton/Skeleton";
import { useGetEventCentreQuery } from "@/features/eventCenter/eventCenterSlice";

export default function Details() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [emailVerification, setEmailVerification] = useState(false);

  const {
    data: eventCentre,
    loading: eventCentreLoading,
    isSuccess: eventCentreSuccess,
    isError: eventCentreError,
    error: eventCentreErrorData,
  } = useGetEventCentreQuery(id);

  const {
    data: review,
    loading: reviewLoading,
    isSuccess: reviewSuccess,
    isError: reviewError,
    error: reviewErrorData,
  } = useGetReviewQuery(id);

  const [isLoading, setIsLoading] = useState(true);

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
      if (isLoading === true && eventCentreSuccess === true) {
        window.scrollTo(0, scrollPosition);
      }
    };

    if (isLoading === true && eventCentreSuccess === true) {
      scrollPosition = window.scrollY;
      document.body.classList.add("popup-open");
      document.body.style.paddingRight = `${window.innerWidth - document.documentElement.clientWidth
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
  }, [isLoading]);

  return (
    <Providers>
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
            <LoginModal
              emailVerification={emailVerification}
              setEmailVerification={setEmailVerification}
            />
          </div>
        )}
      </div>
    </Providers>
  );
}
