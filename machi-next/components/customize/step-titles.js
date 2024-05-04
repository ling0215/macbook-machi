import React from 'react'
import styles from './customize.module.css'

export default function StepTitle({ title, shouldHide1, shouldHide2 }) {
  return (
    <>
      <div>
        <h6 className={styles['step-title']}>
          {title}
          <button
            className={styles['prv-step-button']}
            style={{ display: shouldHide1 ? 'none' : 'flex' }}
          >
            上一步
          </button>
          <button
            className={styles['next-step-button']}
            style={{ display: shouldHide2 ? 'none' : 'flex' }}
          >
            下一步
          </button>
        </h6>
      </div>
    </>
  )
}
