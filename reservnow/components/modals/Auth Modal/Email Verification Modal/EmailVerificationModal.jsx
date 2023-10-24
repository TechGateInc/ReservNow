import { AiOutlineClose } from "react-icons/ai";

import styles from "../loginModal.module.css";
import EmailVerificationForm from "./EmailVerificationForm";

export function EmailVerificationModal(props) {
  return props.trigger ? (
    <div className={styles["popup-modal"]}>
      <div className={styles["popup-modal-inner"]}>
        <button
          className={styles["close-btn"]}
          onClick={() => {
            props.setTrigger(false);
            props.setEmail("");
          }}
        >
          <div className={styles["cancel-icon"]}>
            <AiOutlineClose />
          </div>
        </button>
        <EmailVerificationForm
          email={props.email}
          setEmail={props.setEmail}
          setTrigger={props.setTrigger}
          setShowSignInModal={props.setShowSignInModal}
          setName={props.setName}
        />
      </div>
    </div>
  ) : null;
}
