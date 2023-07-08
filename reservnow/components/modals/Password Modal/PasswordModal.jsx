import { useEffect, useRef, useState } from "react";
import styles from "./passwordModal.module.css";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "@/features/auth/authApiSlice";
import { setCredentials } from "@/features/auth/authSlice";

export default function LoginAuthForm({ email, setEmail, setTrigger }) {

  const [password, setPassword] = useState('')
  const passwordRef = useRef()
  const errRef = useRef()
  const [errMsg, setErrMsg] = useState('')

  const [login, { isLoading }] = useLoginMutation()
  const dispatch = useDispatch()

  useEffect(() => {
    passwordRef.current.focus()
  }, [])

  useEffect(() => {
    setErrMsg('')
  }, [email, password])

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const userData = await login({ email, password }).unwrap()
      dispatch(setCredentials({ ...userData, user }))
      setEmail('')
      setPassword('')
      setTrigger(false)
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response')
      } else if (err.response?.status === 400) {
        setErrMsg('Missing Email or Password');
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login Failed');
      }
      errRef.current.focus();
    }
  }

  const handlePasswordChange = (e) => setPassword(e.target.value)

  return (
    <div className={styles["password-root"]}>
      <div className={styles["password-modal"]}>
        <div className={styles["password-modal-header"]}></div>
        <div className={styles["password-modal-content"]}>
          <h2>Welcome {email}</h2>
          <p>Please fill the form and confirm your password</p>
          <div className={styles["password-modal-form"]}>
            <div className={styles["form-content"]}>
              <input
                type="password"
                placeholder="Password"
                name="password"
                ref={passwordRef}
                value={password}
                onChange={handlePasswordChange}
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
            <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'}></p>
          </div>
        </div>
      </div>
    </div>
  );
}
