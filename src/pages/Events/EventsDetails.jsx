import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import React from "react";
import LocationIcon from "../../Assets/LocationEventIcon.svg";
import DateIcon from "../../Assets/DateEventIcon.svg";
import webIcon from "../../Assets/WebEventIcon.svg";
import LockIcon from "../../Assets/TimeEventIcon.svg";
import Link from "../../Assets/LinkEventIcon.svg";
import Park from "../../Assets/ParkingEventIcon.svg";
import tick from "../../Assets/tickicon.svg";
import Wheel from "../../Assets/WheelChairIcon.svg";
import food from "../../Assets/FoodEventIcon.svg";
import Toilet from "../../Assets/ToiletEventIcon.svg";
import HostImage from "../../Assets/HostImage.jpeg"
import HostCard from "./HostCard";
import { CheckOutlined } from "@mui/icons-material";

const EventsDetails = (props) => {
  return (
    <div className="flex gap-[20px] pl-[10px]">
      <div className="w-[20%]">
        <img src={props.selectedCat} alt="" width={300}/>
      </div>
      <div className="w-[40%]">
        <div className="flex justify-between">
          <h2 className="font-poppins font-[600] text-[16px] leading-[24px]">
            Event title
          </h2>
          <HeartFilled className="text-[#ff0000] text-[18px]"/>
        </div>
        <hr className="my-[10px] border-[1px] border-[#8E8E8E]" />
        <p className="font-[400] font-poppins text-[14px] text-[#404040] pr-[20px] pt-[6px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the{" "}
        </p>
        <div className="flex my-[7px] gap-[10px] items-center">
          <img src={LocationIcon} alt="" srcset="" width={18}/> <p className="font-poppins font-[400] text-[14px] leading-[28px]">Venue</p>
        </div>
        <div className="flex my-[7px] gap-[10px] items-center">
          <img src={DateIcon} alt="" srcset="" width={18}/> <p className="font-poppins font-[400] text-[14px] leading-[28px]">30 April 2024, 10:00 PM</p>
        </div>
        <div className="flex my-[7px] gap-[10px] items-center">
          <img src={LockIcon} alt="" srcset="" width={18}/> <p className="font-poppins font-[400] text-[14px] leading-[28px]">10:00 PM</p>
        </div>
        <div className="flex my-[7px] gap-[10px] items-center">
          <img src={Link} alt="" srcset="" width={18}/> <p className="font-poppins font-[400] text-[14px] leading-[28px]">www.ticketurl.com</p>
        </div>
        <div className="flex my-[7px] gap-[10px] items-center">
          <img src={webIcon} alt="" srcset=""  width={18}/>
          <p className="font-poppins font-[400] text-[14px] leading-[28px]">Website Url</p>
        </div>
        <div className="p-[10px] rounded-lg bg-[#F9F9F9] mt-[16px]">
        <h5 className="py-[12px] text-[#19191A] text-[14px] font-[500]">Important information</h5>

          <div className="flex items-center gap-[8px]">
            <div className="bg-[#3109601A] rounded-full p-[8px]">
              {/* <CheckOutlined className="text-[#ff0000] text-[12px] "/> */}
              <img src={tick} alt="missing"  />
              </div>
            <p className="font-poppins text-[#404040] font-[300] text-[14px]">Lorem ipsum is simple text.</p>
          </div>
          <div className="font-poppins text-[#404040] font-[300] text-[14px] mt-[10px] pr-[28px]">
            Lorem Ipsum is simply dummy text of the text of printing and type.
          </div>
          <div className="font-poppins text-[#404040] font-[300] text-[14px] mt-[10px] mb-[8px] pr-[28px]">
          Lorem Ipsum is simply dummy text the of printing and typing industry,
          </div>
        </div>
        <h2 className="font-poppins font-[500] text-[16px] leading-[24px] mt-[20px]">Description</h2>
        <p className="font-poppins text-[#404040] font-[300] text-[14px] mt-[10px] pr-[12px]">
          Lorem Ipsum is simply dummy text of the printing and type in industry.
          Lorem Ipsum has been the industry’s standard dumy text ever since the
          1500s, when an unknown printer took a galle of type and{" "}
        </p>
        <h2 className="font-poppins font-[500] text-[16px] leading-[24px] mt-[20px]">Facilities / Features</h2>
        <div className="flex justify-between mt-[20px] w-[350px] mb-[15px]">
          <div className="flex gap-[10px] items-center font-poppins font-[400] text-[#19191A] text-[14px] leading-[28px]">
            <img src={Park} alt="" />Parking
          </div>
          <div className="flex gap-[10px] items-center font-poppins font-[400] text-[#19191A] text-[14px] leading-[28px] ">
            <img src={Wheel} alt="" />Disability Access
          </div>
        </div>
        <div className="flex gap-[10px] mb-[20px] items-center my-[18px] font-poppins font-[400] text-[#19191A] text-[14px] leading-[28px]">
          <img src={food} alt="" />Food and Drink
        </div>
        <div className="flex gap-[10px] items-center font-poppins font-[400] text-[#19191A] text-[14px] leading-[28px]">
          <img src={Toilet} alt="" />Toilets
        </div>
      </div>
      <div className="w-[40%]">
      <div className="">
          <h2 className="font-poppins font-[600] text-[16px] leading-[24px]">
            Hosts
          </h2>
        </div>
        <hr className="my-[10px] border-[#8E8E8E]" />
        <HostCard image_url={HostImage} onClick={(status) => props.handleHostClick(status)}/>
        <HostCard image_url={HostImage} onClick={(status) => props.handleHostClick(status)}/>
        <HostCard image_url={HostImage} onClick={(status) => props.handleHostClick(status)}/>
        <HostCard image_url={HostImage} onClick={(status) => props.handleHostClick(status)}/>
        <div className="my-[20px]">
          <h2 className="font-poppins font-[600] text-[16px] leading-[24px] mb-[15px]">
            Categories
          </h2>
        <hr className=" border-[2px] border-[#8E8E8E]" />

        </div>
        <HostCard image_url={HostImage} onClick={(status) => props.handleHostClick(status)}/>
        
        <HostCard image_url={HostImage} onClick={(status) => props.handleHostClick(status)}/>
      </div>
    </div>
  );
};

export default EventsDetails;
