"use client"

import styles from "../../components/modals/Auth Modal/SignIn Modal/passwordModal.module.css";
import "./loginCard.css"
import { IoMdArrowBack } from "react-icons/io";

export default function SignInCard(props) {
    return props.trigger ? (
        <div className="loginCard-root">
            <div>
                <IoMdArrowBack className="back-btn" onClick={() => {
                    props.triggerEmailCard(true);
                    props.setTrigger(false);
                }} />
                <div className={styles["password-root"]}>
                    <div className={styles["password-modal"]}>
                        <div className={styles["password-modal-header"]}></div>
                        <div className={styles["password-modal-content"]}>
                            <h2>Welcome {props.email}</h2>
                            <p>Please fill the form and confirm your password</p>
                            <div className={styles["password-modal-form"]}>
                                <div className={styles["form-content"]}>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                    // value={formData.password}
                                    // onChange={handleChange}
                                    />
                                </div>
                                <div className={styles["submit-btn"]}>
                                    <button
                                    // onClick={handleSubmit}
                                    // disabled={formData.password === "" ? true : false}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : null
}