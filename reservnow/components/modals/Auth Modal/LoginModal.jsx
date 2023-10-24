"use client";

import { useState } from "react";

import styles from "./loginModal.module.css";
import { EmailVerificationModal } from "./Email Verification Modal/EmailVerificationModal";
import { SignInModal } from "./SignIn Modal/SignInModal";
import { SignUpModal } from "./Sign Up Modal/SignUpModal";

export default function LoginModal({
  emailVerification,
  setEmailVerification,
  showSignUpModal,
  setShowSignUpModal,
}) {
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  return (
    <div className={styles["login-modal-root"]}>
      <EmailVerificationModal
        trigger={emailVerification}
        setTrigger={setEmailVerification}
        email={email}
        setEmail={setEmail}
        setShowSignInModal={setShowSignInModal}
        name={name}
        setName={setName}
      />
      <SignInModal
        trigger={showSignInModal}
        setTrigger={setShowSignInModal}
        email={email}
        setEmail={setEmail}
        name={name}
      />
      <SignUpModal
        trigger={showSignUpModal}
        setTrigger={setShowSignUpModal}
        email={email}
        setEmail={setEmail}
        emailVerification={emailVerification}
        setEmailVerification={setEmailVerification}
      />
    </div>
  );
}
