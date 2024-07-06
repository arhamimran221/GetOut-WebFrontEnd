import React, { useState } from "react";
import dblogo from "../../Assets/event-logo.svg";
import "./MainpageLayout.css";
import { Dropdown, Modal, Space } from "antd";
import { useNavigate } from "react-router-dom";
import seachIcon from "../../Assets/Search-icon.svg";
import adminImage from "../../Assets/admin-image.svg";
import downIcon from "../../Assets/down-icon.svg";
import {
  EditOutlined,
  LogoutOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const MainPageHeader = ({ sidebarCollapsed, toggleSidebar }) => {
  const navigate = useNavigate();
  const items = [
    {
      key: "1",
      icon: <SettingOutlined />,
      label: (
        <a target="_blank" rel="noopener noreferrer" href="#">
          Setting
        </a>
      ),
    },
    {
      key: "2",
      icon: <EditOutlined />,

      label: (
        <a target="_blank" rel="noopener noreferrer" href="#">
          Profile Edit{" "}
        </a>
      ),
    },
    {
      key: "3",
      icon: <LogoutOutlined />,
      label: (
        <a target="_blank" rel="noopener noreferrer" href="#">
          Sign out
        </a>
      ),
    },
  ];
  return (
    <div className="flex px-4 py-2 bg-[#fff] items-center">
      <div className="w-[20%] flex gap-[10px] items-center ">
        <div className="bg-[#ff0000] rounded-lg p-4 h-fit ">
          <img src={dblogo} alt="" width={25} onClick={() => navigate("/")} />
        </div>
        <h2 className="font-poppins text-[30px] text-[#151D48] leading-[45px] font-[600]">
          Event
        </h2>
      </div>
      <div className="w-[80%] flex justify-between items-center">
        <div className="flex h-fit bg-[#F9FAFB] item-center px-4 py-3 w-[400px] rounded-md">
          <img src={seachIcon} alt="" width={20} />
          <input
            type="search"
            placeholder="Search events..."
            id=""
            className="bg-[#F9FAFB] px-4 font-poppins placeholder:font-[400] placeholder:text-[14px] placeholder:text-[#737791] focus:outline-none text-[14px] w-[100%]"
          />
        </div>
        <div className="flex gap-[10px] w-[20%] items-center justify-end cursor-pointer">
          <Dropdown
            menu={{
              items,
            }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <img src={adminImage} alt="" />
                <div className="">
                  <h2 className="flex justify-between font-poppins text-[#151D48] text-[14px] font-[500]">
                    Admin{" "}
                    <img
                      src={downIcon}
                      alt=""
                      srcset=""
                      className="ml-[20px]"
                    />
                  </h2>
                  <p className="text-[#737791] font-poppins fonr-[400] text-[12px] leading-[20px]">
                    Admin
                  </p>
                </div>
              </Space>
            </a>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default MainPageHeader;
