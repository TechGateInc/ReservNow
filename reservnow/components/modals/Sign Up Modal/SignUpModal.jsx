"use client";

import Link from "next/link";
import styles from "./signUpModal.module.css";
import { useState } from "react";

export default function SignUpModal({ formData, handleChange, handleSubmit }) {
  const [confirmPassword, setConfirmPassword] = useState("");
  const isFormFilled = () => {
    return (
      formData.name === "" ||
      formData.email === "" ||
      formData.password === "" ||
      confirmPassword === "" ||
      formData.phoneNo === ""
    );
  };

  const isPasswordMatch = () => {
    return formData.password != confirmPassword;
  };

  return (
    <div className={styles["signup-root"]}>
      <div className={styles["signup-modal-form"]}>
        <div className={styles["form-content"]}>
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className={styles["form-content"]}>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className={styles["form-content"]}>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className={styles["form-content"]}>
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className={styles["form-content"]}>
          <input
            type="text"
            placeholder="Phone No"
            name="phoneNo"
            value={formData.phoneNo}
            onChange={handleChange}
          />
        </div>
        <p>
          By selecting <b>Agree and continue</b>, i agree to ReservNow's
          <b>
            <Link
              href={{}}
              style={{ textDecoration: "none", color: "pink" }}
            >
              {" "}
              Terms of Service{" "}
            </Link>
          </b>
          ,
          <b>
            <Link
              href={{}}
              style={{ textDecoration: "none", color: "pink" }}
            >
              {" "}
              Payments Terms of Service
            </Link>
          </b>
          , and
          <b>
            <Link
              href={{}}
              style={{ textDecoration: "none", color: "pink" }}
            >
              {" "}
              Nondiscrimination Policy{" "}
            </Link>
          </b>
          and acknowledge the
          <b>
            <Link
              href={{}}
              style={{ textDecoration: "none", color: "pink" }}
            >
              {" "}
              Privacy Policy
            </Link>
          </b>
          .
        </p>
        <div className={styles["submit-btn"]}>
          <button
            disabled={isFormFilled() || isPasswordMatch() ? true : false}
            onClick={handleSubmit}
          >
            Agree and continue
          </button>
        </div>
      </div>
    </div>
  );
}
