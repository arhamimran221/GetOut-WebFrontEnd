import React, { useRef, useState } from "react";
import Image1 from "../../Assets/CategoryImg1.svg";
import Image2 from "../../Assets/CategoryImg2.svg";
import Image3 from "../../Assets/CategoryImg3.svg";
import Image4 from "../../Assets/CategoryImg4.svg";
import Image5 from "../../Assets/CategoryImg5.svg";
import Image6 from "../../Assets/CategoryImg6.svg";
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
      heading: "Category Title",
      descrip:
        "Lorem Ipsum is simply dummy data text of the printing and types-",
      cat_image: Image1,
    },
    {
      id: 1,
      heading: "Category Title",
      descrip:
        "Lorem Ipsum is simply dummy data text of the printing and types-",
      cat_image: Image2,
    },
    {
      id: 2,
      heading: "Category Title",
      descrip:
        "Lorem Ipsum is simply dummy data text of the printing and types-",
      cat_image: Image3,
    },
    {
      id: 3,
      heading: "Category Title",
      descrip:
        "Lorem Ipsum is simply dummy data text of the printing and types-",
      cat_image: Image4,
    },
    {
      id: 4,
      heading: "Category Title",
      descrip:
        "Lorem Ipsum is simply dummy data text of the printing and types-",
      cat_image: Image5,
    },
    {
      id: 5,
      heading: "Category Title",
      descrip:
        "Lorem Ipsum is simply dummy data text of the printing and types-",
      cat_image: Image6,
    },
    {
      id: 6,
      heading: "Category Title",
      descrip:
        "Lorem Ipsum is simply dummy data text of the printing and types-",
      cat_image: Image3,
    },
    {
      id: 7,
      heading: "Category Title",
      descrip:
        "Lorem Ipsum is simply dummy data text of the printing and types-",
      cat_image: Image3,
    },
    {
      id: 8,
      heading: "Category Title",
      descrip:
        "Lorem Ipsum is simply dummy data text of the printing and types-",
      cat_image: Image3,
    },
    {
      id: 9,
      heading: "Category Title",
      descrip:
        "Lorem Ipsum is simply dummy data text of the printing and types-",
      cat_image: Image3,
    },
    {
      id: 10,
      heading: "Category Title",
      descrip:
        "Lorem Ipsum is simply dummy data text of the printing and types-",
      cat_image: Image3,
    },
    {
      id: 11,
      heading: "Category Title",
      descrip:
        "Lorem Ipsum is simply dummy data text of the printing and types-",
      cat_image: Image3,
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
          <div className="w-[26%] bg-[#F9F9F9] px-[6px] py-[4px] rounded-lg border-[1px] border-[#E4E4E4] h-fit	 ">
            <h2 className="font-poppins font-[600] text-[18px] leading-[24px]">
              Categories
            </h2>
            <hr className="my-[10px] border-[#8E8E8E]" />
            {/* className={`overflow-y-auto ${showAll ? '' : 'max-h-[745px]'}`} */}
            <div>
              {eventCategory
                .slice(
                  0,
                  showAll ? eventCategory.length : initialVisibleCategories
                )
                .map((cat, ind) => (
                  <div key={ind}>
                    <EventsCategory
                      title={cat.heading}
                      descrip={cat.descrip}
                      cat_image={cat.cat_image}
                      onClick={() => handleCategoryClick(cat.id, cat.cat_image)}
                    />
                  </div>
                ))}
            </div>
            <div className="w-[100%] flex justify-center p-[11px]">
              {/* onClick={toggleShowAll} */}
              <a href="#">
                <button className="text-[#ff0000] font-poppins text-[14px]">
                  {showAll ? "Show less" : "Show all"}
                </button>
              </a>
            </div>
          </div>
          <div className="w-[74%] ">
            {!isHost && !selectedCat && (
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
                <div className="flex w-[40%] gap-[10px] items-center">
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
                className="mt-[10px]  gap-[10px] flex flex-col h-[510px] flex-wrap overflow-x-hidden"
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
                <div className="font-poppins text-[16px] font-[600] flex justify-between text-[#19191A]">
                  <h2>07 Apr 2024</h2>
                  <p>Tuesday</p>
                </div>
                <EventsData image_url={CardsImage} title="Category Title" />
                <EventsData image_url={CardsImage} title="Category Title" />

                <EventsData image_url={CardsImage} title="Category Title" />
                <EventsData
                  image_url={CardsImage}
                  money={true}
                  title="Category Title"
                />
                <EventsData image_url={CardsImage} title="Category Title" />
                <EventsSlider />
                <EventsData image_url={CardsImage} title="Category Title" />

                <EventsData image_url={CardsImage} title="Category Title" />
                <div className="font-poppins text-[16px] font-[600] flex justify-between text-[#19191A]">
                  <h2>09 Apr 2024</h2>
                  <p>Thursday</p>
                </div>
                <EventsData image_url={CardsImage} title="Category Title" />
                <EventsData image_url={CardsImage} title="Category Title" />
                <EventsData image_url={CardsImage} title="Category Title" />
                <EventsData image_url={CardsImage} title="Category Title" />
                <div className="font-poppins text-[16px] font-[600] flex justify-between text-[#19191A] w-[33.32%]">
                  <h2>06 Apr 2024</h2>
                  <p>Monday</p>
                </div>
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

// <div className="mt-[20px] flex w-[100%] gap-[10px] overflow-x-auto">
//   <div className="w-[33%]">
//     <div className="font-poppins text-[16px] font-[600]  flex justify-between text-[#19191A]">
//       <h2>06 Apr 2024</h2>
//       <p>Monday</p>
//     </div>
//     <hr className="my-[10px] border-[0.5px] border-[#8E8E8E]" />
//     <EventsData image_url={CardsImage} money={true} title="Category Title"/>
//     <EventsData image_url={CardsImage} title="Category Title"/>
//     <EventsData image_url={CardsImage} title="Category Title"/>
//     <EventsData image_url={CardsImage} money={true} title="Category Title"/>
//     <EventsData image_url={CardsImage} money={true} title="Category Title"/>
//     <EventsSlider />
//   </div>
//   <div className="w-[33%]">
//     <EventsData image_url={CardsImage} title="Category Title"/>
//     <EventsData image_url={CardsImage} money={true} title="Category Title"/>
//     <EventsData image_url={CardsImage} title="Category Title"/>
//     <EventsData image_url={CardsImage} title="Category Title"/>
//     <div className="font-poppins text-[18px] font-[600]  leading-[24px] flex justify-between text-[#19191A] mt-[9px]">
//       <h2>30 Apr 2024</h2>
//       <p>Monday</p>
//     </div>
//     <hr className="my-[6px] border-[0.5px] border-[#8E8E8E]" />
//     <EventsData image_url={CardsImage} title="Category Title"/>
//     <EventsData image_url={CardsImage} title="Category Title"/>
//     {/* <EventsData image_url={CardsImage} title="Category Title"/> */}
//     <EventsData image_url={CardsImage} money={true} title="Category Title"/>
//   </div>
//   <div className="w-[33%]">
//     <EventsData image_url={CardsImage} title="Category Title"/>
//     <EventsData image_url={CardsImage} title="Category Title"/>
//     <EventsSlider />

//     <EventsData image_url={CardsImage} title="Category Title"/>
//     <div className="font-poppins text-[18px] font-[600]  leading-[24px] flex justify-between text-[#19191A]">
//       <h2>30 Apr 2024</h2>
//       <p>Monday</p>
//     </div>
//     <hr className="my-[10px] border-[0.5px] border-[#8E8E8E]" />
//     <EventsData image_url={CardsImage} title="Category Title"/>
//     <EventsData image_url={CardsImage} title="Category Title"/>
//   </div>
// </div>
