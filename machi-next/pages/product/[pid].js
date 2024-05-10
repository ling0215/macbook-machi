import React from 'react'
import Carousel from '@/components/product/carousel'
import {IoCartOutline, IoHeartOutline} from 'react-icons/io5'
import ProductIntro from '@/components/product/product-detail/product-intro'
import { useCart } from '@/hooks/use-cart-state'



export default function Detail() {
//   const detail = ({ onClick }) => {
//     const handleClick = () => {
//       history.push('/another-page') // 导航到路径为 '/another-page' 的页面
//     }
//     const { cart, items, decrement, increment, removeItem } = useCart()
       const { cart, items, decrement, increment, removeItem } = useCart()
  return (
    <>
      <div className="row mt-5 mx-2">
        <div className="col-sm-5">
          <div className="position-sticky" style={{ top: '2rem' }}>
            <Carousel />
          </div>
        </div>
        <div className="col-sm-5">
          <h4>鹿野紅烏龍戚風蛋糕</h4>
          <p>蛋糕</p>
          <h4>$850</h4>
          <p className="product-desc mb-4">
            林叔叔在台東鹿野的冠軍茶廠出產的紅烏龍茶葉，好多年都得了金賞，重發酵的紅烏龍，茶味鮮明溫潤帶有一縷天然果香，是我們私下很愛喝的台灣茶之一，所以決定用這個我們都好喜歡的紅烏龍，做成淡雅內斂的戚風蛋糕；若賦予她生命，她絕對是位氣質出眾的女孩。裝飾意象為台灣茶花，吃蛋糕的同時別忘了台灣有世界頂級的好茶！
            (目前已改版為紅烏龍茶香緹內餡，已不再附上鮮奶油與紅烏龍茶淋醬)
          </p>
          <div className="mb-4">
            <p>尺寸</p>
            <button className="btn btn-outline-brown col-2 me-3">6吋</button>
            <button className="btn btn-outline-brown col-2" >9吋</button>
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
                      // onClick={() => decrement(item.id, item.type)} // 减少数量的点击事件
                    >
                      -
                    </button>
                    <button
                      className={` btn btn-outline-light  text-primary-dark h4  mb-0`}
                    >
                      {/* {item.quantity} */}
                    </button>
                    <button
                      className={` btn btn-outline-light text-primary-dark h4  mb-0`}
                      style={{ width: '28px' }}
                      // onClick={() => increment(item.id, item.type)} // 增加数量的点击事件
                    >
                      +
                    </button>
                  </div>
                  {/* <div className={` h4 `}>小計NT${item.subtotal}</div> */}
                </div>
          {/* 數量按鈕 */}
          {/* <div
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
          </div> */}

          <div className="mb-4">
            <button className="btn btn-outline-brown col-5 me-3">
              <IoCartOutline style={{ fontSize: "20px", color: "light-brown" }} /> 加入購物車</button>
            <button className="btn btn-brown col-5">立即購買</button>
          </div>
          <button className="btn btn-outline-gary col-3 outline-none">
            <IoHeartOutline style={{ fontSize: "24px", color: "light-brown" }} /> 我的最愛
          </button>
          <div className="product-info my-5">
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    蛋糕尺寸
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body px-1">
                    <ul>
                      <li>6吋 - 13cm(Φ)x7cm(h)</li>
                      <li>9吋 (產品以手工製作，尺寸僅供參考，略有誤差屬正常現象)</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwo"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseTwo"
                  >
                    免費寄送及退貨
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseTwo"
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body px-1">
                    <p>訂單金額滿新臺幣 4,500 元即享免費標準運送服務</p>
                    <p>
                      臺北市:標準運送的商品可於 2-5 個工作天內送達
                      快遞運送的商品可於 2-3 個工作天內送達
                    </p>
                    <p>
                      其它縣市: 標準運送的商品可於 3-6 個工作天內送達
                      快遞運送的商品可於 3-5 個工作天內送達
                    </p>
                    <p>訂單皆於星期一至星期五之間處理與寄送 (國定假日除外)</p>
                    <p>會員享免費退貨服務免費退貨。退貨政策例外情況。</p>
                  </div>
                </div>
              </div>
              {/* <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseThree"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseThree"
                  >
                    評價(370){'  '}
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseThree"
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body px-1">
                    <div className="commet">
                      <div className="rating">
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                      </div>
                      <p>great shoes overall Ella579458843 - 2023年6月19日</p>
                      <p>
                        overall one of my favorite shoes at the moment. go with
                        any of my outfits, i can wear sweatpants with them or to
                        a nice dinner with a dress. the only “problem” i have
                        with them is that they’re difficult to break into even
                        if you half size up, it took me a while to break into
                        them. but overall i recommend these shoes if you just
                        want some great shoes for any occasion.... 更多
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5 mx-2">
        
      <ProductIntro />

        <div
          data-bs-spy="scroll"
          data-bs-target="#navbar"
          data-bs-offset="0"
          class="scrollspy-example"
          tabindex="0"
        >
          
        </div>
        {/* <div className="col-sm-12">
          <h4 className="text-center mb-5">探索 Nike Air Force 1005 女鞋</h4>
          <img
            className="w-100  my-5 "
            src="/images/product/detail/info-1.webp"
          />
          <p className="text-center my-5 font-weight-light fs-4">
            鞋面採用車縫皮革裝飾片，全面提升經典指標性、耐久性和支撐力。
          </p>
          <img
            className="w-100  my-5 "
            src="/images/product/detail/info-2.webp"
          />
          <p className="text-center my-5 font-weight-light fs-4">
            低筒版型，造型俐落簡練。
          </p>
        </div> */}
      </div>
    </>
  )
}
