import React, { useRef, useState } from "react";
import location from "../../Assets/edit_location_alt.svg"
import DownIcom from "../../Assets/arrowdownEvent.svg";
import { Dropdown, Space, Typography } from "antd";
import MapIcon from "../../Assets/MapIcon.svg";
import DateIcon from "../../Assets/Date.svg";
import SkipIcon from "../../Assets/SkipIcon.svg";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import EventsData from "./EventsData";
import CardsImage from "../../Assets/cardImage.png";
import EventsSlider from "./EventsSlider";
import EventsCategory from "./EventsCategory";
import PageLayout from "../layouts/page-layout";
import "./Events.css";
import EventsDetails from "./EventsDetails";
import Host from "./Host";
import write from "../../Assets/WriteIcon.svg";
import { ArrowBack } from "@mui/icons-material";
import Back from "../../Assets/backIcon.svg";
import arrowLeftEvent from "../../Assets/leftIconEvent.svg";
import arrowLeft from "../../Assets/arrowLeft.svg";
import arrowRightEvent from "../../Assets/RightIconEvent.svg";
import arrowRight from "../../Assets/arrowRight.svg";
import todayIcon from "../../Assets/todayIcon.svg"

const Events = () => {
  const [selectedCat, setSelectedCat] = useState(null);
  const [isHost, setIsHost] = useState(false);
  const [mapView, setMapView] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const toggleShowAll = () => setShowAll(!showAll);
  const initialVisibleCategories = 6;
  const scrollContainerRef = useRef(null);


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
  const eventCategory = [
    {
      id: 0,
      heading: "Get",
      descrip:
        "Live music, theatre, live sports, comedy nights, cinema...",
      cat_image: CardsImage,
      span_color: "#FF0000",
      span_title: "Entertained"
    },
    {
      id: 1,
      heading: "Get",
      descrip:
        "Live music, theatre, live sports, comedy nights, cinema...",
      cat_image: CardsImage,
      span_color: "#FF0000",
      span_title: "Entertained"
    },
    {
      id: 2,
      heading: "Get",
      descrip:
        "Live music, theatre, live sports, comedy nights, cinema...",
      cat_image: CardsImage,
      span_color: "#FF0000",
      span_title: "Entertained"
    },
    {
      id: 3,
      heading: "Get",
      descrip:
        "Live music, theatre, live sports, comedy nights, cinema...",
      cat_image: CardsImage,
      span_color: "#FF0000",
      span_title: "Entertained"
    },
    {
      id: 4,
      heading: "Get",
      descrip:
        "Live music, theatre, live sports, comedy nights, cinema...",
      cat_image: CardsImage,
      span_color: "#FF0000",
      span_title: "Entertained"
    },
    {
      id: 5,
      heading: "Get",
      descrip:
        "Live music, theatre, live sports, comedy nights, cinema...",
      cat_image: CardsImage,
      span_color: "#FF0000",
      span_title: "Entertained"
    },
    {
      id: 6,
      heading: "Get",
      descrip:
        "Live music, theatre, live sports, comedy nights, cinema...",
      cat_image: CardsImage,
      span_color: "#FF0000",
      span_title: "Entertained"
    },
    {
      id: 7,
      heading: "Get",
      descrip:
        "Live music, theatre, live sports, comedy nights, cinema...",
      cat_image: CardsImage,
      span_color: "#FF0000",
      span_title: "Entertained"
    },


  ];

  const handleCategoryClick = (id, cat_image) => {
    setSelectedCat(cat_image);
  };

  const handleHostClick = (status) => {
    if (status) {
      setIsHost(true);
      setSelectedCat(null);
    }
  };

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
  
  return (
    <PageLayout>
      <div className="container ">
        {(isHost || selectedCat) && (
          <div className="bg-[#F9F9F9] rounded-lg border-[1px] border-[#E4E4E4] px-4 py-2 w-[96.5%] mt-[100px] mx-4 flex gap-[10px] mb-[10px]">
            <div className="w-[25%] flex justify-between items-center">
              <div className="">
                <h4 className="font-poppins text-[#19191A] font-[600] text-[16px]">
                  South Kensigton{" "}
                </h4>
                <p className="font-poppins text-[#767C8C] font-[500] text-[14px] mt-[5px]">
                  0.7 ml{" "}
                </p>
              </div>
              <div>
                <img src={write} alt="" width={30} />
              </div>
            </div>
            <div className="border-[1px] border-[#E4E4E4] h-[60px]"></div>
            <div className="w-[75%] flex justify-between items-center">
              <div>
                <img src={Back} alt="" width={30} />
              </div>
              <div className="flex gap-[10px]">
                <img src={arrowLeft} alt="" onClick={scrollHorizontallyLeft}  className="cursor-pointer  hover:scale-[1.2] ease-in-out duration-300"/>
                <img src={arrowRight} alt="" onClick={scrollHorizontallyRight} className="cursor-pointer  hover:scale-[1.2] ease-in-out duration-300"/>
              </div>
            </div>
          </div>
        )}
        <div
          className={`flex w-[100%] px-4 py-2 gap-[10px] ${
            isHost || selectedCat ? "my-[0px]" : "my-[100px]"
          } items-start1`}
        >
          <div className="w-[26%] bg-[#F5F5F5] px-[10px] py-[10px] rounded-lg h-fit	 ">
            <h2 className="font-inter font-[600] text-[18px] leading-[24px]">
              Contents
            </h2>
            <p className="text-[#828282] font-inter text-[14px] leading-[21px] font-[400]">Filter your results by category</p>
            {/* className={`overflow-y-auto ${showAll ? '' : 'max-h-[745px]'}`} */}
            <div>
              {eventCategory
                .map((cat, ind) => (
                  <div key={ind}>
                    <EventsCategory
                      title={cat.heading}
                      descrip={cat.descrip}
                      cat_image={cat.cat_image}
                      span_color={cat.span_color}
                      span_title={cat.span_title}
                      onClick={() => handleCategoryClick(cat.id, cat.cat_image)}
                    />
                  </div>
                ))}
            </div>
          </div>
          <div className="w-[74%] ">
            {!isHost && !selectedCat && (
              <div className="flex w-[100%] gap-[10px] bg-[#F5F5F5]  rounded-lg px-3 py-2">
                <div className="bg-[#fff] px-3 rounded-lg w-[40%] flex py-2">
                  <div className="flex justify-between items-center w-[100%]">
                    <div className="w-[65%] flex justify-between items-center">
                      <p className="font-inter font-[400] text-[14px] text-[#828282] leading-[24px] flex items-center gap-[10px]">
                        <img src={location} alt="" srcset="" width={14}/>Location
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
                          <div className="font-inter font-[400] text-[14px] text-[#828282] leading-[24px]">
                          Radius
                            </div>
                            <img src={DownIcom} width={10} />
                          </Space>
                        </div>
                      </Dropdown>
                    </div>
                  </div>
                </div>
                <div className="flex w-[70%] gap-[10px] items-center">
                  <button
                    className="w-[30%] flex items-center justify-center gap-[10px] font-inter font-[300] text-[#000] text-[16px]"
                    onClick={() => setMapView(true)}
                  >
                    <img src={MapIcon} alt="" />
                    Map View
                  </button>
                  <button
                    className="w-[30%] flex  items-center justify-center gap-[10px] font-inter font-[300] text-[#000] text-[16px]"
                  >
                    <img src={todayIcon} alt="" />
                    Today
                  </button>
                  <button className="w-[30%] flex  items-center justify-center gap-[10px] font-inter font-[300] text-[#000] text-[16px]">
                    <img src={DateIcon} alt="" />
                    Find Date
                  </button>
                  <button className="w-[34%] flex  items-center justify-center gap-[10px] font-inter font-[300] text-[#000] text-[16px]">
                    <img src={SkipIcon} alt="" />
                    Skip 5 days
                  </button>
                </div>
                <div className="flex gap-[15px] ml-[20px] items-center">
                  <img src={arrowLeftEvent} alt="" onClick={scrollHorizontallyLeft} className="cursor-pointer h-[20px] w-[10px] hover:scale-[1.2] ease-in-out duration-300"/>
                  <img src={arrowRightEvent} alt="" onClick={scrollHorizontallyRight} className="cursor-pointer h-[20px] w-[10px] hover:scale-[1.2] ease-in-out duration-300"/>
                </div>
              </div>
            )}
            {selectedCat ? (
              <EventsDetails
                selectedCat={selectedCat}
                handleHostClick={handleHostClick}
              />
            ) : isHost ? (
              <Host />
            ) : mapView ? (
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
            ) : (
             
              <div
                className="mt-[10px]  gap-[10px] flex flex-col h-[610px] flex-wrap overflow-x-hidden"
                ref={scrollContainerRef}
              >
                <div className="font-inter text-[16px] font-[500] flex justify-between text-[#000] w-[33.32%] mt-[25px]">
                  <h2>06 Apr 2024</h2>
                  <p className="text-[#D9D9D9] font-[700]">Monday</p>
                </div>
                <hr className="mb-[4px] border-[5px] border-[#D9D9D9]" />
                <EventsData
                  image_url={CardsImage}
                  title="Category Title"
                />
                <EventsData
                  image_url={CardsImage}
                  title="Category Title"
                />
                <EventsData
                  image_url={CardsImage}
                  title="Category Title"
                />
                <div className="font-inter text-[16px] font-[500] flex justify-between text-[#000] w-[33.32%] mt-[25px]">
                  <h2>06 Apr 2024</h2>
                  <p className="text-[#D9D9D9] font-[700]">Monday</p>
                </div>
                <hr className="mb-[4px] border-[5px] border-[#D9D9D9]" />
                <EventsData image_url={CardsImage} title="Category Title" />
                <EventsData image_url={CardsImage} title="Category Title" />

                <EventsData image_url={CardsImage} title="Category Title" />
                <EventsData
                  image_url={CardsImage}
                  title="Category Title"
                />
                <EventsData image_url={CardsImage} title="Category Title" />
                <EventsSlider />
                <EventsData image_url={CardsImage} title="Category Title" />

                <EventsData image_url={CardsImage} title="Category Title" />
                <div className="font-inter text-[16px] font-[500] flex justify-between text-[#000] w-[33.32%] mt-[25px]">
                  <h2>06 Apr 2024</h2>
                  <p className="text-[#D9D9D9] font-[700]">Monday</p>
                </div>
                <hr className="mb-[4px] border-[5px] border-[#D9D9D9]" />
                <EventsData image_url={CardsImage} title="Category Title" />
                <EventsData image_url={CardsImage} title="Category Title" />
                <EventsData image_url={CardsImage} title="Category Title" />
                <EventsData image_url={CardsImage} title="Category Title" />
                <div className="font-inter text-[16px] font-[500] flex justify-between text-[#000] w-[33.32%] mt-[25px]">
                  <h2>06 Apr 2024</h2>
                  <p className="text-[#D9D9D9] font-[700]">Monday</p>
                </div>
                <hr className="mb-[4px] border-[5px] border-[#D9D9D9]" />
                <EventsData image_url={CardsImage} title="Category Title" />
                <EventsData image_url={CardsImage} title="Category Title" />
                <EventsData image_url={CardsImage} title="Category Title" />
                <EventsData image_url={CardsImage} title="Category Title" />
                <EventsData image_url={CardsImage} title="Category Title" />
                <EventsData image_url={CardsImage} title="Category Title" />
                <EventsData image_url={CardsImage} title="Category Title" />
              </div>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Events;
