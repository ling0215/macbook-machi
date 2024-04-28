import React from 'react'
import styles from './page3.module.scss'

import '@/node_modules/bootstrap/scss/bootstrap.scss';

const CartPage3 = () => {
  return (
    <>
      <div
        className={`row mt-5 mb-2 d-flex  position-relative g-0 `}
        style={{ maxWidth: 960, left: '50%', transform: 'translateX(-50%)' }}
      >
        <div className={`col d-flex gap-1 align-items-center justify-content-start  `}>
          <div
            className={`d-flex bg-brown align-items-center justify-content-center  `}
            style={{ height: 40, width: 40, borderRadius: '50%' }}
          >
            <div className={`h4 mb-0 text-white `}>1</div>
          </div>
          <div className={`h4 mb-0 ${styles['text-border-brown']}  text-brown`}>
            購物車資訊
          </div>
        </div>
        <div className={`col d-flex gap-1 align-items-center justify-content-center`}>
          <div
            className={`d-flex bg-grey justify-content-center align-items-center `}
            style={{ height: 40, width: 40, borderRadius: '50%' }}
          >
            <div className={`h4 mb-0 text-white d-flex   `}>2</div>
          </div>
          <div className={`h4 mb-0   text-grey `}>確認及填寫</div>
        </div>
        <div className={`col d-flex gap-1 align-items-center justify-content-end`}>
          <div
            className={`d-flex bg-grey justify-content-center align-items-center `}
            style={{ height: 40, width: 40, borderRadius: '50%' }}
          >
            <div className={`h4 mb-0 text-white d-flex align-content-center  `}>
              3
            </div>
          </div>
          <div className={`h4 mb-0 text-grey`}>下單成功</div>
        </div>
      </div>

    </>
  )
}

export default CartPage3;