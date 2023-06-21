"use client";

import "./detailsCardRight.css";
import { useEffect, useRef, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { TbCurrencyNaira } from "react-icons/tb";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import customParseFormat from "dayjs/plugin/customParseFormat";
import localizedFormat from "dayjs/plugin/localizedFormat";
import config from "@/config";
import { duration } from "@mui/material";

const DetailsCardRight = ({ centreDetails, reviewData, id }) => {
  const reservNowPrice = 270; //reserve now price
  const minStart = 2; // the minimum start time
  const minEnd = 1; // the minimum end time
  const Days = 7; // the maximum duration between start date and end date
  const [duration, setDuration] = useState(0);
  const [start, setStart] = useState(
    dayjs().add(minStart, "hour").add(1, "minutes")
  );
  const [end, setEnd] = useState("");

  // Import the necessary Day.js plugins
  dayjs.extend(utc);
  dayjs.extend(timezone);
  dayjs.extend(customParseFormat);
  dayjs.extend(localizedFormat);

  // Get the current date and time
  const currentDateTime = dayjs();

  // Calculate the minimum selectable date and time
  const minStartDateTime = currentDateTime.add(minStart, "hour");

  // Function to calculate the duration in hours
  const calculateDurationInHours = (startDate, endDate) => {
    const durationInMilliseconds = endDate.diff(startDate);
    const durationInHours = Math.floor(
      durationInMilliseconds / (1000 * 60 * 60)
    );
    return durationInHours;
  };

  // Function to handle the start date and time change
  const handleStartChange = (newValue) => {
    // Set the selected date and time as the new value
    setStart(newValue);

    const durationInHours = calculateDurationInHours(newValue, end);
    setDuration(durationInHours);

    // Calculate the minimum selectable end date and time
    const minEndDateTime = newValue.add(1, "hour");

    // Check if the current end date and time is before the new minimum
    if (end.isBefore(minEndDateTime)) {
      // Set the new minimum as the end date and time
      setEnd(minEndDateTime);
    }
  };

  const handleEndChange = (newValue) => {
    // Set the selected date and time as the new value
    setEnd(newValue);

    // Calculate the maximum selectable end date
    const maxEndDateTime = start.add(7, "day");

    // Calculate the duration
    const durationInHours = calculateDurationInHours(start, newValue);
    setDuration(durationInHours);

    // Check if the selected end date is after the maximum selectable end date
    if (newValue.isAfter(maxEndDateTime)) {
      // Set the maximum selectable end date as the new value
      setEnd(maxEndDateTime);
    }
  };

  // For booking an event centre
  const [bookingForm, setBookingForm] = useState({
    event_centre_id: "",
    userId: "",
    end_date: "",
    start_date: "",
    duration: "",
    notes: "",
  });

  const bookingHandleSubmit = async (e) => {
    e.preventDefault();

    const startDateTime = start.format("YYYY-MM-DDTHH:mm");
    const endDateTime = end.format("YYYY-MM-DDTHH:mm");

    const durationInHours = endDateTime.diff(startDateTime, "hours");

    const payload = {
      start_date: startDateTime.format("YYYY-MM-DDTHH:mm"),
      end_date: endDateTime.format("YYYY-MM-DDTHH:mm"),
      duration: durationInHours.toString(),
      // Other data to include in the payload
    };

    const requestData = {
      ...bookingForm,
      ...payload,
    };

    try {
      const response = await fetch(`${config.baseURL}/booking/newbooking`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();

      console.log("Response:", response);
      console.log("Data:", data);

      if (response.ok) {
        console.log("Booking successful");
        window.alert("Booking successful");
        window.location.reload();
      } else {
        console.log("Booking failed:", data);
        window.alert("Booking failed. Please try again.");
      }
    } catch (error) {
      console.error(error);
      window.alert("An error occurred. Please try again.");
    }

    setBookingForm({
      event_centre_id: id,
      userId: "64808477095b7ab4ace42779",
      end_date: "",
      start_date: "",
      duration: "",
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
    <div className="card-right-root" key={centreDetails._id}>
      <div className="details-card-right">
        <div className="details-card-right-inner">
          <div className="card-right-header">
            <div className="price">
              <TbCurrencyNaira /> {centreDetails.price}
              <p>hour</p>
            </div>
            <div className="review" style={{ fontSize: "14px" }}>
              <b>
                <AiFillStar />
                <span className="rating" style={{ marginLeft: "5px" }}>
                  {centreDetails.rating} .
                </span>
                <div
                  style={{
                    border: "none",
                    background: "white",
                    textDecoration: "underline",
                    marginLeft: "5px",
                    color: "grey",
                    fontWeight: "normal"
                  }}
                >
                  {reviewData.length} Reviews
                </div>
              </b>
            </div>
          </div>
          <form onSubmit={bookingHandleSubmit}>
            <div className="card-right-content">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer
                  components={["DateTimePicker", "DateTimePicker"]}
                >
                  <DateTimePicker
                    label="Start Date and Time"
                    value={start}
                    onChange={handleStartChange}
                    minDateTime={minStartDateTime}
                  />
                  <DateTimePicker
                    label="End Date and Time"
                    // value={start.add(minEnd, "hour")}
                    onChange={handleEndChange}
                    minDateTime={start.add(minEnd, "hour")}
                    maxDateTime={start.add(Days, "day")}
                  />
                </DemoContainer>
              </LocalizationProvider>
              <div className="form-content" style={{ width: "100%" }}>
                <label
                  htmlFor=""
                  style={{ fontSize: "14px" }}
                  className="disJusSpaBet"
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
            <div className="book-btn">
              <button
                type="submit"
                disabled={start === "" || end === "" ? true : false}
              >
                Book
              </button>
            </div>
          </form>
          <div
            className="card-right-footer"
            style={{ marginTop: "4%", fontSize: "14px", color: "grey" }}
          >
            {start && end && (
              <>
                <div style={{ textAlign: "center" }}>
                  You won't be charged yet
                </div>
                <div className="compilation">
                  <button>
                    {centreDetails.price} * {duration} hours
                  </button>
                  <div className="disAlCenter">
                    <TbCurrencyNaira /> {centreDetails.price * duration}
                  </div>
                </div>
                <div className="compilation">
                  <button>Reserve Now Fee</button>
                  <div className="disAlCenter">
                    <TbCurrencyNaira /> {reservNowPrice}
                  </div>
                </div>
                <hr style={{ marginTop: "10%" }} />
                <div className="total">
                  <div>Total</div>
                  <div className="disAlCenter">
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
  );
};

export default DetailsCardRight;
