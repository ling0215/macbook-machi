import React from 'react'
import { useCart } from '@/hooks/use-cart-state'
import styles from './page1.module.scss'
import '@/node_modules/bootstrap/scss/bootstrap.scss'

<<<<<<< HEAD
import '@/node_modules/bootstrap/scss/bootstrap.scss'
=======
const initialProducts = [
  {
    id: 0,
    name: '小熊餅乾',
    count: 1,
  },
  {
    id: 1,
    name: '巧克力豆餅乾',
    count: 5,
  },
  {
    id: 2,
    name: '小老板海苔',
    count: 2,
  },
]
>>>>>>> cart_dev

const CartPage1 = ({ onClick }) => {
  const handleClick = () => {
    history.push('/another-page') // 导航到路径为 '/another-page' 的页面
  }
  const { cart, items, decrement, increment, removeItem } = useCart()
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
          <div className={`${styles['custom-checkbox']}`}></div>
          <div className={` h3`}>MACHI</div>
          <div className={` h3`}>商品</div>
          <div className={` h3`}>(3)</div>
        </div>
        <div className={`d-flex  g-0 gap-5 align-items-center py-4   `}>
          <div className={`${styles['custom-checkbox']}`}></div>
          <div className={``}>
            <img
              src="https://media.nownews.com/nn_media/thumbnail/2024/01/1705794711197-849ae9783db744c998f9504de98f12b4-678x518.webp?unShow=false&waterMark=false"
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
              草莓有夠派
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
            <div className={`d-flex g-3 justify-content-between col addbuton`}>
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
                >
                  -
                </button>
                <button
<<<<<<< HEAD
                  className={` btn btn-outline-light  text-primary-dark h4  mb-0`}
=======
                  className={` btn btn-outline-secondary  text-primary-dark h4 `}
>>>>>>> cart_dev
                >
                  4
                </button>
                <button
<<<<<<< HEAD
                  className={` btn btn-outline-light text-primary-dark h4  mb-0`}
=======
                  className={` btn btn-outline-secondary text-primary-dark h4 `}
>>>>>>> cart_dev
                  style={{ width: '28px' }}
                >
                  +
                </button>
              </div>
              <div className={` h4 `}>NT$8888</div>
            </div>
          </div>
        </div>
        <hr />
<<<<<<< HEAD

        {items.map((item) => (
          <div
            className={`d-flex  g-0 gap-5 align-items-center py-4 ${styles['text-border-grey']}`}
            key={item.id}
          >
            <div className={`${styles['custom-checkbox']}`}></div>
            <div className={``}>
              <img
                src={item.image}
                alt={item.name}
                style={{ width: 140, height: 140 }}
              />
=======
        <div className={`d-flex  g-0 gap-5 align-items-center py-4 `}>
          <div className={`${styles['custom-checkbox']}`}></div>
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
              className={`card-title card-text d-flex justify-content-between text-brown col h4`}
            >
              草莓有夠派
              <span>
                <i className={`bi bi-trash3 text-black`}></i>
              </span>
>>>>>>> cart_dev
            </div>
            <div
              className={`${styles['card-body']} align-content-start p-0  flex-grow-1 d-flex flex-column`}
            >
              <div
                className={`card-title card-text d-flex justify-content-between text-brown col h4`}
              >
<<<<<<< HEAD
                {item.name}
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
                    NT${item.price}
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
                    onClick={() => decrement(item.id)} // 减少数量的点击事件
                  >
                    -
                  </button>
                  <button
                    className={` btn btn-outline-light  text-primary-dark h4  mb-0`}
                  >
                    {item.quantity}
                  </button>
                  <button
                    className={` btn btn-outline-light text-primary-dark h4  mb-0`}
                    style={{ width: '28px' }}
                    onClick={() => increment(item.id)} // 增加数量的点击事件
                  >
                    +
                  </button>
                </div>
                <div className={` h4 `}>小計NT${item.subtotal}</div>
=======
                <button
                  className={` btn btn-outline-secondary text-primary-dark h4`}
                  style={{ width: '28px' }}
                >
                  -
                </button>
                <button
                  className={` btn btn-outline-secondary  text-primary-dark h4`}
                >
                  4
                </button>
                <button
                  className={` btn btn-outline-secondary text-primary-dark h4`}
                  style={{ width: '28px' }}
                >
                  +
                </button>
>>>>>>> cart_dev
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={`col-sm cart-area class-area`}>
        <div
          className={`mb-3 d-flex gap-2  class-tittle ${styles['border-borwn']} py-4`}
        >
          <div className={`${styles['custom-checkbox']}`}></div>
          <div className={` h3`}>MACHI</div>
          <div className={` h3`}>課程</div>
          <div className={` h3`}>({Object.keys(items).length})</div>
        </div>
        <div className={`d-flex  g-0 gap-5 align-items-center py-4`}>
          <div className={`${styles['custom-checkbox']}`}></div>
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
<<<<<<< HEAD
=======
            <div
              className={`card-title card-text d-flex justify-content-between text-brown col h4`}
            >
              手工土鳳梨酥體驗課程
              <span>
                <i className={`bi bi-trash3 text-black`}></i>
              </span>
            </div>
>>>>>>> cart_dev
            <div
              className={`card-title card-text d-flex justify-content-between text-brown col h4`}
            >
<<<<<<< HEAD
=======
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
        <div className={`d-flex  g-0 gap-5 align-items-center py-4 `}>
          <div className={`${styles['custom-checkbox']}`}></div>
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
              className={`card-title card-text d-flex justify-content-between text-brown col h4`}
            >
>>>>>>> cart_dev
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
          <button className={`${styles['cart-button']}`} onClick={onClick}>
            <div className={`${styles['cart-button-text']}`}>前往結帳</div>
          </button>
        </div>
      </div>
    </>
  )
}

export default CartPage1
