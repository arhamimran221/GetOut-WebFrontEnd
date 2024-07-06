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
import OtpInput from '../../components/otp-input/otp-input'


const OtpPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, SetRemeberMe] = useState(false);
  const handleChange = (e) => {
    SetRemeberMe(e.target.checked)
  }
  const navigate = useNavigate();
  return (
    <div className={` ${styles.container}`}>
      <h6>Validate OTP</h6>
      <p className={`${styles.title} mt-4`}>Please enter the OTP (one time password) to verify your
        account. A code has been send to ********123</p>
      <div className='mt-4'></div>
      <form>

        <OtpInput />
        <Buttons styles={{ marginTop: "20px", width: "100%", padding: "10px 10px", fontSize: "14px", backgroundColor: "var(--orange)", textTransform: "capitalize" }} method={() => navigate("/login")}>Verify</Buttons>
      </form>


      <div className='text-center mt-3'>
        <span className={`${styles.span}`}>Not received your code? &nbsp; <Link to="/login" className={`${styles.forgot_password2}`}> Resend Code</Link></span>
      </div>

    </div>
  )
}

export default OtpPage
