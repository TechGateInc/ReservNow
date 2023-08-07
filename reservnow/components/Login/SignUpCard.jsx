"use client"

import Link from "next/link";
import styles from "../../components/modals/Auth Modal/Sign Up Modal/signUpModal.module.css";
import "./loginCard.css"
import { IoMdArrowBack } from "react-icons/io";

export default function SignUpCard(props) {
    return props.trigger ? (
        <div className="loginCard-root">
            <div>
                <IoMdArrowBack className="back-btn" onClick={() => {
                    props.triggerEmailCard(true);
                    props.setTrigger(false)
                }} />

                Finish Signing up

                <div className={styles["signup-root"]}>
                    <div className={styles["signup-modal-form"]}>
                        <div className={styles["form-content"]}>
                            <input
                                type="text"
                                placeholder="Full Name"
                                name="name"
                            // value={formData.name}
                            // onChange={handleChange}
                            />
                        </div>
                        <div className={styles["form-content"]}>
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                            // value={formData.email}
                            // onChange={handleChange}
                            />
                        </div>
                        <div className={styles["form-content"]}>
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                            // value={formData.password}
                            // onChange={handleChange}
                            />
                        </div>
                        <div className={styles["form-content"]}>
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                name="confirmPassword"
                            // value={confirmPassword}
                            // onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                        <div className={styles["form-content"]}>
                            <input
                                type="text"
                                placeholder="Phone No"
                                name="phoneNo"
                            // value={formData.phoneNo}
                            // onChange={handleChange}
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
                            // disabled={isFormFilled() || isPasswordMatch() ? true : false}
                            // onClick={handleSubmit}
                            >
                                Agree and continue
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    ) : null
}