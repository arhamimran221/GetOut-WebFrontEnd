import React from "react";
import { ArrowDownOutlined, ArrowUpOutlined, DownOutlined } from "@ant-design/icons";
import { ArrowDownward } from "@mui/icons-material";
import DbGraph from "../../Assets/DbGraph";
import DbGraphOrange from "../../Assets/DbGraphOrange.svg";
import DbGraphPink from "../../Assets/DbGraphPink.svg";
import donutGraph from "../../Assets/donutGraph.svg"
import DbGraphPurple from "../../Assets/DbGraphPurple.svg";
import RevenueChart from "../Charts/RevenueChart";
import PiChart from "../Charts/PiChart";
import FillChart from "../Charts/FillChart";

const SuDashboard = () => {
  
  return (
    <div>
      <div className="flex w-[100%] gap-[10px]">
        <div
          className="w-[25%] overflow-hidden bg-[#FFFF] rounded-lg p-2"
          style={{ boxShadow: "0px 0px 13px 0px #523F690D" }}
        >
          <p className="font-poppins text-[#404040] font-[400] text-[16px] leading-[27px]">
            Number of events on Database
          </p>
          <div className="flex items-center gap-[10px] ">
            <div className="mt-[20px]">
              <div className="flex items-center gap-[10px]">
                <h2 className="font-poppins text-[#404040] font-[600] text-[35px]">
                  1070
                </h2>
                <button className="bg-[#0AC60A29] px-2 py-1 text-[#0AC60A] font-[400] text-[10px] rounded-lg flex items-center gap-[5px]">
                  -1.5%  <ArrowDownOutlined className="text-[15px]" />
                </button>
              </div>
              <p className="font-poppins text-[#404040] font-[400] text-[14px] leading-[27px]">
                Compared to last Week
              </p>
            </div>
            <div className="w-[90px]">
            
              <FillChart Fill='#0E8A74'/>
                {/* ssjsjlskklsklskl */}
              {/* <DbGraph fill="#0E8A74" /> */}
            </div>
          </div>
        </div>
        <div
          className="w-[25%] overflow-hidden bg-[#FFFF] rounded-lg p-2"
          style={{ boxShadow: "0px 0px 13px 0px #523F690D" }}
        >
          <p className="font-poppins text-[#404040] font-[400] text-[16px] leading-[27px]">
          Number of events by Category
          </p>
          <div className="flex items-center gap-[10px]">
            <div className="mt-[20px]">
              <div className="flex items-center gap-[10px]">
                <h2 className="font-poppins text-[#404040] font-[600] text-[35px]">
                  1070
                </h2>
                <button className="bg-[#FF550029] px-2 py-1 text-[#FF5500] font-[400] text-[10px] rounded-lg flex items-center gap-[5px]">
                  -1.5% <ArrowDownOutlined className="text-[15px]" />
                </button>
              </div>
              <p className="font-poppins text-[#404040] font-[400] text-[14px] leading-[27px]">
                Compared to last Weeks
              </p>
            </div>
            <div>
              
              <img src={DbGraphOrange} fill="#FF5500" />
            </div>
          </div>
        </div>
        <div
          className="w-[25%] overflow-hidden bg-[#FFFF] rounded-lg p-2"
          style={{ boxShadow: "0px 0px 13px 0px #523F690D" }}
        >
          <p className="font-poppins text-[#404040] font-[400] text-[16px] leading-[27px]">
          Number of events by Month
          </p>
          <div className="flex items-center gap-[10px]">
            <div className="mt-[20px]">
              <div className="flex items-center gap-[10px]">
                <h2 className="font-poppins text-[#404040] font-[600] text-[35px]">
                  1070
                </h2>
                <button className="bg-[#8820F329] px-2 py-1 text-[#8820F3] font-[400] text-[10px] rounded-lg flex items-center gap-[5px]">
                  -1.5% <ArrowUpOutlined className="text-[15px]" />
                </button>
              </div>
              <p className="font-poppins text-[#404040] font-[400] text-[14px] leading-[27px]">
                Compared to last Week
              </p>
            </div>
            <div>
              <img src={DbGraphPurple} fill="#0E8A74" />
            </div>
          </div>
        </div>
        <div
          className="w-[25%] overflow-hidden bg-[#FFFF] rounded-lg p-2"
          style={{ boxShadow: "0px 0px 13px 0px #523F690D" }}
        >
          <p className="font-poppins text-[#404040] font-[400] text-[16px] leading-[27px]">
          Number of Hosts
          </p>
          <div className="flex items-center gap-[10px]">
            <div className="mt-[20px]">
              <div className="flex items-center gap-[10px]">
                <h2 className="font-poppins text-[#404040] font-[600] text-[35px]">
                150
                </h2>
                <button className="bg-[#FB3E7A29] px-2 py-1 text-[#FB3E7A] font-[400] text-[10px] rounded-lg flex items-center gap-[5px]">
                -1.5% <ArrowUpOutlined className="text-[15px]" />
                </button>
              </div>
              <p className="font-poppins text-[#404040] font-[400] text-[14px] leading-[27px]">
                Compared to last Week
              </p>
            </div>
            <div>
              <img src={DbGraphPink} fill="#0E8A74" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-[100%] gap-[10px] mt-[15px]">
      <div
          className="w-[50%] overflow-hidden bg-[#FFFF] rounded-lg p-2"
          style={{ boxShadow: "0px 0px 13px 0px #523F690D" }}
        >
            <p className="font-poppins text-[#19191A] font-[500] text-[18px]">
            Monthly Revenue</p>
            <div>
              <RevenueChart />
            </div>
        </div>
      <div
          className="w-[50%] overflow-hidden bg-[#FFFF] rounded-lg p-2"
          style={{ boxShadow: "0px 0px 13px 0px #523F690D" }}
        >
          <div className="">
            <p className="font-poppins text-[#19191A] font-[500] text-[18px]">
              Host Deatils
            </p>
            
          </div>
          <div className="flex gap-[10px] flex-col">
            <div className="mt-[20px]">
          <div className="flex items-center gap-[5px] mt-[10px]">
              <span className="w-[18px] h-[18px] bg-[#F79661] rounded-full "></span><p className="font-poppins text-[#19191A] font-[500] text-[16px]">Number of Hosts</p>
            </div>
            <div className="flex items-center gap-[5px] mt-[10px]">
              <span className="w-[18px] h-[18px] bg-[#2B4DED] rounded-full "></span><p className="font-poppins text-[#19191A] font-[500] text-[16px]">Number of Hosts by subscription Plan</p>
              </div>
              <div className="flex items-center gap-[5px] mt-[10px]">
              <span className="w-[18px] h-[18px] bg-[#FBCEA5] rounded-full "></span><p className="font-poppins text-[#19191A] font-[500] text-[16px]">Number of Hosts by month</p>
              </div>
              </div>
          <div className="">
            {/* <img src={donutGraph} alt="" /> */}
            
            <PiChart />
          </div>
          </div>
        </div>
      </div>
      <div className="flex w-[100%] gap-[10px] items-center mt-[15px]">
      <div
          className="w-[50%] overflow-hidden bg-[#FFFF] rounded-lg p-2"
          style={{ boxShadow: "0px 0px 13px 0px #523F690D" }}
        >
          <p className="font-poppins text-[#19191A] font-[500] text-[18px] leading-[27px]">Number of daily, Weekly and Monthly users</p>
          <div className="flex gap-[40px] mt-[30px]">
          <div className="">
            <p className="font-poppins text-[#F69E66] font-[600] text-[20px]">2343</p>
            <div className="font-poppins text-[#19191A] font-[400] text-[18px] tracking-[-0.18px]">Dialy Users</div>
          </div>
          <div className="border-[1px] border-[#F69E66] "></div>
          <div className="">
            <p className="font-poppins text-[#FFBC59] font-[600] text-[20px]">2343</p>
            <div className="font-poppins text-[#19191A] font-[400] text-[18px] tracking-[-0.18px]">Weekly Users</div>
          </div>
          <div className="border-[1px] border-[#F69E66] "></div>
          <div className="">
            <p className="font-poppins text-[#6BD096] font-[600] text-[20px]">2343</p>
            <div className="font-poppins text-[#19191A] font-[400] text-[18px] tracking-[-0.18px]">Monthly Users</div>
          </div>
          </div>
        </div>
        <div
          className="w-[50%] flex gap-[10px]"
        >
          <div className="overflow-hidden bg-[#FFFF] rounded-lg p-2 w-[50%]"
          style={{ boxShadow: "0px 0px 13px 0px #523F690D" }}>
           <p className="font-poppins text-[#19191A] font-[500] text-[18px] leading-[27px]">Revenue by Subscriber Plan</p>
           <h2 className="font-poppins text-[#19191A] text-[35px] font-[600] mt-[20px] mb-[5px]">$4578</h2>
           <p className="font-poppins font-[400] text-[15px] text-[#404040]">Compared to last Week</p>
          </div>
          <div className="overflow-hidden bg-[#FFFF] rounded-lg p-2 w-[50%]"
          style={{ boxShadow: "0px 0px 13px 0px #523F690D" }}>
           <p className="font-poppins text-[#19191A] font-[500] text-[18px] leading-[27px]">Users by hour Tracker</p>
           <h2 className="font-poppins text-[#19191A] text-[35px] font-[600] mt-[20px] mb-[5px]">457</h2>
           <p className="font-poppins font-[400] text-[15px] text-[#404040]">Compared to last Week</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuDashboard;
