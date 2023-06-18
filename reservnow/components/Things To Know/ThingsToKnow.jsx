"use client";

import "./thingsToKnow.css";
import { CentreRulesPopup } from "../modals/Popup/Popup";
import { SafetyPropertyPopup } from "../modals/Popup/Popup";
import { CancellationPolicyPopup } from "../modals/Popup/Popup";
import { MdArrowForwardIos } from "react-icons/md";
import { useState, useEffect } from "react";

const ThingsToKnow = ({}) => {
  const [centreRules, setCentreRules] = useState(false);
  const [SafetyProperty, setSafetyProperty] = useState(false);
  const [cancellationPolicy, setCancellationPolicy] = useState(false);

  useEffect(() => {
    let scrollPosition = 0;

    const handleScroll = () => {
      if (centreRules || SafetyProperty || cancellationPolicy) {
        window.scrollTo(0, scrollPosition);
      }
    };

    if (centreRules || SafetyProperty || cancellationPolicy) {
      scrollPosition = window.scrollY;
      document.body.classList.add("popup-open");
      document.body.style.paddingRight = `${
        window.innerWidth - document.documentElement.clientWidth
      }px`;
      window.addEventListener("scroll", handleScroll);
      return () => {
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      document.body.classList.remove("popup-open");
    }
  }, [centreRules || SafetyProperty || cancellationPolicy]);
  return (
    <div className="things-to-know-root">
      <div className="things-container">
        <div className="title">Things To Know</div>
        <div className="content">
          <div className="part">
            <div className="title">House rules</div>
            <div className="overall-text">
              <div className="text">Check-in 3 hours before event</div>
              <div className="text">Checkout 3 hours after event</div>
              <div className="text">Checkout 4 guests maximum</div>
            </div>
            <div className="show-all-btn">
              <button onClick={() => setCentreRules(true)}>
                Show more <MdArrowForwardIos style={{ marginLeft: "5px" }} />
              </button>
            </div>
          </div>
          <div className="part">
            <div className="title">Safety & property</div>
            <div className="overall-text">
              <div className="text">Carbon monoxide alarm not reported</div>
              <div className="text">Smoke alarm not reported</div>
            </div>
            <div className="show-all-btn">
              <button onClick={() => setSafetyProperty(true)}>
                Show more <MdArrowForwardIos style={{ marginLeft: "5px" }} />
              </button>
            </div>
          </div>
          <div className="part">
            <div className="title">Cancellation policy</div>
            <div className="overall-text">
              <div className="text">Free cancellation before Aug 20.</div>
              <div className="text">
                Review the Host’s full cancellation policy which applies even if
                you cancel for illness or disruptions caused by COVID-19.
              </div>
            </div>
            <div className="show-all-btn">
              <button onClick={() => setCancellationPolicy(true)}>
                Show more <MdArrowForwardIos style={{ marginLeft: "5px" }} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <CentreRulesPopup
        trigger={centreRules}
        setTrigger={setCentreRules}
      ></CentreRulesPopup>
      <SafetyPropertyPopup
        trigger={SafetyProperty}
        setTrigger={setSafetyProperty}
      ></SafetyPropertyPopup>
      <CancellationPolicyPopup
        trigger={cancellationPolicy}
        setTrigger={setCancellationPolicy}
      ></CancellationPolicyPopup>
    </div>
  );
};

export default ThingsToKnow;
