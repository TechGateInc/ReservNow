import LoginAuthForm from "./PasswordModal";
import styles from "../Login Modal/loginModal.module.css";
import { IoArrowBackCircle } from "react-icons/io5";

export function LoginAuthModal(props) {
    return props.trigger ? (
        <div className={styles["popup-modal"]}>
            <div className={styles["popup-modal-inner"]}>
                <button
                    className={styles["back-btn"]}
                    onClick={() => {
                        props.setOpenEmailModal(true);
                        props.setTrigger(false);
                        props.setPassword('');
                    }}
                >
                    <div className={styles["back-icon"]}>
                        <IoArrowBackCircle />
                    </div>
                </button>
                <LoginAuthForm
                    email={props.email}
                    setEmail={props.setEmail}
                    setTrigger={props.setTrigger}
                />
            </div>
        </div>
    ) : (
        ""
    );
}