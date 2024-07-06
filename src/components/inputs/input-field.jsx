import React from 'react'
import styles from './input-field.module.scss'

const InputField = (props) => {
  return (
    <>
      <div className={`${styles.container}`}>
        {props?.label &&
          <div className={`${styles.label} pb-1`}>
            <label htmlFor="">{props?.label}</label>
          </div>
        }
        <div className={`${styles.input_container} mt-1`}>
          {props.isIcon && <span>{props.icon}</span>}
          

          <div className={styles.input_field}>
            <input
              type={props.type}
              placeholder={props.placeholder}
              value={props.value}
              onChange={(e) => props.onChange(e.target.value)}
            />
          </div>

        </div>
      </div>
    </>
  )
}

export default InputField
