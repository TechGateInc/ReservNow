import dayjs from "dayjs";
import { AiFillStar } from "react-icons/ai";
import { VscVerifiedFilled } from "react-icons/vsc";
import { BsShield } from "react-icons/bs";

import "./contactOwner.css";

const ContactOwner = ({ eventCentre, review }) => {
  // Assuming centreDetails.venueOwner.createdAt is a valid date string
  const createdAt = dayjs(
    eventCentre && eventCentre.venueOwner && eventCentre.venueOwner.createdAt
  );

  // Format the date as "MMMM YYYY" (e.g., "June 2023")
  const formattedDate = createdAt.format("MMMM YYYY");
  return (
    <div className="contact-owner-root">
      <div className="contact-owner-container">
        <div className="top">
          <div className="left">
            <img src="/images/details.jpg" alt="" />
          </div>
          {eventCentre && eventCentre.venueOwner && (
            <div className="right">
              <h3>Hosted By {eventCentre.venueOwner.name}</h3>
              <span>Joined in {formattedDate}</span>
            </div>
          )}
        </div>
        <div className="ratings-star-section">
          <div className="reviews">
            <AiFillStar />
            <div className="text" style={{ marginLeft: "5px" }}>
              {review.length} reviews
            </div>
          </div>
          <div className="identity-veri">
            <VscVerifiedFilled />
            <div className="text" style={{ marginLeft: "5px" }}>
              Identity verified
            </div>
          </div>
        </div>
        {eventCentre && eventCentre.venueOwner && (
          <div className="about-venue-owner">
            <div className="title">
              <p>About {eventCentre.venueOwner.name}</p>
            </div>
            <div className="contents">Policy Number: 110011</div>
            <div className="contents">Language(s): English</div>
            <div className="contents">Response Rate: 100%</div>
            <div className="contents">Response Time: Within one hour</div>
          </div>
        )}
        <div className="contact-btn">
          <button>Contact Owner</button>
        </div>
        <div className="protection">
          <BsShield style={{ fontSize: "20px" }} />
          <div className="text">
            To protect your payment, never transfer money or communicate outside
            of the ReservNow website.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactOwner;
