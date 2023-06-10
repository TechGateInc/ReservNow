"use client";

import styles from "./page.module.css";
import { useEffect, useRef, useState } from "react";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { IoIosShare } from "react-icons/io";
import { IoArrowForwardOutline } from "react-icons/io5";
import { GrCapacity } from "react-icons/gr";
import { Rating } from "@/components/Ratings Star/RatingStar";
import { ReviewPopup } from "@/modals/Popup/Popup";

export default function Details() {
  const [Review, setReview] = useState(false);
  const [isOverflowed, setIsOverflowed] = useState(false);
  const ratingValue = 3;

  const contentRef = useRef(null);

  useEffect(() => {
    const contentElement = contentRef.current;

    if (contentElement.scrollHeight > contentElement.clientHeight) {
      contentElement.classList.add(styles["overflow-ellipsis"]);
      setIsOverflowed(true);
    } else {
      contentElement.classList.remove(styles["overflow-ellipsis"]);
    }
  }, []);

  return (
    <div className={styles["details-root"]}>
      <div className={styles["details-header"]}>
        <h1>Romantic Staycation-PrivateSunset Pool@megananda</h1>
        <div className={styles["details-sub-header"]}>
          <div className={styles["left-side"]}>
            <b>
              <AiFillStar />
              <span className={styles["rating"]}> 4.19.</span>
              <button>312 Reviews</button>
            </b>
            <span className={styles["location"]}>Ubud, Bali, Indonesia</span>
          </div>
          <div className={styles["right-side"]}>
            <button>
              <IoIosShare />
              <span className={styles["share"]}>Share</span>
            </button>
            <button>
              <AiOutlineHeart />
              <span className={styles["save"]}>Save</span>
            </button>
          </div>
        </div>
      </div>
      <div className={styles["details-content"]}>
        <div className={styles["details-image-container"]}>
          <div className={styles["details-image-right"]}>
            <img src="/images/details.jpg" alt="" />
          </div>
          <div className={styles["details-image-left"]}>
            <div className={styles["details-image-card"]}>
              <img src="/images/details.jpg" alt="" />
            </div>
            <div className={styles["details-image-card"]}>
              <img
                src="/images/details.jpg"
                alt=""
                style={{ borderTopRightRadius: "5px" }}
              />
            </div>
            <div className={styles["details-image-card"]}>
              <img src="/images/details.jpg" alt="" />
            </div>
            <div className={styles["details-image-card"]}>
              <img
                src="/images/details.jpg"
                alt=""
                style={{ borderEndEndRadius: "5px" }}
              />
            </div>
          </div>
        </div>
        <div className={styles["details-card"]}>
          <div className={styles["details-card-left"]}>
            <div className={styles["details-card-header"]}>
              <div className={styles["card-left"]}>
                <p style={{ fontSize: "20px", fontWeight: "600" }}>
                  Entire villa hosted by Mega
                </p>
              </div>
              <div className={styles["card-right"]}>
                <img
                  src="/images/details.jpg"
                  alt=""
                  style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                />
              </div>
            </div>
            <hr className={styles["line"]} />
            <div className={styles["details-card-middle"]}>
              <div className={styles["card-middle-content"]}>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADpUlEQVR4nO2bSWgUQRSGv8QxLvGiGHcwCtGLoggaPQiakxuCiCBichR3Ja4XVwQVhaBEcMWDC6gEPLhBwB3cEHORuOMxcTcuBxO3gmooOk6mq7u6q3rMBw+GyfRf738z1VXVVYFOOkmaPsBkoApYIqNKvtebPKUU2AI0AD+B31lC/O0RsAkYSh4wDDgFtHVgOlu0AifSWogCYA3wPYRxf3wDVkvNVNATOG/AuD/qgB44TjFwKwbzXtyUBXaSLsDlGM17cQEoxEG2JWDei804xmjgR4IFECPEGBziaoLmvajHESZZMO9FOQ5w3GIBjto2nwE+h0j8GjBXTpFL5evrIXQ+ytHHGhMN3sELQo4kE7DIYs1kzwXQrNPUXIRF9mgmOzaA5jhNzd1Y5IhGoi0BNUVX+KKhexiLHNNItFlDt1lDV+Rgjb0aiYqHHX0DaJYAvzR0RTe0xkbN/lodQHOdpuZ6LDJLM1kxZxiVY03Roqk5A4sM0UxWxAdgoW8C00U+GP0YQm8QlnkdImkRb+WCpl6+DqPxCgc4GDJ5E1GLA8y2WACr/d+jCHhnwfx72bYTHLJQgAM4RLmFAozHMW4naP4GDjInwQKIG69zFAKNCZh/6uq+gGBpAgWw+gAkF2Lb6k2M5pvSsD+4KsYCLCMFFAHPYzD/0qWJTy7mx1CAeaSIAuCOQfP303RAwmOqwQJMwYGDD70DhH98PmvA/BmfZmHAXETOxngSMFlxLkhlIPApgnnxeGywT3NtwGufm+o2EzQTFqZVqiMUYKVPq79mQY0smPYpgjXArhxR8Y8N1IYQ5h/+Y+OzIkD7NYqGyD0SGTn78u7EUTZRdc4KtkX89u5LnSbpITTTO/g5xrmJstPgbHRaFKGTyjcyIGJS3YDHAcyLFWX3iG31k+eIfsvTpqEoVjYpxfE3E+TqCm0G9/uvSM2vQK8wAguUxCoxx84OCrDDYDuViq7wos0l5axuqApmIZNlmvwA6GqwnWL57Qvti7oXlyh9SJz2Ns1w39ki0dVGxNDOaanfKucQgVmZwOZDVUxdTGWm0sYKnQvvyYveGP5Z+jkW5S4dsLt5hy3uBr2oLMG9tx4JPOKqVfwIbznZqlwghq20o55kFf+2k5On8sMv0vgQIgvPgq4Qy5VqiUOL+cJ2xVeHE639ygdHkj+UBVkhZpQ7ZqMcq/MpvF2r5mwrxBkh1uxpDbHKbccpBxJLKsQqtx3LgQ3/SQivnXTytwJ/AAqwOJneQhDHAAAAAElFTkSuQmCC"
                  alt="loaction icon"
                  style={{ height: "30px", width: "30px" }}
                />{" "}
                <div
                  className={styles["content-text"]}
                  style={{ marginLeft: "20px" }}
                >
                  <div
                    className={styles["address-title"]}
                    style={{ fontWeight: "600", fontSize: "15px" }}
                  >
                    Address
                  </div>
                  No 24, Lanre Awolokun Street, Gbagada Phase 2, Lagos State
                </div>
              </div>
              <div className={styles["card-middle-content"]}>
                <GrCapacity style={{ fontSize: "30px" }} />
                <div
                  className={styles["content-text"]}
                  style={{ marginLeft: "20px" }}
                >
                  <div
                    className={styles["address-title"]}
                    style={{ fontWeight: "600", fontSize: "15px" }}
                  >
                    Capacity
                  </div>
                  300 to 400
                </div>
              </div>
            </div>
            <hr className={styles["line"]} />
            <div className={styles["details-card-footer"]}>
              Are you bored and tired of quarantine and longing for a new place
              and a new atmosphere to just break away for a couple of days, week
              or month? the megananda has the answer, Our private pool villa has
              a spectacular Sunset Private Infinity Pool overlooking to the
              green rice field view,Perfect combination of the comfort of modern
              living and the exotic of tropical living with touches of Balinese
              art philosophy, Its dedicated for the one who appreciate quality
              time and love to blend with nature. <br />
            </div>
          </div>
          <div className={styles["details-card-right"]}>
            <div className={styles["card-right-header"]}>
              <div
                className={styles["price"]}
                style={{ fontWeight: "600", fontSize: "20px" }}
              >
                $84
              </div>
              <div className={styles["review"]} style={{ fontSize: "14px" }}>
                <b>
                  <AiFillStar />
                  <span
                    className={styles["rating"]}
                    style={{ marginLeft: "5px" }}
                  >
                    4.19.
                  </span>
                  <button
                    style={{
                      border: "none",
                      background: "white",
                      textDecoration: "underline",
                      marginLeft: "5px",
                      color: "grey",
                    }}
                  >
                    312 Reviews
                  </button>
                </b>
              </div>
            </div>
            <div className={styles["card-right-content"]}>
              <div className={styles["form-content"]}>
                <label htmlFor="" style={{ fontSize: "14px" }}>
                  Start Time
                </label>
                <input type="time" />
              </div>
              <div className={styles["form-content"]}>
                <label htmlFor="" style={{ fontSize: "14px" }}>
                  End Time
                </label>
                <input type="time" />
              </div>
              <div className={styles["form-content"]} style={{ width: "100%" }}>
                <label htmlFor="" style={{ fontSize: "14px" }}>
                  Notes
                </label>
                <input
                  type="text"
                  style={{
                    width: "100%",
                    paddingLeft: "0",
                    borderBottomColor: "black",
                    borderBottomWidth: "1px",
                    borderBottomStyle: "solid",
                    outline: "none",
                  }}
                />
              </div>
            </div>
            <div className={styles["book-btn"]}>
              <button>Book</button>
            </div>
          </div>
        </div>
        <hr />
        <div className={styles["detail-review-section"]}>
          <div className={styles["review-section-header"]}>
            <h2>Reviews</h2>
            <div
              className={styles["review"]}
              style={{
                fontSize: "18px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <b>
                <AiFillStar />
                <span
                  className={styles["rating"]}
                  style={{ marginLeft: "5px", marginRight: "5px" }}
                >
                  4.19.
                </span>
                312 Reviews
              </b>
            </div>
          </div>
          <div className={styles["review-section-content"]}>
            <div className={styles["review-card"]}>
              <div className={styles["review-card-header"]}>
                <img
                  src="/images/details.jpg"
                  alt=""
                  style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                />
                <div
                  className={styles["text"]}
                  style={{ color: "grey", marginLeft: "10px" }}
                >
                  <p>Olusanya Jolaoluwa</p>
                  <p>May 23</p>
                </div>
              </div>
              <div
                className={styles["review-card-content"]}
                style={{
                  width: "100%",
                  height: "60px",
                }}
                ref={contentRef}
              >
                it's our first time in Bali and we stayed at Meganandas Villa.
                the villa is stunning! it was private and beautiful. the staff
                are outstanding. both drivers called Made were very lovely, very
                helpful and went above and beyond to ensure we are happy. I
                really hope the staff get lots of business and get the promotion
                they deserve as they work very hard and go above and beyond
                their job description. this villa is outstanding because of the
                wonderful staff who keep the property looking pristine and
                giving guests the best service possible. I am thoroughly
                impressed and will be referring family and friends to this villa
                on their visit to Bali. thank you so much and very best wishes.
              </div>
              {isOverflowed && (
                <button
                  className={styles["show-more-btn"]}
                  onClick={() => setReview(true)}
                >
                  <span
                    style={{
                      textDecoration: "underline",
                      fontWeight: "bold",
                      marginRight: "5px",
                    }}
                  >
                    Show More
                  </span>{" "}
                  <IoArrowForwardOutline />
                </button>
              )}
              <div
                className={styles["review-card-footer"]}
                style={{ fontWeight: "bold", marginBottom: "10px" }}
              >
                Rating
              </div>
              <Rating value={ratingValue} />
            </div>
          </div>
          <ReviewPopup trigger={Review} setTrigger={setReview}>
            <div className={styles["review-card"]}>
              <div
                className={styles["review-card-header"]}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "2%",
                  marginTop: "2%",
                }}
              >
                <img
                  src="/images/details.jpg"
                  alt=""
                  style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                />
                <div
                  className={styles["text"]}
                  style={{ color: "grey", marginLeft: "10px" }}
                >
                  <p>Olusanya Jolaoluwa</p>
                  <p>May 23</p>
                </div>
              </div>
              <div
                className={styles["review-card-content"]}
                style={{
                  width: "100%",
                }}
              >
                it's our first time in Bali and we stayed at Meganandas Villa.
                the villa is stunning! it was private and beautiful. the staff
                are outstanding. both drivers called Made were very lovely, very
                helpful and went above and beyond to ensure we are happy. I
                really hope the staff get lots of business and get the promotion
                they deserve as they work very hard and go above and beyond
                their job description. this villa is outstanding because of the
                wonderful staff who keep the property looking pristine and
                giving guests the best service possible. I am thoroughly
                impressed and will be referring family and friends to this villa
                on their visit to Bali. thank you so much and very best wishes.
              </div>

              <div
                className={styles["review-card-footer"]}
                style={{
                  fontWeight: "bold",
                  marginBottom: "10px",
                  marginTop: "2%",
                }}
              >
                Rating
              </div>
              <Rating value={ratingValue} />
            </div>
          </ReviewPopup>
        </div>
      </div>
    </div>
  );
}
