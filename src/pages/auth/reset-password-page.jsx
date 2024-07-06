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


const ResetPasswordPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, SetRemeberMe] = useState(false);
  const handleChange = (e) => {
    SetRemeberMe(e.target.checked)
  }
  const navigate = useNavigate();
  return (
    <div className={` ${styles.container}`}>
      <h6>Reset Password</h6>
      <p className={`${styles.title} mt-4`}>Enter the email address or mobile number associated 
with your account.</p>
      <div className='mt-4'></div>
      <form>
        <InputField
          label="Email or Mobile Number"
          type="text"
          value={email}
          onChange={setEmail}
          //  icon={<CiMail />}
          //  isIcon
          placeholder={"Enter Email or Mobile Number"}
          //  required={!form_valid && email.length == 0}
          err_msg="username is required"
        />
      <div className='mt-2'></div>
       
      <Buttons styles={{marginTop:"20px" ,width: "100%",padding:"10px 10px" ,fontSize: "14px", backgroundColor: "var(--orange)" ,textTransform: "capitalize" }} method={() => navigate("/otp-verify")}>Sign Up</Buttons>
      </form>
     
     
      <div className='text-center mt-3'>
            <span className={`${styles.span}`}>Return to <Link to="/login" className={`${styles.forgot_password2}`}> LOG IN</Link></span>
         </div>
    </div>
  )
}

export default ResetPasswordPage
