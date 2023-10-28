"use client";
import styles from "./page.module.css";
import { useGetProgressQuery } from "@/src/api/features/progress/progressSlice";
import { useGetUserQuery } from "@/src/api/features/user/userSlice";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { BsFillPersonFill, BsHeadphones } from "react-icons/bs";
import HostingFooter from "@/src/components/Hosting/Footer/HostingFooter";
import { useAppSelector } from "@/src/api/hook";

const Hosting = ({}) => {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  console.log(isLoggedIn);
  const id = "652c413c376e3cb68dc91f30";
  const {
    data: user,
    loading: userLoading,
    isSuccess: userSuccess,
    isError: userError,
    error: userErrorData,
    refetch: refetchUser,
  } = useGetUserQuery(id);

  const {
    data: progress,
    loading: progressLoading,
    isSuccess: progressSuccess,
    isError: progressError,
    error: progressErrorData,
    refetch: refetchProgress,
  } = useGetProgressQuery(id);

  return (
    <div className={styles["hosting-root"]}>
      <div className={styles["hosting-container"]}>
        <h2>Welcome Back, {user && user.name}</h2>
        <div className={styles["progress-container"]}>
          <div className={styles["progress-data"]}>
            <h4>Verify your identity</h4>
            <p style={{ color: "#c43e20" }}>Required to publish</p>
            <p>{progress && progress.name}</p>
            <button>Get Started</button>
          </div>
          <div className={styles["info-icon"]}>
            <AiOutlineInfoCircle
              style={{ fontSize: "25px", color: "#c43e20" }}
            />
          </div>
        </div>
        <div className={styles["your-reservations"]}>
          <div className={styles["title"]}>
            <h2>Your Reservations</h2>
            <p>All Reservations (0)</p>
          </div>
          <div className={styles["your-reservations-navBar"]}>
            <ul>
              <li>Checking out (0)</li>
              <li>Currently hosting (0)</li>
              <li>Arriving soon (0)</li>
              <li>Upcoming (0)</li>
              <li>Pending review (0)</li>
            </ul>
          </div>
          <div className={styles["your-reservations-content"]}>
            <div className={styles["your-reservations-empty"]}>
              <HiOutlineClipboardDocumentList
                style={{ fontSize: "35px", marginBottom: "20px" }}
              />
              <p>
                You don't have any guests <br /> checking out today <br /> or
                tomorrow
              </p>
            </div>
          </div>
        </div>
        <div className={styles["here-to-help"]}>
          <div className={styles["title"]}>
            <h2>We're here to help</h2>
          </div>
          <div className={styles["content"]}>
            <div className={styles["help"]}>
              <BsFillPersonFill
                style={{ marginRight: "20px", fontSize: "30px" }}
              />
              <div>
                <p style={{ fontWeight: "bold" }}>Guidance from a Superhost</p>
                <p
                  style={{ color: "grey", fontSize: "14px", marginTop: "5px" }}
                >
                  We'll match you with an experienced Host who can help you get
                  started
                </p>
              </div>
            </div>
            <div className={styles["help"]} style={{ marginLeft: "50px" }}>
              <BsHeadphones style={{ marginRight: "20px", fontSize: "30px" }} />
              <div>
                <p style={{ fontWeight: "bold" }}>
                  Contact specialized support
                </p>
                <p
                  style={{ color: "grey", fontSize: "14px", marginTop: "5px" }}
                >
                  We'll match you with an experienced Host who can help you get
                  started
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HostingFooter />
    </div>
  );
};

export default Hosting;
