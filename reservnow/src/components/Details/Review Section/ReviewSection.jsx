"use client";

import { useState } from "react";
import { AiFillStar } from "react-icons/ai";

import "./reviewSection.css";
import { Rating } from "@/src/components/Ratings Star/RatingStar";
import { ReviewPopup } from "@/src/components/modals/Popup/Popup";

const ReviewSection = ({ review, eventCentre }) => {
  const [Review, setReview] = useState(false); // to activate the review popup

  return (
    <div className="review-section-root">
      <div className="detail-review-section" id="reviewSection">
        <div className="review-section-header">
          <h2>Reviews</h2>
          <div className="review">
            <b>
              <AiFillStar />
              <span
                className="rating"
                style={{ marginLeft: "5px", marginRight: "5px" }}
              >
                {eventCentre.rating} .
              </span>
              {review.length} Reviews
            </b>
          </div>
        </div>
        <div className="review-section-content">
          {review ? (
            review.length === 0 ? (
              <div
                style={{
                  width: "100%",
                  textAlign: "center",
                  marginTop: "10%",
                  marginBottom: "10%",
                  fontSize: "20px",
                }}
              >
                No Reviews
              </div>
            ) : (
              review.map((item, index) => (
                <div className="review-card" key={index}>
                  <div className="review-card-header">
                    <img src="/images/details.jpg" alt="" />
                    <div className="text">
                      <p>{item.userId.name}</p>
                      <p>
                        {new Date(item.createdAt).toLocaleString("default", {
                          month: "long",
                        })}{" "}
                        {new Date(item.createdAt).getDate()}
                      </p>
                    </div>
                  </div>
                  <div className="review-card-content">{item.comment}</div>
                  {item && item.comment.length > 150 && (
                    <button
                      className="show-more-btn"
                      onClick={() => setReview(true)}
                    >
                      Show More
                    </button>
                  )}
                  <div className="review-card-footer">Rating</div>
                  <Rating value={item.rating} />
                  <ReviewPopup trigger={Review} setTrigger={setReview}>
                    <div className="review-card-popup">
                      <div className="review-card-header">
                        <img src="/images/details.jpg" alt="" />
                        <div className="text">
                          <p>{item.userId.name}</p>
                          <p>
                            {new Date(item.createdAt).toLocaleString(
                              "default",
                              {
                                month: "long",
                              }
                            )}{" "}
                            {new Date(item.createdAt).getDate()}
                          </p>
                        </div>
                      </div>
                      <div
                        className="review-card-content"
                        style={{
                          width: "100%",
                        }}
                      >
                        {item.comment}
                      </div>

                      <div
                        className="review-card-footer"
                        style={{
                          fontWeight: "bold",
                          marginBottom: "10px",
                          marginTop: "2%",
                        }}
                      >
                        Rating
                      </div>
                      <Rating value={item.rating} />
                    </div>
                  </ReviewPopup>
                </div>
              ))
            )
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
