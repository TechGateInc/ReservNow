import React, { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

const ImageSlider = () => {
  const [showArrows, setShowArrows] = useState(false);

  const splideOptions = {
    type: "loop",
    perPage: 1,
    autoplay: true,
    arrows: showArrows, // Set the initial value based on showArrows state
  };

  const handleMouseEnter = () => {
    setShowArrows(true);
  };

  const handleMouseLeave = () => {
    setShowArrows(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ position: "relative" }}
    >
      <Splide options={splideOptions}>
        <SplideSlide>
          <img
            src="images/TestImage.jpg"
            width={"100%"}
            className="centreImage"
            alt="Slide 1"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src="images/TestImage.jpg"
            width={"100%"}
            className="centreImage"
            alt="Slide 2"
          />
        </SplideSlide>
        <SplideSlide>
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
