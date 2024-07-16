import React from "react";
import { Link, useLocation } from "react-router-dom";
import HomeIconActive from "../../Assets/homeActive.svg";
import HomeIcon from "../../Assets/homeIcon.svg";
import notifyIcon from "../../Assets/notifyIcon.svg"
import notifyActive from "../../Assets/notifyActive.svg"
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
import accountdetail from "../../Assets/accountDetailsIcon.svg"
import accountActive from "../../Assets/accountActive.svg"

const SideBarNavigation = ({ sidebarCollapsed, toggleSidebar, role }) => {
  const location = useLocation();
   
  const handleSignOut =()=>{
    if(localStorage.getItem("role")){
      localStorage.removeItem("role");
      Navigate("/host-login")
    }
  }

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
              to="/host-protocol"
              className={`nav-link ${
                location.pathname === "/host-protocol" ? "active" : ""
              }`}
            >
              <div className="w-[20%]">
                {location.pathname === "/host-protocol" ? (
                  <img src={HomeIconActive} width={22} />
                ) : (
                  <img src={HomeIcon} width={22} />
                )}
              </div>
              <span
                className={`w-[80%] font-inter text-[14px] leading-[21px] ${
                  location.pathname === "/host-protocol" ? "text-[#fff] font-[700]" : "font-[500]"
                }`}
              >
                Home
              </span>
            </Link>
            <Link
              to="/host-protocol/notification"
              className={`nav-link ${
                location.pathname === "/host-protocol/notification"
                  ? "active"
                  : ""
              }`}
            >
              <div className="w-[20%]">
                {location.pathname === "/host-protocol/notification" ? (
                  <img src={notifyActive} width={22} />
                ) : (
                  <img src={notifyIcon} width={22} />
                )}
              </div>
              <div
                className={`w-[80%] font-inter text-[14px] leading-[21px] flex items-center gap-[15px] ${
                  location.pathname === "/host-protocol/notification"
                    ? "text-[#fff] font-[700]"
                    : "font-[500]"
                }`}
              >
                <p>Notifications</p> <span className="w-[10px] h-[10px] bg-[#FF0000] rounded-full"></span>
              </div>
            </Link>
            <Link
              to="/host-protocol/create-event"
              className={`nav-link ${
                location.pathname === "/host-protocol/create-event"
                  ? "active"
                  : ""
              }`}
            >
              <div className="w-[20%]">
                {location.pathname === "/host-protocol/create-event" ? (
                  <img src={CreateIconActive} width={28} />
                ) : (
                  <img src={CreateIcon} width={28} />
                )}
              </div>
              <span
                className={`w-[80%] font-inter text-[14px] leading-[21px] ${
                  location.pathname === "/host-protocol/create-event"
                    ?  "text-[#fff] font-[700]" : "font-[500]"
                }`}
              >
                Create Events
              </span>
            </Link>
            <Link
              to="/host-protocol/manage-events"
              className={`nav-link ${
                location.pathname === "/host-protocol/manage-events"
                  ? "active"
                  : ""
              }`}
            >
              <div className="w-[20%]">
                {location.pathname === "/host-protocol/manage-events" ? (
                  <img src={ManageIconActive} width={28} />
                ) : (
                  <img src={ManageIcon} width={28} />
                )}
              </div>
              <span
                className={`w-[80%] font-inter text-[14px] leading-[21px] ${
                  location.pathname === "/host-protocol/manage-events"
                    ?  "text-[#fff] font-[700]" : "font-[500]"
                }`}
              >
                Manage Events
              </span>
            </Link>
            <Link
              to="/host-protocol/profile-settings"
              className={`nav-link ${
                location.pathname === "/host-protocol/profile-settings"
                  ? "active"
                  : ""
              }`}
            >
              <div className="w-[20%]">
                {location.pathname === "/host-protocol/profile-settings" ? (
                  <img src={profileIconActive} width={22} />
                ) : (
                  <img src={profileIcon} width={22} />
                )}
              </div>
              <span
                className={`w-[80%] font-inter text-[14px] leading-[21px] ${
                  location.pathname === "/host-protocol/profile-settings"
                    ?  "text-[#fff] font-[700]" : "font-[500]"
                }`}
              >
                Edit your profile
              </span>
            </Link>
            <Link
              to="/host-protocol/subscription"
              className={`nav-link ${
                location.pathname === "/host-protocol/subscription"
                  ? "active"
                  : ""
              }`}
            >
              <div className="w-[20%]">
                {location.pathname === "/host-protocol/subscription" ? (
                  <img src={SubscriptionsActive} width={22} />
                ) : (
                  <img src={Subscriptions} width={22} />
                )}
              </div>
              <span
                className={`w-[80%] font-inter text-[14px] leading-[21px] ${
                  location.pathname === "/host-protocol/subscription"
                    ?  "text-[#fff] font-[700]" : "font-[500]"
                }`}
              >
                Subscription
              </span>
            </Link>
            <Link
              to="/host-protocol/account-details"
              className={`nav-link ${
                location.pathname === "/host-protocol/account-details"
                  ? "active"
                  : ""
              }`}
            >
              <div className="w-[20%]">
                {location.pathname === "/host-protocol/account-details" ? (
                  <img src={accountActive} width={22} />
                ) : (
                  <img src={accountdetail} width={22} />
                )}
              </div>
              <span
                className={`w-[80%] font-inter text-[14px] leading-[21px] ${
                  location.pathname === "/host-protocol/account-details"
                    ?  "text-[#fff] font-[700]" : "font-[500]"
                }`}
              >
                Account Details
              </span>
            </Link>
            <Link
              onClick={()=>handleSignOut()}
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
                className={`w-[80%] font-inter text-[14px] leading-[21px] ${
                  location.pathname === "/sign-out" ? "text-[#fff] font-[700]" : "font-[500]"
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
                className={`w-[80%] font-inter text-[14px] leading-[21px] ${
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
                className={`w-[80%] font-inter text-[14px] leading-[21px] ${
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
                className={`w-[80%] font-inter text-[14px] leading-[21px] ${
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
                className={`w-[80%] font-inter text-[14px] leading-[21px] ${
                  location.pathname === "/sign-out" ? "text-[#fff]" : ""
                }`}
              >
                Sign Out
              </span>
            </Link>
          </>
        )}

      </div>
    </div>
  );
};

export default SideBarNavigation;
