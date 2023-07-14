"use client"

import { useContext, useState } from "react";
import styles from "../../components/modals/Auth Modal/SignIn Modal/passwordModal.module.css";
import "./loginCard.css"
import { IoMdArrowBack } from "react-icons/io";
import axios from "@/api/axios";
import useAuth from "@/hooks/useAuth";
import { useRouter, useSearchParams } from "next/navigation";
import AuthContext, { AuthProvider } from "@/context/AuthProvider";
const LOGIN_URL = '/user/signin'

export default function SignInCard(props) {
    const router = useRouter();
    const { setAuth } = useContext(AuthContext);
        const searchParams = useSearchParams().get('redirect')
    const redirect = searchParams || "/"; // Get the redirect URL from the query parameter
    const [pwd, setPwd] = useState('')
    const [errMsg, setErrMsg] = useState('')

    const handleChange = (e) => setPwd(e.target.value)

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(LOGIN_URL, JSON.stringify({ email: props.email, password: pwd }),
                {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true
                })
            console.log(JSON.stringify(response?.data));
            const accessToken = response?.data?.accessToken
            const roles = response?.data?.roles
            setAuth({ email: props.email, password: pwd, roles, accessToken });
            router.replace(redirect); // Redirect the user back to the original page
            setPwd('')
            props.setEmail('')
        } catch (error) {
            if (!error?.response) {
                setErrMsg('No Server Response')
            } else if (error.response?.status === 400) {
                setErrMsg('Missing Email or Password')
            } else if (error.response?.status === 401) {
                setErrMsg('Unauthorised')
            } else {
                setErrMsg('Login Failed')
            }

        }
    }
    return props.trigger ? (
            <div className="loginCard-root">
                <div>
                    <IoMdArrowBack className="back-btn" onClick={() => {
                        props.triggerEmailCard(true);
                        props.setTrigger(false);
                    }} />
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
                                            value={pwd}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className={styles["submit-btn"]}>
                                        <button
                                            onClick={handleLogin}
                                            disabled={pwd === "" ? true : false}
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
    ) : null
}