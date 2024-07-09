import React from "react";
import styles from "./footer.module.scss";
import { NavLink, useNavigate } from "react-router-dom";
import socialImg from "../../Assets/social-icons.png";
import Facebook from "../../Assets/Facebook.svg";
import Instagram from "../../Assets/Instagram.svg";
import Linkedln from "../../Assets/Linkedin.svg";
import Pinterest from "../../Assets/Pinterest.svg";
import Twitter from "../../Assets/Twitter.svg";
import logo from "../../Assets/footerLogo.svg";
import Phone from "../../Assets/phone.svg";
import Email from "../../Assets/email.svg";
import Location from "../../Assets/location.svg";
import atIcon from "../../Assets/atIconFooter.svg";
import HomeIcon from "../../Assets/homeIconFooter.svg";

export default function footer() {
  const navigate = useNavigate();

  return (
    <div className={styles.banner}>
      <div className="container w-[90%]">
        <div className="row pb-[40px]">
          <div className="col-lg-4 mx-auto">
            <div
              className={`${styles.hero_content} d-flex flex-column justify-content-start align-items-start`}
            >
              <img src={logo} alt="" srcset="" />
              <p
                style={{ lineHeight: "21px", width: "316px" }}
                className="font-inter font-[400] text-[16px] mt-[25px]"
              >
                <span className="font-[600]">Get</span>Out is a digital
                directory of events that is updated by hosts that are looking to
                promote their event effectively, easily and affordably. Our
                unique and intuitive format enables users to easily search for
                events based on location and category.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-2 mx-auto">
            <div
              className={` ${styles.hero_content} d-flex flex-column justify-content-center  align-items-start text-light gap-[10px]`}
            >
              <ul>
                <h5 className="font-inter font-[600] text-[16px] leading-[24px] text-[#fff]">
                  Menu
                </h5>
                <li className=" mt-[10px] mb-[6px]">
                  <NavLink
                    to="#"
                    className="font-inter font-[400] text-[16px] leading-[21px] text-[#000]"
                    style={{ marginTop: "20px" }}
                  >
                    Directory
                  </NavLink>
                </li>
                <li className=" mt-[10px] mb-[6px]">
                  <NavLink
                    to="#"
                    className="font-inter font-[400] text-[16px] leading-[21px] text-[#000]"
                  >
                    Search
                  </NavLink>
                </li>
                <li className=" mt-[10px] mb-[6px]">
                  <NavLink
                    to="#"
                    className="font-inter font-[400] text-[16px] leading-[21px] text-[#000]"
                  >
                    About
                  </NavLink>
                </li>
                <li className=" mt-[10px] mb-[6px]">
                  <NavLink
                    to="#"
                    className="font-inter font-[400] text-[16px] leading-[21px] text-[#000]"
                  >
                    Pricing
                  </NavLink>
                </li>
                <li className=" mt-[10px] mb-[6px]">
                  <NavLink
                    to="/events-dashboard"
                    className="font-inter font-[400] text-[16px] leading-[21px] text-[#000]"
                  >
                    Log In
                  </NavLink>
                </li>
                <li className=" mt-[10px] mb-[6px]">
                  <NavLink
                    to="/events-dashboard"
                    className="font-inter font-[400] text-[16px] leading-[21px] text-[#000]"
                  >
                    Host Protocol
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-3 mx-auto">
            <div
              className={`${styles.hero_content} d-flex flex-column justify-content-center align-items-center`}
            >
              <ul>
                <h5 className="font-inter font-[600] text-[16px] leading-[24px] text-[#fff] mb-[10px]">
                  Social Media
                </h5>
                {/* width={28} */}
                <li>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    className="flex justify-center items-center mb-[20px] gap-[10px]"
                  >
                    {" "}
                    <img
                      src={Instagram}
                      alt="Instragram Missing"
                      className="hover:opacity-90"
                    />
                    <p>+44 7586345200</p>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    className="flex justify-center items-center mb-[20px] gap-[10px]"
                  >
                    {" "}
                    <img
                      src={Facebook}
                      alt="Facebook Missing"
                      className="hover:opacity-90"
                    />
                    <p>+44 7586345200</p>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.twitter.com/"
                    target="_blank"
                    className="flex justify-center items-center mb-[20px] gap-[10px]"
                  >
                    {" "}
                    <img
                      src={Twitter}
                      alt="Twitter Missing"
                      className="hover:opacity-90"
                    />
                    <p>+44 7586345200</p>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedln.com/"
                    target="_blank"
                    className="flex justify-center items-center mb-[20px] gap-[10px]"
                  >
                    {" "}
                    <img
                      src={Linkedln}
                      alt="Linkedin Missing"
                      className="hover:opacity-90"
                    />
                    <p>+44 7586345200</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-3 mx-auto">
            <div
              className={`${styles.hero_content} d-flex flex-column justify-content-end align-items-end`}
            >
              <ul>
                <h5 className="font-inter font-[600] text-[16px] leading-[24px] text-[#fff]">
                  Contact
                </h5>

                <li className="flex gap-[10px] mt-[20px] mb-[20px]">
                  {" "}
                  <div className="w-[10%]">
                    <img src={Phone} alt="" />{" "}
                  </div>
                  <NavLink
                    to="tel:12086964143"
                    className="font-inter font-[400] text-[16px] leading-[21px] text-[#000]"
                  >
                    +44 7586345200
                  </NavLink>
                </li>
                <li className="flex gap-[10px] mb-[20px]">
                  {" "}
                  <div className="w-[10%]">
                    <img src={atIcon} />{" "}
                  </div>
                  <NavLink
                    to="mailto:contact@event.com"
                    className="font-inter font-[400] text-[16px] leading-[21px] text-[#000]"
                  >
                    loic@getout.directory
                  </NavLink>
                </li>
                <li className="flex gap-[10px] items-center mb-[20px]">
                  <div className="w-[10%]">
                    <img src={HomeIcon} />{" "}
                  </div>
                  <NavLink
                    to="#"
                    className="font-inter font-[400] text-[16px] leading-[21px] text-[#000] w-[190px]"
                  >
                    +44 7586345200
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
