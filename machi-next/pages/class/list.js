import { useEffect } from 'react'
import { CiHeart } from "react-icons/ci";

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
          <span className="ps-3">Nike Air Force 1 (91)</span>
          <div className="d-flex p-2 justify-content-end align-items-center">
            <div className="toolbar">
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
                  <a className="dropdown-item" href="#" >
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
                  {/* 擺搜尋 */}
                  <div>
                    <button type="button" className="btn">
                      運動生活
                    </button>
                  </div>
                  <div>
                    <button type="button" className="btn">
                      當季新品
                    </button>
                  </div>
                  <div>
                    <button type="button" className="btn">
                      促銷
                    </button>
                  </div>
                </div>

                <div
                  className="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  {/* 擺篩選列 */}
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
                        類別
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
                            蛋糕捲
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
                            塔派
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
                            泡芙
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
                        data-bs-target="#panelsStayOpen-collapseTwo"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseTwo"
                      >
                        顏色
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseTwo"
                      className="accordion-collapse collapse"
                    >
                      <div className="accordion-body px-1">
                        <div className="d-flex flex-row justify-content-around mb-2">
                          <div className="p-2">
                            <div className="d-flex flex-column">
                              <div>
                                <button
                                  type="button"
                                  className="btn btn-primary btn-circle"
                                ></button>
                              </div>
                              <div className="color-f">紫色</div>
                            </div>
                          </div>
                          <div className="p-2">
                            <div className="d-flex flex-column">
                              <div>
                                <button
                                  type="button"
                                  className="btn btn-primary btn-circle"
                                ></button>
                              </div>
                              <div className="color-f">紫色</div>
                            </div>
                          </div>
                          <div className="p-2">
                            <div className="d-flex flex-column">
                              <div>
                                <button
                                  type="button"
                                  className="btn btn-primary btn-circle"
                                ></button>
                              </div>
                              <div className="color-f">紫色</div>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex flex-row justify-content-around mb-2">
                          <div className="p-2">
                            <div className="d-flex flex-column">
                              <div>
                                <button
                                  type="button"
                                  className="btn btn-primary btn-circle"
                                ></button>
                              </div>
                              <div className="color-f">紫色</div>
                            </div>
                          </div>
                          <div className="p-2">
                            <div className="d-flex flex-column">
                              <div>
                                <button
                                  type="button"
                                  className="btn btn-primary btn-circle"
                                ></button>
                              </div>
                              <div className="color-f">紫色</div>
                            </div>
                          </div>
                          <div className="p-2">
                            <div className="d-flex flex-column">
                              <div>
                                <button
                                  type="button"
                                  className="btn btn-primary btn-circle"
                                ></button>
                              </div>
                              <div className="color-f">紫色</div>
                            </div>
                          </div>
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
                            $1,500以下
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
                            $1,500 - $3,000
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
                            $3,001 - $5,999
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="page-content-wrapper">
              <div className="container-fluid">
                <div className="row row-cols-1 row-cols-md-3 g-4 d-flex flex-column">
                  <div class="card mb-3 w-100  no-border ">
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img
                          src="/images/product/list/p1-thumb.webp"
                          className="card-img-top"
                          alt="..."
                          style={{
      width: '100%', height: '80%', 
    }}/>
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="car d-title">抹茶蛋糕卷  <CiHeart/></h5>
                          
                          <p class="card-text">
                            課堂地點:台北市北投區裕民六路130號1樓
                          </p>
                          <p class="card-text">課堂日期:2024/04/03</p>
                          <p class="card-text">講師:呂昇達</p>
                          <p class="card-text">
                            <small class="text-muted">
                              呂昇達老師在這次課程之中使用了自大正時代創立至今，具有百年歷史的《葵製茶》！以有機抹茶《蒼竹》讓同學們在課程中體驗抹茶的魅力
                            </small>
                          </p>

                          <p class="text-end"  style={{
      marginTop: '50px',
    }}>
                            $2000<button style={{
      border: 'none', borderRadius:'10px', fontSize: '18px',
    }}>課程詳情</button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card mb-3 w-100  no-border ">
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img
                          src="/images/product/list/p1-thumb.webp"
                          className="card-img-top"
                          alt="..."
                          style={{
      width: '100%', height: '80%', 
    }}/>
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="car d-title">抹茶蛋糕卷  <CiHeart/></h5>
                          
                          <p class="card-text">
                            課堂地點:台北市北投區裕民六路130號1樓
                          </p>
                          <p class="card-text">課堂日期:2024/04/03</p>
                          <p class="card-text">講師:呂昇達</p>
                          <p class="card-text">
                            <small class="text-muted">
                              呂昇達老師在這次課程之中使用了自大正時代創立至今，具有百年歷史的《葵製茶》！以有機抹茶《蒼竹》讓同學們在課程中體驗抹茶的魅力
                            </small>
                          </p>

                          <p class="text-end"  style={{
      marginTop: '50px',
    }}>
                            $2000<button style={{
      border: 'none', borderRadius:'10px', fontSize: '18px',
    }}>課程詳情</button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card mb-3 w-100  no-border ">
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img
                          src="/images/product/list/p1-thumb.webp"
                          className="card-img-top"
                          alt="..."
                          style={{
      width: '100%', height: '80%', 
    }}/>
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="car d-title">抹茶蛋糕卷  <CiHeart/></h5>
                          
                          <p class="card-text">
                            課堂地點:台北市北投區裕民六路130號1樓
                          </p>
                          <p class="card-text">課堂日期:2024/04/03</p>
                          <p class="card-text">講師:呂昇達</p>
                          <p class="card-text">
                            <small class="text-muted">
                              呂昇達老師在這次課程之中使用了自大正時代創立至今，具有百年歷史的《葵製茶》！以有機抹茶《蒼竹》讓同學們在課程中體驗抹茶的魅力
                            </small>
                          </p>

                          <p class="text-end"  style={{
      marginTop: '50px',
    }}>
                            $2000<button style={{
      border: 'none', borderRadius:'10px', fontSize: '18px',
    }}>課程詳情</button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card mb-3 w-100  no-border ">
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img
                          src="/images/product/list/p1-thumb.webp"
                          className="card-img-top"
                          alt="..."
                          style={{
      width: '100%', height: '80%', 
    }}/>
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="car d-title">抹茶蛋糕卷  <CiHeart/></h5>
                          
                          <p class="card-text">
                            課堂地點:台北市北投區裕民六路130號1樓
                          </p>
                          <p class="card-text">課堂日期:2024/04/03</p>
                          <p class="card-text">講師:呂昇達</p>
                          <p class="card-text">
                            <small class="text-muted">
                              呂昇達老師在這次課程之中使用了自大正時代創立至今，具有百年歷史的《葵製茶》！以有機抹茶《蒼竹》讓同學們在課程中體驗抹茶的魅力
                            </small>
                          </p>

                          <p class="text-end"  style={{
      marginTop: '50px',
    }}>
                            $2000<button style={{
      border: 'none', borderRadius:'10px', fontSize: '18px',
    }}>課程詳情</button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
