import React from 'react'
import styles from './customize.module.css'
import Image from 'next/image'

export default function CakePreview({ size }) {
  return (
    <>
      <div className={styles['preview-overview']}>
        <div className={styles['preview-size']}>{size}</div>
        <div className={styles['preview-photo-overview']}>
          <div className={styles['preview-photo']}></div>
          <div className={styles['preview-photo-text']}>(照片預覽圖)</div>
        </div>
        <div className={styles['preview-arrow']}>
          <Image
            src="/images/customize/cake_arrow.png"
            alt="arrow"
            width={100}
            height={100}
          />
        </div>
        {/* <div>
          <Image
            src="/images/customize/cake4.png"
            alt="蛋糕"
            width={170}
            height={170}
          />
          <p className={styles['preview-cake']}>預覽示意圖</p>
        </div> */}
      </div>
    </>
  )
}
