import React, { useState } from "react";
import UpIcon from "../../Assets/UpIcon.jsx";
import GraphOutline from "../../Assets/GraphOutline.jsx";
import crownIcon from "../../Assets/crownIcon.svg";
import Meetup from "../../Assets/MeetupImage.png";
import EyeImage from "../../Assets/EyeIcon.svg";
import floppy from "../../Assets/saveFloppy.svg";
import CalendarIcon from "../../Assets/calendar.svg";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { ArrowRightOutlined } from "@ant-design/icons";
import downicon from "../../Assets/downIcon.jpg";
import savedown from "../../Assets/savedown.jpeg";
import totaldown from "../../Assets/totaldown.jpg";
import LineCharts from "../Charts/LineCharts.jsx";
import SaveChart from "../Charts/SaveChart.jsx";
import TotalChart from "../Charts/TotalChart.jsx";
import { useNavigate } from "react-router-dom";

const Dasboard = () => {
  const [date, setDate] = useState(new Date());
  const [views, setViews] = useState(false);
  const [saveevent, setSveEvent] = useState(false);
  const [totalevent, setTotalEvent] = useState(false);
  const dayLabels = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
  const navigate = useNavigate();

  return (
    <div className="">
      <div className="flex justify-between items-center">
        <div className="">
          <h2 className="font-raleway font-[600] text-[35px] leading-[75px]">
            Welcome back,Host
          </h2>
          <p className="text-[#767C8C] font-manrope font-[500] text-[14px] leading-[28.86px] mt-[-10px]">
            Track your events and manage your account
          </p>
        </div>
        <div className="">
          <button className="font-poppins text-[16px] text-[#fff] bg-[#ff0000] px-6 py-3 rounded-md font-[500] hover:bg-transparent hover:border-[#ff000] border-[1px] border-[#ff0000] hover:text-[#ff0000] ease-in-out duration-300" onClick={() => navigate('/events-dashboard/create-event')}>
            Create Event
          </button>
        </div>
      </div>
      <div className="flex gap-[10px] w-[100%] mt-[10px]">
        <div
          className={
            views
              ? `w-[25%] overflow-hidden bg-[#FFFF] rounded-lg p-2`
              : "w-[25%] overflow-hidden bg-[#FFFF] rounded-lg p-2 h-fit transform-all"
          }
          style={{ boxShadow: "0px 0px 13px 0px #523F690D" }}
        >
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setViews(!views)}
          >
            <p className="flex items-center gap-[10px] text-[#19191A] text-[30px] font-[600]">
              215
              {views ? (
                <UpIcon fill="#0E8A74" className="w-[10px]" />
              ) : (
                <img src={downicon} alt="" />
              )}
            </p>
            <p className="font-poppins text-[14px] text-[#19191A] font-[500]">
              Views
            </p>
          </div>
          {views && (
            <div className="">
              {/* <GraphOutline stroke="#0E8A74" /> */}
              <LineCharts />
            </div>
          )}
        </div>
        <div
          className={
            saveevent
              ? `w-[25%] overflow-hidden bg-[#FFFF] rounded-lg p-2`
              : `w-[25%] overflow-hidden bg-[#FFFF] rounded-lg p-2 h-fit`
          }
          style={{ boxShadow: "0px 0px 13px 0px #523F690D" }}
          onClick={() => setSveEvent(!saveevent)}
        >
          <div className="flex justify-between items-center cursor-pointer">
            <p className="flex items-center gap-[10px] text-[#19191A] text-[30px] font-[600]">
              536k
              {saveevent ? (
                <UpIcon fill="#FB3E7A" className="w-[10px]" />
              ) : (
                <img src={savedown} alt="missing" />
              )}
            </p>
            <p className="font-poppins text-[14px] text-[#19191A] font-[500]">
              Save Events
            </p>
          </div>
          {saveevent && (
            <div className="">
              {/* <GraphOutline stroke="#FB3E7A" /> */}
              <SaveChart />
            </div>
          )}
        </div>
        <div
          className={
            totalevent
              ? "w-[25%] overflow-hidden bg-[#FFFF] rounded-lg p-2"
              : "w-[25%] overflow-hidden bg-[#FFFF] rounded-lg p-2 h-fit"
          }
          style={{ boxShadow: "0px 0px 13px 0px #523F690D" }}
        >
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setTotalEvent(!totalevent)}
          >
            <p className="flex items-center gap-[10px] text-[#19191A] text-[30px] font-[600]">
              536k
              {totalevent ? (
                <UpIcon fill="#A9DAF2" className="w-[10px]" />
              ) : (
                <img src={totaldown} alt="missing" />
              )}
            </p>
            <p className="font-poppins text-[14px] text-[#19191A] font-[500]">
              Save Events
            </p>
          </div>
          {totalevent && (
            <div className="">
              {/* <GraphOutline stroke="#A9DAF2" /> */}
              <TotalChart />
            </div>
          )}
        </div>
        <div className="w-[25%] overflow-hidden bg-[#FFFF] rounded-lg p-2 flex items-center gap-[10px]">
          <div className="">
            <img src={crownIcon} alt="" />
          </div>
          <div className="">
            <h4 className="font-poppins text-[#19191A] font-[500] text-[16px]">
              Subscription Plan
            </h4>
            <p className="font-poppins text-[#FF0000] font-[500] text-[16px] my-[4px]">
              Basic
            </p>
            <button className="font-poppins text-[16px] text-[#fff] bg-[#ff0000] px-3 py-2 rounded-md font-[500] hover:bg-transparent hover:border-[#ff000] border-[1px] border-[#ff0000] hover:text-[#ff0000] ease-in-out duration-300">
              Upgrade Now
            </button>
          </div>
        </div>
      </div>
      <div className="flex mt-[10px] w-[100%] gap-[10px] ">
        <div
          className={`transition-all duration-300 ${
            !views && !saveevent && !totalevent
              ? "w-[75.5%] bg-[#fff] rounded-lg p-3 mt-[-46px]"
              : "w-[75.5%] bg-[#fff] rounded-lg p-3 "
          }`}
          style={{ boxShadow: "0px 0px 13px 0px #523F690D" }}
        >
          <h2 className="font-poppins font-[600] text-[18px] leading-[24px] mb-[10px]">
            My Events
          </h2>
          <div className="flex items-center w-[100%] gap-[10px] border-b-[#E4E4E4] border-b-[1px] py-[20px] cursor-pointer">
            <div className="w-[15%]">
              <img src={Meetup} alt="" />
            </div>
            <div className="w-[70%]">
              <h3 className="font-poppins font-[500] text-[16px] leading-[27px] text-[#19191A]">
                International Online Meetup 2020
              </h3>
              <p className="font-poppins font-[400] text-[12px] leading-[22px] text-[#FF0000]">
                Medan, Indonesia
              </p>
              <p className="font-poppins text-[#404040] font-[400] text-[12px] leading-[18px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad mini
              </p>
            </div>
            <div className="w-[30%] flex justify-between items-center">
              <div className="flex flex-col justify-center items-center gap-[10px]">
                <img
                  src={EyeImage}
                  alt=""
                  className="bg-[#FAFBFC] p-2 rounded-lg"
                />
                <p className="font-poppins text-[#19191A] font-[500] text-[14px] leading-[22.5px]">
                  22k
                </p>
              </div>
              <div className="flex flex-col justify-center items-center gap-[10px]">
                <img
                  src={floppy}
                  alt=""
                  className="bg-[#FAFBFC] p-2 rounded-lg"
                />
                <p className="font-poppins text-[#19191A] font-[500] text-[14px] leading-[22.5px]">
                  350
                </p>
              </div>
              <div className="flex flex-col justify-center items-center gap-[10px]">
                <img
                  src={CalendarIcon}
                  alt=""
                  className="bg-[#FAFBFC] p-2 rounded-lg"
                />
                <p className="font-poppins text-[#19191A] font-[500] text-[14px] leading-[22.5px]">
                  24 June 2020
                </p>
              </div>
            </div>
          </div>
 <div className="flex items-center w-[100%] gap-[10px] border-b-[#E4E4E4] border-b-[1px] py-[20px] cursor-pointer">
            <div className="w-[15%]">
              <img src={Meetup} alt="" />
            </div>
            <div className="w-[70%]">
              <h3 className="font-poppins font-[500] text-[16px] leading-[27px] text-[#19191A]">
                International Online Meetup 2020
              </h3>
              <p className="font-poppins font-[400] text-[12px] leading-[22px] text-[#FF0000]">
                Medan, Indonesia
              </p>
              <p className="font-poppins text-[#404040] font-[400] text-[12px] leading-[18px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad mini
              </p>
            </div>
            <div className="w-[30%] flex justify-between items-center">
              <div className="flex flex-col justify-center items-center gap-[10px]">
                <img
                  src={EyeImage}
                  alt=""
                  className="bg-[#FAFBFC] p-2 rounded-lg"
                />
                <p className="font-poppins text-[#19191A] font-[500] text-[14px] leading-[22.5px]">
                  22k
                </p>
              </div>
              <div className="flex flex-col justify-center items-center gap-[10px]">
                <img
                  src={floppy}
                  alt=""
                  className="bg-[#FAFBFC] p-2 rounded-lg"
                />
                <p className="font-poppins text-[#19191A] font-[500] text-[14px] leading-[22.5px]">
                  350
                </p>
              </div>
              <div className="flex flex-col justify-center items-center gap-[10px]">
                <img
                  src={CalendarIcon}
                  alt=""
                  className="bg-[#FAFBFC] p-2 rounded-lg"
                />
                <p className="font-poppins text-[#19191A] font-[500] text-[14px] leading-[22.5px]">
                  24 June 2020
                </p>
              </div>
            </div>
          </div>
 <div className="flex items-center w-[100%] gap-[10px] border-b-[#E4E4E4] border-b-[1px] py-[20px] cursor-pointer">
            <div className="w-[15%]">
              <img src={Meetup} alt="" />
            </div>
            <div className="w-[70%]">
              <h3 className="font-poppins font-[500] text-[16px] leading-[27px] text-[#19191A]">
                International Online Meetup 2020
              </h3>
              <p className="font-poppins font-[400] text-[12px] leading-[22px] text-[#FF0000]">
                Medan, Indonesia
              </p>
              <p className="font-poppins text-[#404040] font-[400] text-[12px] leading-[18px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad mini
              </p>
            </div>
            <div className="w-[30%] flex justify-between items-center">
              <div className="flex flex-col justify-center items-center gap-[10px]">
                <img
                  src={EyeImage}
                  alt=""
                  className="bg-[#FAFBFC] p-2 rounded-lg"
                />
                <p className="font-poppins text-[#19191A] font-[500] text-[14px] leading-[22.5px]">
                  22k
                </p>
              </div>
              <div className="flex flex-col justify-center items-center gap-[10px]">
                <img
                  src={floppy}
                  alt=""
                  className="bg-[#FAFBFC] p-2 rounded-lg"
                />
                <p className="font-poppins text-[#19191A] font-[500] text-[14px] leading-[22.5px]">
                  350
                </p>
              </div>
              <div className="flex flex-col justify-center items-center gap-[10px]">
                <img
                  src={CalendarIcon}
                  alt=""
                  className="bg-[#FAFBFC] p-2 rounded-lg"
                />
                <p className="font-poppins text-[#19191A] font-[500] text-[14px] leading-[22.5px]">
                  24 June 2020
                </p>
              </div>
            </div>
          </div>
           <div className="flex items-center w-[100%] gap-[10px] border-b-[#E4E4E4] border-b-[1px] py-[20px] cursor-pointer">
            <div className="w-[15%]">
              <img src={Meetup} alt="" />
            </div>
            <div className="w-[70%]">
              <h3 className="font-poppins font-[500] text-[16px] leading-[27px] text-[#19191A]">
                International Online Meetup 2020
              </h3>
              <p className="font-poppins font-[400] text-[12px] leading-[22px] text-[#FF0000]">
                Medan, Indonesia
              </p>
              <p className="font-poppins text-[#404040] font-[400] text-[12px] leading-[18px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad mini
              </p>
            </div>
            <div className="w-[30%] flex justify-between items-center">
              <div className="flex flex-col justify-center items-center gap-[10px]">
                <img
                  src={EyeImage}
                  alt=""
                  className="bg-[#FAFBFC] p-2 rounded-lg"
                />
                <p className="font-poppins text-[#19191A] font-[500] text-[14px] leading-[22.5px]">
                  22k
                </p>
              </div>
              <div className="flex flex-col justify-center items-center gap-[10px]">
                <img
                  src={floppy}
                  alt=""
                  className="bg-[#FAFBFC] p-2 rounded-lg"
                />
                <p className="font-poppins text-[#19191A] font-[500] text-[14px] leading-[22.5px]">
                  350
                </p>
              </div>
              <div className="flex flex-col justify-center items-center gap-[10px]">
                <img
                  src={CalendarIcon}
                  alt=""
                  className="bg-[#FAFBFC] p-2 rounded-lg"
                />
                <p className="font-poppins text-[#19191A] font-[500] text-[14px] leading-[22.5px]">
                  24 June 2020
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-[24.5%] bg-[#fff] rounded-lg p-2"
          style={{ boxShadow: "0px 0px 13px 0px #523F690D" }}
        >
          <Calendar
            onChange={setDate}
            value={date}
            formatShortWeekday={(locale, date) => dayLabels[date.getDay()]}
          />
          <div className="mt-[10px]">
            <h2 className="font-poppins font-[600] text-[16px] leading-[24px] text-[#19191A]">
              Upcoming Events
            </h2>
            <div className="flex gap-[10px] mt-[10px]">
              <div className="bg-[#FF914D1A] flex flex-col items-center px-2 py-2 rounded-lg gap-[7px]">
                <p className="font-poppins font-[600] text-[26px] text-[#ff0000]">
                  3
                </p>
                <span className="font-poppins font-[500] text-[14px]">Wed</span>
                <div className="p-2 bg-[#ff0000] rounded-full border-[1px] border-[#fff] mb-[-15px]"></div>
              </div>
              <div className="">
                <p className="font-poppins text-[#19191A] text-[14px] leading-[22px]">
                  Live Concert Choir Charity Event 2020
                </p>
                <button className="font-poppins text-[14px] font-[500] text-[#19191A] cursor-pointer hover:text-[#ff0000] mt-[20px]">
                  View Details <ArrowRightOutlined />
                </button>
              </div>
            </div>
            <div className="flex gap-[10px] mt-[20px]">
              <div className="bg-[#FF914D1A] flex flex-col items-center px-2 py-2 rounded-lg gap-[7px]">
                <p className="font-poppins font-[600] text-[26px] text-[#ff0000]">
                  3
                </p>
                <span className="font-poppins font-[500] text-[14px]">Wed</span>
                <div className="p-2 bg-[#ff0000] rounded-full border-[1px] border-[#ffff] mb-[-15px]"></div>
              </div>
              <div className="">
                <p className="font-poppins text-[#19191A] text-[14px] leading-[22px]">
                  Live Concert Choir Charity Event 2020
                </p>
                <button className="font-poppins text-[14px] font-[500] text-[#19191A] cursor-pointer hover:text-[#ff0000] mt-[20px]">
                  View Details <ArrowRightOutlined />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dasboard;
