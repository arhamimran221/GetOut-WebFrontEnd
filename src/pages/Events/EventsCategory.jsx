import React from 'react'

const EventsCategory = (props) => {
  return (
    <div className="w-[100%] " onClick={props.onClick}>
    <div className="flex w-[300px] h-[67px] gap-[5px] items-center my-[9px] last:mb-0 cursor-pointer border-[2px] border-[#F5F5F5] hover:border-[2px] hover:border-[#ff0000] rounded-[8px] overflow-hidden">
      <div className="w-[22%] h-[100%]">
      <img src={props.cat_image} className="w-[100%] h-[100%] object-cover"/>
      </div>
      <div className="w-[78%]">
        <h2 className="font-inter font-[700] text-[14px] pb-[3px] leading-[21px]">
          {props.title}<span className='font-[400]' style={{color: props.span_color}}>{props.span_title}</span>
        </h2>
        <p className="font-inter text-[#828282] text-[12px]  font-[300] leading-[18px]">
          {props.descrip}
        </p>
      </div>
    </div>
 
  </div>
  )
}

export default EventsCategory
