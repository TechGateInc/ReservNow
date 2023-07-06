import EmailVerificationForm from "./EmailVerification";
import styles from "../Login Modal/loginModal.module.css";
import { MdCancel } from "react-icons/md";

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
                        <MdCancel />
                    </div>
                </button>
                <EmailVerificationForm
                    email={props.email}
                    setEmail={props.setEmail}
                    setOpenEmailModal={props.setTrigger}
                    setOpenLoginAuthModal={props.setOpenLoginAuthModal}
                    setOpenRegistrationModal={props.setOpenRegistrationModal}
                />
            </div>
        </div>
    ) : null;
}