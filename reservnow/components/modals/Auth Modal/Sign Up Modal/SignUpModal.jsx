import { useState } from "react";
import styles from "../loginModal.module.css";
import SignUpForm from "./SignUpForm";
import { AiOutlineClose } from "react-icons/ai";

export function SignUpModal(props) {
    const [signUpFormData, setSignUpFormData] = useState({
        name: "",
        email: "",
        password: "",
        phoneNo: "",
    });

    const signUpHandleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${config.baseURL}/user/signup`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(signUpFormData),
            });
            // Handle response
            const data = await response.json();
            window.alert("Sign up successful");
        } catch (error) {
            window.alert("Sign up failed");
            console.error(error);
        }
        setSignUpFormData({ name: "", email: "", password: "", phoneNo: "" });
    };

    const signUpHandleChange = (e) => {
        setSignUpFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };
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
                    Finish Signing up
                    <div></div>
                </button>
                <SignUpForm
                    formData={signUpFormData}
                    handleChange={signUpHandleChange}
                    handleSubmit={signUpHandleSubmit}
                />
            </div>
        </div>
    ) : (
        ""
    );
}