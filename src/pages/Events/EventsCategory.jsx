import React from 'react'

const EventsCategory = (props) => {
  return (
    <div className="w-[100%] hover:scale-[1.02] ease-in-out duration-300" onClick={props.onClick}>
    <div className="flex w-[100%] gap-[5px] items-center my-[10px] last:mb-0 border-b-[1px] border-[#E4E4E4]  cursor-pointer">
      <img src={props.cat_image} className="w-[60px] h-[61px] pb-[4px]"/>
      <div className="w-[78%]">
        <h2 className="font-poppins font-[500] text-[14px] pb-[3px]">
          {props.title}
        </h2>
        <p className="font-poppins text-[#404040] text-[12px] pb-[10px]  font-[300]">
          {props.descrip}
        </p>
      </div>
    </div>
 
  </div>
  )
}

export default EventsCategory
