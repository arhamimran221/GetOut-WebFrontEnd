import React from "react";
import LocationIcon from "../../Assets/Location-Icon.svg";
import { Carousel } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const EventsSlider = () => {
  return (
    <div className="w-[33.32%]">
       <Swiper
          navigation={true} modules={[Navigation]} className="mySwiper" loop={true}
          spaceBetween={20}
        >
        <SwiperSlide>
        <div className="eventSlide-bg overflow-hidden rounded-lg h-[160px] w-[100%] ">
        <div className="mt-[94px] px-4 py-2">
          <h2 className="font-poppins text-[#fff] font-[500] text-[14px] leading-[20px]">
            Melody Madness
          </h2>
          <div className="flex justify-between mt-[2px]">
            <p className="font-poppins text-[#fff] text-[12px] tracking-[0.5px]">
              Mon, 26th Feb{" "}
            </p>
            <p className="font-poppins text-[#fff] text-[12px] tracking-[0.5px] flex gap-[10px] items-center">
              <img src={LocationIcon} />
              Ahmedabad
            </p>
          </div>
        </div>
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="eventSlide-bg overflow-hidden rounded-lg h-[160px] w-[100%] mb-[10px]">
        <div className="mt-[94px] px-4 py-2">
          <h2 className="font-poppins text-[#fff] font-[500] text-[14px] leading-[20px]">
            Melody Madness
          </h2>
          <div className="flex justify-between mt-[2px]">
            <p className="font-poppins text-[#fff] text-[12px] tracking-[0.5px]">
              Mon, 26th Feb{" "}
            </p>
            <p className="font-poppins text-[#fff] text-[12px] tracking-[0.5px] flex gap-[10px] items-center">
              <img src={LocationIcon} />
              Ahmedabad
            </p>
          </div>
        </div>
      </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default EventsSlider;
