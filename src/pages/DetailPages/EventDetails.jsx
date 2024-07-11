import React, { useRef, useState } from "react";
import DateIcon from "../../Assets/Date.svg";
import PageLayout from "../layouts/page-layout";
import emergency from "../../Assets/emergencyMark.svg";
import Back from "../../Assets/backIcon.svg";
// import arrowLeft from "../../Assets/arrowLeft.svg";
// import arrowRight from "../../Assets/arrowRight.svg";
import LocationIcon from "../../Assets/LocationEventIcon.svg";
import webIcon from "../../Assets/WebEventIcon.svg";
import LockIcon from "../../Assets/TimeEventIcon.svg";
import Link from "../../Assets/LinkEventIcon.svg";
import Park from "../../Assets/ParkingEventIcon.svg";
import tick from "../../Assets/tickicon.svg";
import Wheel from "../../Assets/WheelChairIcon.svg";
import food from "../../Assets/FoodEventIcon.svg";
import Toilet from "../../Assets/ToiletEventIcon.svg";
import Wifi from "../../Assets/WifiEventIcon.svg";
import change from "../../Assets/changingEventIcon.svg";
import HostImage from "../../Assets/HostImage.jpeg";
import HostCard from "../Events/HostCard";
import { CheckOutlined } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import HeartIcon from "../../Assets/HeartIcon.svg";
import MapIcon from "../../Assets/MapIcon.svg";
import Instagram from "../../Assets/Instagram.svg";
import Facebook from "../../Assets/Facebook.svg";
import Twitter from "../../Assets/Twitter.svg";
import Linkedln from "../../Assets/Linkedin.svg";
import arrowLeft from "../../Assets/leftIconEvent.svg";
import arrowRight from "../../Assets/RightIconEvent.svg";

const EventsDetails = (props) => {
  const scrollHorizontallyRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        top: 0,
        left: 400,
        behavior: "smooth",
      });
    }
  };
  const scrollHorizontallyLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        top: 0,
        left: -400,
        behavior: "smooth",
      });
    }
  };
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;


  return (
    <PageLayout>
      <div className="container">
      <div className="bg-[#F5F5F5] rounded-lg px-4 py-3 w-[96.5%] mt-[100px] mx-4 flex gap-[10px] mb-[10px]">
        <div className="w-[100%] flex justify-between items-center">
          <div onClick={()=> navigate(-1)} className="hover:scale-[1.1] ease-in-out duration-300 cursor-pointer">
            <img src={Back} alt="" width={24} height={24} />
          </div>
          <div className="flex gap-[10px]">
            <img
              src={arrowLeft}
              alt=""
              onClick={scrollHorizontallyLeft}
              className="cursor-pointer  hover:scale-[1.2] ease-in-out duration-300 w-[24px] h-[24px]"
            />
            <img
              src={arrowRight}
              alt=""
              onClick={scrollHorizontallyRight}
              className="cursor-pointer  hover:scale-[1.2] ease-in-out duration-300 w-[24px] h-[24px]"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-[20px] w-[75%] mx-auto mt-[20px]">
        <div className="w-[23%]">
          {data && (
            <>
              <img
                src={data.eventImage}
                alt=""
                className="w-[100%] rounded-[8px]"
              />
              <div className="flex gap-[10px] my-[10px]">
                <img
                  src={data.eventImage}
                  alt=""
                  className="w-[100%] rounded-[8px]"
                />
                <img
                  src={data.eventImage}
                  alt=""
                  className="w-[100%] rounded-[8px]"
                />
              </div>
              <div className="flex gap-[10px] mb-[10px]">
                <img
                  src={data.eventImage}
                  alt=""
                  className="w-[100%] rounded-[8px]"
                />
                <img
                  src={data.eventImage}
                  alt=""
                  className="w-[100%] rounded-[8px]"
                />
              </div>
              <img
                src={data.eventImage}
                alt=""
                className="w-[50%] rounded-[8px]"
              />
            </>
          )}
        </div>
        <div className="w-[43%]">
          <div className="flex justify-between items-start">
            <div className="">
              <h2 className="font-inter font-[700] text-[20px] leading-[30px]">
                Event title
              </h2>
              <p className="font-inter font-[400] text-[14px] leading-[24px]">
                Series Title
              </p>
            </div>
            <img src={HeartIcon} className="text-[#ff0000] w-[18px]" />
          </div>
          <hr className="my-[10px] border-[5px] border-[#D9D9D9] w-[70%]" />
          <div className="bg-[#FBBC05] p-[10px] rounded-[8px] flex gap-[10px]">
            <img src={emergency} alt="" srcset="" />
            <p className="font-inter font-[400] text-[14px] text-[#000]">
              There has been a change of plan watch out.
            </p>
          </div>
          <p className="font-[400] font-poppins text-[14px] text-[#404040] pr-[20px] pt-[16px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the{" "}
          </p>
          <div className="flex mt-[10px] mb-[10px] gap-[10px] items-start w-[100%]">
            <div className="w-[7%]">
              <img
                src={LocationIcon}
                alt=""
                srcset=""
                width={18}
                className="mt-[3px]"
              />{" "}
            </div>
            <div className="w-[93%]">
              <div className="font-poppins font-[400] text-[14px] leading-[28px] flex justify-between w-[70%]">
                <h2 className="font-inter font-[700] text-[15px] leading-[24px]">
                  Venue
                </h2>
                <img src={MapIcon} alt="" srcset="" />
              </div>
              <p className="font-inter font-[400] text-[14px]">
                Maidenhead, Berkshire, SL6
              </p>
            </div>
          </div>
          <div className="flex mb-[10px] gap-[10px] items-center">
            <div className="w-[7%]">
              <img src={DateIcon} alt="" srcset="" width={18} />{" "}
            </div>
            <p className="font-inter font-[400] text-[14px] leading-[28px] w-[93%]">
              30 April 2024, 10:00 PM
            </p>
          </div>
          <div className="flex mb-[10px] gap-[10px] items-center">
            <div className="w-[7%]">
              <img src={LockIcon} alt="" srcset="" width={23} />{" "}
            </div>
            <p className="font-inter font-[400] text-[14px] leading-[28px] w-[93%]">
              10:00 PM
            </p>
          </div>
          <div className="flex mb-[10px] gap-[10px] items-start">
            <div className="w-[7%]">
              <img
                src={Link}
                alt=""
                srcset=""
                width={18}
                className="mt-[5px]"
              />{" "}
            </div>
            <p className="font-inter font-[400] text-[14px] leading-[28px] w-[93%]">
              www.dfsd
              <br />
              Tickets available at the door
            </p>
          </div>
          <div className="flex mb-[10px] gap-[10px] items-center">
            <div className="w-[7%]">
              <img src={webIcon} alt="" srcset="" width={18} />
            </div>
            <p className="font-inter font-[400] text-[14px] leading-[28px] w-[93%]">
              www.getgerg.com
            </p>
          </div>
          <h2 className="font-inter font-[700] text-[16px] leading-[24px] mt-[20px]">
            Social Media
          </h2>
          <div className="flex gap-[20px] mt-[10px]">
            <img src={Instagram} alt="" />
            <img src={Facebook} alt="" srcset="" />
            <img src={Twitter} alt="" srcset="" />
            <img src={Linkedln} alt="" srcset="" />
          </div>
          <div className="p-[10px] rounded-[8px] bg-[#F5F5F5] mt-[16px]">
            <h5 className="pb-[12px] text-[#000] text-[16px] font-[700] font-inter">
              Important information
            </h5>
            <div className="font-inter text-[#000] font-[400] text-[14px] leading-[24px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </div>
          </div>
          <h2 className="font-inter font-[700] text-[16px] leading-[24px] mt-[20px]">
            Description
          </h2>
          <p className="font-inter text-[#404040] font-[400] text-[16px] mt-[10px] leading-[24px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h2 className="font-inter font-[700] text-[16px] leading-[24px] mt-[20px]">
            Facilities / Features
          </h2>
          <div className="flex justify-between mt-[20px] w-[100%] mb-[15px]">
            <div className="flex gap-[10px] w-[50%] items-center font-inter font-[400] text-[#000] text-[16px] leading-[24px]">
              <img src={Park} alt="" />
              Parking
            </div>
            <div className="flex gap-[10px] w-[50%] items-center font-inter font-[400] text-[#000] text-[16px] leading-[24px] ">
              <img src={Wheel} alt="" />
              Disability Access
            </div>
          </div>
          <div className="flex justify-between mt-[20px] w-[100%] mb-[15px]">
            <div className="flex gap-[10px] w-[50%] items-center font-inter font-[400] text-[#000] text-[16px] leading-[24px]">
              <img src={food} alt="" />
              Food and drink
            </div>
            <div className="flex gap-[10px] w-[50%] items-center font-inter font-[400] text-[#000] text-[16px] leading-[24px] ">
              <img src={Toilet} alt="" />
              Toilets
            </div>
          </div>
          <div className="flex justify-between mt-[20px] w-[100%] mb-[15px]">
            <div className="flex gap-[10px] w-[50%] items-center font-inter font-[400] text-[#000] text-[16px] leading-[24px]">
              <img src={Wifi} alt="" />
              Wifi
            </div>
            <div className="flex gap-[10px] w-[50%] items-center font-inter font-[400] text-[#000] text-[16px] leading-[24px] ">
              <img src={change} alt="" />
              Baby changing
            </div>
          </div>
        </div>
        <div className="w-[33%]">
          <div className="">
            <h2 className="font-inter font-[700] text-[16px] leading-[24px]">
              Hosts
            </h2>
            <p className="font-inter text-[#828282] font-[500] text-[14px] leading-[21px] mb-[15px]">
              Event creator:
            </p>
          </div>
          <HostCard
            image_url={HostImage}
            title="Host Name"
            desc="Host description talking about host doing host things"
          />
          <p className="font-inter text-[#828282] font-[500] text-[14px] leading-[21px] my-[6px]">
            Event creator:
          </p>
          <HostCard
            image_url={HostImage}
            title="Host Name"
            desc="Host description talking about host doing host things"
          />

          <HostCard
            image_url={HostImage}
            title="Host Name"
            desc="Host description talking about host doing host things"
          />
          <h2 className="font-inter font-[700] text-[16px] leading-[24px] mt-[15px]">
            Affiliated Events
          </h2>
          <p className="font-inter text-[#828282] font-[500] text-[14px] leading-[21px] mb-[15px]">
            This event is affiliated with the following events:
          </p>
          <HostCard
            image_url={HostImage}
            title="Host Name"
            desc="Host description talking about host doing host things"
          />
          <HostCard
            image_url={HostImage}
            title="Host Name"
            desc="Host description talking about host doing host things"
          />

          <h2 className="font-inter font-[700] text-[16px] leading-[24px] mt-[15px]">
            Categories
          </h2>
          <p className="font-inter text-[#828282] font-[500] text-[14px] leading-[21px] mb-[15px]">
            This event is in the following categories:
          </p>
          <HostCard
            image_url={HostImage}
            title="Host Name"
            desc="Host description talking about host doing host things"
          />

          <HostCard
            image_url={HostImage}
            title="Host Name"
            desc="Host description talking about host doing host things"
          />
        </div>
      </div>
      </div>
    </PageLayout>
  );
};

export default EventsDetails;
