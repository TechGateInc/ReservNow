import EmailVerificationForm from "./EmailVerificationForm";
import styles from "../loginModal.module.css";
import { AiOutlineClose } from "react-icons/ai";

export function EmailVerificationModal(props) {

    return props.trigger ? (
        <div className={styles["popup-modal"]}>
            <div className={styles["popup-modal-inner"]}>
                <button
                    className={styles["close-btn"]}
                    onClick={() => {
                        props.setTrigger(false);
                        props.setEmail('');
                    }}
                >
                    <div className={styles["cancel-icon"]}>
                        <AiOutlineClose />
                    </div>
                </button>
                <EmailVerificationForm
                    email={props.email}
                    setEmail={props.setEmail}
                    emailModalTrigger={props.setTrigger}
                    signInModalTrigger={props.signInModalTrigger}
                    signUpModalTrigger={props.signUpModalTrigger}
                />
            </div>
        </div>
    ) : null;
}