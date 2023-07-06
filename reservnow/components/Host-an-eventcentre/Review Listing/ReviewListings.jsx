import "./reviewListings.css";
import { BsClipboardCheck } from "react-icons/bs";
import { BsCalendarEvent } from "react-icons/bs";
import { LuEdit3 } from "react-icons/lu";
import { AiFillStar } from "react-icons/ai";

const ReviewListings = ({ selectedFiles, name, price }) => {
  console.log(selectedFiles);
  const firstImage = selectedFiles[0];

  return (
    <div className="review-listing-root">
      <div className="review-listing-container">
        <div className="review-listing-header">Review your listing</div>
        <div className="review-listing-sub-header">
          Here's what we'll show to guests. Make sure everything looks good.
        </div>
        <div className="review-listing-content">
          <div className="left">
            <div className="review-card">
                <div className="show-preview-header">
                    <div className="text">Show Preview</div>
                </div>
              <div className="image-container">
                <img src={URL.createObjectURL(firstImage)} alt="First Image" />
              </div>
              <div className="content">
                <div className="top">
                  <div>{name}</div>
                  <div style={{display: "flex", alignItems: "center"}}>New <AiFillStar style={{marginLeft: "5px"}}/></div>
                </div>
                <div className="bottom">
                  ₦{price}
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
                  <LuEdit3 style={{ fontSize: "35px" }} />
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
    </div>
  );
};

export default ReviewListings;