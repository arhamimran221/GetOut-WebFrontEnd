import { Box, styled } from '@mui/material'
import React from 'react'
import styles from './authLayout.module.scss'
import authBG from '../../Assets/authBg.png'
const AuthLayout = ({ children, content }) => {
    // const Box = styled(Box)
    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.left_side}`}>
                <img src={authBG} alt="" />
                <div className={`d-flex flex-column justify-content-between ${styles.left_content}`} style={{color:'white'}}>
                    <h3>We know, how important <br /> your Happines is :)</h3>
                    <div className={`${styles.left_bottom}`}>
                        <h3>{content.title}</h3>
                        <p>{content.desc}</p>
                    </div>
                </div>
            </div>
            <div className={`${styles.right_side}`} style={{ padding: "50px" }}>
                <h1>{children}</h1>
            </div>
        </div>
    )
}

export default AuthLayout
