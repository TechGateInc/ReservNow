"use client";

import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

import styles from "../loginModal.module.css";
import SignUpForm from "./SignUpForm";
import { useCreateUserMutation } from "@/features/auth/authApiSlice";

export function SignUpModal(props) {
  const [signUpFormData, setSignUpFormData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNo: "",
  });

  const [createUser] = useCreateUserMutation();

  const signUpHandleSubmit = async (e) => {
    e.preventDefault();

    const formData = signUpFormData;

    try {
      await createUser(formData); // Call the create mutation
      window.alert("User created successfully");
    } catch (error) {
      console.error(error);
      window.alert("An error occurred. Please try again.");
    }
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
            props.setTrigger(false);
            props.setEmailVerification(true);
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
