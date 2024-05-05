import React from 'react'
import styles from './customize.module.css'

export default function Steps({ bgStyle, textStyle, stepNumber, stepText }) {
  Steps.defaultProps = {
    bgStyle: styles['bg-grey'],
    textStyle: styles['custom-text-grey'],
  }
  return (
    <div className={`${styles['custom-col']}`}>
      <div className={`${styles['custom-circle']} ${bgStyle} ${textStyle}`}>
        <div className={styles['custom-text']}>{stepNumber}</div>
      </div>
      <div className={textStyle}>{stepText}</div>
    </div>
  )
}
