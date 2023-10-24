"use client";
import { BiMessageCheck } from "react-icons/bi";
import "./allMessages.css"

const AllMessages = ({}) => {
  return (
    <div className="all-messages-root">
      <BiMessageCheck style={{ fontSize: "30px" }} />
      <div style={{ fontSize: "14px", marginTop: "10px" }}>No new messages</div>
      <div
        style={{
          fontSize: "14px",
          marginTop: "10px",
          color: "#b5b5b5",
        }}
      >
        If you are looking for a message click on archive
      </div>
      <button>Go to archive</button>
    </div>
  );
};

export default AllMessages;
