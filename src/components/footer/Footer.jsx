import React from "react";
import styles from "./footer.module.scss";
import { NavLink, useNavigate } from "react-router-dom";
import socialImg from "../../Assets/social-icons.png";
import Facebook from "../../Assets/Facebook.svg";
import Instagram from "../../Assets/Instagram.svg";
import Linkedln from "../../Assets/Linkedin.svg";
import Pinterest from "../../Assets/Pinterest.svg";
import Twitter from "../../Assets/Twitter.svg";

import Phone from "../../Assets/phone.svg";
import Email from "../../Assets/email.svg";
import Location from "../../Assets/location.svg";

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
              <h1 className={`font-raleway text-[32px] font-[600] leading-[80px] text-[#ff0000] `}>Logo</h1>
              <p style={{ lineHeight: '21px', width: "316px"}} className="font-poppins font-[400] text-[16px]">
                At EVENTS, we cultivate a culture of growth and expansion. While
                fresh talent is added to the team regularly, existing members
                are encouraged to step beyond mental barriers and indulge in
                activities that enhance their potential even further.
              </p>
              <div className="d-flex gap-2 mt-[30px]">
                {/* width={28} */}
                <a href="https://www.facebook.com/" target="_blank">
                  {" "}
                  <img
                    src={Facebook}
                    alt="Facebook Missing"
                    className="hover:opacity-90"
                  />
                </a>
                <a href="https://www.twitter.com/" target="_blank">
                  {" "}
                  <img
                    src={Twitter}
                    alt="Twitter Missing"
                    className="hover:opacity-90"
                  />
                </a>
                <a href="https://www.linkedln.com/" target="_blank">
                  {" "}
                  <img
                    src={Linkedln}
                    alt="Linkedin Missing"
                    className="hover:opacity-90"
                  />
                </a>
                <a href="https://www.pinterest.com/" target="_blank">
                  {" "}
                  <img
                    src={Pinterest}
                    alt="Printerest Missing"
                    className="hover:opacity-90"
                  />
                </a>
                <a href="https://www.instagram.com/" target="_blank">
                  {" "}
                  <img
                    src={Instagram}
                    alt="Instragram Missing"
                    className="hover:opacity-90"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-3 mx-auto">
            <div
              className={` ${styles.hero_content} d-flex flex-column justify-content-end  align-items-end text-light gap-[10px]`}
            >
              <ul>
                <h5 className="font-manrope font-[400] text-[14px] leading-[18px] text-[#C8CCD9]">Section</h5>
                <li className=" mt-[10px] mb-[6px]">
                  <NavLink to="#" className="font-poppins font-[400] text-[16px] leading-[21px] text-[#fff]" style={{marginTop:'20px'}}>Popular Categories</NavLink>
                </li>
                <li className=" mt-[10px] mb-[6px]">
                  <NavLink to="#" className="font-poppins font-[400] text-[16px] leading-[21px] text-[#fff]">Upcoming Events</NavLink>
                </li>
                <li className=" mt-[10px] mb-[6px]">
                  <NavLink to="#" className="font-poppins font-[400] text-[16px] leading-[21px] text-[#fff]">Featured Events</NavLink>
                </li>
                <li className=" mt-[10px] mb-[6px]">
                  <NavLink to="#" className="font-poppins font-[400] text-[16px] leading-[21px] text-[#fff]">Process Guide</NavLink>
                </li>
                <li className=" mt-[10px] mb-[6px]">
                  <NavLink to="/events-dashboard" className="font-poppins font-[400] text-[16px] leading-[21px] text-[#fff]">Company Statsk</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-2 mx-auto">
            <div
              className={`${styles.hero_content} d-flex flex-column justify-content-end align-items-end`}
            >
              <ul>
                <h5 className="font-manrope font-[400] text-[14px] leading-[18px] text-[#C8CCD9]">Menu</h5>

                <li className=" mt-[10px] mb-[6px]">
                  <NavLink to="/saved-events" className="font-poppins font-[400] text-[16px] leading-[21px] text-[#fff]" >Find Event</NavLink>
                </li>
                <li className=" mt-[10px] mb-[6px]">
                  <NavLink to="#" className="font-poppins font-[400] text-[16px] leading-[21px] text-[#fff]">Create Event</NavLink>
                </li>
                <li className=" mt-[10px] mb-[6px]">
                  <NavLink to="#" className="font-poppins font-[400] text-[16px] leading-[21px] text-[#fff]">Categories</NavLink>
                </li>
                <li className=" mt-[10px] mb-[6px]">
                  <NavLink to="#" className="font-poppins font-[400] text-[16px] leading-[21px] text-[#fff]">Locations</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-3 mx-auto">
            <div
              className={`${styles.hero_content} d-flex flex-column justify-content-end align-items-end`}
            >
              <ul>
                <h5 className="font-manrope font-[400] text-[14px] leading-[18px] text-[#C8CCD9]">Contact</h5>

                <li className="flex gap-[10px] mt-[10px] mb-[10px]">
                  {" "}
                  <div className="w-[10%]">
                  <img src={Phone} alt="" />{" "}
                  </div>
                  <NavLink to="tel:12086964143" className="font-poppins font-[400] text-[16px] leading-[21px] text-[#fff]">+12086964143</NavLink>
                </li>
                <li className="flex gap-[10px] mb-[10px]">
                  {" "}
                  <div className="w-[10%]">
                  <img src={Email} />{" "}
                  </div>
                  <NavLink to="mailto:contact@event.com" className="font-poppins font-[400] text-[16px] leading-[21px] text-[#fff]">
                    contact@event.com
                  </NavLink>
                </li>
                <li className="flex gap-[10px] items-start mb-[10px]">
                  <div className="w-[10%] mt-[6px]">
                  <img src={Location} />{" "}
                  </div>
                  <NavLink to="#" className="font-poppins font-[400] text-[16px] leading-[21px] text-[#fff] w-[190px]">
                    Loop Mobile Ltd Unit 2, Southall, UB2 4AY United Kingdom
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
