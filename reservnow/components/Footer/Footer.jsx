"use client";
import { useEffect, useState } from "react";
import "../Footer/footer.css";
import { AiFillCaretUp, AiOutlineCloseCircle } from "react-icons/ai";
if (typeof document !== "undefined") {
  const AOS = require("aos");
  require("aos/dist/aos.css");
  AOS.init();
}

const Footer = () => {
  const [isHidden, setIsHidden] = useState(true);

  const toggleHiddenSection = () => {
    setIsHidden(!isHidden);
  };

  const hideHiddenSection = () => {
    setIsHidden(true);
  };

  useEffect(() => {
    const body = document.body;
    if (isHidden) {
      body.classList.remove("overlay-active");
    } else {
      body.classList.add("overlay-active");
    }
  }, [isHidden]);

  return (
    <div>
      <div className="footer">
        {isHidden ? (
          <div className="leftLinks">
            <p>©2023 ReserveNow.inc</p><p>Terms</p><p>Sitemap</p>
            <p>Privacy</p><p>Centres</p>
          </div>
        ) : null}
        {isHidden ? (
          <div className="rightLinks">
            <p>English</p>
            <p>Support & Services</p>
          </div>
        ) : null}
        {isHidden ? (
          //   <button onClick={toggleHiddenSection}>Show Hidden Section</button>
          <AiFillCaretUp
            onClick={toggleHiddenSection}
            className="dropdownCaret"
          />
        ) : null}
      </div>
      {!isHidden ? (
        <div
          className="hiddenSectionWrapper"
        // data-aos="fade-down"
        >
          <div className={`hiddenSection ${isHidden ? "" : "active"}`}

            data-aos={isHidden ? "fade-down" : "fade-up"}
            data-aos-duration="700"

          >
            {/* Content of the hidden section */}
            <h1 onClick={hideHiddenSection}

            >
              <AiOutlineCloseCircle style={{ fontSize: 20 }} />
            </h1>
            <div className="hiddenFooterLinkHolder">
              <div className="hiddenFooterLink1">
                <div style={{ marginBottom: 20 }}>
                  <p>Support</p>
                </div>

                <div>
                  <p className="hiddenlink-space">Help Centre</p>
                  <p className="hiddenlink-space">Report a neighborhood</p>
                  <p className="hiddenlink-space">Cancellation options</p>
                  <p></p>
                </div>
              </div>
              <div className="hiddenFooterLink2">
                <div style={{ marginBottom: 20 }}>
                  <p>Community</p>
                </div>
                <div>
                  <p className="hiddenlink-space">Help Centre</p>
                  <p className="hiddenlink-space">Report a neighborhood</p>
                  <p className="hiddenlink-space">Cancellation options</p>
                  <p></p>
                </div>
              </div>
              <div className="hiddenFooterLink3">
                <div style={{ marginBottom: 20 }}>
                  <p> Hosting</p>
                </div>
                <div>
                  <p className="hiddenlink-space">Help Centre</p>
                  <p className="hiddenlink-space">Report a neighborhood</p>
                  <p className="hiddenlink-space">Cancellation options</p>
                  <p></p>
                </div>
              </div>
              <div className="hiddenFooterLink4">
                <div style={{ marginBottom: 20 }}>
                  <p>ReserveNow</p>
                </div>
                <div>
                  <p className="hiddenlink-space">Help Centre</p>
                  <p className="hiddenlink-space">Report a neighborhood</p>
                  <p className="hiddenlink-space">Cancellation options</p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`overlay ${isHidden ? "" : "active"}`}
            onClick={hideHiddenSection}
          ></div>
        </div>
      ) : null}
    </div>
  );
};

export default Footer;
