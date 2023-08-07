import styles from "./passwordModal.module.css";

export default function SignInForm({
  emailData,
  formData,
  handleChange,
  handleSubmit,
}) {
  return (
    <div className={styles["password-root"]}>
      <div className={styles["password-modal"]}>
        <div className={styles["password-modal-header"]}></div>
        <div className={styles["password-modal-content"]}>
          <h2>Welcome {emailData.name}</h2>
          <p>Please fill the form and confirm your password</p>
          <div className={styles["password-modal-form"]}>
            <div className={styles["form-content"]}>
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className={styles["submit-btn"]}>
              <button
                onClick={handleSubmit}
                disabled={formData.password === "" ? true : false}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}