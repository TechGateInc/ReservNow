export default function Login() {
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