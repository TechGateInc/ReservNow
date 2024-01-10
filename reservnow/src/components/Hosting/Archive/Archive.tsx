"use client";
import { BiMessageCheck } from "react-icons/bi";
import "./archive.css";
import { NextPage } from "next";

interface ArchiveProps {}

const Archive: NextPage<ArchiveProps> = () => {
  return (
    <div className="archive-root">
      <BiMessageCheck style={{ fontSize: "30px" }} />
      <div style={{ fontSize: "14px", marginTop: "10px" }}>No new messages</div>
      <div
        style={{
          fontSize: "14px",
          marginTop: "10px",
          color: "#b5b5b5",
        }}
      >
        You don’t have any messages in the Archive folder.
      </div>
      <button>Go to all messages</button>
    </div>
  );
};

export default Archive;
