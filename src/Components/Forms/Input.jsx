import React from 'react'
import styles from './Input.module.css'

function Input({label, name, type}) {
  return (
    <div>
        <label htmlFor={name}>{label}</label>
        <input id={name} name={name} className={styles.input} type={type} />
    </div>
  )
}

export default Input