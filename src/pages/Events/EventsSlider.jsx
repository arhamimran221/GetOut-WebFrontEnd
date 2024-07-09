import React from "react";
import LocationIcon from "../../Assets/HeartIcon.svg";
import { Carousel } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const EventsSlider = () => {
  return (
    <div className="w-[300px] h-[221px]">
        <div className="eventSlide-bg overflow-hidden rounded-lg h-[100%] w-[100%] relative">
        <div className="absolute bottom-[10px] w-[90%] m-auto left-[8px] right-[8px]">

          <div className="flex justify-between mt-[2px]">
            <div className="">
            <h2 className="font-inter text-[#fff] font-[500] text-[14px] leading-[20px]">
          Event Title
          </h2>
          <p className="font-poppins text-[#fff] text-[12px] tracking-[0.5px]">Firehouse Art Gallery</p>
          <p className="font-poppins text-[#fff] text-[12px] tracking-[0.5px]">
              Mon, 26th Feb{" "}
            </p>
            </div>

            <p className="font-poppins text-[#fff] text-[12px] tracking-[0.5px] flex gap-[10px] items-center">
            <svg width="18" height="23" viewBox="0 0 18 23" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M0.25 22.5776V2.57764C0.25 1.89014 0.494792 1.3016 0.984375 0.812012C1.47396 0.322428 2.0625 0.0776367 2.75 0.0776367H15.25C15.9375 0.0776367 16.526 0.322428 17.0156 0.812012C17.5052 1.3016 17.75 1.89014 17.75 2.57764V22.5776L9 18.8276L0.25 22.5776ZM2.75 18.7651L9 16.0776L15.25 18.7651V2.57764H2.75V18.7651Z" fill="currentColor"/>
</svg>

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsSlider;
