import React, { useState } from 'react'
import { useCart } from '@/hooks/use-cart-state'
import styles from './page1.module.scss'
import '@/node_modules/bootstrap/scss/bootstrap.scss'
import '@/node_modules/bootstrap/scss/bootstrap.scss'
import { FaCheck } from 'react-icons/fa6'

const CartPage1 = ({ onClickPage2 }) => {
  const { cart, items, decrement, increment, removeItem } = useCart()

  // 商品選中狀態
  const [itemChecked, setItemChecked] = useState({})
  // 全選/全不選狀態
  const [selectAll, setSelectAll] = useState(false)

  // 商品 checkbox 點擊事件處理函數
  const handleItemCheck = (itemId) => {
    const newCheckedItems = {
      ...itemChecked,
      [itemId]: !itemChecked[itemId],
    }
    setItemChecked(newCheckedItems)

    // 更新全選的狀態
    const allItemsSelected = Object.values(newCheckedItems).every(Boolean)
    setSelectAll(allItemsSelected)
  }

  // 全選/全不選 checkbox 點擊事件處理函數
  const handleSelectAll = () => {
    const newSelectAll = !selectAll
    setSelectAll(newSelectAll)
    // 更新所有商品的選中狀態
    const newCheckedItems = {}
    items.forEach((item) => {
      newCheckedItems[item.id] = newSelectAll
    })
    setItemChecked(newCheckedItems)
    console.log(newCheckedItems)
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
            className={`d-flex bg-brown align-items-center justify-content-center  `}
            style={{ height: 40, width: 40, borderRadius: '50%' }}
          >
            <div className={`h4 mb-0 text-white `}>1</div>
          </div>
          <div className={`h4 mb-0 ${styles['text-border-brown']}  text-brown`}>
            購物車資訊
          </div>
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
      <div className={`col-sm cart-area product-area`}>
        <div
          className={`mb-3 d-flex gap-2  product-tittle ${styles['border-borwn']} py-4`}
        >
          <button
            className={`${styles['custom-checkbox']} ${
              selectAll ? styles['custom-checkbox-active'] : ''
            }`}
            onClick={handleSelectAll}
          >
            {selectAll && <FaCheck size={20} className={styles['checkgood']} />}
          </button>
          <div className={` h3`}>MACHI</div>
          <div className={` h3`}>商品</div>
          <div className={` h3`}>(3)</div>
        </div>

        {items.map((item) => (
          <div
            className={`d-flex  g-0 gap-5 align-items-center py-4 ${styles['text-border-grey']}`}
            key={item.product_id}
          >
            <button
              className={`${styles['custom-checkbox']} ${
                itemChecked[item.id] ? styles['custom-checkbox-active'] : ''
              }`}
              onClick={() => handleItemCheck(item.id)}
            >
              {itemChecked[item.id] && (
                <FaCheck size={20} className={styles['checkgood']} />
              )}
            </button>
            <div className={``}>
              <img
                src={item.image}
                alt={item.name}
                style={{ width: 140, height: 140 }}
              />
            </div>
            <div
              className={`${styles['card-body']} align-content-start p-0  flex-grow-1 d-flex flex-column`}
            >
              <div
                className={`card-title card-text d-flex justify-content-between text-brown col h4`}
              >
                {item.prodcut_name}
                <div>
                  <button
                    className={`bi bi-trash3 text-black btn btn-light`}
                    onClick={() => removeItem(item.id)}
                  ></button>
                </div>
              </div>
              <div
                className={`d-flex justify-content-between card-text col `}
                style={{ gap: '0.5rem' }}
              >
                <div className="d-fex">
                  <div className={`h5 mr-1`}>規格:</div>
                  <div className={`h5`}>{item.specification}</div>
                </div>
                <div className="d-fex row justify-content-end">
                  <div
                    className={`h5 mr-1 col d-inline px-0`}
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    單價:
                  </div>
                  <div
                    className={`h5 col d-inline`}
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    NT${item.product_price}
                  </div>
                </div>
              </div>
              <div
                className={`d-flex g-3 justify-content-between col addbuton`}
              >
                <div
                  className={`btn-group d-flex   `}
                  role={`group`}
                  aria-label={`Basic mixed styles example `}
                  style={{
                    width: '128px',
                    height: '48px',
                    border: '1px solid #ab927d;',
                  }}
                >
                  <button
                    className={` btn btn-outline-light text-primary-dark h4 mb-0`}
                    style={{ width: '28px' }}
                    onClick={() => decrement(item.product_id)} // 减少数量的点击事件
                  >
                    -
                  </button>
                  <button
                    className={` btn btn-outline-light  text-primary-dark h4  mb-0`}
                  >
                    {item.product_count}
                  </button>
                  <button
                    className={` btn btn-outline-light text-primary-dark h4  mb-0`}
                    style={{ width: '28px' }}
                    onClick={() => increment(item.product_id)} // 增加数量的点击事件
                  >
                    +
                  </button>
                </div>
                <div className={` h4 `}>小計NT${item.subtotal}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={`col-sm cart-area class-area`}>
        <div
          className={`mb-3 d-flex gap-2  class-tittle ${styles['border-borwn']} py-4`}
        >
          <button
            className={`${styles['custom-checkbox']}`}
            onClick={() => {}}
          ></button>
          <div className={` h3`}>MACHI</div>
          <div className={` h3`}>課程</div>
          <div className={` h3`}>({Object.keys(items).length})</div>
        </div>
        <div className={`d-flex  g-0 gap-5 align-items-center py-4`}>
          <button className={`${styles['custom-checkbox']}`}></button>
          <div className={``}>
            <img
              src="/images/cart-test/cookie2.jpg"
              className={`product-img-1`}
              style={{ width: 140, height: 140 }}
            />
          </div>
          <div
            className={`${styles['card-body']} align-content-start p-0  flex-grow-1 d-flex flex-column`}
          >
            <div
              className={`card-title card-text d-flex justify-content-between text-brown col h4`}
            >
              手工土鳳梨酥體驗課程
              <div>
                <i className={`bi bi-trash3 text-black btn btn-light`}></i>
              </div>
            </div>
            <div
              className={`d-flex justify-content-start card-text col `}
              style={{ gap: '0.5rem' }}
            >
              <div className={`h5 mr-1`}>規格:</div>
              <div className={`h5`}>
                6吋 4層 草莓內陷 派皮加厚 表面巧克力 去冰微糖{' '}
              </div>
            </div>
            <div className={`d-flex g-3 justify-content-between col`}>
              <div className={`h4`}>人數:3</div>
              <div className={` h4 `}>NT$8888</div>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div className={`d-flex row justify-content-end g-0 `}>
        <div className={` py-4`} style={{ width: '290px' }}>
          <div className={`d-flex justify-content-between  pb-3`}>
            <div className={`h4`}>商品數量</div>
            <div className={`h4`}>6</div>
          </div>
          <div className={`d-flex justify-content-between`}>
            <div className={`h4`}>小計</div>
            <div className={`h4`}>88888</div>
          </div>
        </div>
        <div className={`d-flex justify-content-end pb-5`}>
          <button className={`${styles['cart-button']}`} onClick={onClickPage2}>
            <div className={`${styles['cart-button-text']}`}>前往結帳</div>
          </button>
        </div>
      </div>
    </>
  )
}

export default CartPage1
