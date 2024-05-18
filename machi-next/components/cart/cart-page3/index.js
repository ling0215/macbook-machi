import { useEffect } from 'react'
import styles from './page3.module.scss'

const CartPage3 = (orderItem) => {
  useEffect(() => {
    window.scrollTo(0, 0) // 每当组件重新渲染时，将窗口滚动到顶部
  }, [])

  if (!orderItem || !orderItem.data || !orderItem.items) {
    return <div>Loading...</div>
  }
  return (
    <>
      <div
        className={`row mt-5 mb-2 d-flex  position-relative g-0 `}
        style={{ maxWidth: 960, left: '50%', transform: 'translateX(-50%)' }}
      >
        <div
          className={`col d-flex gap-1 align-items-center justify-content-start  `}
        >
          <div
            className={`d-flex bg-grey align-items-center justify-content-center  `}
            style={{ height: 40, width: 40, borderRadius: '50%' }}
          >
            <div className={`h4 mb-0 text-white `}>1</div>
          </div>
          <div className={`h4 mb-0   text-grey`}>購物車資訊</div>
        </div>
        <div
          className={`col d-flex gap-1 align-items-center justify-content-center`}
        >
          <div
            className={`d-flex bg-grey justify-content-center align-items-center `}
            style={{ height: 40, width: 40, borderRadius: '50%' }}
          >
            <div className={`h4 mb-0 text-white d-flex   `}>2</div>
          </div>
          <div className={`h4 mb-0   text-grey `}>確認及填寫</div>
        </div>
        <div
          className={`col d-flex gap-1 align-items-center justify-content-end`}
        >
          <div
            className={`d-flex bg-brown justify-content-center align-items-center `}
            style={{ height: 40, width: 40, borderRadius: '50%' }}
          >
            <div className={`h4 mb-0 text-white d-flex align-content-center  `}>
              3
            </div>
          </div>
          <div className={`h4 mb-0 text-brown ${styles['text-border-brown']}`}>
            下單成功
          </div>
        </div>
      </div>
      <div
        className={`d-flex align-items-center justify-content-center h3 text-brown py-4 `}
      >
        您的訂單已成立,感謝您的購買{' '}
      </div>
      <div className="row d-flex align-items-center justify-content-center">
        <div
          className={` col-md-5 d-flex flex-column px-0`}
          style={{ gap: 12 }}
        >
          <div className={`text-brown h5`}>商品資料</div>
          <div className={`d-flex align-items-center justify-content-between `}>
            <div className={`${styles['h6']} text-dark-grey`}>訂購日期</div>
            <div className={`${styles['h6']} text-dark-grey`}>
              {orderItem.data.order_createtime}
            </div>
          </div>
          <div className={`d-flex align-items-center justify-content-between `}>
            <div className={`${styles['h6']} text-dark-grey`}>訂單編號</div>
            <div className={`${styles['h6']} text-dark-grey`}>
              {orderItem.items.order_item_id}
            </div>
          </div>
          <div
            className={`d-flex align-items-center justify-content-between pb-4 ${styles['text-border-brown']}`}
          >
            <div className={`${styles['h6']} text-dark-grey`}>付款方式</div>
            <div className={`${styles['h6']} text-dark-grey`}>
              {orderItem.data.order_payment}
            </div>
          </div>
          <div className={`text-brown h5`}>購買項目</div>
          {orderItem.items.map((item) => (
            <div
              className="d-flex align-items-center justify-content-between"
              key={item.order_item_id}
            >
              <div className={`${styles['h6']} text-dark-grey`}>
                {item.order_product_name}
              </div>
              <div className={`${styles['h6']} text-dark-grey`}>
                {item.order_product_count} x ${item.order_product_detail}
              </div>
            </div>
          ))}
          <div className={`d-flex align-items-center justify-content-between`}>
            <div className={`h4 text-brown`}>商品總額</div>
            <div className={`h5 text-brown`}>{orderItem.data.order_total}</div>
          </div>
          <div className={`d-flex align-items-center justify-content-end py-4`}>
            <div className={`h5 ${styles['custom-button']}  text-white `}>
              返回首頁
            </div>
            <div
              className={`h5 ${styles['custom-button']} bg-brown  text-white ms-3`}
            >
              歷史訂單
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartPage3
