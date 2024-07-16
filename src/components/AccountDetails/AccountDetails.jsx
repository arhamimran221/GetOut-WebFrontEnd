import React, { useState } from "react";
import locationIcon from "../../Assets/LocationEventIcon.svg";
import {
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Typography,
} from "@mui/material";
import { Select, Space } from "antd";
import uploadIcon from "../../Assets/Upload-icon.svg";
import Park from "../../Assets/ParkingEventIcon.svg";
import tick from "../../Assets/tickicon.svg";
import Wheel from "../../Assets/WheelChairIcon.svg";
import food from "../../Assets/FoodEventIcon.svg";
import Toilet from "../../Assets/ToiletEventIcon.svg";
import Wifi from "../../Assets/WifiEventIcon.svg";
import { Checkbox } from "@mui/material";
import EventImage from "../../Assets/EventImage.svg";
import Facebook from "../../Assets/Facebook.svg";
import Instagram from "../../Assets/Instagram.svg";
import Linkedln from "../../Assets/Linkedin.svg";
import Twitter from "../../Assets/Twitter.svg";

const AccountDetails = () => {
  const [age, setAge] = useState("");
  const [file, setFile] = useState();

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const CheckBox = (props) => {
    return (
      <FormControlLabel
        control={
          <Checkbox
            style={{
              color: "#828282",
            }}
            value=""
            iconStyle={{ color: "#828282" }}
          />
        }
        label={
          <div
            style={{ color: "#000000" }}
            className="font-inter font-[400] text-[16px] leading-[24px]"
          >
            {props.title}
          </div>
        }
      />
    );
  };
  const CustomSelect = (props) => {
    return (
      <Select
        placeholder={
          <div className="flex gap-[10px]">
            <p className="w-[100%] font-inter text-[#828282] text-[16px] font-[400] focus:outline-none">
              {props.title}
            </p>
          </div>
        }
        style={{ height: 53 }}
        onChange={handleChange}
      >
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="Yiminghe">Yiminghe</Option>
        <Option value="disabled" disabled>
          Disabled
        </Option>
      </Select>
    );
  };
  const handleUpload = (event) => {
    setFile(URL.createObjectURL(event.target.files[0]));
  };
  return (
    <div>
      <div className="mb-[20px]">
        <h2 className="font-raleway font-[600] text-[32px] leading-[40px] text-[#404580]">
          Account Overview
        </h2>
        <p className="text-[#828282] font-manrope font-[500] text-[16px] leading-[21.86px] mt-[2px]">
          Track your events and manage your account
        </p>
      </div>
      <div
        className="px-[20px] py-[10px] bg-[#ffff] rounded-md w-[100%] mt-[10px]"
        style={{ boxShadow: "0px 0px 13px 0px #523F690D" }}
      >
        <h2 className="font-inter font-[700] text-[20px] leading-[30px] text-[#404580]">
          Account Overview
        </h2>
        <div className="mt-[10px] w-[100%] flex gap-[20px]">
          <form className="p-[10px] w-[50%]">
            <div className="flex flex-col gap-[5px] mb-[20px]">
              <label
                htmlFor=""
                className="font-inter font-[700] text-[#000] text-[16px] leading-[24px] mb-[6px]"
              >
                Event Title
              </label>
              <input
                type="text"
                placeholder="What is your event called?"
                className="border-[1px] border-[#D9D9D9] h-[53px] px-[16px] w-[100%] rounded-md placeholder:font-inter placeholder:text-[#828282] placeholder:text-[16px] placeholder:font-[400] font-inter text-[16px] focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-[5px] mb-[20px]">
              <label
                htmlFor=""
                className="font-inter font-[700] text-[#000] text-[16px] leading-[24px] mb-[6px]"
              >
                Host Type
              </label>
              <CustomSelect title="What type of host are you?" />
            </div>
          </form>
          <form className="p-[10px] w-[50%]">
            <div className="flex flex-col gap-[5px] mb-[20px]">
              <label
                htmlFor=""
                className="font-inter font-[700] text-[#000] text-[16px] leading-[24px] mb-[6px]"
              >
                Event Title
              </label>
              <input
                type="text"
                placeholder="What is your event called?"
                className="border-[1px] border-[#D9D9D9] h-[53px] px-[16px] w-[100%] rounded-md placeholder:font-inter placeholder:text-[#828282] placeholder:text-[16px] placeholder:font-[400] font-inter text-[16px] focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-[5px] mb-[20px]">
              <label
                htmlFor=""
                className="font-inter font-[700] text-[#000] text-[16px] leading-[24px] mb-[6px]"
              >
                Subcription
              </label>
              <p className="font-inter font-[400] text-[16px] text-[#828282] my-[20px]">Custom</p>
            </div>
          </form>
        </div>
      </div>
      <div
        className="px-[20px] py-[10px] bg-[#ffff] rounded-md w-[100%] mt-[10px]"
        style={{ boxShadow: "0px 0px 13px 0px #523F690D" }}
      >
        <h2 className="font-inter font-[700] text-[20px] leading-[30px] text-[#404580]">
        Payment Details
        </h2>
        <div className="mt-[10px] w-[100%] flex gap-[20px]">
          <form className="p-[10px] w-[50%]">
          <div className="flex flex-col gap-[5px] mb-[20px]">
              <label
                htmlFor=""
                className="font-inter font-[700] text-[#000] text-[16px] leading-[24px] mb-[6px]"
              >
                Concession Type
              </label>
              <p className="font-inter font-[400] text-[16px] text-[#828282] my-[10px]">Charity</p>
            </div>
            <div className="flex flex-col gap-[5px] mb-[20px]">
              <label
                htmlFor=""
                className="font-inter font-[700] text-[#000] text-[16px] leading-[24px] mb-[6px]"
              >
                Event Title
              </label>
              <input
                type="text"
                placeholder="What is your event called?"
                className="border-[1px] border-[#D9D9D9] h-[53px] px-[16px] w-[100%] rounded-md placeholder:font-inter placeholder:text-[#828282] placeholder:text-[16px] placeholder:font-[400] font-inter text-[16px] focus:outline-none"
              />
            </div>
            <div className="flex w-[100%] gap-[20px]">
            <div className="flex flex-col gap-[5px] mb-[20px]">
              <label
                htmlFor=""
                className="font-inter font-[700] text-[#000] text-[16px] leading-[24px] mb-[6px]"
              >
                Event Title
              </label>
              <input
                type="text"
                placeholder="What is your event called?"
                className="border-[1px] border-[#D9D9D9] h-[53px] px-[16px] w-[100%] rounded-md placeholder:font-inter placeholder:text-[#828282] placeholder:text-[16px] placeholder:font-[400] font-inter text-[16px] focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-[5px] mb-[20px]">
              <label
                htmlFor=""
                className="font-inter font-[700] text-[#000] text-[16px] leading-[24px] mb-[6px]"
              >
                Event Title
              </label>
              <input
                type="text"
                placeholder="What is your event called?"
                className="border-[1px] border-[#D9D9D9] h-[53px] px-[16px] w-[100%] rounded-md placeholder:font-inter placeholder:text-[#828282] placeholder:text-[16px] placeholder:font-[400] font-inter text-[16px] focus:outline-none"
              />
            </div>
            </div>
            <p className="font-inter font-[400] text-[16px] text-[#828282] my-[10px]">Change your payment card</p>

          </form>
        </div>
      </div>

    </div>
  );
};

export default AccountDetails;
