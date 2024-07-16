import React from "react";
import Meetup from "../../Assets/MeetupImage.png";
import EyeImage from "../../Assets/EyeIcon.svg";
import floppy from "../../Assets/saveFloppy.svg";
import CalendarIcon from "../../Assets/calendar.svg";
import eyeIcon from "../../Assets/actionEye.svg";
import bin from "../../Assets/deleteIcon.svg";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const ManageEvent = () => {
  return (
    <div>
      <div className="mb-[10px]">
        <h2 className="font-raleway font-[600] text-[32px] leading-[40px] text-[#404580]">
          Manage your events
        </h2>
        <p className="text-[#828282] font-manrope font-[500] text-[16px] leading-[21.86px] mt-[2px]">
          Track your events and manage your account
        </p>
      </div>
      <div className="flex w-[100%] gap-[20px]">
        <div className="p-[10px] bg-[#ffff] rounded-[8px] w-[30%] mt-[10px]">
          <h2 className="font-inter font-[700] text-[20px leading-[30px] text-[#404580]">
            Your series
          </h2>
          <p className="font-inter font-[500] text-[14px] leading-[21px] my-[20px]">
            All Events
          </p>
          <div className="flex justify-between mb-[15px]">
            <p className="font-inter font-[500] text-[14px] leading-[21px] ml-[10px]">
              Series Title
            </p>{" "}
            <img src={bin} alt="" srcset="" />
          </div>
          <div className="flex justify-between mb-[15px]">
            <p className="font-inter font-[500] text-[14px] leading-[21px] ml-[10px]">
              Series Title
            </p>{" "}
            <img src={bin} alt="" srcset="" />
          </div>
          <div className="flex justify-between mb-[15px]">
            <p className="font-inter font-[500] text-[14px] leading-[21px] ml-[10px]">
              Series Title
            </p>{" "}
            <img src={bin} alt="" srcset="" />
          </div>
          <div className="flex justify-between mb-[15px]">
            <p className="font-inter font-[500] text-[14px] leading-[21px] ml-[10px]">
              Series Title
            </p>{" "}
            <img src={bin} alt="" srcset="" />
          </div>
        </div>
        <div className="p-[10px] bg-[#ffff] rounded-[8px] w-[70%] mt-[10px]">
          <h2 className="font-inter font-[700] text-[20px leading-[30px] text-[#404580]">
            All events
          </h2>
          <div className="flex items-center w-[100%] gap-[10px] py-[6px] cursor-pointer">
            <div className="w-[80%] flex items-center gap-[20px]">
              <div className="w-[15%]">
                <img src={Meetup} alt="" />
              </div>
              <div className="w-[55%]">
                <h3 className="font-inter font-[500] text-[14px] leading-[21px] text-[#00000] flex items-center gap-[20px]">
                  Event Title{" "}
                  <span className="text-[8px] font-inter text-[#ff0000]">
                    FEATURED
                  </span>
                </h3>
                <p className="font-inter font-[500] text-[12px] leading-[18px] text-[#828282]">
                  Firehouse Art Gallery
                </p>
                <p className="font-inter font-[500] text-[12px] leading-[18px] text-[#828282]">
                  Sun, 22 Jun, 08:00-10:00
                </p>
              </div>
              <div className="w-[30%] flex justify-between items-center">
                <div className="flex flex-col justify-center items-center gap-[10px]">
                  <img
                    src={EyeImage}
                    alt=""
                    width={38}
                    height={19}
                    className="bg-[#FAFBFC] p-2 rounded-lg"
                  />
                  <p className="font-inter text-[#828282] font-[500] text-[14px] leading-[21px]">
                    264
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center gap-[10px]">
                  <img
                    src={floppy}
                    alt=""
                    width={36}
                    height={19}
                    className="bg-[#FAFBFC] p-2 rounded-lg"
                  />
                  <p className="font-inter text-[#828282] font-[500] text-[14px] leading-[21px]">
                    264
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center gap-[10px]">
                  <img
                    src={CalendarIcon}
                    alt=""
                    width={32}
                    height={19}
                    className="bg-[#FAFBFC] p-2 rounded-lg"
                  />
                  <p className="font-inter text-[#828282] font-[500] text-[14px] leading-[21px]">
                    25
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[20%] flex gap-[20px] justify-end">
              <button className="text-[#828282] font-inter font-[500] text-[14px] leading-[21px]">
                View
              </button>
              <button className="text-[#828282] font-inter font-[500] text-[14px] leading-[21px]">
                Edit
              </button>
              <button className="text-[#828282] font-inter font-[500] text-[14px] leading-[21px]">
                <img src={bin} alt="" width={14} srcset="" />
              </button>
            </div>
          </div>
          <div className="flex items-center w-[100%] gap-[10px] py-[6px] cursor-pointer">
            <div className="w-[80%] flex items-center gap-[20px]">
              <div className="w-[15%]">
                <img src={Meetup} alt="" />
              </div>
              <div className="w-[55%]">
                <h3 className="font-inter font-[500] text-[14px] leading-[21px] text-[#00000] flex items-center gap-[20px]">
                  Event Title{" "}
                  <span className="text-[8px] font-inter text-[#ff0000]">
                    FEATURED
                  </span>
                </h3>
                <p className="font-inter font-[500] text-[12px] leading-[18px] text-[#828282]">
                  Firehouse Art Gallery
                </p>
                <p className="font-inter font-[500] text-[12px] leading-[18px] text-[#828282]">
                  Sun, 22 Jun, 08:00-10:00
                </p>
              </div>
              <div className="w-[30%] flex justify-between items-center">
                <div className="flex flex-col justify-center items-center gap-[10px]">
                  <img
                    src={EyeImage}
                    alt=""
                    width={38}
                    height={19}
                    className="bg-[#FAFBFC] p-2 rounded-lg"
                  />
                  <p className="font-inter text-[#828282] font-[500] text-[14px] leading-[21px]">
                    264
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center gap-[10px]">
                  <img
                    src={floppy}
                    alt=""
                    width={36}
                    height={19}
                    className="bg-[#FAFBFC] p-2 rounded-lg"
                  />
                  <p className="font-inter text-[#828282] font-[500] text-[14px] leading-[21px]">
                    264
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center gap-[10px]">
                  <img
                    src={CalendarIcon}
                    alt=""
                    width={32}
                    height={19}
                    className="bg-[#FAFBFC] p-2 rounded-lg"
                  />
                  <p className="font-inter text-[#828282] font-[500] text-[14px] leading-[21px]">
                    25
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[20%] flex gap-[20px] justify-end">
              <button className="text-[#828282] font-inter font-[500] text-[14px] leading-[21px]">
                View
              </button>
              <button className="text-[#828282] font-inter font-[500] text-[14px] leading-[21px]">
                Edit
              </button>
              <button className="text-[#828282] font-inter font-[500] text-[14px] leading-[21px]">
                <img src={bin} alt="" width={14} srcset="" />
              </button>
            </div>
          </div>
          <div className="flex items-center w-[100%] gap-[10px] py-[6px] cursor-pointer">
            <div className="w-[80%] flex items-center gap-[20px]">
              <div className="w-[15%]">
                <img src={Meetup} alt="" />
              </div>
              <div className="w-[55%]">
                <h3 className="font-inter font-[500] text-[14px] leading-[21px] text-[#00000] flex items-center gap-[20px]">
                  Event Title{" "}
                  <span className="text-[8px] font-inter text-[#ff0000]">
                    FEATURED
                  </span>
                </h3>
                <p className="font-inter font-[500] text-[12px] leading-[18px] text-[#828282]">
                  Firehouse Art Gallery
                </p>
                <p className="font-inter font-[500] text-[12px] leading-[18px] text-[#828282]">
                  Sun, 22 Jun, 08:00-10:00
                </p>
              </div>
              <div className="w-[30%] flex justify-between items-center">
                <div className="flex flex-col justify-center items-center gap-[10px]">
                  <img
                    src={EyeImage}
                    alt=""
                    width={38}
                    height={19}
                    className="bg-[#FAFBFC] p-2 rounded-lg"
                  />
                  <p className="font-inter text-[#828282] font-[500] text-[14px] leading-[21px]">
                    264
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center gap-[10px]">
                  <img
                    src={floppy}
                    alt=""
                    width={36}
                    height={19}
                    className="bg-[#FAFBFC] p-2 rounded-lg"
                  />
                  <p className="font-inter text-[#828282] font-[500] text-[14px] leading-[21px]">
                    264
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center gap-[10px]">
                  <img
                    src={CalendarIcon}
                    alt=""
                    width={32}
                    height={19}
                    className="bg-[#FAFBFC] p-2 rounded-lg"
                  />
                  <p className="font-inter text-[#828282] font-[500] text-[14px] leading-[21px]">
                    25
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[20%] flex gap-[20px] justify-end">
              <button className="text-[#828282] font-inter font-[500] text-[14px] leading-[21px]">
                View
              </button>
              <button className="text-[#828282] font-inter font-[500] text-[14px] leading-[21px]">
                Edit
              </button>
              <button className="text-[#828282] font-inter font-[500] text-[14px] leading-[21px]">
                <img src={bin} alt="" width={14} srcset="" />
              </button>
            </div>
          </div>
          <div className="flex items-center w-[100%] gap-[10px] py-[6px] cursor-pointer">
            <div className="w-[80%] flex items-center gap-[20px]">
              <div className="w-[15%]">
                <img src={Meetup} alt="" />
              </div>
              <div className="w-[55%]">
                <h3 className="font-inter font-[500] text-[14px] leading-[21px] text-[#00000] flex items-center gap-[20px]">
                  Event Title{" "}
                  <span className="text-[8px] font-inter text-[#ff0000]">
                    FEATURED
                  </span>
                </h3>
                <p className="font-inter font-[500] text-[12px] leading-[18px] text-[#828282]">
                  Firehouse Art Gallery
                </p>
                <p className="font-inter font-[500] text-[12px] leading-[18px] text-[#828282]">
                  Sun, 22 Jun, 08:00-10:00
                </p>
              </div>
              <div className="w-[30%] flex justify-between items-center">
                <div className="flex flex-col justify-center items-center gap-[10px]">
                  <img
                    src={EyeImage}
                    alt=""
                    width={38}
                    height={19}
                    className="bg-[#FAFBFC] p-2 rounded-lg"
                  />
                  <p className="font-inter text-[#828282] font-[500] text-[14px] leading-[21px]">
                    264
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center gap-[10px]">
                  <img
                    src={floppy}
                    alt=""
                    width={36}
                    height={19}
                    className="bg-[#FAFBFC] p-2 rounded-lg"
                  />
                  <p className="font-inter text-[#828282] font-[500] text-[14px] leading-[21px]">
                    264
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center gap-[10px]">
                  <img
                    src={CalendarIcon}
                    alt=""
                    width={32}
                    height={19}
                    className="bg-[#FAFBFC] p-2 rounded-lg"
                  />
                  <p className="font-inter text-[#828282] font-[500] text-[14px] leading-[21px]">
                    25
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[20%] flex gap-[20px] justify-end">
              <button className="text-[#828282] font-inter font-[500] text-[14px] leading-[21px]">
                View
              </button>
              <button className="text-[#828282] font-inter font-[500] text-[14px] leading-[21px]">
                Edit
              </button>
              <button className="text-[#828282] font-inter font-[500] text-[14px] leading-[21px]">
                <img src={bin} alt="" width={14} srcset="" />
              </button>
            </div>
          </div>
          <div className="flex items-center w-[100%] gap-[10px] py-[6px] cursor-pointer">
            <div className="w-[80%] flex items-center gap-[20px]">
              <div className="w-[15%]">
                <img src={Meetup} alt="" />
              </div>
              <div className="w-[55%]">
                <h3 className="font-inter font-[500] text-[14px] leading-[21px] text-[#00000] flex items-center gap-[20px]">
                  Event Title{" "}
                  <span className="text-[8px] font-inter text-[#ff0000]">
                    FEATURED
                  </span>
                </h3>
                <p className="font-inter font-[500] text-[12px] leading-[18px] text-[#828282]">
                  Firehouse Art Gallery
                </p>
                <p className="font-inter font-[500] text-[12px] leading-[18px] text-[#828282]">
                  Sun, 22 Jun, 08:00-10:00
                </p>
              </div>
              <div className="w-[30%] flex justify-between items-center">
                <div className="flex flex-col justify-center items-center gap-[10px]">
                  <img
                    src={EyeImage}
                    alt=""
                    width={38}
                    height={19}
                    className="bg-[#FAFBFC] p-2 rounded-lg"
                  />
                  <p className="font-inter text-[#828282] font-[500] text-[14px] leading-[21px]">
                    264
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center gap-[10px]">
                  <img
                    src={floppy}
                    alt=""
                    width={36}
                    height={19}
                    className="bg-[#FAFBFC] p-2 rounded-lg"
                  />
                  <p className="font-inter text-[#828282] font-[500] text-[14px] leading-[21px]">
                    264
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center gap-[10px]">
                  <img
                    src={CalendarIcon}
                    alt=""
                    width={32}
                    height={19}
                    className="bg-[#FAFBFC] p-2 rounded-lg"
                  />
                  <p className="font-inter text-[#828282] font-[500] text-[14px] leading-[21px]">
                    25
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[20%] flex gap-[20px] justify-end">
              <button className="text-[#828282] font-inter font-[500] text-[14px] leading-[21px]">
                View
              </button>
              <button className="text-[#828282] font-inter font-[500] text-[14px] leading-[21px]">
                Edit
              </button>
              <button className="text-[#828282] font-inter font-[500] text-[14px] leading-[21px]">
                <img src={bin} alt="" width={14} srcset="" />
              </button>
            </div>
          </div>
          <div className="flex items-center w-[100%] gap-[10px] py-[6px] cursor-pointer">
            <div className="w-[80%] flex items-center gap-[20px]">
              <div className="w-[15%]">
                <img src={Meetup} alt="" />
              </div>
              <div className="w-[55%]">
                <h3 className="font-inter font-[500] text-[14px] leading-[21px] text-[#00000] flex items-center gap-[20px]">
                  Event Title{" "}
                  <span className="text-[8px] font-inter text-[#ff0000]">
                    FEATURED
                  </span>
                </h3>
                <p className="font-inter font-[500] text-[12px] leading-[18px] text-[#828282]">
                  Firehouse Art Gallery
                </p>
                <p className="font-inter font-[500] text-[12px] leading-[18px] text-[#828282]">
                  Sun, 22 Jun, 08:00-10:00
                </p>
              </div>
              <div className="w-[30%] flex justify-between items-center">
                <div className="flex flex-col justify-center items-center gap-[10px]">
                  <img
                    src={EyeImage}
                    alt=""
                    width={38}
                    height={19}
                    className="bg-[#FAFBFC] p-2 rounded-lg"
                  />
                  <p className="font-inter text-[#828282] font-[500] text-[14px] leading-[21px]">
                    264
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center gap-[10px]">
                  <img
                    src={floppy}
                    alt=""
                    width={36}
                    height={19}
                    className="bg-[#FAFBFC] p-2 rounded-lg"
                  />
                  <p className="font-inter text-[#828282] font-[500] text-[14px] leading-[21px]">
                    264
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center gap-[10px]">
                  <img
                    src={CalendarIcon}
                    alt=""
                    width={32}
                    height={19}
                    className="bg-[#FAFBFC] p-2 rounded-lg"
                  />
                  <p className="font-inter text-[#828282] font-[500] text-[14px] leading-[21px]">
                    25
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[20%] flex gap-[20px] justify-end">
              <button className="text-[#828282] font-inter font-[500] text-[14px] leading-[21px]">
                View
              </button>
              <button className="text-[#828282] font-inter font-[500] text-[14px] leading-[21px]">
                Edit
              </button>
              <button className="text-[#828282] font-inter font-[500] text-[14px] leading-[21px]">
                <img src={bin} alt="" width={14} srcset="" />
              </button>
            </div>
          </div>
          <div className="flex items-center w-[100%] gap-[10px] py-[6px] cursor-pointer">
            <div className="w-[80%] flex items-center gap-[20px]">
              <div className="w-[15%]">
                <img src={Meetup} alt="" />
              </div>
              <div className="w-[55%]">
                <h3 className="font-inter font-[500] text-[14px] leading-[21px] text-[#00000] flex items-center gap-[20px]">
                  Event Title{" "}
                  <span className="text-[8px] font-inter text-[#ff0000]">
                    FEATURED
                  </span>
                </h3>
                <p className="font-inter font-[500] text-[12px] leading-[18px] text-[#828282]">
                  Firehouse Art Gallery
                </p>
                <p className="font-inter font-[500] text-[12px] leading-[18px] text-[#828282]">
                  Sun, 22 Jun, 08:00-10:00
                </p>
              </div>
              <div className="w-[30%] flex justify-between items-center">
                <div className="flex flex-col justify-center items-center gap-[10px]">
                  <img
                    src={EyeImage}
                    alt=""
                    width={38}
                    height={19}
                    className="bg-[#FAFBFC] p-2 rounded-lg"
                  />
                  <p className="font-inter text-[#828282] font-[500] text-[14px] leading-[21px]">
                    264
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center gap-[10px]">
                  <img
                    src={floppy}
                    alt=""
                    width={36}
                    height={19}
                    className="bg-[#FAFBFC] p-2 rounded-lg"
                  />
                  <p className="font-inter text-[#828282] font-[500] text-[14px] leading-[21px]">
                    264
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center gap-[10px]">
                  <img
                    src={CalendarIcon}
                    alt=""
                    width={32}
                    height={19}
                    className="bg-[#FAFBFC] p-2 rounded-lg"
                  />
                  <p className="font-inter text-[#828282] font-[500] text-[14px] leading-[21px]">
                    25
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[20%] flex gap-[20px] justify-end">
              <button className="text-[#828282] font-inter font-[500] text-[14px] leading-[21px]">
                View
              </button>
              <button className="text-[#828282] font-inter font-[500] text-[14px] leading-[21px]">
                Edit
              </button>
              <button className="text-[#828282] font-inter font-[500] text-[14px] leading-[21px]">
                <img src={bin} alt="" width={14} srcset="" />
              </button>
            </div>
          </div>
          
          <div className="flex my-[20px] items-center gap-[10px]">
            <div className="flex gap-[20px] items-cenetr">
              <button className="">
                <LeftOutlined />
              </button>
              <button className=" font-inter font-[500] text-[14px] leading-[21px]">
                1
              </button>
              <button className=" font-inter font-[500] text-[14px] leading-[21px] text-[#828282]">
                2
              </button>
              <button className=" font-inter font-[500] text-[14px] leading-[21px] text-[#828282]">
                3
              </button>
              <button className="">
                <RightOutlined className="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageEvent;
