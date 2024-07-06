import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
   const location = useLocation();
   const navigate = useNavigate();
  return (
    <div className='fixed top-0 left-0 right-0 bg-[#fff] z-[999] ' style={{boxShadow:'0px 4px 4px 0px #00000026'}}>
      <div className="flex justify-between items-center px-4 w-[100%] container">
        <div className="text-[#ff0000] font-poppins text-[26px] leading-[80px] font-[600] w-[20%] cursor-pointer" onClick={()=> navigate('/')}>Logo</div>
        <div className="flex gap-[50px] items-center w-[60%] justify-center">
          <Link to="/events" className={location.pathname ==="/events" ? 'font-poppins text-[#ff0000] leading-[16px] text-[16px] font-[500]' : 'font-poppins text-[#000] leading-[16px] text-[16px] font-[500] hover:text-[#ff0000] ease-in-out duration-300'}>
            Events
          </Link>
          <Link to="/host-protocol" className={location.pathname ==="/host-protocol" ? 'font-poppins text-[#ff0000] leading-[16px] text-[16px] font-[500]' : 'font-poppins text-[#000] leading-[16px] text-[16px] font-[500] hover:text-[#ff0000] ease-in-out duration-300'}>
            Host Portal
          </Link>
          <Link to="/my-account" className={location.pathname ==="/my-account" ? 'font-poppins text-[#ff0000] leading-[16px] text-[16px] font-[500]' : 'font-poppins text-[#000] leading-[16px] text-[16px] font-[500] hover:text-[#ff0000] ease-in-out duration-300'}>
            My Account
          </Link>
        </div>
        <div className="flex gap-[20px] w-[20%]">
          <button className='px-4 py-2 border-[1px] border-[#ff0000] font-poppins text-[#ff0000] leading-[16px] text-[16px] font-[400] rounded-md' onClick={()=>navigate('/login')}>LOGIN</button>
          <button className='px-4 py-2 border-[1px] bg-[#ff0000]  font-poppins text-[#ffff] leading-[16px] text-[16px] font-[400] rounded-md' onClick={()=>navigate('/signup')}>SIGNUP</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
