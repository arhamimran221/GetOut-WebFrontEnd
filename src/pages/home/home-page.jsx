import React, { useEffect, useState } from "react";
import Navbar from "../../components/header/Navbar";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import styles from "./home-page.module.scss";
import GlobalSearch from "../../components/global-search/global-search";
import PageLayout from "../layouts/page-layout";
import ParticipantsIcon from "../../Assets/home/participants-icon.svg";
import SponsorsIcon from "../../Assets/home/sponsors-icon.png";
import VenueIcon from "../../Assets/home/venue-icon.svg";
import TotaleventsIcon from "../../Assets/home/totalevents-icon.svg";
import HomeCard from "../../components/cards/home-card";

const HomePage = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <PageLayout>
      {/* Hero */}
      <div className={styles.hero_bg_wrapper}>
        <div className="container">
          <div className="row">
            <div className="col-lg-11 mx-auto">
              <div
                className="py-[150px] w-[95%] m-auto flex flex-col justify-center items-center"
              >
                <h1 className="font-raleway font-[600] text-[70px] leading-[80px] text-[#fff] mb-[20px]">
                  Discover & Promote <br /> Upcomming Event
                </h1>
                <GlobalSearch></GlobalSearch>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div
            className="col mx-auto"
            style={{ paddingTop: "80px", paddingBottom: "80px" }}
          >
            <div>
              <h1 className="mb-5 text-center font-raleway font-[600] text-[40px] leading-[47px] w-[1000px] m-auto">
                <span className="text-[#ff0000]"> GetOut</span> makes it easier to
                uncover what is happening in you area.
              </h1>
              <div className="d-flex flex-wrap justify-between m-auto gap-[10px] w-[90%]">
                <HomeCard></HomeCard>
                <HomeCard></HomeCard>
                <HomeCard></HomeCard>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div className={styles.banner}>
          <div className="container w-[90%]">
            <div className="flex justify-between items-center">
              <div className="">
                <div
                  className={`${styles.hero_content} d-flex flex-column justify-content-center align-items-center`}
                >
                  <img
                    src={ParticipantsIcon}
                    className={styles.category_icon}
                  ></img>
                  <h1 className={styles.hero_subtitle}>
                    {" "}
                    <CountUp
                      start={0}
                      end={1256}
                      duration={5}
                      delay={0}
                      className="font-poppins font-[600] text-[32px] leading-[24px]"
style={{fontSize:'32px'}}                      />{" "}
                    <br />{" "}
                    <span className="font-poppins font-[600] text-[24px] leading-[24px] text-[#fff] mt-[10px]">Participants</span>
                  </h1>
                </div>
              </div>
              <div className="">
                <div
                  className={`${styles.hero_content} d-flex flex-column justify-content-center align-items-center`}
                >
                  <img
                    src={TotaleventsIcon}
                    className={styles.category_icon}
                  ></img>
                  <h1 className={styles.hero_subtitle}>
                    <CountUp
                      start={0}
                      end={1256}
                      duration={5}
                      delay={0}
                      className="font-poppins font-[600] text-[32px] leading-[24px]"
style={{fontSize:'32px'}}                      />{" "}
                    <br />{" "}
                    <span className="font-poppins font-[600] text-[24px] leading-[24px] text-[#fff]">Total Events</span>
                  </h1>
                </div>
              </div>
              <div className="">
                <div
                  className={`${styles.hero_content} d-flex flex-column justify-content-center align-items-center`}
                >
                  <img src={VenueIcon} className={styles.category_icon}></img>
                  <h1 className={styles.hero_subtitle}>
                    {" "}
                    <CountUp
                      start={0}
                      end={1256}
                      duration={5}
                      delay={0}
                      className="font-poppins font-[600] text-[32px] leading-[24px]"
style={{fontSize:'32px'}}                      />{" "}
                    <br /> <span className="font-poppins font-[600] text-[24px] leading-[24px] text-[#fff]">Venues</span>
                  </h1>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </PageLayout>
  );
};

export default HomePage;
