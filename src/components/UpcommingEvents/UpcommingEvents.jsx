import React from 'react'

const UpcommingEvents = (props) => {
  return (
    <div className='w-[100%] flex border-[1px] border-[#E4E4E4] overflow-hidden rounded-lg mb-[15px] items-center p-2 hover:scale-[1.02] cursor-pointer gap-[10px]' onClick={props.onClick}>
    <div className="flex w-[22%] gap-[5px] items-center my-[10px] last:mb-0  border-[#E4E4E4]  cursor-pointer">
      <img src={props.image_url} alt="" className='rounded-lg w-[60px] h-[61px] pb-[4px]'/>
    </div>
    <div className="w-[78%]">
      <h2 className='font-[500] font-poppins text-[14px] text-[#19191A leading-[28px]'>Event Title</h2>
      <p className='font-poppins text-[#404040] font-[400] text-[12px] leading-[21px]'>Venue: xyz</p>
      <p className='font-poppins text-[#404040] font-[400] text-[12px] leading-[21px]'> 30 April 2024, 10:00 PM  </p>
    </div>

  </div>
  )
}

export default UpcommingEvents
