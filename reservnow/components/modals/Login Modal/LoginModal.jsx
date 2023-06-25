"use client";
import styles from "./loginModal.module.css";
import { useState } from "react";
import { EmailVerificationModal } from "../Email Verification Modal/EmailVerificationModal";
import { LoginAuthModal } from "../Password Modal/LoginAuthModal";
import { RegistrationModal } from "../Registration Modal/RegistrationModal";

export default function LoginModal({ emailVerification, setEmailVerification }) {

  const [openLoginAuthModal, setOpenLoginAuthModal] = useState(false);
  const [openRegistrationModal, setOpenRegistrationModal] = useState(false);
  const [email, setEmail] = useState('')


  return (
    <div className={styles["login-modal-root"]}>
      <EmailVerificationModal
        trigger={emailVerification}
        setTrigger={setEmailVerification}
        email={email}
        setEmail={setEmail}
        setOpenLoginAuthModal={setOpenLoginAuthModal}
        setOpenRegistrationModal={setOpenRegistrationModal} />
      <LoginAuthModal
        trigger={openLoginAuthModal}
        setTrigger={setOpenLoginAuthModal}
        setEmailVerification={setEmailVerification}
        email={email}
        setEmail={setEmail}
        setOpenEmailModal={setEmailVerification} />
      <RegistrationModal
        trigger={openRegistrationModal}
        setTrigger={setOpenRegistrationModal}
        email={email}
        setEmail={setEmail} />
    </div>
  );
}