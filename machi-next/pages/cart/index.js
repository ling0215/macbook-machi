import React from 'react'

export default function CartIndex() {
  return (
    <>
      <div
        className="row mt-0 d-flex  position-relative g-0 "
        style={{ maxWidth: 960, left: '50%', transform: 'translateX(-50%)' }}
      >
        <div className="col d-flex gap-1 align-items-center justify-content-start  ">
          <div
            className="d-flex bg-brown align-items-center justify-content-center  "
            style={{
              height: 40,
              width: 40,
              borderRadius: '50%',
            }}
          >
            <div className="h4 mb-0 text-white ">1</div>
          </div>
          <div className="h4 mb-0  border-bottom  text-brown ">購物車資訊</div>
        </div>
        <div className="col d-flex align-items-center justify-content-center">
          <div
            className="d-flex bg-grey justify-content-center align-items-center "
            style={{ height: 40, width: 40, borderRadius: '50%' }}
          >
            <div className="h4 mb-0 text-white d-flex   ">2</div>
          </div>
          <div className="h4 mb-0   text-grey ">確認及填寫</div>
        </div>
        <div className="col d-flex align-items-center justify-content-end">
          <div
            className="d-flex bg-grey justify-content-center align-items-center "
            style={{ height: 40, width: 40, borderRadius: '50%' }}
          >
            <div className="h4 mb-0 text-white d-flex align-content-center  ">
              3
            </div>
          </div>
          <div className="h4 mb-0 text-grey">下單成功</div>
        </div>
      </div>

      <div className="row mt-5 mx-5"></div>
      <div className="col-sm cart-area product-area">
        <div className="mb-3 d-flex gap-2  product-tittle border-bottom border-2 py-4">
          <div className="custom-checkbox"></div>
          <div className=" h3">MACHI</div>
          <div className=" h3">商品</div>
          <div className=" h3">(3)</div>
        </div>

        <div className="d-flex  g-0 gap-5 align-items-center py-4">
          <div className="custom-checkbox"></div>
          <div className="">
            <img
              src="./images/cart-1.jpeg"
              className="product-img-1"
              style={{ width: 140, height: 140 }}
            />
          </div>

          <div className="card-body align-content-start p-0  flex-grow-1 d-flex flex-column">
            <div className="card-title card-text d-flex justify-content-between text-brown col h4">
              草莓有夠派
              <span>
                <i className="bi bi-trash3 text-black"></i>
              </span>
            </div>
            <div
              className="d-flex justify-content-start card-text col "
              style={{ gap: '0.5rem' }}
            >
              <div className="h5 mr-1">規格:</div>
              <div className="h5">
                6吋 4層 草莓內陷 派皮加厚 表面巧克力 去冰微糖{' '}
              </div>
            </div>
            <div className="d-flex g-3 justify-content-between col">
              <div className="">
                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option selected>0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div className=" h4 ">NT$8888</div>
            </div>
          </div>
        </div>
        <hr />
        <div className="card mb-3 border-0 cart-card">
          <div className="d-flex g-0 align-items-center ">
            <div className="custom-checkbox"></div>
            <div className="">
              <img
                src="./images/cart-1.jpeg"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="">
              <div className="card-body">
                <h5 className="card-title card-text d-flex justify-content-between align-items-center">
                  Nike Air Force 1 PLT.AF.ORM{' '}
                  <span>
                    {' '}
                    <i className="bi bi-trash3"></i>
                  </span>
                </h5>
                <p className="card-text">
                  Pale Ivory/Light Orewood Brown/白/Summit White
                </p>

                <div className="row g-3 align-items-center">
                  <div className="col-auto">
                    <label htmlFor="inputPassword6" className="col-form-label">
                      數量:
                    </label>
                  </div>
                  <div className="col-auto">
                    <select
                      className="form-select form-select-sm"
                      aria-label=".form-select-sm example"
                    >
                      <option selected>0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </div>
                </div>

                <div className="iconbar">
                  <i className="bi bi-suit-heart"></i>
                  <i className="bi bi-trash3"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="card mb-3 border-0 cart-card">
          <div className="row g-0">
            <div className="col-md-3">
              <img
                src="./images/cart-1.jpeg"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-9">
              <div className="card-body">
                <h5 className="card-title card-text d-flex justify-content-between align-items-center">
                  Nike Air Force 1 PLT.AF.ORM{' '}
                  <span>
                    {' '}
                    <i className="bi bi-trash3"></i>
                  </span>
                </h5>
                <p className="card-text">
                  Pale Ivory/Light Orewood Brown/白/Summit White
                </p>

                <div className="row g-3 align-items-center">
                  <div className="col-auto">
                    <label htmlFor="inputPassword6" className="col-form-label">
                      數量:
                    </label>
                  </div>
                  <div className="col-auto">
                    <select
                      className="form-select form-select-sm"
                      aria-label=".form-select-sm example"
                    >
                      <option selected>0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </div>
                </div>

                <div className="iconbar">
                  <i className="bi bi-suit-heart"></i>
                  <i className="bi bi-trash3"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>

      <div className="row mt-5 mx-5">
        <div className="col-sm-12 cart-area">
          <h4 className="mb-3">最愛</h4>
          <p>想要檢視你的最愛嗎？ 加入我們 或 登入</p>
        </div>
      </div>
    </>
  )
}
