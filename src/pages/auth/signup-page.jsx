import React, { useState } from 'react'
import InputField from '../../components/inputs/input-field'
import styles from './auth.module.scss'
import { CiMail } from 'react-icons/ci'
import { Checkbox, Divider, FormControlLabel } from '@mui/material'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { Link, useNavigate } from 'react-router-dom'
import SocialBtn from '../../components/social-btn/social-btn'
import Buttons from '../../components/buttons/buttons'
import MyDropdown from '../../components/core/dropdown/dropdown'
import { Padding } from '@mui/icons-material'


const SignupPage = ({setRole}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, SetRemeberMe] = useState(false);
  const handleChange = (e) => {
    SetRemeberMe(e.target.checked)
  }
  const navigate = useNavigate();

  const handleNavigation=()=>{
    navigate("/dashboard")
    setRole('superAdmin')
  }

  return (
    <div className={` ${styles.container}`}>
      <h6>Sign Up</h6>
      <div className='mt-4'></div>
      <form>
        <InputField
          label="Full Name"
          type="text"
          value={email}
          onChange={setEmail}
          //  icon={<CiMail />}
          //  isIcon
          placeholder={"Enter Your Full Name"}
          //  required={!form_valid && email.length == 0}
          err_msg="username is required"
        />

        <div className='mt-4'></div>
        <InputField
          label="Email Address"
          type="text"
          value={email}
          onChange={setEmail}
          //  icon={<CiMail />}
          //  isIcon
          placeholder={"Enter Your Full Name"}
          //  required={!form_valid && email.length == 0}
          err_msg="username is required"
        />
        <div className='mt-4'></div>
        <InputField
          label="Password"
          type="password"
          value={password}
          onChange={setPassword}
          placeholder={"Enter Your Password"}
          //  required={!form_valid && email.length == 0}
          err_msg="username is required"
        />
        
        <div className='mt-4'>
          <div className={`${styles.label} mb-2 mb-md-1`}>
            <label htmlFor="">Choose Account Type</label>
          </div>
          <MyDropdown placeholder="Select Account Type" styles={{ width: "100%", fontSize: "14px", padding: "10px !important" }} />
        </div>
        <div className='mt-4'>
          <div className={`${styles.label} mb-2 mb-md-1`}>
            <label htmlFor="">Choose your country</label>
          </div>
          <MyDropdown placeholder="Select Your Country" styles={{ width: "100%", fontSize: "12px", padding: "0px !important" }} />
        </div>
        <Buttons styles={{marginTop:"20px" ,width: "100%",padding:"10px 10px" ,fontSize: "14px", backgroundColor: "var(--orange)" ,textTransform: "capitalize" }} method={() => handleNavigation()}>Sign Up</Buttons>
      </form>
      <div className='py-4'>
      <Divider ><span style={{ fontSize: "20px", position: "relative", bottom: "8px", color:"grey", fontWeight: "300" }}>Or</span></Divider>
      </div>
      <SocialBtn />
      <div className='text-center mt-3'>
            <span className={`${styles.span}`}>Already a member? &nbsp; <Link to="/login" className={`${styles.forgot_password2}`}> LOG IN</Link></span>
         </div>
    </div>
  )
}

export default SignupPage
