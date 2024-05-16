import React, { useState } from 'react'
import Carousel from '@/components/product/product-detail/carousel'
import { IoCartOutline, IoHeartOutline } from 'react-icons/io5'
import ProductIntro from '@/components/product/product-detail/product-intro'
import { useCart } from '@/hooks/use-cart-state'
import { checkAuth } from '@/services/user'
import { addToCart } from '@/services/cart'

export default function ProductDetail(product) {
  const newProduct = product.product
  const [size, setSize] = useState(
    newProduct.product_subtitle_middle === '9吋' ? '6吋' : ''
  )
  const changeSize = (newSize) => {
    setSize(newSize)
  }
  const [quantity, setQuantity] = useState(1)

  const price =
    size === '9吋'
      ? newProduct.product_price_middle
      : newProduct.product_price_small

  const { cart, items, decrement, increment, removeItem } = useCart()

  return (
    <>
      <div className="row mt-5 mx-2 d-flex justify-content-center ">
        <div className="col-md-5">
          <div className="position-sticky" style={{ top: '2rem' }}>
            <Carousel pid={newProduct.product_id} />
          </div>
        </div>
        <div className="col-md-6 ms-3 product-info">
          <h4 className="text-primary-dark mt-2">{newProduct.product_name}</h4>
          <p className="text-muted">蛋糕</p>
          <p className="product-desc mb-4">{newProduct.product_description}</p>
          {newProduct.product_subtitle_middle === '9吋' ? (
            <div className="mb-4">
              <p className={`text-primary-dark`}>尺寸</p>
              <button
                className={`btn ${
                  size === '6吋' ? 'btn-brown text-white' : 'btn-outline-brown'
                } col-md-2 me-3`}
                onClick={() => changeSize('6吋')}
              >
                6吋
              </button>
              <button
                className={`btn ${
                  size === '9吋' ? 'btn-brown text-white' : 'btn-outline-brown'
                } col-md-2`}
                onClick={() => changeSize('9吋')}
              >
                9吋
              </button>
            </div>
          ) : (
            <div className="my-5"></div>
          )}
          {/* 數量按鈕 */}
          <div
            className={`d-flex g-3 justify-content-between align-items-center mb-4 addbuton`}
          >
            <div
              className={`btn-group d-flex`}
              role={`group`}
              aria-label={`Basic mixed styles example`}
              style={{
                width: '128px',
                height: '48px',
              }}
            >
              <button
                className={` btn btn-outline-light text-primary-dark h4 mb-0 border-brown`}
                style={{ width: '28px' }}
                onClick={() => {
                  if (quantity > 1) {
                    setQuantity(quantity - 1) // 只有當 quantity 大於 1 時才減少數量
                  }
                }}
              >
                -
              </button>
              <button
                className={` btn btn-outline-light text-primary-dark h4 mb-0 border-brown`}
              >
                {quantity}
              </button>
              <button
                className={` btn btn-outline-light text-primary-dark h4 mb-0 border-brown`}
                style={{ width: '28px' }}
                onClick={() => setQuantity(quantity + 1)} // 增加數量的點擊事件
              >
                +
              </button>
            </div>
            {/* <div className={` h4 `}>小計NT${item.subtotal}</div> */}
            <div className="col-md-5 d-flex justify-content-center align-items-center text-primary-dark">
              <p className="pe-2">售價</p>
              <h4 className="text-primary-dark">{price}</h4>
            </div>
          </div>

          <div className="mb-4 d-flex justify-content-center align-items-center ">
            <div className="col-6 pe-2">
              <button
                className="btn btn-outline-brown btn-lg w-100 cartBtn"
                onClick={async () => {
                  const response = await checkAuth()
                  if (response.data.status === 'success') {
                    const uid = response.data.data.user.user_id
                    const data = {
                      type: 'product',
                      id: newProduct.product_id,
                      name: newProduct.product_name, // 產品名稱
                      price: price, // 產品價格
                      quantity: quantity, // 數量
                      subtitle: size, // 產品副標題
                    }
                    addToCart(uid, data)
                      .then((response) => {
                        console.log('添加成功:', response)
                      })
                      .catch((error) => {
                        console.error('添加失敗:', error)
                      })
                  } else {
                    console.log('用戶未登入')
                    // 這裡可以添加提示用戶登入的程式碼
                  }
                }}
              >
                <IoCartOutline className="fs-3 text-brown" /> 加入購物車
              </button>
            </div>
            <div className="col-6 ps-2">
              <button className="btn btn-brown text-white btn-lg w-100 buynowBtn">
                立即購買
              </button>
            </div>
          </div>
          <button className="btn btn-outline-gary col-md-6 text-start text-primary-dark">
            <IoHeartOutline className="fs-3 text-primary-dark" /> 加入追蹤清單
          </button>
        </div>
      </div>
      <div className="row mt-5">
        <ProductIntro pid={newProduct.product_description_full} />
      </div>

      <style jsx>{`
        .btn-outline-brown:hover {
          background-color: var(--brown);
          color: white; 
        }
      `}</style>
    </>
  )
}
