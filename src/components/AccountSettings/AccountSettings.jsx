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

const AccountSettings = () => {
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
          Create an event
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
          Event Overview
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
          <div className="w-[50%] p-[10px]">
          <div className="flex flex-col gap-[5px] mb-[20px]">
              <label
                htmlFor=""
                className="font-inter font-[700] text-[#000] text-[16px] leading-[24px] mb-[6px]"
              >
                Summary
              </label>
              <textarea
                className="border-[1px] border-[#D9D9D9] px-[16px] py-[8px] w-[100%] rounded-md placeholder:font-inter placeholder:text-[#828282] placeholder:text-[16px] placeholder:font-[400] font-inter text-[16px] focus:outline-none resize-none h-[200px]"
                id=""
                placeholder="Is your event part of a series?"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="px-[20px] py-[10px] bg-[#ffff] rounded-md w-[100%] mt-[10px]"
        style={{ boxShadow: "0px 0px 13px 0px #523F690D" }}
      >
        <h2 className="font-inter font-[700] text-[20px] leading-[30px] text-[#404580]">
          Alert
        </h2>
        <div className="mt-[10px] w-[100%] flex gap-[20px]">
          <form className="p-[10px] w-[100%]">
            <div className="flex flex-col gap-[5px] mb-[20px]">
              <label
                htmlFor=""
                className="font-inter font-[700] text-[#000] text-[16px] leading-[24px] mb-[6px]"
              >
                Message
              </label>
              <input
                type="text"
                placeholder="Let people of any last minute changes or cancellations"
                className="border-[1px] border-[#D9D9D9] h-[53px] px-[16px] w-[100%] rounded-md placeholder:font-inter placeholder:text-[#828282] placeholder:text-[16px] placeholder:font-[400] font-inter text-[16px] focus:outline-none"
              />
            </div>
          </form>
        </div>
      </div>
      <div
        className="px-[20px] py-[10px] bg-[#ffff] rounded-md w-[100%] mt-[10px]"
        style={{ boxShadow: "0px 0px 13px 0px #523F690D" }}
      >
        <h2 className="font-inter font-[700] text-[20px] leading-[30px] text-[#404580]">
          Images{" "}
          <span className="font-inter font-[400] text-[10px] text-[#828282] ml-[10px]">
            Upload up to 8 images
          </span>
        </h2>
        <div className="mt-[10px] w-[100%] flex gap-[20px]">
          <div className="w-[45%]">
            <div className="w-[100%] bg-[#F5F5F5] border-dashed border-[2px]	border-[#828282] rounded-[4px] flex h-[260px] flex-col items-center justify-center">
              {file ? (
                <img src={file} alt="" srcset="" />
              ) : (
                <>
                  <img src={uploadIcon} />
                  <h2 className="font-poppins font-[600] text-[16px] text-[#676767] my-[5px]">
                    Drag & drop files or{" "}
                    <label
                      htmlFor="file-upload"
                      className="text-[#ff0000] hover:underline cursor-pointer"
                    >
                      <input
                        id="file-upload"
                        type="file"
                        className="hidden"
                        onChange={(e) => handleUpload(e)}
                      />
                      Browse
                    </label>
                  </h2>
                  <p className="font-poppins font-[400] text-[#676767] text-[12px] leading-[18px]">
                    Supported formates: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word,
                    PPT
                  </p>
                </>
              )}
            </div>
          </div>
          <div className="w-[55%] flex gap-[10px] flex-wrap">
            <div className="w-[120px] h-[120px] rounded-[8px] overflow-hidden">
              <img
                src={EventImage}
                alt=""
                className="w-[100%] h-[100%] object-cover"
              />
            </div>
            <div className="w-[120px] h-[120px] rounded-[8px] overflow-hidden">
              <img
                src={EventImage}
                alt=""
                className="w-[100%] h-[100%] object-cover"
              />
            </div>
            <div className="w-[120px] h-[120px] rounded-[8px] overflow-hidden">
              <img
                src={EventImage}
                alt=""
                className="w-[100%] h-[100%] object-cover"
              />
            </div>
            <div className="w-[120px] h-[120px] rounded-[8px] overflow-hidden">
              <img
                src={EventImage}
                alt=""
                className="w-[100%] h-[100%] object-cover"
              />
            </div>
            <div className="w-[120px] h-[120px] rounded-[8px] overflow-hidden">
              <img
                src={EventImage}
                alt=""
                className="w-[100%] h-[100%] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="px-[20px] py-[10px] bg-[#ffff] rounded-md w-[100%] mt-[10px]"
        style={{ boxShadow: "0px 0px 13px 0px #523F690D" }}
      >
        <h2 className="font-inter font-[700] text-[20px] leading-[30px] text-[#404580]">
          Host Details
        </h2>
        <div className="mt-[10px] w-[100%] flex gap-[10px]">
          <form className="p-[10px] w-[50%]">
            <div className="flex flex-col gap-[5px] mb-[20px]">
              <label
                htmlFor=""
                className="font-inter font-[700] text-[#000] text-[16px] leading-[24px] mb-[6px]"
              >
                Location
              </label>
              <CustomSelect title="Is your event part of a series?" />
            </div>
            <div className="flex flex-col gap-[5px] mb-[20px]">
              <label
                htmlFor=""
                className="font-inter font-[700] text-[#000] text-[16px] leading-[24px] mb-[6px]"
              >
                Location
              </label>
              <input
                  type="text"
                  placeholder="What is your event called?"
                  className="border-[1px] border-[#D9D9D9] h-[53px] px-[16px] w-[100%] rounded-md placeholder:font-inter placeholder:text-[#828282] placeholder:text-[16px] placeholder:font-[400] font-inter text-[16px] focus:outline-none"
                />      
              </div>
          </form>
          <form className="p-[10px] w-[50%]">
            <div className="flex flex-col gap-[5px] mb-[20px]">
              <label
                htmlFor=""
                className="font-inter font-[700] text-[#000] text-[16px] leading-[24px] mb-[6px]"
              >
                Location
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
                Location
              </label>
              <CustomSelect title="Is your event part of a series?" />
            </div>
          </form>
        </div>
        <div className="font-inter font-[700] text-[#000] text-[16px] leading-[24px] p-[10px]">
          Social Media Links
        </div>
        <div className=" flex w-[100%] gap-[20px] p-[10px]">
          <div className="w-[50%]">
            <div className="mb-[10px] flex w-[100%] gap-[10px] items-center">
              <div className="w-[10%]">
                <img src={Instagram} alt="" width={40} height={40} />
              </div>
              <div className="w-[90%]">
                <input
                  type="text"
                  placeholder="Is your event part of a series?"
                  className="border-[1px] border-[#D9D9D9] h-[53px] px-[16px] w-[100%] rounded-md placeholder:font-inter placeholder:text-[#828282] placeholder:text-[16px] placeholder:font-[400] font-inter text-[16px] focus:outline-none"
                />
              </div>
            </div>
            <div className="mb-[10px] flex w-[100%] gap-[10px] items-center">
              <div className="w-[10%]">
                <img src={Facebook} alt="" width={40} height={40} />
              </div>
              <div className="w-[90%]">
                <input
                  type="text"
                  placeholder="Is your event part of a series?"
                  className="border-[1px] border-[#D9D9D9] h-[53px] px-[16px] w-[100%] rounded-md placeholder:font-inter placeholder:text-[#828282] placeholder:text-[16px] placeholder:font-[400] font-inter text-[16px] focus:outline-none"
                />
              </div>
            </div>
          </div>
          <div className="w-[50%]">
            <div className="mb-[10px] flex w-[100%] gap-[10px] items-center">
              <div className="w-[10%]">
                <img src={Twitter} alt="" width={40} height={40} />
              </div>
              <div className="w-[90%]">
                <input
                  type="text"
                  placeholder="Is your event part of a series?"
                  className="border-[1px] border-[#D9D9D9] h-[53px] px-[16px] w-[100%] rounded-md placeholder:font-inter placeholder:text-[#828282] placeholder:text-[16px] placeholder:font-[400] font-inter text-[16px] focus:outline-none"
                />
              </div>
            </div>
            <div className="mb-[10px] flex w-[100%] gap-[10px] items-center">
              <div className="w-[10%]">
                <img src={Linkedln} alt="" width={40} height={40} />
              </div>
              <div className="w-[90%]">
                <input
                  type="text"
                  placeholder="Is your event part of a series?"
                  className="border-[1px] border-[#D9D9D9] h-[53px] px-[16px] w-[100%] rounded-md placeholder:font-inter placeholder:text-[#828282] placeholder:text-[16px] placeholder:font-[400] font-inter text-[16px] focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="px-[20px] py-[10px] bg-[#ffff] rounded-md w-[100%] mt-[10px]"
        style={{ boxShadow: "0px 0px 13px 0px #523F690D" }}
      >
        <h2 className="font-inter font-[700] text-[20px] leading-[30px] text-[#404580]">
          Event Information
        </h2>
        <div className="mt-[10px] w-[100%]">
          <form className="p-[10px] w-[100%]">
            <div className="flex flex-col gap-[5px] mb-[20px]">
              <label
                htmlFor=""
                className="font-inter font-[700] text-[#000] text-[16px] leading-[24px] mb-[6px]"
              >
                Important Information
              </label>
              <textarea
                className="border-[1px] border-[#D9D9D9] px-[16px] py-[8px] w-[100%] rounded-md placeholder:font-inter placeholder:text-[#828282] placeholder:text-[16px] placeholder:font-[400] font-inter text-[16px] focus:outline-none resize-none h-[200px]"
                id=""
                placeholder="Is your event part of a series?"
              />
            </div>
            <div className="flex flex-col gap-[5px] mb-[20px]">
              <label
                htmlFor=""
                className="font-inter font-[700] text-[#000] text-[16px] leading-[24px] mb-[6px]"
              >
                Description
              </label>
              <textarea
                className="border-[1px] border-[#D9D9D9] px-[16px] py-[8px] w-[100%] rounded-md placeholder:font-inter placeholder:text-[#828282] placeholder:text-[16px] placeholder:font-[400] font-inter text-[16px] focus:outline-none resize-none h-[400px]"
                id=""
                placeholder="Is your event part of a series?"
              />
            </div>
          </form>
          <div className="p-[10px]">
            <p className="font-inter font-[700] text-[#000] text-[16px] leading-[24px] mb-[6px]">
              Features and Facilities
            </p>
            <div className="flex gap-[30px] flex-wrap items-center mt-[20px]">
              <div className="">
                <p className="font-inter font-[400] text-[16px] ">
                  Baby Changing
                </p>
              </div>
              <div className="flex gap-[20px] items-center">
                <img src={Park} alt="" srcset="" />
                <p className="font-inter font-[400] text-[16px] ">Parking</p>
              </div>
              <div className="">
                <p className="font-inter font-[400] text-[16px] ">No cameras</p>
              </div>
              <div className="">
                <CheckBox title="18+" />
              </div>
              <div className="">
                <p className="font-inter font-[400] text-[16px] ">Food</p>
              </div>
              <div className="flex gap-[20px] items-center">
                <img src={food} alt="" srcset="" />
                <p className="font-inter font-[400] text-[16px] ">Alcohol</p>
              </div>
              <div className="">
                <CheckBox title="Wifi" />
              </div>
              <div className="">
                <CheckBox title="Changing Facilities" />
              </div>
              <div className="">
                <CheckBox title="Cloakroom" />
              </div>
              <div className="">
                <CheckBox title="Public Transport" />
              </div>
              <div className="flex gap-[20px] items-center">
                <img src={Wheel} alt="" srcset="" />
                <p className="font-inter font-[400] text-[16px] ">
                  Disabled Access
                </p>
              </div>
              <div className="flex gap-[20px] items-center">
                <img src={Wheel} alt="" srcset="" />
                <p className="font-inter font-[400] text-[16px] ">
                  Disabled Access
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AccountSettings;
