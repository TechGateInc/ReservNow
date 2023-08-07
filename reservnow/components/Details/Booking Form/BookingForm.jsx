"use client";

import "./bookingForm.css";
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { TbCurrencyNaira } from "react-icons/tb";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { useCreateBookingMutation } from "@/features/booking/bookingSlice";

const BookingForm = ({ id, eventCentre, review }) => {
  const [createBooking] = useCreateBookingMutation();

  // Add the necessary plugin to dayjs
  dayjs.extend(advancedFormat);
  const minStartTime = 1;
  const minEndTime = 1;
  const maxEndDate = 7;
  const reservNowPrice = 270;

  const currentDate = dayjs();
  const [start, setStart] = useState(currentDate.add(minStartTime, "hour"));
  const [end, setEnd] = useState("");
  const [bookingForm, setBookingForm] = useState({
    event_centre_id: "",
    userId: "",
    end_date: "",
    start_date: "",
    duration: "",
    notes: "",
  });
  const calculateDurationInHours = () => {
    const duration = start && end && end.diff(start, "hour");
    return duration;
  };

  // Example usage
  const durationInHours = calculateDurationInHours();

  const bookingHandleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      start_date: dayjs(start),
      end_date: dayjs(end),
      notes: bookingForm.notes,
      event_centre_id: id,
      userId: "64958637db3d3493ebaf8c84",
      duration: "2",
    };

    try {
      await createBooking(formData);
      window.alert("Booking successful");
      window.location.reload();
    } catch (error) {
      console.error(error);
      window.alert("An error occurred. Please try again.");
    }

    setStart("");
    setEnd("");
    setBookingForm({
      ...bookingForm,
      notes: "",
    });
  };

  const bookingHandleChange = (e) => {
    const { name, value } = e.target;
    setBookingForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="card-right-root" key={eventCentre._id}>
      <div className="details-card-right">
        <div className="details-card-right-inner">
          <div className="card-right-header">
            <div className="price">
              <TbCurrencyNaira /> {eventCentre.price}
              <p>hour</p>
            </div>
            <div className="review" style={{ fontSize: "14px" }}>
              <b>
                <AiFillStar />
                <span className="rating" style={{ marginLeft: "5px" }}>
                  {eventCentre.rating} .
                </span>
                <div
                  style={{
                    border: "none",
                    background: "white",
                    textDecoration: "underline",
                    marginLeft: "5px",
                    color: "grey",
                    fontWeight: "normal",
                  }}
                >
                  {review.length} Reviews
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
                    onChange={setStart}
                    minDateTime={currentDate.add(minStartTime, "hour")}
                  />
                  <DateTimePicker
                    label="End Date and Time"
                    onChange={setEnd}
                    minDateTime={start.add(minEndTime, "hour")}
                    maxDateTime={start.add(maxEndDate, "day")}
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
                  value={bookingForm.notes}
                  onChange={bookingHandleChange}
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
            <div className="book-btn">
              <button type="submit">Book</button>
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
                    {eventCentre.price} * {durationInHours} hours
                  </button>
                  <div className="disAlCenter">
                    <TbCurrencyNaira /> {eventCentre.price * durationInHours}
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
                    {reservNowPrice + eventCentre.price * durationInHours}
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

export default BookingForm;
