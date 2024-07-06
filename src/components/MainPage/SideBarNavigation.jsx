import React from "react";
import { Link, useLocation } from "react-router-dom";
import HomeIconActive from "../../Assets/homeActive.svg";
import HomeIcon from "../../Assets/homeIcon.svg";
import CreateIcon from "../../Assets/createEvent.svg";
import CreateIconActive from "../../Assets/createEventActive.svg";
import ManageIcon from "../../Assets/manageEvent.svg";
import ManageIconActive from "../../Assets/manageEventActive.svg";
import profileIcon from "../../Assets/profileIcon.svg";
import profileIconActive from "../../Assets/profileIconActive.svg";
import Subscriptions from "../../Assets/subs-icon.svg";
import SubscriptionsActive from "../../Assets/subsIconActive.svg";
import signOut from "../../Assets/logOut-Icon.svg";
import crownIcon from "../../Assets/crownIcon.svg";
import hostDbIcon from "../../Assets/hostDbIcon.svg";

const SideBarNavigation = ({ sidebarCollapsed, toggleSidebar, role }) => {
  const location = useLocation();
  console.log(role);

  return (
    <div
      className={`sidebarnavigation-main mt-[18px] ${
        sidebarCollapsed ? "collapsed" : ""
      }`}
    >
      <div className="side-bar-navigate ">
        {role === "admin" ? (
          <>
            <Link
              to="/events-dashboard"
              className={`nav-link ${
                location.pathname === "/events-dashboard" ? "active" : ""
              }`}
            >
              <div className="w-[20%]">
                {location.pathname === "/events-dashboard" ? (
                  <img src={HomeIconActive} width={22} />
                ) : (
                  <img src={HomeIcon} width={22} />
                )}
              </div>
              <span
                className={`w-[80%] font-poppins text-[14px] font-[500] font-poppins ${
                  location.pathname === "/events-dashboard" ? "text-[#fff]" : ""
                }`}
              >
                Home
              </span>
            </Link>
            <Link
              to="/events-dashboard/create-event"
              className={`nav-link ${
                location.pathname === "/events-dashboard/create-event"
                  ? "active"
                  : ""
              }`}
            >
              <div className="w-[20%]">
                {location.pathname === "/events-dashboard/create-event" ? (
                  <img src={CreateIconActive} width={22} />
                ) : (
                  <img src={CreateIcon} width={22} />
                )}
              </div>
              <span
                className={`w-[80%] font-poppins text-[14px] font-[500] font-poppins ${
                  location.pathname === "/events-dashboard/create-event"
                    ? "text-[#fff]"
                    : ""
                }`}
              >
                Create Events
              </span>
            </Link>
            <Link
              to="/events-dashboard/manage-events"
              className={`nav-link ${
                location.pathname === "/events-dashboard/manage-events"
                  ? "active"
                  : ""
              }`}
            >
              <div className="w-[20%]">
                {location.pathname === "/events-dashboard/manage-events" ? (
                  <img src={ManageIconActive} width={22} />
                ) : (
                  <img src={ManageIcon} width={22} />
                )}
              </div>
              <span
                className={`w-[80%] font-poppins text-[14px] font-[500] font-poppins ${
                  location.pathname === "/events-dashboard/manage-events"
                    ? "text-[#fff]"
                    : ""
                }`}
              >
                Manage Events
              </span>
            </Link>
            <Link
              to="/events-dashboard/profile-settings"
              className={`nav-link ${
                location.pathname === "/events-dashboard/profile-settings"
                  ? "active"
                  : ""
              }`}
            >
              <div className="w-[20%]">
                {location.pathname === "/events-dashboard/profile-settings" ? (
                  <img src={profileIconActive} width={22} />
                ) : (
                  <img src={profileIcon} width={22} />
                )}
              </div>
              <span
                className={`w-[80%] font-poppins text-[14px] font-[500] font-poppins ${
                  location.pathname === "/events-dashboard/profile-settings"
                    ? "text-[#fff]"
                    : ""
                }`}
              >
                Profile Setting
              </span>
            </Link>
            <Link
              to="/events-dashboard/subscription"
              className={`nav-link ${
                location.pathname === "/events-dashboard/subscription"
                  ? "active"
                  : ""
              }`}
            >
              <div className="w-[20%]">
                {location.pathname === "/events-dashboard/subscription" ? (
                  <img src={SubscriptionsActive} width={22} />
                ) : (
                  <img src={Subscriptions} width={22} />
                )}
              </div>
              <span
                className={`w-[80%] font-poppins text-[14px] font-[500] font-poppins ${
                  location.pathname === "/events-dashboard/subscription"
                    ? "text-[#fff]"
                    : ""
                }`}
              >
                Subscription
              </span>
            </Link>
            <Link
              to="/sign-out"
              className={`nav-link ${
                location.pathname === "/sign-out" ? "active" : ""
              }`}
            >
              <div className="w-[20%]">
                {location.pathname === "/sign-out" ? (
                  <img src={HomeIconActive} width={22} />
                ) : (
                  <img src={signOut} width={22} />
                )}
              </div>
              <span
                className={`w-[80%] font-poppins text-[14px] font-[500] font-poppins ${
                  location.pathname === "/sign-out" ? "text-[#fff]" : ""
                }`}
              >
                Sign Out
              </span>
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/dashboard"
              className={`nav-link ${
                location.pathname === "/dashboard" ? "active" : ""
              }`}
            >
              <div className="w-[20%]">
                {location.pathname === "/dashboard" ? (
                  <img src={HomeIconActive} width={22} />
                ) : (
                  <img src={HomeIcon} width={22} />
                )}
              </div>
              <span
                className={`w-[80%] font-poppins text-[14px] font-[500] font-poppins ${
                  location.pathname === "/dashboard" ? "text-[#fff]" : ""
                }`}
              >
                Dashboard
              </span>
            </Link>
            <Link
              to="/dashboard/host-manage"
              className={`nav-link ${
                location.pathname === "/dashboard/host-manage" ? "active" : ""
              }`}
            >
              <div className="w-[20%]">
                {location.pathname === "/dashboard/host-manage" ? (
                  <img src={CreateIconActive} width={22} />
                ) : (
                  <img src={hostDbIcon} width={22} />
                )}
              </div>
              <span
                className={`w-[80%] font-poppins text-[14px] font-[500] font-poppins ${
                  location.pathname === "/dashboard/host-manage"
                    ? "text-[#fff]"
                    : ""
                }`}
              >
                Host Management
              </span>
            </Link>
            <Link
              to="/dashboard/manage-events"
              className={`nav-link ${
                location.pathname === "/dashboard/manage-events" ? "active" : ""
              }`}
            >
              <div className="w-[20%]">
                {location.pathname === "/dashboard/manage-events" ? (
                  <img src={ManageIconActive} width={22} />
                ) : (
                  <img src={ManageIcon} width={22} />
                )}
              </div>
              <span
                className={`w-[80%] font-poppins text-[14px] font-[500] font-poppins ${
                  location.pathname === "/dashboard/manage-events"
                    ? "text-[#fff]"
                    : ""
                }`}
              >
                Events Management
              </span>
            </Link>
            <Link
              to="/sign-out"
              className={`nav-link ${
                location.pathname === "/sign-out" ? "active" : ""
              }`}
            >
              <div className="w-[20%]">
                {location.pathname === "/sign-out" ? (
                  <img src={HomeIconActive} width={22} />
                ) : (
                  <img src={signOut} width={22} />
                )}
              </div>
              <span
                className={`w-[80%] font-poppins text-[14px] font-[500] font-poppins ${
                  location.pathname === "/sign-out" ? "text-[#fff]" : ""
                }`}
              >
                Sign Out
              </span>
            </Link>
          </>
        )}

        <div className="bg-[#ff0000] p-2 rounded-lg flex flex-col gap-[10px] items-center mt-[25px]">
          <div className="bg-[#ff0000] p-2 rounded-full mt-[-40px]">
            <img
              src={crownIcon}
              width={40}
              className="border-[1px] border-[#fff] rounded-full p-1"
            />
          </div>
          <h2 className="font-poppins text-[#fff] text-[22px] leading-[32px]">
            Events
          </h2>
          <p className="font-poppins font-[500] text-center text-[#fff] text-[16px]">
            Get access to the unlimited Events
          </p>
          <button className="bg-[#fff] px-4 py-2 text-[#ff0000] rounded-lg font-poppins text-[14px]">
            Upgrade Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBarNavigation;
