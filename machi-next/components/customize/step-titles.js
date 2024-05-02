import React from 'react'
import styles from './customize.module.css'

export default function StepTitle() {
  const title = 'Step1: 選擇蛋糕尺寸'
  return (
    <h6 className={styles['step-title']}>
      <button className={styles['step-button']}>下一步</button>
      {title}
    </h6>
  )
}
