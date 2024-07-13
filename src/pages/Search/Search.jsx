import React, { useState } from "react";
import PageLayout from "../layouts/page-layout";
import EventsCategory from "../Events/EventsCategory";
import CardsImage from "../../Assets/cardImage.png";
import EventsData from "../Events/EventsData";
import HostCard from "../Events/HostCard";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchPerformed, setSearchPerformed] = useState(false);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setSearchPerformed(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSearchPerformed(true);
  };

  return (
    <PageLayout>
      <div className="container">
        <h2 className="text-center mt-[135px] font-poppins text-[#ff0000] font-[600] text-[60px] leading-[28px]">
          Uncover More
        </h2>
        <p className="font-poppins font-[600] text-[16px] leading-[28px] text-[#000] text-center my-[30px]">
          Uncover the events that are taking place in your area
        </p>
        <form
          className="w-[55%] flex gap-[20px] m-auto"
          onSubmit={handleFormSubmit}
        >
          <div className="w-[85%]">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center p-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-[#D9D9D9]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block py-3 pl-[40px] pr-[20px] text-sm w-[100%] font-poppins text-[#828282] border-[1px] border-[#D9D9D9] rounded-[8px] focus:outline-[#ff0000]"
                placeholder="Tell us your location"
                required
                value={searchTerm}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <button
            className="p-3 bg-[#ff0000] rounded-[8px] text-[#fff] w-[15%]"
            type="submit"
          >
            Search
          </button>
        </form>
        <div className={searchPerformed ? "mt-[20px]" : "mt-[20px] mb-[300px]"}>
          {searchPerformed && (
            <div className=" mb-[50px]">
              {searchTerm.toLowerCase() === "event" ? (
                <div className="w-[26%] m-auto ">
                  <h2 className="my-[10px] font-inter font-[600] text-[16px] leading-[24px] text-[#000]">
                    Events
                  </h2>
                  <div className="flex flex-col gap-[10px]">
                    <EventsData image_url={CardsImage} title="Event Title" />
                    <EventsData image_url={CardsImage} title="Event Title" />
                    <EventsData image_url={CardsImage} title="Event Title" />
                    </div>
                  <h2 className="my-[10px] font-inter font-[600] text-[16px] leading-[24px] text-[#000]">
                    Host
                  </h2>
                  <div className="">
                    <HostCard
                      image_url={CardsImage}
                      title="Host Name"
                      desc="Host description talking about host doing host things"
                    />
                    <HostCard
                      image_url={CardsImage}
                      title="Host Name"
                      desc="Host description talking about host doing host things"
                    />
                    <HostCard
                      image_url={CardsImage}
                      title="Host Name"
                      desc="Host description talking about host doing host things"
                    />
                  </div>
                </div>
              ) : (
                <p className="font-inter font-[400] text-[16px] leading-[24px] text-[#000]">
                  We couldn’t find any results that match your that search..
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default Search;
