import { IoIosArrowBack } from "react-icons/io";

import "./reviewListingModal.css";

export function ReviewListingModal(props) {
  return props.trigger ? (
    <div className="review-listing-modal">
      <div className="review-listing-inner">
        <div className="header">
          <div
            className="back-icon"
            onClick={() => {
              props.setTrigger(false);
            }}
          >
            <IoIosArrowBack />
          </div>
          <div className="text" style={{ fontWeight: "bold" }}>
            Full Preview
          </div>
          <div></div>
        </div>
        <div className="review-modal-root">
          <div className="review-modal-container">
            <div className="left">
              <img src={URL.createObjectURL(props.firstImage)} alt="" />
            </div>
            <div className="right">
              <div className="title">{props.name}</div>
              <div className="hosted-by">
                <div className="text">Entire home hosted by Jolaoluwa</div>
                <div className="img">
                  <img
                    src={URL.createObjectURL(props.firstImage)}
                    alt=""
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                    }}
                  />
                </div>
              </div>
              <hr style={{ marginTop: "20px", marginBottom: "20px" }} />
              <div className="description">{props.description}</div>
              <hr style={{ marginTop: "20px", marginBottom: "20px" }} />
              <div className="location">
                <div
                  className="header"
                  style={{ fontWeight: "bold", marginBottom: "20px" }}
                >
                  Location
                </div>
                <div className="text">{props.address}</div>
                <div className="policy">
                  We’ll only share your address with guests who are booked as
                  outlined in our{" "}
                  <span style={{ textDecoration: "underline" }}>
                    privacy policy
                  </span>
                  .
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
