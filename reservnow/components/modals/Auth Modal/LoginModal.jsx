"use client";
import styles from "./loginModal.module.css";
import { useState } from "react";
import { EmailVerificationModal } from "./Email Verification Modal/EmailVerificationModal";
import { SignInModal } from "./SignIn Modal/SignInModal";
import { SignUpModal } from "./Sign Up Modal/SignUpModal";

export default function LoginModal({ showLoginModal, setShowLoginModal }) {

  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [email, setEmail] = useState('')

  return (
    <div className={styles["login-modal-root"]}>
      <EmailVerificationModal
        trigger={showLoginModal}
        setTrigger={showLoginModal}
        email={email}
        setEmail={setEmail}
        signInModalTrigger={setShowSignInModal}
        signUpModalTrigger={setShowSignUpModal} />
      <SignInModal
        trigger={showSignInModal}
        setTrigger={setShowSignInModal}
        email={email}
        setEmail={setEmail}
        checkEmailModalTrigger={setShowLoginModal} />
      <SignUpModal
        trigger={showSignUpModal}
        setTrigger={setShowSignUpModal}
        email={email}
        setEmail={setEmail}
        checkEmailModalTrigger={setShowLoginModal} />
    </div>
  );
}