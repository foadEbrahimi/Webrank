import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/skyblue";
export default function Slider() {
  return (
    <Splide
      className="items-center"
      aria-label="My Favorite Images"
      options={{
        loop: true,
        perPage: 5,
        focus: "center",
        autoplay: true,
        direction: "rtl",
        arrows: false,
        breakpoints: {
          500: {
            perPage: 2,
          },
          700: {
            perPage: 3,
          },
          800: {
            perPage: 4,
          },
          1200: {
            perPage: 6,
          },
          1300: {
            perPage: 7,
          },
        },
        paginationDirection: "rtl",
      }}
    >
      <SplideSlide>
        <img
          src=""
          className="w-32 transition-all grayscale-[100] hover:grayscale-0"
          alt=""
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src="./Images/Slider/img2.png"
          className="w-32 transition-all grayscale-[100] hover:grayscale-0"
          alt="Image 2"
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src="./Images/Slider/img3.png"
          className="w-32 transition-all grayscale-[100] hover:grayscale-0"
          alt=""
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src="./Images/Slider/img4.png"
          className="w-32 transition-all grayscale-[100] hover:grayscale-0"
          alt="Image 2"
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src="./Images/Slider/img5.png"
          className="w-32 transition-all grayscale-[100] hover:grayscale-0"
          alt="Image 2"
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src="./Images/Slider/img1.png"
          className="w-32 transition-all grayscale-[100] hover:grayscale-0"
          alt=""
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src="./Images/Slider/img2.png"
          className="w-32 transition-all grayscale-[100] hover:grayscale-0"
          alt="Image 2"
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src="./Images/Slider/img3.png"
          className="w-32 transition-all grayscale-[100] hover:grayscale-0"
          alt=""
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src="./Images/Slider/img4.png"
          className="w-32 transition-all grayscale-[100] hover:grayscale-0"
          alt="Image 2"
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src="./Images/Slider/img5.png"
          className="w-32 transition-all grayscale-[100] hover:grayscale-0"
          alt="Image 2"
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src="./Images/Slider/img5.png"
          className="w-32 transition-all grayscale-[100] hover:grayscale-0"
          alt="Image 2"
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src="./Images/Slider/img5.png"
          className="w-32 transition-all grayscale-[100] hover:grayscale-0"
          alt="Image 2"
        />
      </SplideSlide>
    </Splide>
  );
}
