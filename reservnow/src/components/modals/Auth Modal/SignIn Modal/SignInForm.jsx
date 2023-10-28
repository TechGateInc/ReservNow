import styles from "./passwordModal.module.css";
import { useLoginMutation } from "@/src/api/features/auth/authApiSlice";
import { useEffect, useRef, useState } from "react";
import { setTokens } from "@/src/api/features/auth/authSlice";
import Cookies from "js-cookie"; // Import the cookie library
import { useAppDispatch } from "@/src/api/hook";

export default function SignInForm({ email, setEmail, setTrigger, name }) {
  const [password, setPassword] = useState("");
  const handleChange = (e) => setPassword(e.target.value);
  const [errMsg, setErrMsg] = useState("");
  const errRef = useRef();

  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email: email, password });

      // Set the access and refresh tokens as cookies
      const accessToken = Cookies.get("accessToken");
      const refreshToken = Cookies.get("refreshToken");

      dispatch(setTokens({ ...res, user: email, accessToken, refreshToken }));
      setPassword("");
      setEmail("");
      console.log(res)
      window.alert("login successful");
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
    }
  };

  return (
    <div className={styles["password-root"]}>
      <div className={styles["password-modal"]}>
        <div className={styles["password-modal-header"]}></div>
        <div className={styles["password-modal-content"]}>
          <h2>Welcome {name}</h2>
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
                disabled={password === "" ? true : false}
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
