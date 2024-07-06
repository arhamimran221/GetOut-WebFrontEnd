import React from 'react'
import Meetup from "../../Assets/MeetupImage.png";
import EyeImage from "../../Assets/EyeIcon.svg";
import floppy from "../../Assets/saveFloppy.svg";
import CalendarIcon from "../../Assets/calendar.svg";
import eyeIcon from "../../Assets/actionEye.svg";
import deleteIcon from "../../Assets/actiondelete.svg";
import { LeftOutlined, RightOutlined } from '@ant-design/icons';


const ManageEvent = () => {
  return (
    <div>
      <h2 className="font-raleway font-[600] text-[35px] leading-[75px]">
      Manage Events
      </h2>
      <p className="text-[#767C8C] font-manrope font-[500] text-[14px] leading-[28.86px] mt-[-10px]">
      Manage your Events
      </p>
      <div
        className="p-4 bg-[#ffff] rounded-md w-[100%] mt-[10px]"
        style={{ boxShadow: "0px 0px 13px 0px #523F690D" }}
      >
        <div className="border-[1px] border-[#E4E4E4] px-4 py-2 bg-[#F9F9F9] rounded-lg flex w-[100%] items-center gap-[10px]">
            <h4 className='w-[78%] font-poppins text-[#19191A] font-[600] text-[18px] leading-[24px]'>My Events</h4> <div className='border-[1px] border-[#E4E4E4] h-[40px]'></div><h4 className='w-[22%]font-poppins text-[#19191A] font-[600] text-[18px] leading-[24px]'>Action</h4>
        </div>
        <div className="flex w-[100%] items-center gap-[10px]">
        <div className="flex items-center gap-[10px] border-b-[#E4E4E4] border-b-[1px] py-[15px] w-[78%]">
            <div className="w-[20%]">
              <img src={Meetup} alt="" />
            </div>
            <div className="w-[75%]">
              <h3 className="font-poppins font-[500] text-[16px] leading-[27px] text-[#19191A]">
                International Online Meetup 2020
              </h3>
              <p className="font-poppins font-[400] text-[12px] leading-[22px] text-[#FF0000]">
                Medan, Indonesia
              </p>
              <p className="font-poppins text-[#404040] font-[400] text-[12px] leading-[18px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad mini
              </p>
            </div>
            <div className="w-[30%] flex justify-between items-center">
              <div className="flex flex-col justify-center items-center gap-[10px]">
                <img
                  src={EyeImage}
                  alt=""
                  className="bg-[#FAFBFC] p-2 rounded-lg"
                />
                <p className="font-poppins text-[#19191A] font-[500] text-[12px] leading-[22.5px]">
                  22k
                </p>
              </div>
              <div className="flex flex-col justify-center items-center gap-[10px]">
                <img
                  src={floppy}
                  alt=""
                  className="bg-[#FAFBFC] p-2 rounded-lg"
                />
                <p className="font-poppins text-[#19191A] font-[500] text-[12px] leading-[22.5px]">
                  350
                </p>
              </div>
              <div className="flex flex-col justify-center items-center gap-[10px]">
                <img
                  src={CalendarIcon}
                  alt=""
                  className="bg-[#FAFBFC] p-2 rounded-lg"
                />
                <p className="font-poppins text-[#19191A] font-[500] text-[12px] leading-[22.5px]">
                  24 June 2020
                </p>
              </div>
            </div>
          </div>
          <div className='border-[1px] border-[#E4E4E4] h-[60px]'></div>
          <div className="w-[22%] flex gap-[10px] items-center">
            <button className='flex gap-[10px] items-center px-3 py-3 bg-[#0D894F1A] text-[#0D894F] font-poppins rounded-lg text-[14px] leading-[20px] font-[500]'>
                <img src={eyeIcon} alt="" width={30}/>View
            </button>
            <button className='flex gap-[10px] items-center px-3 py-3 bg-[#FF33331A] text-[#FF3333] font-poppins rounded-lg text-[14px] leading-[20px] font-[500]'>
                <img src={deleteIcon} alt="" width={20} />Delete
            </button>
          </div>
        </div>
        <div className="flex w-[100%] items-center gap-[10px]">
        <div className="flex items-center gap-[10px] border-b-[#E4E4E4] border-b-[1px] py-[15px] w-[78%]">
            <div className="w-[20%]">
              <img src={Meetup} alt="" />
            </div>
            <div className="w-[75%]">
              <h3 className="font-poppins font-[500] text-[16px] leading-[27px] text-[#19191A]">
                International Online Meetup 2020
              </h3>
              <p className="font-poppins font-[400] text-[12px] leading-[22px] text-[#FF0000]">
                Medan, Indonesia
              </p>
              <p className="font-poppins text-[#404040] font-[400] text-[12px] leading-[18px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad mini
              </p>
            </div>
            <div className="w-[30%] flex justify-between items-center">
              <div className="flex flex-col justify-center items-center gap-[10px]">
                <img
                  src={EyeImage}
                  alt=""
                  className="bg-[#FAFBFC] p-2 rounded-lg"
                />
                <p className="font-poppins text-[#19191A] font-[500] text-[12px] leading-[22.5px]">
                  22k
                </p>
              </div>
              <div className="flex flex-col justify-center items-center gap-[10px]">
                <img
                  src={floppy}
                  alt=""
                  className="bg-[#FAFBFC] p-2 rounded-lg"
                />
                <p className="font-poppins text-[#19191A] font-[500] text-[12px] leading-[22.5px]">
                  350
                </p>
              </div>
              <div className="flex flex-col justify-center items-center gap-[10px]">
                <img
                  src={CalendarIcon}
                  alt=""
                  className="bg-[#FAFBFC] p-2 rounded-lg"
                />
                <p className="font-poppins text-[#19191A] font-[500] text-[12px] leading-[22.5px]">
                  24 June 2020
                </p>
              </div>
            </div>
          </div>
          <div className='border-[1px] border-[#E4E4E4] h-[60px]'></div>
          <div className="w-[22%] flex gap-[10px] items-center">
            <button className='flex gap-[10px] items-center p-3 bg-[#0D894F1A] text-[#0D894F] font-poppins rounded-lg text-[14px] leading-[20px] font-[500]'>
                <img src={eyeIcon} alt="" width={30}/>View
            </button>
            <button className='flex gap-[10px] items-center p-3 bg-[#FF33331A] text-[#FF3333] font-poppins rounded-lg text-[14px] leading-[20px] font-[500]'>
                <img src={deleteIcon} alt="" width={20} />Delete
            </button>
          </div>
        </div>
        <div className="flex w-[100%] items-center gap-[10px]">
        <div className="flex items-center gap-[10px] border-b-[#E4E4E4] border-b-[1px] py-[15px] w-[78%]">
            <div className="w-[20%]">
              <img src={Meetup} alt="" />
            </div>
            <div className="w-[75%]">
              <h3 className="font-poppins font-[500] text-[16px] leading-[27px] text-[#19191A]">
                International Online Meetup 2020
              </h3>
              <p className="font-poppins font-[400] text-[12px] leading-[22px] text-[#FF0000]">
                Medan, Indonesia
              </p>
              <p className="font-poppins text-[#404040] font-[400] text-[12px] leading-[18px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad mini
              </p>
            </div>
            <div className="w-[30%] flex justify-between items-center">
              <div className="flex flex-col justify-center items-center gap-[10px]">
                <img
                  src={EyeImage}
                  alt=""
                  className="bg-[#FAFBFC] p-2 rounded-lg"
                />
                <p className="font-poppins text-[#19191A] font-[500] text-[12px] leading-[22.5px]">
                  22k
                </p>
              </div>
              <div className="flex flex-col justify-center items-center gap-[10px]">
                <img
                  src={floppy}
                  alt=""
                  className="bg-[#FAFBFC] p-2 rounded-lg"
                />
                <p className="font-poppins text-[#19191A] font-[500] text-[12px] leading-[22.5px]">
                  350
                </p>
              </div>
              <div className="flex flex-col justify-center items-center gap-[10px]">
                <img
                  src={CalendarIcon}
                  alt=""
                  className="bg-[#FAFBFC] p-2 rounded-lg"
                />
                <p className="font-poppins text-[#19191A] font-[500] text-[12px] leading-[22.5px]">
                  24 June 2020
                </p>
              </div>
            </div>
          </div>
          <div className='border-[1px] border-[#E4E4E4] h-[60px]'></div>
          <div className="w-[22%] flex gap-[10px] items-center">
            <button className='flex gap-[10px] items-center p-3 bg-[#0D894F1A] text-[#0D894F] font-poppins rounded-lg text-[14px] leading-[20px] font-[500]'>
                <img src={eyeIcon} alt="" width={30}/>View
            </button>
            <button className='flex gap-[10px] items-center p-3 bg-[#FF33331A] text-[#FF3333] font-poppins rounded-lg text-[14px] leading-[20px] font-[500]'>
                <img src={deleteIcon} alt="" width={20} />Delete
            </button>
          </div>
        </div>
        <div className="flex justify-between my-[20px] items-center">
            <div className="font-poppins font-[500] text-[#667085] text-[14px] leading-[20px]">Showing 1-10 from 100</div>
            <div className='flex gap-[10px] items-cenetr'>
                <button className='p-2 bg-[#FF914D1A] rounded-lg'><LeftOutlined className='text-[#FF0000]'/></button>
                <button className='w-[40px] bg-[#FF914D1A] rounded-lg text-[#ff0000] font-poppins hover:bg-[#FF914D] hover:text-[#fff]'>1</button>
                <button className='w-[40px] bg-[#FF914D1A] rounded-lg text-[#ff0000] font-poppins hover:bg-[#FF914D] hover:text-[#fff]'>2</button>
                <button className='w-[40px] bg-[#FF914D1A] rounded-lg text-[#ff0000] font-poppins hover:bg-[#FF914D] hover:text-[#fff]'>3</button>
                <button className='p-2 bg-[#FF914D1A] rounded-lg'><RightOutlined className='text-[#FF0000]'/></button>

            </div>
        </div>
      </div>
    </div>
  )
}

export default ManageEvent
