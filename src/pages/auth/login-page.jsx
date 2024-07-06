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
const LoginPage = () => {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [rememberMe, SetRemeberMe] = useState(false);
   const handleChange = (e) => {
      SetRemeberMe(e.target.checked)
   }
   const navigate = useNavigate();
   return (
      <div className={` ${styles.container}`}>
         <h6>Log In</h6>
         <div className='mt-4'></div>
         <form>
            <InputField
               label="Email Address"
               type="text"
               value={email}
               onChange={setEmail}
               //  icon={<CiMail />}
               //  isIcon
               placeholder={"Enter Your Email"}
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
            <div className={`${styles.row} d-flex justify-content-between`}>
               <FormControlLabel sx={{
                  '& .MuiFormControlLabel-label': {
                     fontSize: '13px',
                     fontWeight:500,
                     letterSpacing: 0.2
                  },
               }}
                  control={<Checkbox checked={rememberMe} onChange={handleChange} icon={<CheckBoxOutlineBlankIcon style={{ fontSize: '24px', color: '#ff0000' }} />} checkedIcon={<CheckBoxIcon style={{ fontSize: '24px', color: '#ff0000' }} />} />}
                  label="Remember Me"
               />
               {/* <div className={`${styles.forgot_password} border`}> */}
               <Link to="/reset-password" className={`${styles.forgot_password} `}>Forgot Password ?</Link>
               {/* </div> */}
            </div>
            <Buttons styles={{ width: "100%",padding:"10px 10px" ,fontSize: "14px", backgroundColor: "var(--orange)" ,textTransform: "capitalize" }} method={()=>navigate("/")}>Log in</Buttons>
         </form>
         <div className='py-4'>
            <Divider ><span style={{ fontSize: "20px", position: "relative", bottom: "8px", color:"grey", fontWeight: "300" }}>Or</span></Divider>
         </div>
         <SocialBtn />
         <div className='text-center mt-3'>
            <span className={`${styles.span}`}>Not a member yet &nbsp; <Link to="/signup" className={`${styles.forgot_password2}`}> SIGN UP HERE</Link></span>
         </div>
      </div>

   )
}

export default LoginPage
