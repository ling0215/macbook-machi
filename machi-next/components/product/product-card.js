// import React from 'react'
import Link from 'next/link'
import styles from './product.module.scss'
import { IoCartOutline, IoHeartOutline } from 'react-icons/io5'
// import LoadingImageSvg from './loading-image-svg'


export default function ProductCard() {
  return (
    <>
    <div className="col-6">   
      <div className={styles.cardBody}>
        <Link href="/product/detail" passHref>
          <img
            src="/images/product/list/strawberry-tart-01.jpg"
            className={styles.cardImg}
            alt="productImg"
            placeholder="blur"
          />
        </Link>
        <div className={styles.cardInfo}>
          <IoHeartOutline className={styles.heartIcon} />
          <h5 className={styles.cardText}>小山園草莓塔</h5>
          <p className={styles.typeText}>塔派甜點</p>
          <h5 className={styles.currency}>NT$ 680</h5>
          <button className={styles.cartBtn}>
            <IoCartOutline className={styles.cartIcon} /> 加入購物車
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

{/* 原始檔案 */}
{/* <div className="col">
  <div className="card h-100" aria-hidden="true">
    <Image
      className="card-img-top"
      src={`/images/product/thumb/${item.photos.split(',')[0]}`}
      alt="..."
      width={300}
      height={200}
      placeholder="blur"
      blurDataURL={`/images/product/thumb/${item.photos.split(',')[0]}`}
      style={{ width: '100%', height: 'auto' }} // optional
    />

    <div className="card-body">
      <h5 className="card-title placeholder-glow  limit-text-lines1">
        {item.name}
      </h5>
      <p className="card-text  max-lines"></p>
      <a href="#" className="btn btn-primary">
        了解更多
      </a>
    </div>
  </div>
</div> */}