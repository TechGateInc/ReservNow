"use client";

import { useState } from "react";
import { BsClipboardCheck } from "react-icons/bs";
import { BsCalendarEvent } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { MdEditNote } from "react-icons/md";
// import {LuEdit3} from "react-icons/lu"
import React from "react";
import { NextPage } from "next";

import "./reviewListings.css";
import { ReviewListingModal } from "@/src/components/modals/Review Listing Modal/ReviewListingModal";

interface ReviewListingsProps {
  selectedFiles: any;
  name: any;
  price: any;
  description: any;
  address: any;
}

const ReviewListings: NextPage<ReviewListingsProps> = ({
  selectedFiles,
  name,
  price,
  description,
  address,
}) => {
  const firstImage = selectedFiles[0];
  const [isReview, setIsReview] = useState(false);
  const formattedPrice = new Intl.NumberFormat().format(price);

  return (
    <div className="review-listing-root">
      <div className="review-listing-container">
        <div className="review-listing-header">Review your listing</div>
        <div className="review-listing-sub-header">
          Here's what we'll show to guests. Make sure everything looks good.
        </div>
        <div className="review-listing-content">
          <div className="left">
            <div
              className="review-card"
              onClick={() => setIsReview(true)}
              style={{ cursor: "pointer" }}
            >
              <div className="show-preview-header">
                <div className="text">Show Preview</div>
              </div>
              <div className="image-container">
                <img src={URL.createObjectURL(firstImage)} alt="First Image" />
              </div>
              <div className="content">
                <div className="top">
                  <div>{name}</div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    New <AiFillStar style={{ marginLeft: "5px" }} />
                  </div>
                </div>
                <div className="bottom">
                  ₦{formattedPrice}
                  <div style={{ marginLeft: "5px" }}>per hour</div>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="review-listing-header2">What's next?</div>
            <div className="review-listing-content2">
              <div className="content">
                <div className="text">
                  <BsClipboardCheck style={{ fontSize: "35px" }} />
                  <div
                    style={{
                      fontWeight: "600",
                      fontSize: "18px",
                      marginLeft: "10px",
                    }}
                  >
                    Confirm a few details and publish
                  </div>
                </div>
                <div
                  style={{
                    color: "grey",
                    marginLeft: "45px",
                    fontSize: "14px",
                  }}
                >
                  We’ll let you know if you need to verify your identity or
                  register with the local government.
                </div>
              </div>
              <div className="content">
                <div className="text">
                  <BsCalendarEvent style={{ fontSize: "35px" }} />
                  <div
                    style={{
                      fontWeight: "600",
                      fontSize: "18px",
                      marginLeft: "10px",
                    }}
                  >
                    Set up your calendar
                  </div>
                </div>
                <div
                  style={{
                    color: "grey",
                    marginLeft: "45px",
                    fontSize: "14px",
                  }}
                >
                  Choose which dates your listing is available. It will be
                  visible 24 hours after you publish.
                </div>
              </div>
              <div className="content">
                <div className="text">
                  {/* <LuEdit3 style={{ fontSize: "35px" }} /> */}
                  <MdEditNote style={{ fontSize: "35px" }}/>
                  <div
                    style={{
                      fontWeight: "600",
                      fontSize: "18px",
                      marginLeft: "10px",
                    }}
                  >
                    Adjust your settings
                  </div>
                </div>
                <div
                  style={{
                    color: "grey",
                    marginLeft: "45px",
                    fontSize: "14px",
                  }}
                >
                  Set house rules, select a cancellation policy, choose how
                  guests book, and more.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ReviewListingModal
        trigger={isReview}
        setTrigger={setIsReview}
        firstImage={firstImage}
        name={name}
        description={description}
        address={address}
      />
    </div>
  );
};

export default ReviewListings;