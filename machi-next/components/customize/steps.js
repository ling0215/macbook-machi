import React from 'react'
import styles from './customize.module.css'
import '@/node_modules/bootstrap/scss/bootstrap.scss'

export default function Steps() {
  return (
    <>
      <div className={styles['step-row']}>
        <div className={styles.steps}>
          {/* <div
            className={`d-flex align-items-center justify-content-center ${styles['bg-yellow']}`}
            style={{ height: 40, width: 40, borderRadius: '50%' }}
          > */}
          <div className={styles.step1}>
            <div className={styles['step1-num']}>1</div>
          </div>
          <div className={styles['step1-text']}>選擇蛋糕尺寸</div>
        </div>
        <div
          className={`col d-flex gap-1 align-items-center justify-content-center`}
        >
          <div
            className={`d-flex bg-grey justify-content-center align-items-center`}
            style={{ height: 40, width: 40, borderRadius: '50%' }}
          >
            <div className={`h5 mb-0 text-white d-flex`}>2</div>
          </div>
          <div className={`h5 mb-0 text-grey`}>選擇蛋糕口味及樣式</div>
        </div>
        <div
          className={`col d-flex gap-1 align-items-center justify-content-end`}
        >
          <div
            className={`d-flex bg-grey justify-content-center align-items-center`}
            style={{ height: 40, width: 40, borderRadius: '50%' }}
          >
            <div className={`h5 mb-0 text-white d-flex align-content-center`}>
              3
            </div>
          </div>
          <div className={`h5 mb-0 text-grey`}>加入購物車</div>
        </div>
      </div>
    </>
  )
}
