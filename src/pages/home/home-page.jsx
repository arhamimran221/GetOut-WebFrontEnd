import React, { useEffect, useState } from "react";
import PageLayout from "../layouts/page-layout";
import BannerImage from "../../Assets/BackgroundBanner.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HomePage = () => {
  return (
    <PageLayout>
      <div className="">
      <div className="relative">
        <div className="mt-[85px] w-full">
          <img src={BannerImage} alt="" className="w-full"/>
        </div>
        <div className="absolute bottom-[-100px] left-[25%] right-[25%] m-auto bg-[#404580] z-[999] rounded-lg flex flex-col items-center w-[687px] h-[240px] px-[45px] py-[30px] container">
          <h2 className="font-poppins text-[#FF0000] font-semibold text-[60px] text-shadow-lg leading-[28px]">Uncover more.</h2>
          <p className="font-poppins text-[#FFFFFF] text-[16px] font-bold my-[30px] leading-[28px]">Find the events that are taking place in your area</p>
          <div className="flex gap-[20px] w-[100%]">
            <form class="w-[80%]">
              <label
                for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center p-3 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  class="block  py-3 pl-[40px] pr-[20px] text-sm w-[100%] font-poppins text-[#828282] border-[1px] border-[#828282] rounded-[8px] focus:outline-[#ff0000]"
                  placeholder="Tell us your location"
                  required
                />
              </div>
            </form>
            <button className="p-3 bg-[#ff0000] rounded-[8px] text-[#fff] w-[20%]">
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="w-[80%] mx-auto mt-[150px] flex justify-between items-center font-poppins bg-[#F5F5F5] py-[20px] px-[30px] rounded-[8px]">
          <div className="">
            <h2 className="font-inter text-[#404580] font-[600] text-[20px] leading-[30px]">Sign in to access more features</h2>
            <p className="font-inter text-[#000] text-[16px] leading-[24px] mt-[10px]">Build your own calendar of your wishlist events and keep up to date with your favourite hosts.</p>
          </div>
          <div className="">
            <button className='px-4 py-2 border-[1px] border-[#828282]  font-poppins text-[#828282] leading-[16px] text-[16px] font-[400] rounded-md'>Sign in</button>
          </div>
        </div>
        <div className="mt-[80px]">
          <h2 className="text-center font-poppins text-[#404580] font-[600] text-[32px] leading-[48px]">Our Categories</h2>
          <Swiper
        spaceBetween={20}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        // rewind={true}
        loop={true}
        pagination={false}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="pt-[50px] bg-[#fff]"
        slidesPerView={3.5}
        breakpoints={{
          200: {
            slidesPerView: 1,
          },
          580: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        
      >
        <SwiperSlide>
          <div className="flex  gap-[20px] items-center w-[100%] border-[2px] border-[#F5F5F5] rounded-[8px] overflow-hidden">
           <div className="w-[40%] bg-[#ff0000] px-4 py-10">
            <h2 className="font-inter text-[#fff] font-[600] text-[20px] leading-[30px]"><span className="text-[#000] font-[400]">Get</span><br/> Entertained </h2>
           </div>
           <div className="w-[60%]">
           <p className="font-inter text-[16px] leading-[24px] text-center">
            <strong>All things entertainment</strong><br/>
            Live music, theatre, live sports, comedy nights, cinema, performing arts...</p>
           </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex  gap-[20px] items-center w-[100%] border-[2px] border-[#F5F5F5] rounded-[8px] overflow-hidden">
           <div className="w-[40%] bg-[#4169E1] px-4 py-10">
            <h2 className="font-inter text-[#fff] font-[600] text-[20px] leading-[30px]"><span className="text-[#000] font-[400]">Get</span><br/>
            Cultured </h2>
           </div>
           <div className="w-[60%]">
           <p className="font-inter text-[16px] leading-[24px] text-center">
            <strong>Grow yourself.</strong><br/>
            Art exhibitions, music recitals, lectures, museums, book readings...</p>
           </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex  gap-[20px] items-center w-[100%] border-[2px] border-[#F5F5F5] rounded-[8px] overflow-hidden">
           <div className="w-[40%] bg-[#5F9EA0] px-4 py-10">
            <h2 className="font-inter text-[#fff] font-[600] text-[20px] leading-[30px]"><span className="text-[#000] font-[400]">Get</span><br/> Recreational </h2>
           </div>
           <div className="w-[60%]">
           <p className="font-inter text-[16px] leading-[24px] text-center">
            <strong>Just for the fun of it.</strong><br/>
            Leisure activities, pub quizzes, games, bowling, boating, theme parks, karaoke...</p>
           </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex  gap-[20px] items-center w-[100%] border-[2px] border-[#F5F5F5] rounded-[8px] overflow-hidden">
           <div className="w-[40%] bg-[#FF4500] px-4 py-10">
            <h2 className="font-inter text-[#fff] font-[600] text-[20px] leading-[30px]"><span className="text-[#000] font-[400]">Get</span><br/> Active </h2>
           </div>
           <div className="w-[60%]">
           <p className="font-inter text-[16px] leading-[24px] text-center">
            <strong>All things entertainment</strong><br/>
            Live music, theatre, live sports, comedy nights, cinema, performing arts...</p>
           </div>
          </div>
        </SwiperSlide>

      </Swiper>
        </div>
        <div className="my-[80px] flex w-[100%] gap-[30px] justify-center ">
         <div className="w-[30%] font-inter">
          <h2 className="text-[#404580] font-[600] text-[20px] leading-[30px] text-center">Our goal is to make it easier for everyone to uncover the events that are available to them</h2>
          <p className="font-inter text-[#828282] font-[400] text-[16px] leading-[24px] text-center mt-[10px]">
          We have built an intuitive and simple platform that enables you to easily uncover the events that are available to you. By simply entering your search area, you can easily discover what is going on there in an easy-to-use format which can be arranged by category and date.
          </p>
         </div>
         <div className="w-[30%] font-inter">
          <h2 className="text-[#404580] font-[600] text-[20px] leading-[30px] text-center">Our goal is to make it easier for everyone to uncover the events that are available to them</h2>
          <p className="font-inter text-[#828282] font-[400] text-[16px] leading-[24px] text-center mt-[10px] w-[352px]">
          We have built an intuitive and simple platform that enables you to easily uncover the events that are available to you. By simply entering your search area, you can easily discover what is going on there in an easy-to-use format which can be arranged by category and date.
          </p>
         </div>
         <div className="w-[30%] font-inter">
          <h2 className="text-[#404580] font-[600] text-[20px] leading-[30px] text-center">Our goal is to make it easier for everyone to uncover the events that are available to them</h2>
          <p className="font-inter text-[#828282] font-[400] text-[16px] leading-[24px] text-center mt-[10px]">
          We have built an intuitive and simple platform that enables you to easily uncover the events that are available to you. By simply entering your search area, you can easily discover what is going on there in an easy-to-use format which can be arranged by category and date.
          </p>
         </div>
        </div>
      </div>
      </div>
    </PageLayout>
  );
};

export default HomePage;
