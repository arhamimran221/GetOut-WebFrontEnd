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
import emergency from "../../Assets/emergencyMark.svg";
import bin from "../../Assets/deleteIcon.svg"
import CardsImage from "../../Assets/cardImage.png";
import EventsData from "../../pages/Events/EventsData.jsx";

const Dasboard = () => {
  const [date, setDate] = useState(new Date());
  const [views, setViews] = useState(true);
  const [saveevent, setSveEvent] = useState(true);
  const [totalevent, setTotalEvent] = useState(true);
  const dayLabels = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
  const navigate = useNavigate();

  return (
    <div className="">
      <div className="">
        <h2 className="font-raleway font-[600] text-[32px] leading-[40px] text-[#404580]">
        Welcome back,Host
        </h2>
        <p className="text-[#828282] font-manrope font-[500] text-[16px] leading-[21.86px] mt-[2px]">
        Track your events and manage your account
        </p>
      </div>
      <div className="bg-[#FBBC05] p-[10px] rounded-[8px] flex gap-[10px] my-[20px]">
        <img src={emergency} alt="" srcset="" />
        <p className="font-inter font-[400] text-[14px] text-[#000]">
          Notifications to host i.e. your subscription payment has not gone
          through
        </p>
      </div>
      <div className="flex gap-[10px] w-[100%] mt-[20px] h-[112px]">
        <div
          className="w-[25%] overflow-hidden bg-[#FFFF] rounded-lg p-2"
          style={{ boxShadow: "0px 0px 13px 0px #523F690D" }}
        >
          <div className="flex flex-col justify-between h-[100%]">
            <p className="font-manrope  text-[14px] font-[700] text-[#828282]">
              Subscription
            </p>
            <h2 className="font-inter font-[600] text-[32px] leading-[48px] tracking-[-1%] text-[#404580]">
              Basic Plan
            </h2>
            <strong className="font-manrope font-[700] text-[14px] leading-[20px]">
              4 credits left this month
            </strong>
          </div>
        </div>
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
            <p className="font-manrope  text-[14px] font-[700] text-[#828282]">
              Number of Events
            </p>
            <p className="font-manrope font-[700] text-[14px] leading-[20px]">
              215
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
            <p className="font-manrope  text-[14px] font-[700] text-[#828282]">
              Number of Events
            </p>
            <p className="font-manrope font-[700] text-[14px] leading-[20px]">
              215
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
            <p className="font-manrope  text-[14px] font-[700] text-[#828282]">
              Number of Events
            </p>
            <p className="font-manrope font-[700] text-[14px] leading-[20px]">
              215
            </p>
          </div>
          {totalevent && (
            <div className="">
              {/* <GraphOutline stroke="#A9DAF2" /> */}
              <TotalChart />
            </div>
          )}
        </div>
      </div>
      <div className="flex mt-[10px] w-[100%] gap-[10px] ">
        <div
          className="w-[68%]"
        >
          <div className="w-[100%] bg-[#fff] rounded-[8px] p-[10px]" style={{ boxShadow: "0px 0px 13px 0px #523F690D" }}>
          <h2 className="font-inter font-[700] text-[20px] leading-[30px] mb-[10px] text-[#404580]">
            My Events
          </h2>
          <div className="flex items-center w-[100%] gap-[10px] py-[6px] cursor-pointer">
            <div className="w-[80%] flex items-center gap-[20px]">
            <div className="w-[15%]">
              <img src={Meetup} alt="" />
            </div>
            <div className="w-[55%]">
              <h3 className="font-inter font-[500] text-[14px] leading-[21px] text-[#00000] flex items-center gap-[20px]">
                Event Title  <span className="text-[8px] font-inter text-[#ff0000]">FEATURED</span>
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
              <button className="text-[#828282] font-inter font-[500] text-[14px] leading-[21px]">View</button>
              <button className="text-[#828282] font-inter font-[500] text-[14px] leading-[21px]">Edit</button>
              <button className="text-[#828282] font-inter font-[500] text-[14px] leading-[21px]"><img src={bin} alt="" width={14} srcset="" /></button>
            </div>
          </div>
          <div className="flex items-center w-[100%] gap-[10px] py-[6px] cursor-pointer">
            <div className="w-[80%] flex items-center gap-[20px]">
            <div className="w-[15%]">
              <img src={Meetup} alt="" />
            </div>
            <div className="w-[55%]">
              <h3 className="font-inter font-[500] text-[14px] leading-[21px] text-[#00000] flex items-center gap-[20px]">
                Event Title  <span className="text-[8px] font-inter text-[#ff0000]">FEATURED</span>
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
              <button className="text-[#828282] font-inter font-[500] text-[14px] leading-[21px]">View</button>
              <button className="text-[#828282] font-inter font-[500] text-[14px] leading-[21px]">Edit</button>
              <button className="text-[#828282] font-inter font-[500] text-[14px] leading-[21px]"><img src={bin} alt="" width={14} srcset="" /></button>
            </div>
          </div>
          <div className="flex items-center w-[100%] gap-[10px] py-[6px] cursor-pointer">
            <div className="w-[80%] flex items-center gap-[20px]">
            <div className="w-[15%]">
              <img src={Meetup} alt="" />
            </div>
            <div className="w-[55%]">
              <h3 className="font-inter font-[500] text-[14px] leading-[21px] text-[#00000] flex items-center gap-[20px]">
                Event Title  <span className="text-[8px] font-inter text-[#ff0000]">FEATURED</span>
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
              <button className="text-[#828282] font-inter font-[500] text-[14px] leading-[21px]">View</button>
              <button className="text-[#828282] font-inter font-[500] text-[14px] leading-[21px]">Edit</button>
              <button className="text-[#828282] font-inter font-[500] text-[14px] leading-[21px]"><img src={bin} alt="" width={14} srcset="" /></button>
            </div>
          </div>
          <div className="flex items-center w-[100%] gap-[10px] py-[6px] cursor-pointer">
            <div className="w-[80%] flex items-center gap-[20px]">
            <div className="w-[15%]">
              <img src={Meetup} alt="" />
            </div>
            <div className="w-[55%]">
              <h3 className="font-inter font-[500] text-[14px] leading-[21px] text-[#00000] flex items-center gap-[20px]">
                Event Title  <span className="text-[8px] font-inter text-[#ff0000]">FEATURED</span>
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
              <button className="text-[#828282] font-inter font-[500] text-[14px] leading-[21px]">View</button>
              <button className="text-[#828282] font-inter font-[500] text-[14px] leading-[21px]">Edit</button>
              <button className="text-[#828282] font-inter font-[500] text-[14px] leading-[21px]"><img src={bin} alt="" width={14} srcset="" /></button>
            </div>
          </div>
          </div>
          <div className="w-[100%] mt-[10px] flex gap-[10px] h-[268px]">
            <div className="w-[50%] p-[10px] bg-[#fff] rounded-[8px]" style={{ boxShadow: "0px 0px 13px 0px #523F690D" }}>
            <h2 className="font-inter font-[700] text-[20px] leading-[30px] mb-[10px] text-[#404580]">
            Notifications
          </h2>
          <div className="h-[200px] overflow-y-scroll">
          <div className="flex items-center gap-[10px] mb-2">
            <div className="w-[67px] h-[67px] overflow-hidden rounded-full">
          <img src={Meetup} alt="" className="w-[100%] h-[100%] object-cover"/>
          </div>
          <p className="font-inter font-[500] text-[14px] leading-[21px] w-[253px]">The Angel has requested to be an associated host with your event “Event Name”</p>
          </div>
          <div className="flex items-center gap-[10px] mb-2">
            <div className="w-[67px] h-[67px] overflow-hidden rounded-full">
          <img src={Meetup} alt="" className="w-[100%] h-[100%] object-cover"/>
          </div>
          <p className="font-inter font-[500] text-[14px] leading-[21px] w-[253px]">You have a new follower</p>
          </div>
          <div className="flex items-center gap-[10px] mb-2">
            <div className="w-[67px] h-[67px] overflow-hidden rounded-full">
          <img src={Meetup} alt="" className="w-[100%] h-[100%] object-cover"/>
          </div>
          <p className="font-inter font-[500] text-[14px] leading-[21px] w-[253px]">Username follows your event “Event Name”.</p>
          </div>
          <div className="flex items-center gap-[10px] mb-2">
            <div className="w-[67px] h-[67px] overflow-hidden rounded-full">
          <img src={Meetup} alt="" className="w-[100%] h-[100%] object-cover"/>
          </div>
          <p className="font-inter font-[500] text-[14px] leading-[21px] w-[253px]">The Angel has requested to be an associated host with your event “Event Name”</p>
          </div>
          </div>
            </div>
            <div className="w-[50%] p-[10px] bg-[#404580] rounded-[8px] flex flex-col items-center text-white justify-between" style={{ boxShadow: "0px 0px 13px 0px #523F690D" }}>
              <h2 className="font-inter font-[700] text-[20px] leading-[30px] ">Get access to more events?</h2>
              <p className="font-poppins font-[400] text-[14px] leading-[28px]">List up to 20 events per month.</p>
              <h1 className="font-poppins font-[400] text-[50px] leading-[28px]">£49.99<span className="font-[400] text-[16px]">/month</span></h1>
              <p className="font-poppins font-[400] italic text-[14px] leading-[28px]">Less than £2.50 per event.</p>
              <button className="py-[8px] bg-[#ff0000] text-[#fff] rounded-[8px] font-inter font-[700] text-[16px] leading-[24px] w-[100%]">Upgrade Now</button>
            </div>
          </div>
        </div>
        <div
          className="w-[32%] bg-[#fff] rounded-lg p-2"
          style={{ boxShadow: "0px 0px 13px 0px #523F690D" }}
        >
          <Calendar
            onChange={setDate}
            value={date}
            formatShortWeekday={(locale, date) => dayLabels[date.getDay()]}
          />
          <div className="mt-[20px]">
            <h2 className="font-inter font-[700] text-[16px] leading-[24px] text-[#000]">
            Your events on 17/06/2024
            </h2>
            <div className="flex flex-col gap-[10px] mt-[20px]">
            <EventsData image_url={CardsImage} title="Event Title" />
            <EventsData image_url={CardsImage} title="Event Title" />
            <EventsData image_url={CardsImage} title="Event Title" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dasboard;
