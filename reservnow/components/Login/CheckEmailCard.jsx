"use client"

import { useGetEmailVerificationMutation } from "@/features/email verification/emailVerify";
import styles from "../../components/modals/Auth Modal/Email Verification Modal/emailVerification.module.css";
import "./loginCard.css"
import { useRef, useState } from "react";

export default function CheckEmailCard(props) {
    const [errMsg, setErrMsg] = useState("");
    const errRef = useRef();
    const handleEmailChange = (e) => props.setEmail(e.target.value)

    const [getEmailVerification, { isLoading }] = useGetEmailVerificationMutation();

    const VerifyEmail = async (e) => {
        e.preventDefault();
        try {
            const response = await getEmailVerification(props.email);
            if (response.data.message === 'User Found') {
                props.triggerSignInCard(true);
                props.setTrigger(false);
            } else if (response.data.message === 'Email not found') {
                props.triggerSignUpCard(true);
                props.setTrigger(false);
            }
        } catch (error) {
            console.log(error);
            if (!error?.response) {
                setErrMsg('No Server Response')
            } else if (error.response?.status === 404) {
                props.triggerSignUpCard(true);
                props.setTrigger(false);
            } else {
                setErrMsg('Something went wrong')
            }
            errRef.current.focus()

        }

    }

    return props.trigger ? (
        <div className="loginCard-root">
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-label="">{errMsg}</p>
            <div>
                <div className={styles["email-root"]}>
                    <div className={styles["email-modal"]}>
                        <div className={styles["email-modal-header"]}>
                            <p>Log in and sign up</p>
                        </div>
                        <div className={styles["email-modal-content"]}>
                            <h2>
                                Welcome to{" "}
                                <div className="email-modal-logo">
                                    <img
                                        src="/images/RNL.svg"
                                        alt="ReservNow"
                                        style={{ height: "18px", marginLeft: "4%" }}
                                    />
                                </div>
                            </h2>
                            <div className={styles["email-modal-form"]}>
                                <div className={styles["form-content"]}>
                                    <input
                                        type="text"
                                        placeholder="Email"
                                        name="email"
                                        value={props.email}
                                        onChange={handleEmailChange}
                                    />
                                </div>
                                <p>
                                    We'll call or text you to confirm your number. Standard message
                                    and data rates apply. Privacy Policy and Terms of Service
                                </p>
                                <div className={styles["submit-btn"]}>
                                    <button
                                        onClick={VerifyEmail}
                                        disabled={props.email === "" || isLoading ? true : false}
                                    >
                                        Continue
                                    </button>
                                </div>
                            </div>
                            <div className={styles["or"]}>
                                <div className={styles["left-line"]}>
                                    <hr />
                                </div>
                                <div className={styles["right-line"]}>
                                    <hr />
                                </div>
                                <p>or</p>
                            </div>
                            <div className={styles["email-options-cont"]}>
                                <div className={styles["email-options"]}>
                                    <button>
                                        <div className={styles["icon"]}>
                                            <img
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEkUlEQVR4nO2Zb0wbZRzHn3taesUtRpOJYbo/DoQM5c/GMgryzxkYxbGBiQsbNBCEFGaIY8zCCuaUMSiQAQMGQWAgcSY2GeuNuzpc8NqNvRoCItE3841Dthj3ToNzbX+mVRBI197Zo2VJv8n3XZ+nn89dn6dPrwj5448/HgcoJIWqgGIoxywU4HuQTfwJSsIKBxBAKgJIQzbIJhZBhX+BE/g6VAUU2ccgXwc0UgWU4tvwNmGBJASCqiQsoMa3QRsQ433wOlk4qPEsvCkQ2llTEUAxnoEaFOIdeA3RCumEzWPwtT2IrHCK0K0f+HkUCMX4B9HBk9b0PTwNFJKJC9+NngcVfrDu8En/toJoFw9+EMnhOPGr1+DLCE40eIeAGn/vPXgsMvyHRIfgrbEMT0IlroUmaQpQaAtQKAjOSN6C05hy7Db21zgbW4pN4sI3kyGQQVh5g5+W9PJZfEChZ+ADydAqkVKR4R1vVIHv8IIvwPNwDr0oeP4aFAJ5+P76wJvl22CcfAQaCUCyC/gSPAV6JEEbLWAmdWAmwdHeAIB0wvmV35DweiQBs2x+WcDeURmACv8Hn0lYoAK9hDZiwCSPXwW/VI4E0En/ObuclPSjjRowybROBZY6FPAAyhGJNmrATF5xKWCSdQiZL1gzC2I0XDthO9rUd9e9gImccynAkRm+EAjWzMIbddcW+Qg8dCMQ6iuB3TW3rHwEHrkWQJt9JbCjehKeaoHtVd+C5x+hm7IwXwns1t60Pd2L+JNRHovYTI642UY7fSVwRDc8z0NAduZJ8A+5Z6Geif/jvF4RiEROy3D+puiPvrG4Eii/0DjqXoALVDiDnx0PBhWthENXs6HDGHtJbIGTnfX97u6Arq/iuHsBQBjMsntL4DYzCfRYOGQbDjvg7c2jlZaL11/bJhZ8W496Z2SNyeoK/vVas4XiKH5P88BENtrhfzdthrNMwjL4ylaPJi9wXIrHjwcpjpIeafxswd3VL2lrm+A9KXCBL98df+GvEjrdKfxSP2YTZjyRoDhKmt/SM+d2/6+egsbuylhBkzcwihlX8CvvRP/X4VuFwvfeiNhe1lX3E5/d51hz75zQ+RE9FvZKPq208pHIp5WWzq/2DlCDKXJ38w6PRW1qZ/b15RmU1pyRHDja2uH2FEp9ekrQl+dyutmY1iweAitFGljFdJdxL6VnIw5cGdsVdJkL2zJgjEq8aNxTV8ckTNpfs3JM1kgOFPZQsLXqO6cC77c3dSNPomPjpvkKeNKiwXLYWX1nFfy7TQM/Ik+j10fINHTqfW9IFH5RCJG1Jgd8ev2Xv53o6hJ0cHxiOG7HczVM4oI3JI7pc0HVemGeGq4MEgV+hYT8LBM/K2RN/J+eYxXTRmPo+v3m7jNGNecaMq2iX3lDprWXjWlG3sgwvSe0gY2beseQ5TF4ztXDjqt++caru5C3MzQWGdvM7L9VZDj4WCh4AZ3xuJGJm/icifb+n3xrowck6WeiC1uN+0a1TOLPajptUWVQWu13yH4IzDVk2tSGtMWqa8nzLex+ts8YU2Afg/zxxx/kaf4GzSVnCicBYF0AAAAASUVORK5CYII="
                                                style={{ height: "30px", width: "30px" }}
                                            />
                                        </div>
                                        <div className={styles["text"]}>Continue with Google</div>
                                        <div></div>
                                    </button>
                                </div>
                                <div className={styles["email-options"]} style={{ marginBottom: '20px' }}>
                                    <button>
                                        <div className={styles["icon"]}>
                                            <img
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC8klEQVR4nO2aTYhNYRjHfzMYk3yEBhGpwcLGZygL0cwCkQ2hRFnIxoIyubFhoVnIbWzEYmRYsPA5O5FSPvKRfEwykWiURsZnxufVW++UbvO+7zkz9zn3mXPvr/7N7nR/z5xz3vd9zgO6GQZsAlqBt8ApSoQhQAb4BOT+y3FKgFnA4zzxnjSScuYD7x3yJmtI+X/+s0f+DzCGlFINPPLIm5wjxewPyJssIKWMBj4G5FtIMXsC8s+BEaSY+x75TmAmKaYa+OWQ7wLmknImO+RvANMoAcblid8DNgMVlAgVwEqgHpjEAKcWaAAuA+3AF/scm7f4SWAVUBXzejuAs8AT+0I013wN3AKOAMtjXlOEhcAV4G+EzYzZ5zd53uxmO3wQeBbhWj3pAHYBQxP2ZjhwLKJ4b7kJ7AO2A4djSvcWc4Kck5T8FKCtnz9YIuYRqZOWnwq8USDryndgnpT8KOCpAslQXki9E5oVyIViVonFEvJLFciFYnoKExDi2gC47cdLyS9SIOhLt/TBqUmBpC+moyTKSwWSrnTZrpIYtQokfTF3pyirFUj6sky6ALsVSLryO4nTYFaBqCvmg6k4RxWIuvIgiQKcUCDqysNSvwPeJVGARgWivkyULkCDAklftkkXYK0CyVBrTZTZCiRDEesAYTsr3QokfbkLDEKQ2wokQzFfmcU4pEAwFNOe3yhVgDoFglHPBuZrUsGp6mVmT3PMQOXYQhehRYFY3EbJhkIWoF6BVNysKGQBKoFXCqTiHJUHU2B2KhCLmgMIMNI+Wznl+QbUIERGgWAoposlOsPfoUDSlU6JJTCfdQpEXdlCQlxUIJuf60lOmNUoexS+AtNJmCV2/51TkK0UiYwCeTNKV1SyRZS/Y1emolIJnI75wz/YoYsz9qDV2ofhq7YklryomLfvXuBHYIyt2Y7bmKK5epBZu5775C9JfxbvKzPsJ+t2WwwjctUORJqtdJxe5Hrggj3Y/LR/z9sR2TJlypQpU4b+8Q/0NcSARbXJOQAAAABJRU5ErkJggg=="
                                                style={{ height: "30px", width: "30px" }}
                                            />
                                        </div>
                                        <div className={styles["text"]}>Continue with Apple</div>
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