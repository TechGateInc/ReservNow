import styles from "../loginModal.module.css";
import SignInForm from "./SignInForm";
import { AiOutlineClose } from "react-icons/ai";

export function SignInModal(props) {
    return props.trigger ? (
        <div className={styles["popup-modal"]}>
            <div className={styles["popup-modal-inner"]}>
                <button
                    className={styles["back-btn"]}
                    onClick={() => {
                        props.checkEmailModalTrigger(true);
                        props.setTrigger(false);
                    }}
                >
                    <div className={styles["back-icon"]}>
                        <AiOutlineClose />
                    </div>
                </button>
                <SignInForm
                    email={props.email}
                    setEmail={props.setEmail}
                    setTrigger={props.setTrigger}
                    checkEmailModalTrigger={props.checkEmailModalTrigger}
                />
            </div>
        </div>
    ) : (
        ""
    );
}