import React from 'react'

function FavoriteProducts() {
  const items = [
    { name: '小山園草莓塔', price: 'NT$480', imgSrc: '...' },
    { name: '小山園草莓塔', price: 'NT$480', imgSrc: '...' },
    { name: '小山園草莓塔', price: 'NT$480', imgSrc: '...' },
    { name: '小山園草莓塔', price: 'NT$480', imgSrc: '...' },
  ]

  return (
    <>
      <div className="container p-5 border rounded">
        <div className="d-flex justify-content-start gap-3">
          <button className="btn btn-outline-brown">課程訂單</button>
          <button className="btn btn-outline-brown">收藏商品</button>
        </div>
        <div className="mt-4 d-flex gap-3">
          <div className="d-flex align-items-center gap-3 flex-grow-1">
            <div className="col-3">查詢訂單時間</div>
            <input
              type="date"
              className="form-control"
              defaultValue="2024-01-01"
            />
            <div className="border-top border-2 w-25"></div>
            <input
              type="date"
              className="form-control"
              defaultValue="2024-01-02"
            />
          </div>
          <div className="d-flex gap-3">
            <button className="btn btn-brown text-white">確定送出</button>
            <button className="btn btn-brown text-white">取消查詢</button>
          </div>
        </div>
        <hr className="my-3 mt-5" />
        <div className="d-flex justify-content-around text-primary-dark">
          <div className="fw-bold">訂單項目</div>
          <div>訂單日期</div>
          <div>訂單編號</div>
          <div>訂單金額</div>
          <div>訂單狀態</div>
        </div>
        <hr className="my-3" />
        <div className="row mt-5">
          {items.map((item, index) => (
            <div key={index} className="col-md-3 col-6">
              <div className="card">
                <img
                  loading="lazy"
                  src="/images/product/list/strawberry-tart-01.jpg"
                  className="card-img-top"
                  alt="商品圖片"
                />
                <div className="card-body text-center">
                  <p className="card-text">小山園草莓塔</p>
                  <p className="card-text">NT$480</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .btn-outline-brown:hover {
          background-color: var(--brown);
          color: white;
          border-color: var(--grey);
        }
      `}</style>
    </>
  )
}

export default FavoriteProducts
