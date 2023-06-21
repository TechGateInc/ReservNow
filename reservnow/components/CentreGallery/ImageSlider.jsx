"use client"
import React, { useState, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "../CentreGallery/CentreGallery.css";

const ImageSlider = () => {
  const [showArrows, setShowArrows] = useState(false);
  const splideRef = useRef(null);

  const splideOptions = {
    type: "loop",
    perPage: 1,
    autoplay: false,
    arrows: showArrows,
  };

  const handleMouseEnter = () => {
    setShowArrows(true);
   
  };

  const handleMouseLeave = () => {
    setShowArrows(false);
  
    splideRef.current.go("+1"); // Move to the next slide after resuming autoplay
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{borderRadius:8, overflow:"hidden"}}
      
    >
      <Splide options={splideOptions} ref={splideRef} >
        <SplideSlide  >
          <img
            src="images/TestImage.jpg"
            width={"100%"}
            className="centreImage"
            alt="Slide 1"
          />
        </SplideSlide>
        <SplideSlide >
          <img
            src="images/TestImage.jpg"
            width={"100%"}
            className="centreImage"
            alt="Slide 2"
          />
        </SplideSlide>
        <SplideSlide >
          <img
            src="images/TestImage.jpg"
            width={"100%"}
            className="centreImage"
            alt="Slide 3"
          />
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default ImageSlider;
