/* eslint-disable @next/next/no-img-element */
import ProductCard from '@/components/product/product-card'
import { useEffect } from 'react'
import { IoCartOutline, IoHeartOutline } from 'react-icons/io5'
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa'

// import { Range } from 'react-range'
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
      <div className="row mt-2 mb-3">
        <h5 className="card-text d-flex justify-content-between align-items-center">
          <div className="row mt-2 mb-3">
            <h5 className="card-text d-flex justify-content-between align-items-center">{/* padding-left: 22px */}
            
              <div className="input-group">
                <input
                  type="text"
                  placeholder="請輸入關鍵字"
                  className="form-control"
                  style={{
                    width: '150px',
                    height: '40px',
                    backgroundColor: 'white',
                    borderColor: 'light-brown',
                  }}
                />
                <span className="input-group-text">
                  <i className="bi bi-search"></i>
                </span>
              </div>
            </h5>
          </div>
          <div className="d-flex p-2 justify-content-end align-items-center">
            <div className="toolbar">
              <span className="ps-3">塔派甜點 (20)</span>
            </div>

            {/* <div className="toolbar">
              <button className="btn" id="sidebarToggle">
                隱藏篩選條件 <i className="bi bi-toggles"></i>
              </button>
            </div>
            <div className="dropdown">
              <button
                className="btn dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                排序依據
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    最新
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    價格：由高至低
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    價格：由低至高
                  </a>
                </li>
              </ul>
            </div> */}

            {/* 排序切換顯示 */}
            <div className="viewtype">
              <button className="btn" id="gridview">
                <i className="bi bi-grid"></i>
              </button>
              <button className="btn" id="listview">
                <i className="bi bi-list"></i>
              </button>
            </div>
          </div>
        </h5>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="d-flex" id="wrapper">
            <div className="bg-white me-3" id="sidebar-wrapper">
              <div className="scroll">
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
                        口味選擇
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
                            水果
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
                            抹茶
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
                  <div className="accordion-item">
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
                  </div>
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
                </div>
              </div>
            </div>

            <div id="page-content-wrapper">
              <div className="container-fluid">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                  {/* <div className="col">
                    <div className="card w-350 no-border f-16">
                      <img
                        src="/images/product/list/strawberry-tart-01.jpg"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body no-space-x">
                        <p className="card-text note-text">新品上市</p>
                        <p className="card-text">小山園草莓塔</p>
                        <p className="card-text type-text">塔派甜點</p>
                        <p className="card-text type-text mb-2">3 種顏色</p>
                        <span className="h-currency bold h-now">$480</span>
                      </div>
                    </div>
                  </div> */}
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
