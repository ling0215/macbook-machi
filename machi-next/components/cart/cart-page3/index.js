import React from 'react'
import styles from './page3.module.scss'


const CartPage3 = () => {
  return (
    <>
      <div
        className={`row mt-5 mb-2 d-flex  position-relative g-0 `}
        style={{ maxWidth: 960, left: '50%', transform: 'translateX(-50%)' }}
      >
        <div className={`col d-flex gap-1 align-items-center justify-content-start  `}>
          <div
            className={`d-flex bg-grey align-items-center justify-content-center  `}
            style={{ height: 40, width: 40, borderRadius: '50%' }}
          >
            <div className={`h4 mb-0 text-white `}>1</div>
          </div>
          <div className={`h4 mb-0   text-grey`}>
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
            className={`d-flex bg-brown justify-content-center align-items-center `}
            style={{ height: 40, width: 40, borderRadius: '50%' }}
          >
            <div className={`h4 mb-0 text-white d-flex align-content-center  `}>
              3
            </div>
          </div>
          <div className={`h4 mb-0 text-brown ${styles['text-border-brown']}`}>下單成功</div>
        </div>
      </div>
      <div className={`d-flex align-items-center justify-content-center h3 text-brown py-4 `}>您的訂單已成立,感謝您的購買 </div>
      <div className='row d-flex align-items-center justify-content-center'>
      <div className={` col-md-5 d-flex flex-column px-0`} style={{ gap: 12 }}>
        <div className={`text-brown h5`}>商品資料</div>
        <div className={`d-flex align-items-center justify-content-between `}>
          <div className={`${styles['h6']} text-dark-grey`}>訂購日期</div>
          <div className={`${styles['h6']} text-dark-grey`}>2024-03-26</div>
        </div>
        <div className={`d-flex align-items-center justify-content-between `}>
          <div className={`${styles['h6']} text-dark-grey`}>訂單編號</div>
          <div className={`${styles['h6']} text-dark-grey`}>dokidoki55688</div>
        </div>
        <div className={`d-flex align-items-center justify-content-between pb-4 ${styles['text-border-brown']}`}>
          <div className={`${styles['h6']} text-dark-grey`}>付款方式</div>
          <div className={`${styles['h6']} text-dark-grey`}>信用卡支付</div>
        </div>
        <div className={`text-brown h5`}>購買項目</div>
        <div className={`d-flex align-items-center justify-content-between `}>
          <div className={`${styles['h6']} text-dark-grey`}>經典檸檬派*1</div>
          <div className={`${styles['h6']} text-dark-grey`}>$ 1050</div>
        </div>
        <div className={`d-flex align-items-center justify-content-between `}>
          <div className={`${styles['h6']} text-dark-grey`}>脆皮鳳梨酥*1</div>
          <div className={`${styles['h6']} text-dark-grey`}>$ 950</div>
        </div>
        <div className={`d-flex align-items-center justify-content-between`}>
          <div className={`${styles['h6']} text-dark-grey`}>折扣總額</div>
          <div className={`${styles['h6']} text-dark-grey`}>$ 888</div>
        </div>
        <div className={`d-flex align-items-center justify-content-between`}>
          <div className={`h4 text-brown`}>商品總額</div>
          <div className={`h5 text-brown`}>$ 1800</div>
        </div>
        <div className={`d-flex align-items-center justify-content-end py-4`}>
          <div className={`h5 ${styles['custom-button']}  text-white `}>返回首頁</div>
          <div className={`h5 ${styles['custom-button']} bg-brown  text-white ms-3`}>歷史訂單</div>
        </div>
      </div>
      </div>

    </>
  )
}

export default CartPage3;