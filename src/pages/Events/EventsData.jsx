import React from 'react'
import HeartIcon from "../../Assets/HeartIcon.svg"
import MoneyIcon from "../../Assets/MoneyIcon.svg"
import {useNavigate} from "react-router-dom"

const EventsData = (props) => {
  const navigate = useNavigate();
  const handleNavigation = ()=>{
    console.log("called navigation")
    navigate(
      '/event-details',
      {
        state: {
         title: props.title,
         eventImage : props.image_url
        }
      }
    )
  }

  return (
    <div className='w-[300px] h-[67px] flex border-[2px] border-[#F5F5F5] overflow-hidden rounded-lg  items-center relative cursor-pointer hover:scale-[1.02] ease-in-out duration-300' onClick={handleNavigation}>
      <div className="w-[21%]">
        <img src={props.image_url} alt="" className='w-[60px]' />
      </div>
      <div className="w-[74%] ml-[6px] ">
        <h2 className='font-[500] font-inter text-[14px] text-[#000] leading-[21px]'>{props.title}</h2>
        <div className='font-inter text-[#828282] font-[400] text-[12px] leading-[18px] flex justify-between w-[70%]'>
          <p>Venue</p> <p>(X.Xmi)</p></div>
        <p className='font-inter text-[#828282] font-[400] text-[12px] leading-[18px]'>Day, dd Mmm, hh:mm-hh:mm</p>
      </div>
      <div className="absolute right-[7px] top-[7px] text-[#828282]">
        <img src={HeartIcon} alt="" className='cursor-pointer'/>
      </div>
    </div>
  )
}

export default EventsData
