"use client";
import "./scheduleMessages.css";
import { RiChat2Line } from "react-icons/ri";
import { InboxPopup } from "@/src/components/modals/Popup/Popup";
import { useState } from "react";

const ScheduleMessages = ({}) => {
  const [inbox, setInbox] = useState(false);

  return (
    <div className="schedule-message-root">
      <div className="schedule-message-container">
        <RiChat2Line style={{ fontSize: "30px" }} />
        <div style={{ fontWeight: "600", marginTop: "10px" }}>
          No scheduled messages yet
        </div>
        <div style={{ marginTop: "10px" }}>
          Automatically send guests check-in instructions, wifi details, and
          more.
        </div>
        <button className="createBtn" onClick={() => setInbox(true)}>
          Create a message template
        </button>{" "}
        <br />
        <button className="learnBtn">Learn best practices</button>
      </div>
      <InboxPopup trigger={inbox} setTrigger={setInbox}>
        <div className="schedule-messages-title">Create a message template</div>
        <div className="template-name">
          <input type="text" />
          <p>This won't be shown to guest</p>
        </div>
        <div className="message">
          <div className="message-title">Message</div>
          <div className="message-container">
            
          </div>
        </div>
      </InboxPopup>
    </div>
  );
};

export default ScheduleMessages;
