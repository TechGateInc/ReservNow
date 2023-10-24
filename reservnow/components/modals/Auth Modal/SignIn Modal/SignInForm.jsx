import styles from "./passwordModal.module.css";
import { useLoginMutation } from "@/features/auth/authApiSlice";
import { useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { setCredentials } from "@/features/auth/authSlice";

export default function SignInForm({ email, setEmail, setTrigger, name }) {
  const [password, setPassword] = useState("");
  const handleChange = (e) => setPassword(e.target.value);
  const [errMsg, setErrMsg] = useState("");
  const errRef = useRef();

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userData = await login({ email: email, password }).unwrap();
      dispatch(setCredentials({ ...userData, user: email }));
      setPassword("");
      setEmail("");
      console.log(userData)
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
      // errRef.current.focus();
    }
  };

  console.log(errMsg);

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
