import React from "react";
import check from "../../Assets/checkIcon.svg";
import close from "../../Assets/closeIcon.svg";
import deleteIcon from "../../Assets/deleteIcon.svg";

const NotificationCard = (props) => {
  return (
    <div className="flex w-[100%] gap-[20px] items-center justify-between p-[20px] border-b-[1px] border-b-[#F5F5F5]">
      <div className="w-[67px] h-[67px] rounded-full">
        <img src={props.image_url} alt="" className="w-[100%] h-[100%] object-cover rounded-full"/>
      </div>
      <div className="w-[60%]">
        <p className="font-inter font-[500] text-[14px] leading-[21px]">{props.title}</p>
      </div>
      {props.isDelete 
      ?
      <div className="w-[20%] flex gap-[20px] items-center justify-end">
        <div className="flex flex-col items-center justify-center gap-[5px] cursor-pointer">
          <img src={deleteIcon} alt="" srcset="" />
        </div>
      </div> 
      : 
      <div className="w-[20%] flex gap-[20px] items-center justify-end">
        <div className="flex flex-col items-center justify-center gap-[5px] cursor-pointer">
          <img src={check} alt="" srcset="" />
          <p className="font-inter font-[500] text-[14px] leading-[21px] text-[#828282]">Accept</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-[5px] cursor-pointer">
          <img src={close} alt="" srcset="" />
          <p className="font-inter font-[500] text-[14px] leading-[21px] text-[#828282]">Decline</p>
        </div>
      </div>}
    </div>
  );
};

export default NotificationCard;
