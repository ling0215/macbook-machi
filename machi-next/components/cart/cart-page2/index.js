import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import '@/node_modules/bootstrap/scss/bootstrap.scss'
import styles from './page2.module.scss'

import '@/node_modules/bootstrap/scss/bootstrap.scss'
import { FaTruckFast } from 'react-icons/fa6'
import { RiCheckboxBlankCircleLine, RiCheckboxCircleLine } from 'react-icons/ri'
import { MdCheckBoxOutlineBlank } from 'react-icons/md'

const CartPage2 = ({ onClickPage, selectedItems, onSelectItems }) => {
  console.log('樓下為page2')
  console.log(selectedItems)

  useEffect(() => {
    window.scrollTo(0, 0) // 每当组件重新渲染时，将窗口滚动到顶部
  }, [])

  const checkTotal =
    (selectedItems.products.length > 0
      ? selectedItems.products.reduce(
          (acc, cur) => acc + cur.price * cur.quantity,
          0
        )
      : 0) +
    (selectedItems.courses.length > 0
      ? selectedItems.courses.reduce(
          (acc, cur) => acc + cur.price * cur.quantity,
          0
        )
      : 0) +
    (selectedItems.custom.length > 0
      ? selectedItems.custom.reduce(
          (acc, cur) => acc + cur.price * cur.quantity,
          0
        )
      : 0)

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null)
  const [isYellow, setIsYellow] = useState(false) // 新增狀態以控制黃色背景

  const handlePaymentMethodClick = (method) => {
    setSelectedPaymentMethod(method)
  }

  // 當點擊按鈕時切換狀態以改變黃色背景
  const toggleYellow = () => {
    setIsYellow(!isYellow)
  }

  return (
    <>
      <div
        className={`row mt-5 mb-2 d-flex  position-relative g-0 mb-5 `}
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
            className={`d-flex bg-brown justify-content-center align-items-center `}
            style={{ height: 40, width: 40, borderRadius: '50%' }}
          >
            <div className={`h4 mb-0 text-white d-flex   `}>2</div>
          </div>
          <div
            className={`h4 mb-0   text-brown ${styles['text-border-brown']} `}
          >
            確認及填寫
          </div>
        </div>
        <div
          className={`col d-flex gap-1 align-items-center justify-content-end`}
        >
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
      <div className="main-area row">
        <div className="cart-area col-md-6">
          <button
            div
            className={` ${styles['step-button']}`}
            onClick={onClickPage}
          >
            <div className={` ${styles['step-button-text']} `}>上一步</div>
          </button>

          {selectedItems &&
            selectedItems.products &&
            selectedItems.products.length > 0 && (
              <div
                className={` product-area`}
                style={{
                  display: selectedItems.products.length > 0 ? 'block' : 'none',
                }}
              >
                <div
                  className={` d-flex gap-2  product-tittle ${styles['border-borwn']} py-3`}
                  style={{ height: 64 }}
                >
                  <div className={` h3`}>MACHI</div>
                  <div className={` h3`}>商品</div>
                  <div className={` h3`}>({selectedItems.products.length})</div>
                </div>

                {selectedItems.products.map((item, index) => (
                  <div
                    key={index}
                    className={`d-flex  g-0 gap-5 align-items-center py-4 ${styles['text-border-grey']}`}
                  >
                    <div className={``}>
                      <img
                        src={item.image}
                        className={`product-img-1`}
                        style={{ width: 140, height: 140 }}
                      />
                    </div>
                    <div
                      className={`${styles['card-body']} align-content-start p-0  flex-grow-1 d-flex flex-column`}
                    >
                      <div
                        className={`card-title card-text d-flex justify-content-start text-brown col h4`}
                      >
                        {item.name}
                      </div>
                      <div
                        className={`d-flex justify-content-start card-text col `}
                        style={{ gap: '0.5rem' }}
                      >
                        <div
                          className={`h5 d-inline`}
                          style={{ whiteSpace: 'nowrap' }}
                        >
                          規格:
                        </div>
                        <div className={`h5`}>{item.specification}</div>
                      </div>
                      <div className={`d-flex g-3 justify-content-between col`}>
                        <div className={` h4 `}>數量:{item.quantity}</div>
                        <div className={` h4 `}>
                          NT${item.price * item.quantity}
                        </div>
                      </div>
                    </div>
                    <hr />
                  </div>
                ))}
              </div>
            )}

          {selectedItems &&
            selectedItems.custom &&
            selectedItems.custom.length > 0 && (
              <div
                className={` custom-area`}
                style={{
                  display: selectedItems.custom.length > 0 ? 'block' : 'none',
                }}
              >
                <div
                  className={` d-flex gap-2  product-tittle ${styles['border-borwn']} py-3`}
                  style={{ height: 64 }}
                >
                  <div className={` h3`}>MACHI</div>
                  <div className={` h3`}>客製商品</div>
                  <div className={` h3`}>({selectedItems.custom.length})</div>
                </div>

                {selectedItems.custom.map((item, index) => (
                  <div
                    key={index}
                    className={`d-flex  g-0 gap-5 align-items-center py-4 ${styles['text-border-grey']}`}
                  >
                    <div className={``}>
                      <img
                        src={item.image}
                        className={`product-img-1`}
                        style={{ width: 140, height: 140 }}
                      />
                    </div>
                    <div
                      className={`${styles['card-body']} align-content-start p-0  flex-grow-1 d-flex flex-column`}
                    >
                      <div
                        className={`card-title card-text d-flex justify-content-start text-brown col h4`}
                      >
                        {item.name}
                      </div>
                      <div
                        className={`d-flex justify-content-start card-text col `}
                        style={{ gap: '0.5rem' }}
                      >
                        <div
                          className={`h5 d-inline`}
                          style={{ whiteSpace: 'nowrap' }}
                        >
                          規格:
                        </div>
                        <div className={`h5`}>{item.specification}</div>
                      </div>
                      <div className={`d-flex g-3 justify-content-between col`}>
                        <div className={` h4 `}>數量:{item.quantity}</div>
                        <div className={` h4 `}>
                          NT${item.price * item.quantity}
                        </div>
                      </div>
                    </div>
                    <hr />
                  </div>
                ))}
              </div>
            )}

          {selectedItems &&
            selectedItems.courses &&
            selectedItems.courses.length > 0 && (
              <div
                className={`col-sm  class-area`}
                style={{
                  display: selectedItems.courses.length > 0 ? 'block' : 'none',
                }}
              >
                <div
                  style={{
                    height: 64,
                  }}
                  className={` d-flex gap-2  product-tittle ${styles['border-borwn']} py-3`}
                >
                  <div className={` h3`}>MACHI</div>
                  <div className={` h3`}>課程</div>
                  <div className={` h3`}>
                    ( {selectedItems.courses.length} )
                  </div>
                </div>
                {selectedItems.courses.map((item) => (
                  <div
                    key={item.id}
                    className={`d-flex  g-0 gap-5 align-items-center py-4 m-0 ${styles['text-border-grey']}`}
                  >
                    <div className={``}>
                      <img
                        src={item.image}
                        className={`product-img-1`}
                        style={{ width: 140, height: 140 }}
                      />
                    </div>
                    <div
                      className={`${styles['card-body']} align-content-start p-0  flex-grow-1 d-flex flex-column gap-2`}
                    >
                      <div
                        className={`card-title card-text d-flex justify-content-start text-brown col h4`}
                      >
                        {item.name}
                      </div>
                      <div
                        className={`d-flex justify-content-start card-text col `}
                      >
                        <div
                          className={`h5 d-inline mb-0`}
                          style={{ whiteSpace: 'nowrap' }}
                        >
                          上課時間:
                        </div>
                        <div className={`h5 mb-0`}>{item.classtime}</div>
                      </div>
                      <div
                        className={`d-flex justify-content-start card-text col `}
                      >
                        <div
                          className={`h5 d-inline mb-0`}
                          style={{ whiteSpace: 'nowrap' }}
                        >
                          地點:
                        </div>
                        <div className={`h5 mb-0`}>{item.address}</div>
                      </div>
                      <div className={`d-flex g-3 justify-content-between col`}>
                        <div className={`h4`}>人數:{item.quantity}</div>
                        <div className={` h4 `}>
                          NT${item.price * item.quantity}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
        </div>

        <div className="col"></div>
        <div className={`${styles['pay-area']} col-md-5 ticky-md-top `}>
          <div></div>
          <div
            className={
              'h5 text-primary-dark d-flex justify-content-start d-flex align-items-center ticky-md-top  '
            }
            style={{ height: 64 }}
          >
            <FaTruckFast className={' mx-1'} size={24}></FaTruckFast>
            請輸入完整資料
          </div>
          <form
            className={`${styles['pay-content']} px-3 py-4 sticky-md-top mb-3 `}
            method="post"
          >
            <div className="h5">付款方式</div>
            <div
              className={`d-flex justify-content-between pb-3 ${styles['text-border-brown']} `}
            >
              <button
                className={`${styles['pay-button']} ${styles['h6']}`}
                type="button"
              >
                <RiCheckboxBlankCircleLine></RiCheckboxBlankCircleLine>銀行轉帳
              </button>
              <button
                className={`${styles['pay-button']} ${styles['h6']} ${
                  isYellow ? styles['selected'] : ''
                }`}
                type="button"
                onClick={() => {
                  handlePaymentMethodClick('credit-card')
                  toggleYellow() // 點擊按鈕時切換狀態
                }}
              >
                {selectedPaymentMethod === 'credit-card' ? (
                  <RiCheckboxCircleLine />
                ) : (
                  <RiCheckboxBlankCircleLine />
                )}
                信用卡
              </button>

              <button
                className={`${styles['pay-button']} ${styles['h6']} ${
                  selectedPaymentMethod === 'line-pay' && styles['selected']
                }`}
                type="button"
                onClick={() => {
                  handlePaymentMethodClick('line-pay')
                  toggleYellow() // 點擊按鈕時切換狀態
                }}
              >
                {selectedPaymentMethod === 'line-pay' ? (
                  <RiCheckboxCircleLine />
                ) : (
                  <RiCheckboxBlankCircleLine />
                )}
                Line pay
              </button>
            </div>
            <div className="h5 pt-2">收件人資訊</div>
            <div className={`${styles['h6']} text-grey pb-2`}>
              <MdCheckBoxOutlineBlank size={28}></MdCheckBoxOutlineBlank>
              同會員資料
            </div>
            <div className="row d-flex justify-content-between">
              <div className={`col-4  `}>
                <input
                  type="text"
                  className={`form-control w-100 ${styles['form-control']} ${styles['cart-custom-bootstrap']} ${styles['form-control']} ${styles['custom-input']}`}
                  key={'transName'}
                  placeholder="真實姓名"
                />
              </div>
              <div className="col-6">
                <input
                  type="text"
                  className={`form-control w-100 ${styles['form-control']} ${styles['cart-custom-bootstrap']} ${styles['form-control']} ${styles['custom-input']}`}
                  key={'transPhone'}
                  placeholder="09XXXXXXXX"
                />
              </div>
            </div>
            <div
              className={`${styles['text-border-brown']} row d-flex pt-2 pb-5 `}
            >
              <div className={`= col `}>
                <input
                  type="text"
                  className={`form-control w-100 ${styles['form-control']} ${styles['cart-custom-bootstrap']}  ${styles['form-control']} ${styles['custom-input']}`}
                  key={''}
                  placeholder="請填寫完整地址"
                />
              </div>
            </div>
            <div className={`d-flex justify-content-between py-2`}>
              <div className={`${styles['h6']} `}>選擇優惠券</div>
              <button className={`${styles['coupon-button']} `}>
                <div className={`${styles['text']} `}>選擇</div>
              </button>
            </div>
            <div className={`d-flex justify-content-between py-2`}>
              <div className={`${styles['h6']} `}>商品總計</div>
              <div className={`${styles['h6']} `}>{checkTotal}</div>
            </div>
            <div
              className={`${styles['text-border-brown']} d-flex justify-content-between py-2 pb-4`}
            >
              <div className={`${styles['h6']} `}>折扣總計</div>
              <div className={`${styles['h6']}    text-heart`}>-NT$ 2345 </div>
            </div>
            <div className={`d-flex justify-content-between py-2 pb-4`}>
              <div className={`${styles['h6']} `}>商品總金額</div>
              <div className={`${styles['h6']} `}>NT$ 5432</div>
            </div>
            <div className={`d-flex justify-content-center`}>
              <Link href="/cart/cart-order" passHref>
                <button className={`${styles['cart-button']} `}>
                  <div className={`${styles['text']} ${styles['link-button']}`}>
                    前往結帳
                  </div>
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default CartPage2
