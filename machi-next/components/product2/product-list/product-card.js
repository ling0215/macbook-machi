import React from 'react'
import Link from 'next/link'
import styles from './product.module.scss'
import Image from 'next/image'
import { IoCartOutline, IoHeartOutline } from 'react-icons/io5'

export default function ProductCard({ product }) {
  const imageUrl = `/images/product/card/${product.product_id}1.jpg`
  return (
    <>
      <div className="col-6">
        <div className={styles.cardBody}>
          <Link href="/product/detail" passHref>
            <Image
              src={imageUrl}
              className={styles.cardImg}
              alt="productImg"
              placeholder="blur"
              blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" // 這是一個空白的 GIF，你需要根據你的需求來設定這個值
              width={230} // 你需要根據你的需求來設定這個值
              height={230} // 你需要根據你的需求來設定這個值
            />
          </Link>
          <div className={styles.cardInfo}>
            <IoHeartOutline className={styles.heartIcon} />
            <h5 className={styles.cardText}>{product.product_name}</h5>
            <p className={styles.typeText}>{product.product_category}</p>
            <h5 className={styles.currency}>{product.product_price_small}</h5>
            <button className={styles.cartBtn}>
              <IoCartOutline className={styles.cartIcon} /> 加入購物車
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
