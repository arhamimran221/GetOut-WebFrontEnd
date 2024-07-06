import React from 'react'
import HeartIcon from "../../Assets/HeartIcon.svg"
import MoneyIcon from "../../Assets/MoneyIcon.svg"

const HostCard = (props) => {
  return (
    <div className='w-[100%] flex border-[1px] border-[#E4E4E4] overflow-hidden rounded-lg mb-[20px] items-center p-2 hover:scale-[1.02] cursor-pointer gap-[10px]' onClick={props.onClick}>
      <div className="w-[20.5%]">
        <img src={props.image_url} alt="" className='rounded-lg w-[80px] h-[71px] pb-[4px] '/>
      </div>
      <div className="w-[80.5%] my-[5px]">
        <h2 className='font-poppins font-[500] text-[14px] pb-[3px]'>Host 1 ( Creator )</h2>
        <p className='font-poppins text-[#404040] text-[12px] font-[300] '>Lorem Ipsum is simply dummy text</p>
        <p className='font-poppins text-[#404040] text-[12px] pb-[10px]  font-[300]'> of the printing and typesetting  </p>
      </div>

    </div>
  )
}

export default HostCard
