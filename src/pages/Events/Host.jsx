import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import React from "react";
import LocationIcon from "../../Assets/LocationEventIcon.svg";
import DateIcon from "../../Assets/DateEventIcon.svg";
import webIcon from "../../Assets/WebEventIcon.svg";
import LockIcon from "../../Assets/TimeEventIcon.svg";
import Link from "../../Assets/LinkEventIcon.svg";
import Park from "../../Assets/ParkingEventIcon.svg";
import Wheel from "../../Assets/WheelChairIcon.svg";
import food from "../../Assets/FoodEventIcon.svg";
import Toilet from "../../Assets/ToiletEventIcon.svg";
import { CheckOutlined } from "@mui/icons-material";
import EventsData from "./EventsData";
import CardsImage from "../../Assets/cardImage.png";
import HostImage from "../../Assets/HostImage.svg";
import tick from "../../Assets/tickicon.svg";
import UpcommingEvents from "../../components/UpcommingEvents/UpcommingEvents";
import upcoming from "../../Assets/upcommingEvent.png";
const Host = (props) => {
  
  return (
    <div className="flex gap-[24px] pl-[10px]">
      <div className="w-[20%]">
        <img
          src={HostImage}
          alt=""
          // style={{ maxWidth: "220px", height: "270px" }}
        />
      </div>
      <div className="w-[50%]">
        <div className="flex justify-between">
          <h2 className="font-poppins font-[600] text-[16px] leading-[24px]">
            Host Name
          </h2>
          <HeartFilled className="text-[#ff0000] text-[18px]" />
        </div>
        <hr className="my-[15px] border-[2px] border-[#8E8E8E]" />
        <p className="font-[400] font-poppins font-[300] text-[14px] pr-[18px] text-[#404040]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the{" "}
        </p>
        <div className="flex my-[7px] gap-[10px] items-center">
          <img src={LocationIcon} alt="" srcset="" width={18} />{" "}
          <p className="font-poppins font-[400] text-[14px] leading-[28px]">
            Location
          </p>
        </div>

        <div className="flex my-[7px] gap-[10px] items-center">
          <img src={webIcon} alt="" srcset="" width={18} />
          <p className="font-poppins font-[400] text-[14px] leading-[28px]">
            Website Url
          </p>
        </div>
        <div className="flex my-[7px] gap-[10px] items-center">
          <img src={Link} alt="" srcset="" width={18} />{" "}
          <p className="font-poppins font-[400] text-[14px] leading-[28px]">
            Social media link
          </p>
        </div>

        <div className="p-2 rounded-lg bg-[#F9F9F9] mt-[16px]">
          <h5 className="py-[12px] text-[#19191A] text-[14px] font-[500]">
            Important information
          </h5>

          <div className="flex items-center gap-[8px]">
            <div className="bg-[#3109601A] rounded-full p-[8px]">
              {/* <CheckOutlined className="text-[#ff0000] text-[12px] "/> */}
              <img src={tick} alt="missing" />
            </div>
            <p className="font-poppins text-[#404040] font-[300] text-[14px]">
              Lorem ipsum is simple text.
            </p>
          </div>
          <div className="font-poppins text-[#404040] font-[300] text-[14px] my-[6px] pr-[28px]">
            Lorem Ipsum is simply dummy text of the text of printing and type.
          </div>
          <div className="font-poppins text-[#404040] font-[300] text-[14px] mb-[8px] pr-[28px]">
            Lorem Ipsum is simply dummy text the of printing and typing
            industry,
          </div>
        </div>
        <h2 className="font-poppins font-[500] text-[14px] leading-[24px] mt-[16px]">
          Description
        </h2>
        <p className="font-poppins text-[#404040] font-[300] text-[14px] mt-[5px] pr-[12px]">
          Lorem Ipsum is simply dummy text of the printing and type in industry.
          Lorem Ipsum has been the industry’s standard dumy text ever since the
          1500s, when an unknown printer took a galle of type and{" "}
        </p>
        <h2 className="font-poppins font-[500] text-[14px] leading-[24px] mt-[16px]">
          Facilities
        </h2>
        <p className="font-poppins text-[#404040] text-[14px] mt-[5px] font-[300] pr-[12px]">
          Lorem Ipsum is simply dummy text of the printing and type in industry.
          Lorem Ipsum has been the industry’s standard dumy text ever since the
          1500s, when an unknown printer took a galle of type and{" "}
        </p>
      </div>
      <div className="w-[40%]">
        <div className="">
          <h2 className="font-poppins font-[600] text-[16px] leading-[24px]">
            Upcomming Events
          </h2>
        </div>
        <hr className="my-[15px] border-[2px] border-[#8E8E8E]" />
        <UpcommingEvents title="Event Title" image_url={upcoming} />
        <UpcommingEvents title="Event Title" image_url={upcoming} />
        <UpcommingEvents title="Event Title" image_url={upcoming} />
        <UpcommingEvents title="Event Title" image_url={upcoming} />
        <UpcommingEvents title="Event Title" image_url={upcoming} />
        <UpcommingEvents title="Event Title" image_url={upcoming} />
        
      </div>
    </div>
  );
  
};

export default Host;
