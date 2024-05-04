import React from 'react'
import styles from './customize.module.css'
import Image from 'next/image'

export default function CakeSize({ imageSize, size, price }) {
  return (
    <>
      <div>
        <Image
          src="/images/customize/cake4.png"
          alt="4吋蛋糕"
          width={imageSize}
          height={imageSize}
        />
        <p className={styles.size}>{size}</p>
        <p className={styles.price}>{price}</p>
      </div>
    </>
  )
}
