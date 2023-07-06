"use client";

import "./detailsGallery.css";
import { useState, useEffect } from "react";
import { TfiGallery } from "react-icons/tfi";
import { DetailsGalleryPopup } from "../../modals/Popup/Popup";

const DetailsGallery = () => {
  const [gallery, setGallery] = useState(false);

  useEffect(() => {
    let scrollPosition = 0;

    const handleScroll = () => {
      if (gallery) {
        window.scrollTo(0, scrollPosition);
      }
    };

    if (gallery) {
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
  }, [gallery]);

  return (
    <div className="details-gallery-root">
      <div className="details-image-container">
        <div className="details-image-right">
          <img src="/images/details.jpg" alt="" />
        </div>
        <div className="details-image-left">
          <div className="details-image-card">
            <img src="/images/details.jpg" alt="" />
          </div>
          <div className="details-image-card">
            <img
              src="/images/details.jpg"
              alt=""
              style={{ borderTopRightRadius: "5px" }}
            />
          </div>
          <div className="details-image-card">
            <img src="/images/details.jpg" alt="" />
          </div>
          <div className="details-image-card">
            <img
              src="/images/details.jpg"
              alt=""
              style={{ borderEndEndRadius: "5px" }}
            />
          </div>
        </div>
        <div className="show-all-photos">
          <button onClick={() => setGallery(true)}>
            <TfiGallery />
            Show all photos
          </button>
        </div>
      </div>
      <DetailsGalleryPopup trigger={gallery} setTrigger={setGallery}>
        <div className="gallery-container">
          <div className="gallery-image">
            <div className="top-image">
              <img src="/images/details.jpg" alt="" />
            </div>
            <div className="bottom-image">
              <div className="left">
                <img src="/images/details.jpg" alt="" />
              </div>
              <div className="right">
                <img src="/images/details.jpg" alt="" />
              </div>
            </div>
            <div className="top-image">
              <img src="/images/details.jpg" alt="" />
            </div>
            <div className="bottom-image">
              <div className="left">
                <img src="/images/details.jpg" alt="" />
              </div>
              <div className="right">
                <img src="/images/details.jpg" alt="" />
              </div>
            </div>
            <div className="top-image">
              <img src="/images/details.jpg" alt="" />
            </div>
            <div className="bottom-image">
              <div className="left">
                <img src="/images/details.jpg" alt="" />
              </div>
              <div className="right">
                <img src="/images/details.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </DetailsGalleryPopup>
    </div>
  );
};

export default DetailsGallery;
