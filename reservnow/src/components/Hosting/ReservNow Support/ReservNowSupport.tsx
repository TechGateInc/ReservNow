"use client";
import { BiMessageCheck } from "react-icons/bi";
import "./reservNowSupport.css";
import { NextPage } from "next";

interface ReservNowSupportProps {}

const ReservNowSupport: NextPage<ReservNowSupportProps> = () => {
  return (
    <div className="reservNow-support-root">
      <BiMessageCheck style={{ fontSize: "30px" }} />
      <div style={{ fontSize: "14px", marginTop: "10px" }}>No new messages</div>
      <div
        style={{
          fontSize: "14px",
          marginTop: "10px",
          color: "#b5b5b5",
        }}
      >
        You don’t have any messages in the ReservNow Support folder.
      </div>
      <button>Go to all messages</button>
    </div>
  );
};

export default ReservNowSupport;
