import React,{useState} from 'react';
import "./MainpageLayout.css";
import MainPageHeader from "./MainPageHeader";
import SideBarNavigation from "./SideBarNavigation";
import { Link } from 'react-router-dom';
import PageLayout from '../../pages/layouts/page-layout';

const MainpageLayout = ({role, children}) => {

  return (
    <PageLayout>
    <div className="container mx-auto mt-[90px]">
      <div className="db-content-body mt-[10px]">

        <div className="w-[18%]">
          <SideBarNavigation  role={role ? role : "admin"}/>
        </div>
        <div className="w-[82%] ">
            <div className="db-content bg-[#F5F5F5] rounded-lg p-[20px] h-[550px] overflow-y-scroll">{children}</div>
        </div>
        <div className="db-copyright-navigation">
          <div className="copyright-sec">© 2019. All rights reserved. Made with love by <span><Link to={"/"}>DrCodeX Technologies</Link></span> </div>
        </div>
      </div>
    </div>
    </PageLayout>
  );
};

export default MainpageLayout;
