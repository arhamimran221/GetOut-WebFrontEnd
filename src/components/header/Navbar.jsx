import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from "../../Assets/GetOutLogo.svg"

const Navbar = () => {
   const location = useLocation();
   const navigate = useNavigate();
  return (
    <div className='fixed top-0 left-0 right-0 bg-[#fff] z-[9999] border-b-[3px] border-b-[#F5F5F5]' >
      <div className="flex justify-between items-end px-4 w-[100%] container py-[20px]">
        <div className="flex gap-[50px] items-center w-[30%] justify-start pb-[5px] ml-[15px]">
          <Link to="/directory" className={location.pathname ==="/directory" ? 'font-poppins text-[#ff0000] leading-[16px] text-[16px] font-[500]' : 'font-poppins text-[#000] leading-[16px] text-[16px] font-[500] hover:text-[#ff0000] ease-in-out duration-300'}>
            Directory
          </Link>
          {location.pathname.includes("/host-protocol")
          ?
          <><Link to="/host-protocol" className={location.pathname ==="/host-protocol" ? 'font-poppins text-[#ff0000] leading-[16px] text-[16px] font-[500]' : 'font-poppins text-[#000] leading-[16px] text-[16px] font-[500] hover:text-[#ff0000] ease-in-out duration-300'}>
            Host Protocol
          </Link>
          </> :
          <><Link to="/search" className={location.pathname ==="/search" ? 'font-poppins text-[#ff0000] leading-[16px] text-[16px] font-[500]' : 'font-poppins text-[#000] leading-[16px] text-[16px] font-[500] hover:text-[#ff0000] ease-in-out duration-300'}>
          Search
        </Link>
        <Link to="/about-us" className={location.pathname ==="/about-us" ? 'font-poppins text-[#ff0000] leading-[16px] text-[16px] font-[500]' : 'font-poppins text-[#000] leading-[16px] text-[16px] font-[500] hover:text-[#ff0000] ease-in-out duration-300'}>
          About
        </Link> </>}
        </div>
        <div className="text-[#ff0000] font-poppins text-[26px] leading-[80px] font-[600] w-[20%] cursor-pointer flex justify-center" onClick={()=> navigate('/')}>
          <img src={logo} alt="" width={200}/>
        </div>
        <div className="flex gap-[20px] w-[30%] justify-end">
          <button className='px-4 py-2 border-[1px] border-[#ff0000] bg-[#ff0000] font-poppins text-[#fff] leading-[16px] text-[16px] font-[400] rounded-md' onClick={()=>navigate('/login-host')}>Create an event</button>
          {!location.pathname.includes("/host-protocol") &&
            <button className='px-4 py-2 border-[1px] border-[#828282]  font-poppins text-[#828282] leading-[16px] text-[16px] font-[400] rounded-md' onClick={()=>navigate('/signup')}>Sign in</button>}
        </div>
      </div>
    </div>
  )
}

export default Navbar
