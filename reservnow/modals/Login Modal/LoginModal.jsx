"use client";

import Link from "next/link";
import styles from "./loginModal.module.css";
import { useState } from "react";
import config from "@/config";
import { EmailVerificationPopup } from "../Popup/Popup";
import { PasswordPopup } from "../Popup/Popup";
import { SignupPopup } from "../Popup/Popup";
import EmailVerification from "../Email Verification Modal/EmailVerification";
import PasswordModal from "../Password Modal/PasswordModal";
import SignUpModal from "../Sign Up Modal/SignUpModal";

export default function LoginModal({
  emailVerification,
  setEmailVerification,
}) {
  // const [emailVerification, setEmailVerification] = useState(false);
  const [passwordModal, setPasswordModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);

  //for the email verification
  const [emailFormData, setEmailFormData] = useState({ email: "" });
  const [emailData, setEmailData] = useState([]);

  //For checking if email exist
  const emailHandleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${config.baseURL}/user/check-email/${emailFormData.email}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Handle response
      const data = await response.json();
      if (response.ok) {
        // Email exists in the database
        setEmailData(data);
        setEmailVerification(false);
        setPasswordModal(true);
      } else {
        // Email does not exist in the database
        setEmailVerification(false);
        setSignUpModal(true);
      }
    } catch (error) {
      console.error(error);
    }
    setEmailFormData({ email: "" });
  };

  const emailHandleChange = (e) => {
    setEmailFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  // For Sign in
  const [passwordFormData, setPasswordFormData] = useState({
    password: "",
  });

  // For logging in
  const passwordHandleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${config.baseURL}/auth/user/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailFormData.email,
          password: passwordFormData.password,
        }),
      });

      // Handle response
      const data = await response.json();
      console.log(data);
      window.alert("Login successful");
    } catch (error) {
      window.alert("Login failed");
      console.error(error);
    }
    setPasswordFormData({ email: "" });
  };

  const passwordHandleChange = (e) => {
    setPasswordFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  // For signing up
  const [signUpFormData, setSignUpFormData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNo: "",
  });

  // For signing up
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
      console.log(data);
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

  return (
    <div className={styles["login-modal-root"]}>
      <EmailVerificationPopup
        trigger={emailVerification}
        setTrigger={setEmailVerification}
        setEmailFormData={setEmailFormData}
      >
        <EmailVerification
          formData={emailFormData}
          handleChange={emailHandleChange}
          handleSubmit={emailHandleSubmit}
        />
      </EmailVerificationPopup>

      <PasswordPopup
        trigger={passwordModal}
        setTrigger={setPasswordModal}
        setEmailVerification={setEmailVerification}
        setPasswordFormData={setPasswordFormData}
      >
        <PasswordModal
          formData={passwordFormData}
          handleChange={passwordHandleChange}
          handleSubmit={passwordHandleSubmit}
          emailData={emailData}
        />
      </PasswordPopup>

      <SignupPopup
        trigger={signUpModal}
        setTrigger={setSignUpModal}
        setSignUpFormData={setSignUpFormData}
        setEmailVerification={setEmailVerification}
      >
        <SignUpModal
          formData={signUpFormData}
          handleChange={signUpHandleChange}
          handleSubmit={signUpHandleSubmit}
        />
      </SignupPopup>
    </div>
  );
}
