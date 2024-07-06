import React, { useState, useRef, useEffect } from 'react';
import styles from './otp.module.scss'
const OtpInput = ({ length = 4, onComplete, onInputChange }) => {
  const [otp, setOtp] = useState('');
  const inputRefs = useRef(Array(length).fill(null));

  const handleInput = (value, index) => {
    setOtp((prevOtp) => {
      const newOtp = prevOtp.substring(0, index) + value + prevOtp.substring(index + 1);
      if (onComplete && newOtp.length === length) {
        onComplete(newOtp);
      }
      if (onInputChange) {
        onInputChange(newOtp);
      }
      return newOtp;
    });
  };

  const handleKeyDown = (event, index) => {
    const { key } = event;
    if (key === 'Backspace' && index !== 0) {
      inputRefs.current[index - 1].focus();
      handleInput('', index - 1); // Clear previous input on Backspace
    } else if (/\d/.test(key) && otp.length < length) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  useEffect(() => {
    inputRefs.current[0].focus(); // Focus on first input on mount
  }, []);

  return (
    <div className={`otp-container  ${styles.otp_container}`} styles={{width:'100%'}}>
      {Array.from({ length }).map((_, index) => (
        <div>
        <input
        
          key={index}
          ref={(el) => (inputRefs.current[index] = el)}
          type="text"
          maxLength="1"
          className="otp-input"
          value={otp[index] || ''}
          onChange={(event) => handleInput(event.target.value, index)}
          onKeyDown={(event) => handleKeyDown(event, index)}
          autoComplete="off"
          autoCorrect="off"
        />
        </div>
      ))}
    </div>
  );
};

export default OtpInput;
