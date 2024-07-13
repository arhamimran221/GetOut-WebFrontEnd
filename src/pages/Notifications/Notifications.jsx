import React from "react";
import NotificationCard from "./NotificationCard";
import CardsImage from "../../Assets/cardImage.png";

const Notifications = () => {
  return (
    <div>
      <div className="">
        <h2 className="font-raleway font-[600] text-[32px] leading-[40px] text-[#404580]">
          Notifications
        </h2>
        <p className="text-[#828282] font-manrope font-[500] text-[16px] leading-[21.86px] mt-[2px]">
          Keep up to date with your events
        </p>
      </div>
      <div className="flex justify-between items-center w-[560px] mx-auto mt-[30px] bg-[#fff] p-[10px] rounded-[8px]">
        <div className="">
          <NotificationCard
            image_url={CardsImage}
            title="Host name has requested to be an associated host for your event “Event Name”"
          />
         <NotificationCard
            image_url={CardsImage}
            title="Host name has requested to be an associated host for your event “Event Name”"
          />
          <NotificationCard
            image_url={CardsImage}
            title="Host name has requested to be an associated host for your event “Event Name”"
          />
          <NotificationCard
            image_url={CardsImage}
            title="Host name has requested to be an associated host for your event “Event Name”"
          />
          <NotificationCard
            image_url={CardsImage}
            isDelete={true}
            title="User name has bookmarked your event  “Event name”"
          />
          <NotificationCard
            image_url={CardsImage}
            title="Host name has requested to be an associated host for your event “Event Name”"
          />
        </div>
      </div>
    </div>
  );
};

export default Notifications;
