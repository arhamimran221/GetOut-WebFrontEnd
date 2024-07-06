import React from 'react'
import styles from './social-btn.module.scss'
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import FbIcon from "../../Assets/facebookIcon.png"
import GoogleIcon from "../../Assets/googleIcon.png"
const SocialBtn = () => {
  return (
     <>
       {/* <div className={`${styles.container} d-flex align-items-center`}>
        <div className={`${styles.google_btn} d-flex align-items-center`}>
            <FcGoogle className={`${styles.google_icon}`} />
            <p>Sign in with Google</p>
        </div>
        <div className={`${styles.facebook_icon_container} ms-4`}>
          <FaFacebookF className={`${styles.facebook_icon}`}/>
        </div>
       </div> */}
       <div className={`${styles.container} d-flex`}>
        <div>
          <img src={GoogleIcon} className={`${styles.google_icon} img-fluid`}></img>
         
        </div>
        <div className='ms-3'>
          <img src={FbIcon} className={`${styles.facebook_icon} img-fluid`}></img>
         
        </div>
       </div>
     </>
  )
}

export default SocialBtn
