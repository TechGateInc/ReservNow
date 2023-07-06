"use client";
import styles from "./popup.module.css";
import { IoArrowBackCircle } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { MdCancel } from "react-icons/md";

if (typeof document !== "undefined") {
  const AOS = require("aos");
  require("aos/dist/aos.css");
  AOS.init();
  // AOS.init({ disable: true });
}

export function EmailVerificationPopup(props) {
  return props.trigger ? (
    <div className={styles["popup-modal"]}>
      <div className={styles["popup-modal-inner"]}>
        <button
          className={styles["close-btn"]}
          onClick={() => {
            props.setTrigger(false);
            props.setEmailFormData({ email: "" });
          }}
        >
          <div className={styles["cancel-icon"]}>
            <MdCancel />
          </div>
        </button>
        {props.children}
      </div>
    </div>
  ) : null;
}

export function PasswordPopup(props) {
  return props.trigger ? (
    <div className={styles["popup-modal"]}>
      <div className={styles["popup-modal-inner"]}>
        <button
          className={styles["back-btn"]}
          onClick={() => {
            props.setEmailVerification(true);
            props.setTrigger(false);
            props.setPasswordFormData({ password: "" });
          }}
        >
          <div className={styles["back-icon"]}>
            <IoArrowBackCircle />
          </div>
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export function SignupPopup(props) {
  return props.trigger ? (
    <div className={styles["popup-modal"]}>
      <div className={styles["popup-modal-inner"]}>
        <button
          className={styles["back-btn"]}
          onClick={() => {
            props.setEmailVerification(true);
            props.setTrigger(false);
            props.setSignUpFormData({
              name: "",
              email: "",
              password: "",
              phoneNo: "",
            });
          }}
        >
          <div className={styles["back-icon"]}>
            <IoArrowBackCircle />
          </div>
          Finish Signing up
          <div></div>
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export function DetailsGalleryPopup(props) {
  return props.trigger ? (
    <div className={styles["gallery-inner"]} data-aos="fade-up">
      <div
        className={styles["back-icon"]}
        onClick={() => {
          props.setTrigger(false);
        }}
      >
        <IoIosArrowBack />
      </div>
      {props.children}
    </div>
  ) : (
    ""
  );
}

export function EstimatePopup(props) {
  return props.trigger ? (
    <div className={styles["popup-modal"]}>
      <div className={styles["popup-modal-inner"]}>
        <div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginBottom:20 }}>
        <div>
          <p style={{ textAlign: "center" }}>Tell us about your Centre</p>
        </div>
          <div className={styles["cancel-icon"]}
           onClick={() => {
            props.setTrigger(false);
          }}
          >
            <MdCancel />
          </div>
        </div>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export function DescriptionPopup(props) {
  return props.trigger ? (
    <div className={styles["popup-modal"]}>
      <div className={styles["popup-modal-inner"]}>
        <button
          className={styles["close-btn"]}
          onClick={() => {
            props.setTrigger(false);
          }}
        >
          <div className={styles["cancel-icon"]}>
            <MdCancel />
          </div>
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export function ReviewPopup(props) {
  return props.trigger ? (
    <div className={styles["popup-modal"]}>
      <div className={styles["popup-modal-inner"]}>
        <button
          className={styles["close-btn"]}
          onClick={() => {
            props.setTrigger(false);
          }}
        >
          <div className={styles["cancel-icon"]}>
            <MdCancel />
          </div>
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export function AmenitiesPopup(props) {
  return props.trigger ? (
    <div className={styles["popup-modal"]}>
      <div className={styles["amenities-popup"]}>
        <button
          className={styles["close-btn"]}
          onClick={() => {
            props.setTrigger(false);
          }}
        >
          <div className={styles["cancel-icon"]}>
            <AiOutlineClose />
          </div>
        </button>
        <div className="content" style={{ paddingTop: "30px" }}>
          {props.children}
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export function CentreRulesPopup(props) {
  return props.trigger ? (
    <div className={styles["popup-modal"]}>
      <div className={styles["amenities-popup"]}>
        <button
          className={styles["close-btn"]}
          onClick={() => {
            props.setTrigger(false);
          }}
        >
          <div className={styles["cancel-icon"]}>
            <AiOutlineClose />
          </div>
        </button>
        <div className="content" style={{ paddingTop: "30px" }}>
          {props.children}
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export function SafetyPropertyPopup(props) {
  return props.trigger ? (
    <div className={styles["popup-modal"]}>
      <div className={styles["amenities-popup"]}>
        <button
          className={styles["close-btn"]}
          onClick={() => {
            props.setTrigger(false);
          }}
        >
          <div className={styles["cancel-icon"]}>
            <AiOutlineClose />
          </div>
        </button>
        <div className="content" style={{ paddingTop: "30px" }}>
          {props.children}
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export function CancellationPolicyPopup(props) {
  return props.trigger ? (
    <div className={styles["popup-modal"]}>
      <div className={styles["amenities-popup"]}>
        <button
          className={styles["close-btn"]}
          onClick={() => {
            props.setTrigger(false);
          }}
        >
          <div className={styles["cancel-icon"]}>
            <AiOutlineClose />
          </div>
        </button>
        <div className="content" style={{ paddingTop: "30px" }}>
          {props.children}
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
