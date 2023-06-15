"use client";

import styles from "./page.module.css";
import { useEffect, useRef, useState } from "react";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { IoIosShare } from "react-icons/io";
import { TbCurrencyNaira } from "react-icons/tb";
import { GrCapacity } from "react-icons/gr";
import { Rating } from "@/components/Ratings Star/RatingStar";
import { ReviewPopup } from "@/components/modals/Popup/Popup";
import { useAuth } from "@/Context/context";
import LoginModal from "@/components/modals/Login Modal/LoginModal";
import { useSearchParams } from 'next/navigation'

export default function Details() {
  const searchParams = useSearchParams()
  const id = searchParams.get('id')

  console.log(id);
  const { state } = useAuth();
  const { isLoggedIn } = state;
  const [emailVerification, setEmailVerification] = useState(false);
  const [centreDetails, setCentreDetails] = useState(""); // to get the centre data from db
  const [reviewData, setReviewData] = useState(""); // to get the review data from db
  const reservNowPrice = 270; //reserve now price

  const handleBook = () => {
    if (isLoggedIn) {
      // Perform add to cart action
    } else {
      // Show login modal or trigger login popup
      setEmailVerification(true);
    }
  };

  const [Review, setReview] = useState(false);
  const [isOverflowed, setIsOverflowed] = useState(false);
  const ratingValue = 3;

  const contentRef = useRef(null);

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

  //Form Validation
  //to set the duration between the start date and end date that is if it is 7 the duration is 7 days from the start date
  const maxDuration = 14;
  // to set the minimum time in the start time when the start date is the current date
  const minStartTime = 2;
  // to set the minimum end time once the start time has been picked from the current date
  const minEndTime = 2;

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const calculateMinimumStartTime = () => {
    const now = new Date();
    now.setHours(now.getHours() + minStartTime); // minimum start time
    const minimumHour = now.getHours().toString().padStart(2, "0");
    const minimumMinute = now.getMinutes().toString().padStart(2, "0");
    return `${minimumHour}:${minimumMinute}`;
  };

  const handleStartDateChange = (event) => {
    const selectedStartDate = event.target.value;

    // Clear the input values in the end date, start time, and end time fields
    setEndDate("");
    setStartTime("");
    setEndTime("");

    setStartDate(selectedStartDate);

    // Check if the selected start date is today's date
    const isToday =
      selectedStartDate === new Date().toISOString().split("T")[0];

    // Update the minimum selectable time for the start time input
    const startTimeInput = document.getElementById("startTimeInput");
    if (startTimeInput) {
      startTimeInput.min = isToday ? getCurrentTime() : "";
      startTimeInput.value = isToday ? getCurrentTime() : "";
    }

    // Calculate the maximum selectable end date based on the selected start date
    const maxEndDate = new Date(selectedStartDate);
    maxEndDate.setDate(maxEndDate.getDate() + maxDuration); //maximum duration

    // Update the maximum selectable date for the end date input
    const endDateInput = document.getElementById("endDateInput");
    if (endDateInput) {
      endDateInput.min = selectedStartDate;
      endDateInput.max = maxEndDate.toISOString().split("T")[0];
    }
  };

  const handleEndDateChange = (event) => {
    const selectedEndDate = event.target.value;
    setEndDate(selectedEndDate);

    // Clear the input value in the end time field
    setEndTime("");

    // Check if the selected end date is the current date
    const isToday = selectedEndDate === new Date().toISOString().split("T")[0];

    // Update the minimum selectable time for the end time input
    const endTimeInput = document.getElementById("endTimeInput");
    if (endTimeInput) {
      const minimumEndTime = isToday ? calculateMinimumEndTime() : "";
      endTimeInput.min = minimumEndTime;
      endTimeInput.value = minimumEndTime;
    }
  };

  const handleStartTimeChange = (event) => {
    const selectedTime = event.target.value;

    if (startDate === new Date().toISOString().split("T")[0]) {
      // Check if the selected start date is the current date
      const minimumStartTime = calculateMinimumStartTime();

      if (selectedTime < minimumStartTime) {
        // Prevent selecting a time earlier than the minimum start time
        return;
      }
    }

    setStartTime(selectedTime);
  };

  const handleEndTimeChange = (event) => {
    const selectedTime = event.target.value;

    if (
      endDate === new Date().toISOString().split("T")[0] &&
      startDate === new Date().toISOString().split("T")[0]
    ) {
      // Check if the selected end date and start date are both the current date
      const minimumEndTime = calculateMinimumEndTime();

      if (selectedTime < minimumEndTime) {
        // Prevent selecting a time earlier than the minimum end time
        return;
      }
    }

    setEndTime(selectedTime);
  };

  const getCurrentTime = () => {
    const now = new Date();
    const currentHour = now.getHours().toString().padStart(2, "0");
    const currentMinute = now.getMinutes().toString().padStart(2, "0");
    return `${currentHour}:${currentMinute}`;
  };

  const calculateMinimumEndTime = () => {
    const startHour = parseInt(startTime.split(":")[0]);
    const startMinute = parseInt(startTime.split(":")[1]);

    let minimumHour = startHour + minEndTime;
    let minimumMinute = startMinute;
    if (minimumHour >= 24) {
      minimumHour -= 24;
    }

    return `${minimumHour.toString().padStart(2, "0")}:${minimumMinute
      .toString()
      .padStart(2, "0")}`;
  };

  // to calculate the duration and display it on the frontend
  const calculateDuration = () => {
    if (startDate && endDate && startTime && endTime) {
      const startDateTime = new Date(`${startDate}T${startTime}`);
      const endDateTime = new Date(`${endDate}T${endTime}`);

      // Calculate the duration in milliseconds
      const durationMs = endDateTime - startDateTime;

      // Convert the duration from milliseconds to hours
      const durationHours = Math.ceil(durationMs / (1000 * 60 * 60));

      return durationHours;
    }
    return 0;
  };
  const duration = calculateDuration();

  // For booking an event centre
  const [bookingForm, setBookingForm] = useState({
    event_centre_id: "",
    userId: "",
    end_date: "",
    start_date: "",
    duration: "",
    notes: "",
  });

  // to submit the booking request
  const bookingHandleSubmit = async (e) => {
    e.preventDefault();

    const startDateTime = new Date(`${startDate}T${startTime}`);
    const endDateTime = new Date(`${endDate}T${endTime}`);

    // Get the timezone offset in minutes
    const timezoneOffset = startDateTime.getTimezoneOffset();

    // Apply the timezone offset to adjust the date and time
    startDateTime.setMinutes(startDateTime.getMinutes() - timezoneOffset);
    endDateTime.setMinutes(endDateTime.getMinutes() - timezoneOffset);

    const formattedBookingForm = {
      ...bookingForm,
      start_date: startDateTime,
      end_date: endDateTime,
    };

    try {
      const response = await fetch(`${config.baseURL}/booking/newbooking`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formattedBookingForm),
      });

      // Handle response
      const data = await response.json();
      console.log(data);
      window.alert("booking successful");
    } catch (error) {
      window.alert("booking failed");
      console.error(error);
    }
    setBookingForm({
      event_centre_id: id,
      userId: "64808477095b7ab4ace42779",
      end_date: "",
      start_date: "",
      duration: duration,
      notes: "",
    });
  };

  const bookingHandleChange = (e) => {
    setBookingForm((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className={styles["details-root"]}>
      <div className={styles["details-header"]}>
        <h1>{centreDetails.name}</h1>
        <div className={styles["details-sub-header"]}>
          <div className={styles["left-side"]}>
            <b>
              <AiFillStar />
              <span className={styles["rating"]}>{centreDetails.rating} .</span>
              <button onClick={reviewSection}>
                {reviewData.length} Reviews
              </button>
            </b>
            <span className={styles["location"]}>
              {centreDetails.city}, {centreDetails.state}
            </span>
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
                {centreDetails && centreDetails.venueOwner && (
                  <p style={{ fontSize: "20px", fontWeight: "600" }}>
                    {centreDetails.venueOwner.name}
                  </p>
                )}
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
                />
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
                  {centreDetails.address}, {centreDetails.city},{" "}
                  {centreDetails.state}
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
                  {centreDetails.capacity}
                </div>
              </div>
            </div>
            <hr className={styles["line"]} />
            <div className={styles["details-card-footer"]}>
              {centreDetails.description} <br />
            </div>
          </div>
          <div className={styles["details-card-right"]}>
            <div className={styles["details-card-right-inner"]}>
              <div className={styles["card-right-header"]}>
                <div
                  className={styles["price"]}
                  style={{
                    fontWeight: "600",
                    fontSize: "20px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <TbCurrencyNaira /> {centreDetails.price}
                </div>
                <div className={styles["review"]} style={{ fontSize: "14px" }}>
                  <b>
                    <AiFillStar />
                    <span
                      className={styles["rating"]}
                      style={{ marginLeft: "5px" }}
                    >
                      {centreDetails.rating} .
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
                      {reviewData.length} Reviews
                    </button>
                  </b>
                </div>
              </div>
              <div className={styles["card-right-content"]}>
                <div className={styles["form-content"]}>
                  <label htmlFor="" style={{ fontSize: "14px" }}>
                    Start Date
                  </label>
                  <input
                    id="startDateInput"
                    type="date"
                    name="startDate"
                    min={new Date().toISOString().split("T")[0]}
                    value={startDate}
                    onChange={handleStartDateChange}
                  />
                </div>
                <div className={styles["form-content"]}>
                  <label htmlFor="" style={{ fontSize: "14px" }}>
                    End Date
                  </label>
                  <input
                    type="date"
                    id="endDateInput"
                    name="endDate"
                    value={endDate}
                    onChange={handleEndDateChange}
                  />
                </div>
                <div className={styles["form-content"]}>
                  <label htmlFor="" style={{ fontSize: "14px" }}>
                    Start Time
                  </label>
                  <input
                    id="startTimeInput"
                    type="time"
                    name="startTime"
                    min={getCurrentTime()}
                    value={startTime}
                    onChange={handleStartTimeChange}
                  />
                </div>
                <div className={styles["form-content"]}>
                  <label htmlFor="" style={{ fontSize: "14px" }}>
                    End Time
                  </label>
                  <input
                    id="endTimeInput"
                    type="time"
                    name="endTime"
                    min=""
                    value={endTime}
                    onChange={handleEndTimeChange}
                  />
                </div>
                <div
                  className={styles["form-content"]}
                  style={{ width: "100%" }}
                >
                  <label
                    htmlFor=""
                    style={{ fontSize: "14px" }}
                    className={styles["disJusSpaBet"]}
                  >
                    Notes{" "}
                    <div style={{ fontSize: "12px", color: "grey" }}>
                      *optional
                    </div>
                  </label>
                  <input
                    type="text"
                    name="notes"
                    style={{
                      width: "100%",
                      paddingLeft: "0",
                      borderBottomColor: "black",
                      borderBottomWidth: "1px",
                      borderBottomStyle: "solid",
                      outline: "none",
                    }}
                    value={bookingForm.notes}
                    onChange={bookingHandleChange}
                  />
                </div>
              </div>
              <div className={styles["book-btn"]}>
                <button onClick={bookingHandleSubmit}>Book</button>
              </div>
              <div
                className={styles["card-right-footer"]}
                style={{ marginTop: "4%", fontSize: "14px", color: "grey" }}
              >
                {startTime && endTime && startDate && endDate && (
                  <>
                    <div style={{ textAlign: "center" }}>
                      You won't be charged yet
                    </div>
                    <div className={styles["compilation"]}>
                      <button>
                        {centreDetails.price} x {duration} hours
                      </button>
                      <div className={styles["disAlCenter"]}>
                        <TbCurrencyNaira /> {centreDetails.price * duration}
                      </div>
                    </div>
                    <div className={styles["compilation"]}>
                      <button>Reserve Now Fee</button>
                      <div className={styles["disAlCenter"]}>
                        <TbCurrencyNaira /> {reservNowPrice}
                      </div>
                    </div>
                    <hr style={{ marginTop: "10%" }} />
                    <div className={styles["total"]}>
                      <div>Total</div>
                      <div className={styles["disAlCenter"]}>
                        <TbCurrencyNaira />{" "}
                        {reservNowPrice + centreDetails.price * duration}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className={styles["detail-review-section"]} id="reviewSection">
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
                  {centreDetails.rating} .
                </span>
                {reviewData.length} Reviews
              </b>
            </div>
          </div>
          <div className={styles["review-section-content"]}>
            {reviewData &&
              reviewData.map((item, index) => (
                <div className={styles["review-card"]} key={index}>
                  <div className={styles["review-card-header"]}>
                    <img
                      src="/images/details.jpg"
                      alt=""
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                      }}
                    />
                    <div
                      className={styles["text"]}
                      style={{ color: "grey", marginLeft: "10px" }}
                    >
                      <p>{item.userId.name}</p>
                      <p>
                        {new Date(item.createdAt).toLocaleString("default", {
                          month: "long",
                        })}{" "}
                        {new Date(item.createdAt).getDate()}
                      </p>
                    </div>
                  </div>
                  <div
                    className={styles["review-card-content"]}
                    style={{
                      position: "relative",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      height: "60px",
                    }}
                  >
                    {item.comment}
                  </div>
                  {item && item.comment.length > 150 && (
                    <button
                      className={styles["show-more-btn"]}
                      onClick={() => setReview(true)}
                    >
                      Show More
                    </button>
                  )}
                  <div
                    className={styles["review-card-footer"]}
                    style={{ fontWeight: "bold", marginBottom: "10px" }}
                  >
                    Rating
                  </div>
                  <Rating value={item.rating} />
                  <ReviewPopup trigger={Review} setTrigger={setReview}>
                    <div className={styles["review-card-popup"]}>
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
                          style={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "50%",
                          }}
                        />
                        <div
                          className={styles["text"]}
                          style={{ color: "grey", marginLeft: "10px" }}
                        >
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
                        className={styles["review-card-content"]}
                        style={{
                          width: "100%",
                        }}
                      >
                        {item.comment}
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
                      <Rating value={item.rating} />
                    </div>
                  </ReviewPopup>
                </div>
              ))}
          </div>
        </div>
      </div>
      <LoginModal
        emailVerification={emailVerification}
        setEmailVerification={setEmailVerification}
      />
    </div>
  );
}
