import React from 'react'
import styles from './button.module.css';

const Button = ({text}) => {
  return (
    <button  target='_blank' rel='noopener' className={styles.button}>{text}</button>
  )
}

export default Button