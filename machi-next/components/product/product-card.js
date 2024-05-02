import React from 'react'
import styles from './product.module.css'
import { IoCartOutline, IoHeartOutline } from 'react-icons/io5'
// import LoadingImageSvg from './loading-image-svg'

export default function ProductCard() {
  return (
    <>
      <div className="col">
        <div className={styles.cardProduct}>
          <img
            src="/images/product/list/strawberry-tart-01.jpg"
            className="card-img-top overflow-hidden"
            alt="productImg"
          />
          <div className={styles.cardBody}>
            <span className={styles.heartIcon}>
              <IoHeartOutline style={{ fontSize: "24px", color: "white" }} />
            </span>
            <h5 className={styles.cardText}>小山園草莓塔</h5>
            <p className={styles.typeText}>塔派甜點</p>
            <h5 className={styles.currency}>$680</h5>
            <button className={styles.btnCart}>
              <IoCartOutline style={{ fontSize: "20px", color: "white" }} /> 加入購物車
            </button>
          </div>
          
        </div>
      </div>

      {/* <div className="card-body no-space-x d-flex flex-column align-items-center">
            <span className="position-absolute top-0 end-0">
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  width: '30px',
                  height: '30px',
                  overflow: 'hidden',
                }}
              >
                <IoHeartOutline size={30} color="white" />/
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#DADADA',
                    opacity: 0.5,
                  }}
                />
              </div>
            </span>
            <p className="card-text">小山園草莓塔</p>
            <p className="card-text type-text">塔派甜點</p>
            <span className="h-currency bold h-now">$480</span>
            <button className="btn btn-light-brown text-white w-50 mt-2">
              <IoCartOutline /> 加入購物車
            </button>
          </div> */}

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
    </>
  )
}
