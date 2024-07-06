import React from 'react'
import HeartIcon from "../../Assets/HeartIcon.svg"
import MoneyIcon from "../../Assets/MoneyIcon.svg"

const EventsData = (props) => {
  return (
    <div className='w-[33.32%] h-[72px] flex border-[1px] border-[#E4E4E4] overflow-hidden rounded-lg  '>
      <div className="w-[21%]">
        <img src={props.image_url} alt="" className='w-[60px]' />
      </div>
      <div className="w-[74%] ml-[6px] ">
        <h2 className='font-[500] font-poppins text-[14px] text-[#19191A leading-[28px]'>{props.title}</h2>
        <p className='font-poppins text-[#404040] font-[400] text-[12px] leading-[21px]'>Venue, (X.Xmi)</p>
        <p className='font-poppins text-[#404040] font-[400] text-[12px] leading-[21px]'>Day, dd Mmm, hh:mm-hh:mm</p>
      </div>
      <div className="w-[5%] mt-[10px] mr-[6px]">
        <img src={HeartIcon} alt="" className='cursor-pointer' width={16}/>
        {props.money ? <img src={MoneyIcon} alt="" className='mt-[10px] cursor-pointer'width={16} /> : ""}
      </div>
    </div>
  )
}

export default EventsData
