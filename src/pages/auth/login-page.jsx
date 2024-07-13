import React, { useState } from 'react'
import InputField from '../../components/inputs/input-field'
import styles from './auth.module.scss'
import { CiMail } from 'react-icons/ci'
import { Checkbox, Divider, FormControlLabel } from '@mui/material'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { Link, useNavigate } from 'react-router-dom'
import graph from '../../Assets/graphLogin.svg'
import publish from "../../Assets/logPublishIcon.svg"
import PageLayout from '../layouts/page-layout'
import notification from "../../Assets/notificationsSvg.svg"
import google from "../../Assets/GoogleIcon.svg"
import facebook from "../../Assets/Facebook.svg"
import login from "../../Assets/bgHostLog.jpg"

const LoginPage = () => {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [rememberMe, SetRemeberMe] = useState(false);
   const navigate = useNavigate();

   const handleSubmit = (e) => {
      e.preventDefault()
      localStorage.setItem("role" ,"role")
      navigate("/host-protocol")
   }
   return (
      <PageLayout>
         <div className="mt-[89px] container mx-auto">
            <div className="flex w-[100%]">
               <div className="w-[50%] relative">
                  <div className="absolute w-[500px] h-[100%] right-0 bg-[#FFFFFFCC] flex flex-col justify-center">
                  <div className="px-[30px]">
                  <h2 className='font-poppins font-[600] text-[32px] leading-[40px] text-[#404580]'>Reach a wider audience by uploading your events to GetOut</h2>
                  <p className='font-poppins font-[400] text-[16px] leading-[28px] mt-[20px]'>A GetOut account makes it easier for you to stay up to date with the events and hosts that you like most and make sure you don’t miss a thing.</p>
                  <div className="flex w-[100%] items-center my-[20px]">
                     <div className="w-[10%]">
                     <img src={publish} alt="" />
                     </div>
                     <p className='w-[90%] font-poppins font-[400] text-[16px] leading-[28px]'>Publish your events and manage yo</p>
                  </div>
                  <div className="flex w-[100%] items-center my-[20px]">
                     <div className="w-[10%]">
                     <img src={graph} alt="" />
                     </div>
                     <p className='w-[90%] font-poppins font-[400] text-[16px] leading-[28px]'>See how th</p>
                  </div>
                  <div className="flex w-[100%] items-center my-[20px]">
                     <div className="w-[10%]">
                     <img src={notification} alt="" />
                     </div>
                     <p className='w-[90%] font-poppins font-[400] text-[16px] leading-[28px]'>Stay up to date with your favourite hosts and their latest events</p>
                  </div>
                  </div>
                  </div>
                  <div className="">
                     <img src={login} alt="" className='w-[100%] h-[100%] object-cover'/>
                  </div>
               </div>
               <div className="w-[50%]">
                  <div className="w-[440px] mx-auto">
                  <h2 className='font-inter font-[600] text-[#404580] tracking-[-1%] text-[32px] leading-[48px] mt-[20px] text-center'>Create a GetOut account</h2>
                  <p className='font-inter font-[400] text-[16px] leading-[24px] mt-[6px] text-center'>Sign up using your credentials</p>
                  <form onSubmit={handleSubmit} action="" className='flex flex-col gap-[10px] mt-[20px]'>
                     <input type="email" required name="" id="" placeholder='email@domain.com' className='py-[8px] px-[16px] border-[1px] border-[#E0E0E0] rounded-[8px] font-inter placeholder:text-[#D9D9D9] focus:outline-[#ff0000]'/>
                     <input type="password" required name="" id="" placeholder='Password' className='py-[8px] px-[16px] border-[1px] border-[#E0E0E0] rounded-[8px] font-inter placeholder:text-[#D9D9D9] focus:outline-[#ff0000]'/>
                     <input type="password" required name="" id="" placeholder='re-enter password' className='py-[8px] px-[16px] border-[1px] border-[#E0E0E0] rounded-[8px] font-inter placeholder:text-[#D9D9D9] focus:outline-[#ff0000]'/>
                     <button type="submit" className='w-[100%] py-[8px] rounded-[8px] font-inter font-[500] text-[16px] leading-[24px] text-[#fff] bg-[#ff0000]'>Create account</button>
                     <div className="flex w-[100%] items-center gap-[10px] my-[10px]">
                        <hr className='w-[32%]'/><p className='font-inter font-[400] text-[#828282] text-[16px] leading-[24px]'>Or Continue with</p><hr className='w-[32%]'/>
                     </div>
                     <button className='py-[12px] px-[10px] bg-[#eeeeee] rounded-[8px] font-inter font-[500] text-[16px] flex gap-[150px] items-center'><img src={google} alt="" srcset="" /><p>Google</p></button>
                     <button className='py-[12px] px-[10px] bg-[#eeeeee] rounded-[8px] font-inter font-[500] text-[16px] flex gap-[145px] items-center'><img src={facebook} alt="" srcset="" width={22}/><p>Facebook</p></button>
                     <p className='font-inter text-center text-[#828282] font-[400] text-[16px] leading-[24px] my-[10px]'>By clicking continue, you agree to our <span className='text-[#000]'>Terms of Service</span> and <span className='text-[#000]'>Privacy Policy</span></p>
                  </form>
                  <hr/>
                  <div className="my-[20px] flex flex-col justify-center">
                  <Link className='font-inter font-[600] text-[#404580] text-[20px] text-center tracking-[-1%] leading-[30px]'>Already have a host account?</Link>
                  <button className='py-[12px] px-[10px] bg-[#eeeeee] rounded-[8px] font-inter font-[500] text-[16px] mt-[10px]'>Sign in here</button>
                  </div>
                  <hr/>
               </div>
               </div>
            </div>
         </div>
      </PageLayout>
   )
}

export default LoginPage
