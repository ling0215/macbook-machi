import React from 'react'
import styles from './customize.module.css'
import Image from 'next/image'
import { useCustomize } from '@/hooks/use-customize'

export default function CakeSize({ imageSize, size, price, onClick }) {
  const { customize } = useCustomize()
  const imgs = {
    '3層': {
      伯爵: '3-1.svg',
      抹茶: '3-2.svg',
      巧克力: '3-3.svg',
    },
    '4層': {
      伯爵: '4-1.svg',
      抹茶: '4-2.svg',
      巧克力: '4-3.svg',
    },
    // '5層': {
    //   伯爵: '5-1.png',
    //   抹茶: '5-2.png',
    //   巧克力: '5-3.png',
    // },
  }

  return (
    <>
      <div onClick={onClick}>
        <Image
          src={`/images/customize/${
            customize.layer && customize.flavor
              ? imgs[customize.layer][customize.flavor]
              : 'cake4.png'
          }`}
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
