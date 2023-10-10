"use client";

import { useEffect, useRef, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { useRouter, useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";

import "./loginCard.css";
import styles from "../../components/modals/Auth Modal/SignIn Modal/passwordModal.module.css";
import { useLoginMutation } from "@/features/auth/authApiSlice";
import { setCredentials } from "@/features/auth/authSlice";

export default function SignInCard(props) {
  const router = useRouter();
  const searchParams = useSearchParams().get("redirect");
  const redirect = searchParams || "/";
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const errRef = useRef();

  const handleChange = (e) => setPassword(e.target.value);

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    setErrMsg("");
  }, [props.email, password]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userData = await login({ email: props.email, password }).unwrap();
      dispatch(setCredentials({ ...userData, user: props.email }));
      setPassword("");
      props.setEmail("");
      router.replace(redirect);
    } catch (error) {
      console.log(error);
      if (!error?.response) {
        setErrMsg("No Server Response");
      } else if (error.response?.status === 400) {
        setErrMsg("Missing Email or Password");
      } else if (error.response?.status === 401) {
        setErrMsg("Unauthorised");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };
  return props.trigger ? (
    <div className="loginCard-root">
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-label="">
        {errMsg}
      </p>
      <div>
        <IoMdArrowBack
          className="back-btn"
          onClick={() => {
            props.triggerEmailCard(true);
            props.setTrigger(false);
          }}
        />
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
                    value={password}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles["submit-btn"]}>
                  <button
                    onClick={handleLogin}
                    disabled={password === "" || isLoading ? true : false}
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
  ) : null;
}
