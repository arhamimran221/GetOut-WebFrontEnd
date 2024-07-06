import React, { useRef, useState } from "react";
import Image1 from "../../Assets/CategoryImg1.svg";
import Image2 from "../../Assets/CategoryImg2.svg";
import Image3 from "../../Assets/CategoryImg3.svg";
import { Dropdown, Space, Modal, Select, Checkbox } from "antd";
import MapIcon from "../../Assets/MapIcon.svg";
import DateIcon from "../../Assets/Date.svg";
import SkipIcon from "../../Assets/SkipIcon.svg";
import EventsData from "../Events/EventsData";
import CardsImage from "../../Assets/cardImage.png";
import PageLayout from "../layouts/page-layout";
import "../Events/Events.css";
import arrowLeftEvent from "../../Assets/leftIconEvent.svg";
import arrowRightEvent from "../../Assets/RightIconEvent.svg";
import editIcon from "../../Assets/editIconSave.svg";
import DownIcom from "../../Assets/arrowdownEvent.svg";

const SavedEvents = () => {
  const [selectedCat, setSelectedCat] = useState(null);
  const [isHost, setIsHost] = useState(false);
  const [mapView, setMapView] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const toggleShowAll = () => setShowAll(!showAll);
  const [tabView, setTabView] = useState("accountName");
  const [acountViewType, setAccountViewType] = useState("savedEvents");
  const [isModalChange, setIsModalChange] = useState(false);
  const [isModalForget, setIsModalForget] = useState(false);
  const scrollContainerRef = useRef(null);

  const showModal = () => {
    if(isModalChange=== false){
      setIsModalChange(true);
    }
    else if(isModalChange=== true)
      {
      setIsModalChange(false);
      setIsModalForget(true);
      }
  };
  const handleOk = () => {
    setIsModalChange(false);
    setIsModalForget(false);
  };
  const handleCancel = () => {
    setIsModalChange(false);
    setIsModalForget(false);
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const items = [
    {
      key: "1",
      label: "Item 1",
    },
    {
      key: "2",
      label: "Item 2",
    },
    {
      key: "3",
      label: "Item 3",
    },
  ];
  const scrollHorizontallyRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        top: 0,
        left: 400,
        behavior: 'smooth'
      });
    }
  };
  const scrollHorizontallyLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        top: 0,
        left: -400,
        behavior: 'smooth'
      });
    }
  };

  const CustomSelect = (props) => {
    return (
      <Select
        placeholder={
          <div className="flex gap-[10px]">
            <p className="w-[100%] font-poppins text-[#737791] text-[14px] font-[500] text-[15px] focus:outline-none">
              {props.title}
            </p>
          </div>
        }
        style={{ height: 60, backgroundColor: "#F9F9F9", borderRadius: "8px" }}
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

  return (
    <PageLayout>
      <div className="container ">
        <div
          className={`flex w-[100%] px-4 py-2 gap-[10px] ${
            isHost || selectedCat ? "my-[0px]" : "my-[100px]"
          } items-start1`}
        >
          <div className="w-[25%] bg-[#F9F9F9] rounded-lg border-[1px] border-[#E4E4E4] h-fit	 ">
            <div className="flex justify-between p-[6px] items-center">
              <h2
                className={`font-poppins font-[600] text-[14px] leading-[24px] cursor-pointer ${
                  tabView === "accountName"
                    ? "bg-[#3109601A] px-2 py-3 rounded-[4px] text-[#ff0000]"
                    : ""
                }`}
                onClick={() => setTabView("accountName")}
              >
                Account Name
              </h2>
              <h2
                className={`font-poppins font-[600] text-[14px] leading-[24px] cursor-pointer ${
                  tabView === "accountNumber"
                    ? "bg-[#3109601A] px-2 py-3 rounded-[4px] text-[#ff0000]"
                    : ""
                }`}
                onClick={() => setTabView("accountNumber")}
              >
                Account Number
              </h2>
            </div>
            <hr className=" border-[#8E8E8E]" />
            <div className={`overflow-y-auto h-fit`}>
              {tabView === "accountName" ? (
                <>
                  <div
                    className="flex w-[100%] gap-[5px] items-center my-[20px] last:mb-0 border-b-[1px] border-[#E4E4E4] pb-[10px] cursor-pointer hover"
                    onClick={() => setAccountViewType("savedEvents")}
                  >
                    <img src={Image1} className="w-[60px] h-[61px] pb-[4px]" />
                    <div className="w-[78%]">
                      <h2
                        className={`font-poppins font-[500] text-[14px] leading-[28px] ${
                          acountViewType === "savedEvents"
                            ? "text-[#ff0000]"
                            : "text-[#00000]"
                        }`}
                      >
                        Saved Events
                      </h2>
                      <p className="font-poppins text-[#404040] text-[12px] pb-[10px]  font-[300]">
                        Lorem Ipsum is simply dummy data text of the printing
                        and types-
                      </p>
                    </div>
                  </div>
                  <div
                    className="flex w-[100%] gap-[5px] items-center my-[20px] last:mb-0 border-b-[1px] border-[#E4E4E4] pb-[10px] cursor-pointer"
                    onClick={() => setAccountViewType("savedHosts")}
                  >
                    <img src={Image2} className="w-[60px] h-[61px] pb-[4px]" />
                    <div className="w-[78%]">
                      <h2
                        className={`font-poppins font-[500] text-[14px] leading-[28px] ${
                          acountViewType === "savedHosts"
                            ? "text-[#ff0000]"
                            : "text-[#00000]"
                        }`}
                      >
                        Saved Hosts
                      </h2>
                      <p className="font-poppins text-[#404040] text-[12px] pb-[10px]  font-[300]">
                        Lorem Ipsum is simply dummy data text of the printing
                        and types-
                      </p>
                    </div>
                  </div>
                  <div
                    className="flex w-[100%] gap-[5px] items-center my-[20px] last:mb-0 border-b-[1px] border-[#E4E4E4] pb-[10px] cursor-pointer"
                    onClick={() => setAccountViewType("accountDetails")}
                  >
                    <img src={Image3} className="w-[60px] h-[61px] pb-[4px]" />
                    <div className="w-[78%]">
                      <h2
                        className={`font-poppins font-[500] text-[14px] leading-[28px] ${
                          acountViewType === "accountDetails"
                            ? "text-[#ff0000]"
                            : "text-[#00000]"
                        }`}
                      >
                        Account Detail
                      </h2>
                      <p className="font-poppins text-[#404040] text-[12px] pb-[10px]  font-[300]">
                        Lorem Ipsum is simply dummy data text of the printing
                        and types-
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <div className="font-poppins font-[500] text-[14px] p-[6px] leading-[28px] text-[#ff0000] border-b-[1px] border-[#E4E4E4] pb-[20px] mt-[20px]">
                  0000 1111 2222 3333 4444
                </div>
              )}
            </div>
          </div>
          <div className="w-[75%]">
            <div className="flex w-[100%] gap-[10px] bg-[#F9F9F9] border-[1px] border-[#E4E4E4] rounded-lg px-4 py-2">
              <div className="bg-[#fff] px-4 rounded-lg w-[50%] flex py-2">
                <div className="flex justify-between items-center w-[100%]">
                  <div className="w-[65%] flex justify-between items-center">
                    <p className="font-poppins font-[500] text-[14px] text-[#19191A]">
                      Location
                    </p>
                    <p className="font-poppins font-[400] text-[12px] text-[#19191A]">
                      clear
                    </p>
                  </div>
                  <div className="border-[1px] border-[#E4E4E4] w-[1px] h-[100%]"></div>
                  <div className="w-[30%]">
                    <Dropdown
                      menu={{
                        items,
                        selectable: true,
                        defaultSelectedKeys: ["3"],
                      }}
                    >
                      <div className="">
                        <Space className="flex items-center justify-between cursor-pointer">
                          <div className="font-poppins font-[500] text-[14px] text-[#19191A]">
                            +x.x miles
                          </div>
                          <img src={DownIcom} width={15} />
                        </Space>
                      </div>
                    </Dropdown>
                  </div>
                </div>
              </div>
              <div className="flex w-[40%] gap-[10px]">
                <button
                  className="w-[30%] flex w-[100%] items-center justify-center gap-[5px] font-poppins text-[#19191A] text-[12px]"
                  onClick={() => setMapView(true)}
                >
                  <img src={MapIcon} alt="" />
                  Map View
                </button>
                <button className="w-[30%] flex w-[100%] items-center justify-center gap-[5px] font-poppins text-[#19191A] text-[12px]">
                  <img src={DateIcon} alt="" />
                  Find Date
                </button>
                <button className="w-[34%] flex w-[100%] items-center justify-center gap-[5px] font-poppins text-[#19191A] text-[12px]">
                  <img src={SkipIcon} alt="" />
                  Skip 5 days
                </button>
              </div>
              <div className="flex gap-[15px] items-center ml-[20px]">
                <img src={arrowLeftEvent} alt="" className="cursor-pointer h-[20px] w-[10px] hover:scale-[1.1] ease-in-out duration-300" onClick={scrollHorizontallyLeft}/>
                <img src={arrowRightEvent} alt="" className="cursor-pointer h-[20px] w-[10px] hover:scale-[1.1] ease-in-out duration-300"  onClick={scrollHorizontallyRight}/>
              </div>
            </div>
            {mapView ? (
              <>
                <div className="mt-[20px] rounded-lg">
                  <iframe
                    width="100%"
                    height="805"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                    style={{ borderRadius: "10px" }}
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  >
                    <a href="https://www.gps.ie/">gps tracker sport</a>
                  </iframe>
                </div>
              </>
            ) : acountViewType === "savedEvents" ? (
              <div className="mt-[20px] flex flex-col flex-wrap h-[510px] w-[100%] gap-[18px] overflow-x-hidden"
              ref={scrollContainerRef}
              >
                <div className="font-poppins text-[16px] font-[600] flex justify-between text-[#19191A] w-[33.32%]">
                  <h2>06 Apr 2024</h2>
                  <p>Monday</p>
                </div>
                <hr className="my-[4px] border-[0.5px] border-[#8E8E8E]" />
              <EventsData
                    image_url={CardsImage}
                    money={true}
                    title="Category Title"
                  />
                  <EventsData image_url={CardsImage} title="Category Title" />
                  <EventsData image_url={CardsImage} title="Category Title" />
                  <EventsData
                    image_url={CardsImage}
                    money={true}
                    title="Category Title"
                  />
                  <EventsData
                    image_url={CardsImage}
                    money={true}
                    title="Category Title"
                  />
                 
                  <EventsData
                    image_url={CardsImage}
                    money={true}
                    title="Category Title"
                  />
                    <EventsData
                    image_url={CardsImage}
                    money={true}
                    title="Category Title"
                  />
                  <EventsData
                    image_url={CardsImage}
                    money={true}
                    title="Category Title"
                  />
            
                  <div className="font-poppins text-[16px] font-[600] flex justify-between text-[#19191A] w-[33.32%]">
                    <h2>30 Apr 2024</h2>
                    <p>Monday</p>
                  </div>
                  <hr className="my-[4px] border-[0.5px] border-[#8E8E8E]" />
                  <EventsData
                    image_url={CardsImage}
                    money={true}
                    title="Category Title"
                  />
                  <EventsData image_url={CardsImage} title="Category Title" />
                  <EventsData image_url={CardsImage} title="Category Title" />
                  <div className="font-poppins text-[16px] font-[600] flex justify-between text-[#19191A] w-[33.32%]">
                    <h2>30 Apr 2024</h2>
                    <p>Monday</p>
                  </div>
                  <hr className="my-[4px] border-[0.5px] border-[#8E8E8E]" />
             
                  <EventsData
                    image_url={CardsImage}
                    money={true}
                    title="Category Title"
                  />
                  <EventsData
                    image_url={CardsImage}
                    money={true}
                    title="Category Title"
                  />
                
                  <EventsData
                    image_url={CardsImage}
                    money={true}
                    title="Category Title"
                  />
                  <EventsData
                    image_url={CardsImage}
                    money={true}
                    title="Category Title"
                  />
            
              <EventsData
                    image_url={CardsImage}
                    money={true}
                    title="Category Title"
                  />
                  
                  <EventsData image_url={CardsImage} title="Category Title" />
                  <EventsData image_url={CardsImage} title="Category Title" />
                  <EventsData
                    image_url={CardsImage}
                    money={true}
                    title="Category Title"
                  />

                  <div className="font-poppins text-[16px] font-[600] flex justify-between text-[#19191A] w-[33.32%]">
                    <h2>30 Apr 2024</h2>
                    <p>Monday</p>
                  </div>
                  <hr className="my-[10px] border-[1px] border-[#8E8E8E]" />

                  <EventsData
                    image_url={CardsImage}
                    money={true}
                    title="Category Title"
                  />
                  <EventsData
                    image_url={CardsImage}
                    money={true}
                    title="Category Title"
                  />
                  <EventsData
                    image_url={CardsImage}
                    money={true}
                    title="Category Title"
                  />
                </div>
            ) : acountViewType === "savedHosts" ? (
              <div className="mt-[20px] flex flex-col flex-wrap h-[510px] w-[100%] gap-[10px] overflow-x-hidden"
              ref={scrollContainerRef}
              >
                <div className="font-poppins text-[16px] font-[600] flex justify-between text-[#19191A] w-[33.32%]">
                  <h2>06 Apr 2024</h2>
                  <p>Monday</p>
                </div>
                <hr className="my-[4px] border-[0.5px] border-[#8E8E8E]" />
                  <EventsData
                    image_url={CardsImage}
                    money={true}
                    title="Host Name"
                  />
                  <EventsData image_url={CardsImage} title="Host Name" />
                  <EventsData image_url={CardsImage} title="Host Name" />
                  <EventsData
                    image_url={CardsImage}
                    money={true}
                    title="Host Name"
                  />
                  <EventsData
                    image_url={CardsImage}
                    money={true}
                    title="Host Name"
                  />
                 

                 <EventsData
                    image_url={CardsImage}
                    money={true}
                    title="Host Name"
                  />
                    <EventsData
                    image_url={CardsImage}
                    money={true}
                    title="Host Name"
                  />
                  <EventsData
                    image_url={CardsImage}
                    money={true}
                    title="Host Name"
                  />
              
                  <div className="font-poppins text-[16px] font-[600] flex justify-between text-[#19191A] w-[33.32%]">
                    <h2>30 Apr 2024</h2>
                    <p>Monday</p>
                  </div>
                  <hr className="my-[4px] border-[0.5px] border-[#8E8E8E]" />
                  <EventsData
                    image_url={CardsImage}
                    money={true}
                    title="Host Name"
                  />
                  <EventsData image_url={CardsImage} title="Host Name" />
                  <EventsData image_url={CardsImage} title="Host Name" />
                  <EventsData
                    image_url={CardsImage}
                    money={true}
                    title="Host Name"
                  />
                  <EventsData
                    image_url={CardsImage}
                    money={true}
                    title="Host Name"
                  />
                  <div className="font-poppins text-[16px] font-[600] flex justify-between text-[#19191A] w-[33.32%]">
                    <h2>30 Apr 2024</h2>
                    <p>Monday</p>
                  </div>
                  <hr className="my-[10px] border-[1px] border-[#8E8E8E]" />

                  <EventsData
                    image_url={CardsImage}
                    money={true}
                    title="Host Name"
                  />
                  <EventsData
                    image_url={CardsImage}
                    money={true}
                    title="Host Name"
                  />
               
                  <div className="font-poppins text-[16px] font-[600] flex justify-between text-[#19191A] w-[33.32%]">
                    <h2>30 Apr 2024</h2>
                    <p>Monday</p>
                  </div>
                  <hr className="my-[4px] border-[0.5px] border-[#8E8E8E]" />
                  <EventsData
                    image_url={CardsImage}
                    money={true}
                    title="Host Name"
                  />
                  <EventsData image_url={CardsImage} title="Host Name" />
                  <EventsData image_url={CardsImage} title="Host Name" />
                  <EventsData
                    image_url={CardsImage}
                    money={true}
                    title="Host Name"
                  />

                  <div className="font-poppins text-[16px] font-[600] flex justify-between text-[#19191A] w-[33.32%]">
                    <h2>30 Apr 2024</h2>
                    <p>Monday</p>
                  </div>
                  <hr className="my-[10px] border-[1px] border-[#8E8E8E]" />

                  <EventsData
                    image_url={CardsImage}
                    money={true}
                    title="Host Name"
                  />
                  <EventsData
                    image_url={CardsImage}
                    money={true}
                    title="Host Name"
                  />
                  <EventsData
                    image_url={CardsImage}
                    money={true}
                    title="Host Name"
                  />
                </div>
            
            ) : acountViewType === "accountDetails" ? (
              <div className="bg-[#F9F9F9] rounded-[8px] h-[865px] mt-[10px] p-4">
                <div className="flex mb-[15px] w-[100%]  gap-[30px]">
                  <div className="w-[50%] flex gap-[10px] flex-col">
                    <label
                      htmlFor=""
                      className="font-poppins font-[600] text-[#19191A] text-[16px] leading-[28px] flex justify-between"
                    >
                      Profile Name
                      <img src={editIcon} />
                    </label>
                    <input
                      type="text"
                      placeholder="Profile Name"
                      style={{ padding: "17.5px 14px" }}
                      className="border-[1px] border-[#9491A1] w-[100%] rounded-md placeholder:font-poppins placeholder:text-[#737791] placeholder:text-[14px] placeholder:font-[500] font-poppins text-[15px] focus:outline-none"
                    />
                  </div>
                  <div className="w-[50%] flex gap-[10px] flex-col">
                    <label
                      htmlFor=""
                      className="font-poppins font-[600] text-[#19191A] text-[16px] leading-[28px] flex justify-between"
                    >
                      Email
                      <img src={editIcon} />
                    </label>
                    <input
                      type="text"
                      placeholder="Public Email"
                      style={{ padding: "17.5px 14px" }}
                      className="border-[1px] border-[#9491A1] w-[100%] rounded-md placeholder:font-poppins placeholder:text-[#737791] placeholder:text-[14px] placeholder:font-[500] font-poppins text-[15px] focus:outline-none"
                    />
                  </div>
                </div>
                <div className="flex mb-[15px] w-[100%] gap-[30px]">
                  <div className="w-[50%] flex gap-[10px] flex-col">
                    <label
                      htmlFor=""
                      className="font-poppins font-[600] text-[#19191A] text-[16px] leading-[28px] flex justify-between"
                    >
                      Account Type
                    </label>
                    <CustomSelect title="select account type" />
                  </div>
                  <div className="w-[50%] flex gap-[10px] flex-col">
                    <label
                      htmlFor=""
                      className="font-poppins font-[600] text-[#19191A] text-[16px] leading-[28px] flex justify-between"
                    >
                      Country
                    </label>
                    <CustomSelect title="Select" />
                  </div>
                </div>
                <div className="w-[48.5%] flex gap-[10px] flex-col">
                  <label
                    htmlFor=""
                    className="font-poppins font-[600] text-[#19191A] text-[16px] leading-[28px] flex justify-between"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    style={{ padding: "17.5px 14px" }}
                    className="border-[1px] border-[#9491A1] w-[100%] rounded-md placeholder:font-poppins placeholder:text-[#737791] placeholder:text-[14px] placeholder:font-[500] font-poppins text-[15px] focus:outline-none"
                  />
                </div>
                <div className="flex w-[48.5%] justify-end mt-[10px]">
                  <button
                    className="font-poppins text-[#ff0000] text-[14px] leading-[28px] font-[500] hover:underline"
                    onClick={showModal}
                  >
                    Change Password
                  </button>
                </div>
                <div className="mt-[15px]">
                  <Checkbox className="font-poppins text-[#404040] text-[18px] font-[400] mb-[15px] leading-[24px]">
                    Receive email notifications for new events in the area{" "}
                  </Checkbox>
                </div>
                <div className="">
                  <Checkbox className="font-poppins text-[#404040] text-[18px] font-[400] mb-[15px] leading-[24px]">
                    Receive email notifications for new featured events{" "}
                  </Checkbox>
                </div>
                <div className="">
                  <Checkbox className="font-poppins text-[#404040] text-[18px] font-[400] mb-[15px] leading-[24px]">
                    Receive email notifications for new events from saved hosts{" "}
                  </Checkbox>
                </div>
              </div>
            ) : (
              "hello"
            )}
          </div>
        </div>
        <Modal
          title="Change Password"
          open={isModalChange}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
          width={750}
        >
          <div className="w-[100%] flex gap-[10px] flex-col mt-[35px] ">
            <label
              htmlFor=""
              className="font-poppins font-[600] text-[#19191A] text-[16px] leading-[28px] flex justify-between"
            >
              Current Password
            </label>
            <input
              type="text"
              placeholder="enter current password"
              style={{ padding: "17.5px 14px" }}
              className="border-[1px] border-[#9491A1] w-[100%] rounded-[4px] placeholder:font-poppins placeholder:text-[#737791] placeholder:text-[17.72px] placeholder:font-[300] font-poppins text-[15px] focus:outline-none"
            />
          </div>
          <div className="flex w-[100%] justify-end mt-[10px] mb-[15px]">
            <button
              className="font-poppins text-[#ff0000] text-[14px] leading-[28px] font-[500] hover:underline"
              onClick={showModal}
            >
              Forget Password
            </button>
          </div>
          <div className="w-[100%] flex gap-[10px] flex-col mb-[15px] ">
            <label
              htmlFor=""
              className="font-poppins font-[600] text-[#19191A] text-[16px] leading-[28px] flex justify-between"
            >
              New Password
            </label>
            <input
              type="text"
              placeholder="new password"
              style={{ padding: "17.5px 14px" }}
              className="border-[1px] border-[#9491A1] w-[100%] rounded-[4px] placeholder:font-poppins placeholder:text-[#737791] placeholder:text-[17.72px] placeholder:font-[300] font-poppins text-[15px] focus:outline-none"
            />
          </div>
          <div className="w-[100%] flex gap-[10px] flex-col mb-[15px] ">
            <label
              htmlFor=""
              className="font-poppins font-[600] text-[#19191A] text-[16px] leading-[28px] flex justify-between"
            >
              Confirm Password
            </label>
            <input
              type="text"
              placeholder="confirm Password"
              style={{ padding: "17.5px 14px" }}
              className="border-[1px] border-[#9491A1] w-[100%] rounded-[4px] placeholder:font-poppins placeholder:text-[#737791] placeholder:text-[17.72px] placeholder:font-[300] font-poppins text-[15px] focus:outline-none"
            />
          </div>
          <div className="flex w-[100%] justify-end gap-[20px] my-[20px]">
            <button
              className="w-[180px] h-[56px] border-[1px] border-[#ff0000] text-[#ff0000] font-poppins font-[500] text-[16px] leading-[12px] rounded-[12px] hover:scale-[1.1] ease-in-out duration-300"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              className="w-[180px] h-[56px] border-[1px] border-[#ff0000] bg-[#ff0000] text-[#fff] font-poppins font-[500] text-[16px] leading-[12px] rounded-[12px] hover:scale-[1.1] ease-in-out duration-300"
              onClick={handleOk}
            >
              Save
            </button>
          </div>
        </Modal>
        <Modal
          title="Forgot Password"
          open={isModalForget}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
          width={750}
        >
          <div className="w-[100%] flex gap-[10px] flex-col mt-[35px] ">
          <p className="font-manrope font-[400] text-[18px] text-[#404040]">Enter the email address you used when you joined and we’ll send you the instructions to reset your password.</p>

          </div>
          <div className="w-[100%] flex gap-[10px] flex-col mt-[35px] ">
            <label
              htmlFor=""
              className="font-poppins font-[600] text-[#19191A] text-[16px] leading-[28px] flex justify-between"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="enter Email"
              style={{ padding: "17.5px 14px" }}
              className="border-[1px] border-[#9491A1] w-[100%] rounded-[4px] placeholder:font-poppins placeholder:text-[#737791] placeholder:text-[17.72px] placeholder:font-[300] font-poppins text-[15px] focus:outline-none"
            />
          </div>
         
          <div className="flex w-[100%] justify-end gap-[20px] my-[20px]">
            <button
              className="w-[180px] h-[56px] border-[1px] border-[#ff0000] bg-[#ff0000] text-[#fff] font-poppins font-[500] text-[16px] leading-[12px] rounded-[12px] hover:scale-[1.1] ease-in-out duration-300"
              onClick={handleOk}
            >
              Submit
            </button>
          </div>
        </Modal>
      </div>
    </PageLayout>
  );
};

export default SavedEvents;
