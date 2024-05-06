/* eslint-disable @next/next/no-img-element */
import ProductCard from '@/components/product/product-card'
import SortBox from '@/components/product/sort-box'
import { useEffect } from 'react'
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa'

export default function List() {
  // Toggle the side navigation
  useEffect(() => {
    // fix next issue
    if (typeof window !== 'undefined') {
      const sidebarToggle = document.body.querySelector('#sidebarToggle')

      if (sidebarToggle) {
        // 在localStorage中儲存目前sidebar情況
        if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
          document.body.classList.toggle('sb-sidenav-toggled')
        }

        sidebarToggle.addEventListener('click', (event) => {
          event.preventDefault()

          document.body.classList.toggle('sb-sidenav-toggled')

          localStorage.setItem(
            'sb|sidebar-toggle',
            document.body.classList.contains('sb-sidenav-toggled')
          )
        })
      }
    }
  }, [])

  return (
    <>
      <SortBox />
      {/* 左側篩選 */}
      <div className="row">
        <div className="col-sm-12">
          <div className="d-flex" id="wrapper">
            <div className="bg-white me-3" id="sidebar-wrapper">
              <div className="scroll sticky-md-top">
                <div className="cats">
                  <div>
                    <button type="button" className="btn">
                      塔派甜點
                    </button>
                  </div>
                  <div>
                    <button type="button" className="btn">
                      蛋糕
                    </button>
                  </div>
                  <div>
                    <button type="button" className="btn">
                      餅乾
                    </button>
                  </div>
                  <div>
                    <button type="button" className="btn">
                      精緻點心
                    </button>
                  </div>
                </div>

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
                        塔派甜點
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseOne"
                      className="accordion-collapse collapse"
                    >
                      <div className="accordion-body px-1">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            塔
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckChecked"
                          >
                            派
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckChecked"
                          >
                            巧克力
                          </label>
                        </div>
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
                        價格範圍
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseThree"
                      className="accordion-collapse collapse"
                    >
                      <div className="accordion-body px-1">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            $500以下
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckChecked"
                          >
                            $501 - $1,000
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckChecked"
                          >
                            $1,001 - $2,000
                          </label>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  <label htmlFor="range" className="form-label mt-3">
                    價格區間
                  </label>
                  <input
                    type="range"
                    className="form-range"
                    min={10}
                    max={3000}
                    step="10"
                    id="range"
                  />
                  {/* <div className="col-md-3 hidden-md">
                    <ul id="collection_menu_shelf_top" className="sidebar">
                      <li>
                        <ul
                          id="collection_menu_shelf_second_1"
                          className="collapse_collection_menu_1 shelf_second collapse"
                          style={{}}
                        >
                          <li>
                            <Link href={{
                              pathname: '/collections/allcollection',
                              query
                              }}/>所有商品
                          </li>
                          <li>
                            <a href="/products/withurbanbotany">遊牧晨花課</a>
                          </li>
                          <li>
                            <a href="/collections/fruit_cake">水果味NO.1</a>
                          </li>
                          <li>
                            <a href="/collections/chiffons">人氣戚風蛋糕</a>
                          </li>
                          <li>
                            <a href="/collections/鍾愛巧克力">鍾愛巧克力</a>
                          </li>
                          <li>
                            <a href="/collections/輕盈慕斯">輕盈慕斯</a>
                          </li>
                          <li>
                            <a href="/collections/不簡單磅蛋糕">不簡單磅蛋糕</a>
                          </li>
                          <li>
                            <a href="/collections/dacquoise">達克瓦茲全口味</a>
                          </li>
                          <li>
                            <a href="/collections/all_cookies">最愛吃餅乾</a>
                          </li>
                          <li>
                            <a href="https://www.tentendenden.com/collections/others">周邊商品</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/collections/matcha">獻給抹茶迷</a>
                      </li>
                      <li>
                        <a href="/products/dacquoise_package">達克瓦茲好茶禮盒</a>
                      </li>
                      <li>
                        <a href="/collections/happybirthday">生日蛋糕</a>
                      </li>
                      <li>
                        <a href="/collections/delivery_cat">安心宅配專區</a>
                      </li>
                    </ul>
                  </div> */}
                </div>
              </div>
            </div>
            {/* 商品列表 */}
            <div id="page-content-wrapper">
              <div className="container-fluid">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
                {/* 切換頁面按鈕 */}
                <div className="pagination mb-5">
                  <button className="page-btn">
                    <FaCaretLeft />
                  </button>
                  <button className="page-btn">1</button>
                  <button className="page-btn">2</button>
                  <button className="page-btn">3</button>
                  <button className="page-btn">
                    <FaCaretRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
