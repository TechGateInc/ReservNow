import Link from "next/link";
import styles from "./popup.module.css";
import { IoArrowBackCircle } from "react-icons/io5";
import { MdCancel } from "react-icons/md";

export function EmailVerificationPopup(props) {
  return props.trigger ? (
    <div className={styles["popup-modal"]}>
      <div className={styles["popup-modal-inner"]}>
        <button
          className={styles["close-btn"]}
          onClick={() => {
            props.setTrigger(false);
            props.setEmailFormData("");
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
            props.setPasswordFormData("");
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
            props.setSignUpFormData(" ");
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
