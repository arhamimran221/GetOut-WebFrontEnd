import React,{useState} from 'react';
import "./MainpageLayout.css";
import MainPageHeader from "./MainPageHeader";
import SideBarNavigation from "./SideBarNavigation";
import { Link } from 'react-router-dom';

const MainpageLayout = ({role, children}) => {
  console.log(role)

  return (
    <div className="container mx-auto">
      <div className="">
        <MainPageHeader />
      </div>
      <div className="db-content-body mt-[10px]">

        <div className="w-[18%]">
          <SideBarNavigation  role={role ? role : "admin"}/>
        </div>
        <div className="w-[82%] ">
            <div className="db-content bg-[#F9FAFB] rounded-lg p-4 h-[85vh] overflow-auto">{children}</div>
        </div>
        <div className="db-copyright-navigation">
          <div className="copyright-sec">© 2019. All rights reserved. Made with love by <span><Link to={"/"}>DrCodeX Technologies</Link></span> </div>
        </div>
      </div>
    </div>
  );
};

export default MainpageLayout;
