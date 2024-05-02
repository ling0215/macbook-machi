import React from 'react'

import '@/node_modules/bootstrap/scss/bootstrap.scss'
import styles from './page2.module.scss'

import '@/node_modules/bootstrap/scss/bootstrap.scss'
import { FaTruckFast } from 'react-icons/fa6'
import { RiCheckboxBlankCircleLine } from 'react-icons/ri'
import { MdCheckBoxOutlineBlank } from 'react-icons/md'

const CartPage1 = () => {
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
          <div div className={` ${styles['step-button']}`}>
            <div className={` ${styles['step-button-text']} `}>上一步</div>
          </div>
          <div className={` product-area`}>
            <div
              className={` d-flex gap-2  product-tittle ${styles['border-borwn']} py-3`}
              style={{ height: 64 }}
            >
              <div className={` h3`}>MACHI</div>
              <div className={` h3`}>商品</div>
              <div className={` h3`}>(3)</div>
            </div>
            <div className={`d-flex  g-0 gap-5 align-items-center py-4`}>
              <div className={``}>
                <img
                  src="./images/cart-1.jpeg"
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
                  草莓有夠派
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
                  <div className={`h5`}>
                    6吋 4層 草莓內陷 派皮加厚 表面巧克力 去冰微糖{' '}
                  </div>
                </div>
                <div className={`d-flex g-3 justify-content-between col`}>
                  <div className={` h4 `}>數量:1</div>
                  <div className={` h4 `}>NT$8888</div>
                </div>
              </div>
            </div>
            <hr />

            <div className={`d-flex  g-0 gap-5 align-items-center py-4`}>
              <div className={``}>
                <img
                  src="./images/cart-1.jpeg"
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
                  草莓有夠派
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
                  <div className={`h5`}>
                    6吋 4層 草莓內陷 派皮加厚 表面巧克力 去冰微糖{' '}
                  </div>
                </div>
                <div className={`d-flex g-3 justify-content-between col`}>
                  <div className={` h4 `}>數量:1</div>
                  <div className={` h4 `}>NT$8888</div>
                </div>
              </div>
            </div>
            <hr />

            <div className={`d-flex  g-0 gap-5 align-items-center py-4`}>
              <div className={``}>
                <img
                  src="./images/cart-1.jpeg"
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
                  草莓有夠派
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
                  <div className={`h5`}>
                    6吋 4層 草莓內陷 派皮加厚 表面巧克力 去冰微糖{' '}
                  </div>
                </div>
                <div className={`d-flex g-3 justify-content-between col`}>
                  <div className={` h4 `}>數量:1</div>
                  <div className={` h4 `}>NT$8888</div>
                </div>
              </div>
            </div>
            <hr />
            <div className={`d-flex  g-0 gap-5 align-items-center py-4 `}>
              <div className={``}>
                <img
                  src="./images/cart-1.jpeg"
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
                  草莓有夠派
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
                  <div className={`h5`}>
                    6吋 4層 草莓內陷 派皮加厚 表面巧克力 去冰微糖{' '}
                  </div>
                </div>
                <div className={`d-flex g-3 justify-content-between col`}>
                  <div className="h4">數量:1</div>
                  <div className={` h4 `}>NT$8888</div>
                </div>
              </div>
            </div>
            <hr />
          </div>
          <div className={`col-sm  class-area`}>
            <div
              className={` d-flex gap-2  class-tittle ${styles['border-borwn']} py-3`}
            >
              <div className={` h3`}>MACHI</div>
              <div className={` h3`}>課程</div>
              <div className={` h3`}>(3)</div>
            </div>
            <div className={`d-flex  g-0 gap-5 align-items-center py-4 m-0`}>
              <div className={``}>
                <img
                  src="./images/cart-1.jpeg"
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
                  手工土鳳梨酥體驗課程
                </div>
                <div className={`d-flex justify-content-start card-text col `}>
                  <div
                    className={`h5 d-inline mb-0`}
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    上課時間:
                  </div>
                  <div className={`h5 mb-0`}>2024/06/01 PM.11:00</div>
                </div>
                <div className={`d-flex justify-content-start card-text col `}>
                  <div
                    className={`h5 d-inline mb-0`}
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    地點:
                  </div>
                  <div className={`h5 mb-0`}>復興堡</div>
                </div>
                <div className={`d-flex g-3 justify-content-between col`}>
                  <div className={`h4`}>人數:3</div>
                  <div className={` h4 `}>NT$8888</div>
                </div>
              </div>
            </div>
            <hr />
            <div className={`d-flex  g-0 gap-5 align-items-center py-4 `}>
              <div className={``}>
                <img
                  src="./images/cart-1.jpeg"
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
                  手工土鳳梨酥體驗課程
                </div>
                <div className={`d-flex justify-content-start card-text col `}>
                  <div
                    className={`h5 d-inline mb-0`}
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    上課時間:
                  </div>
                  <div className={`h5 mb-0`}>2024/06/01 PM.11:00</div>
                </div>
                <div className={`d-flex justify-content-start card-text col `}>
                  <div
                    className={`h5 d-inline mb-0`}
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    地點:
                  </div>
                  <div className={`h5 mb-0`}>復興堡</div>
                </div>
                <div className={`d-flex g-3 justify-content-between col`}>
                  <div className={`h4`}>人數:3</div>
                  <div className={` h4 `}>NT$8888</div>
                </div>
              </div>
            </div>
            <hr />
          </div>
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
          <div className={`${styles['pay-content']} px-3 py-4 sticky-md-top mb-3 `}>
            <div className="h5">付款方式</div>
            <div
              className={`d-flex justify-content-between pb-3 ${styles['text-border-brown']} `}
            >
              <div className={`${styles['pay-button']} ${styles['h6']}`}>
                <RiCheckboxBlankCircleLine></RiCheckboxBlankCircleLine>銀行轉帳
              </div>
              <div className={`${styles['pay-button']} ${styles['h6']}`}>
                <RiCheckboxBlankCircleLine></RiCheckboxBlankCircleLine>信用卡
              </div>
              <div className={`${styles['pay-button']} ${styles['h6']}`}>
                <RiCheckboxBlankCircleLine></RiCheckboxBlankCircleLine>Line pay
              </div>
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
                  className={`form-control w-100 ${styles['form-control']} ${styles['cart-custom-bootstrap']}`}
                  placeholder="真實姓名"
                />
              </div>
              <div className="col-6">
                <input
                  type="text"
                  className={`form-control w-100 ${styles['form-control']} ${styles['cart-custom-bootstrap']}`}
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
                  className={`form-control w-100 ${styles['form-control']} ${styles['cart-custom-bootstrap']} `}
                  placeholder="請填寫完整地址"
                />
              </div>
            </div>
            <div className={`d-flex justify-content-between py-2`}>
              <div className={`${styles['h6']} `}>選擇優惠券</div>
              <div className={`${styles['coupon-button']} `}>
                <div className={`${styles['text']} `}>選擇</div>
              </div>
            </div>
            <div className={`d-flex justify-content-between py-2`}>
              <div className={`${styles['h6']} `}>運費</div>
              <div className={`${styles['h6']} `}>NT$ 1</div>
            </div>
            <div className={`d-flex justify-content-between py-2`}>
              <div className={`${styles['h6']} `}>商品總計</div>
              <div className={`${styles['h6']} `}>NT$ 8888</div>
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
              <div className={`${styles['cart-button']}`}>
                <div className={`${styles['text']}`}>前往結帳</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartPage1
