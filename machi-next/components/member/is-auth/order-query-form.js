import React from "react";

export default function OrderQueryForm() {
  return (
    <>
      <div className="container p-5 border rounded">
        <div className="d-flex justify-content-start gap-3">
          <button className="btn btn-outline-brown">課程訂單</button>
          <button className="btn btn-outline-brown">商品訂單</button>
        </div>
        <div className="mt-4 d-flex gap-3">
          <div className="d-flex align-items-center gap-3 flex-grow-1">
            <div className="w-100">查詢訂單時間</div>
            <input type="date" className="form-control" defaultValue="2024-01-01" />
            <div className="border-top border-2 w-25"></div>
            <input type="date" className="form-control" defaultValue="2024-01-02" />
          </div>
          <div className="d-flex align-items-center gap-3">
            <button className="btn btn-brown text-white">確定送出</button>
            <button className="btn btn-brown text-white">取消查詢</button>
          </div>
        </div>
        <hr className="my-4 mt-5" />
        <div className="d-flex justify-content-around text-primary-dark">
          <div>訂單項目</div>
          <div>訂單日期</div>
          <div>訂單編號</div>
          <div>訂單金額</div>
          <div>訂單狀態</div>
        </div>
        <hr className="my-2 mb-4" />
        <div className="d-flex justify-content-around text-primary-dark">
          <div>預約課程</div>
          <div>2023.12.1</div>
          <div>166155201</div>
          <div>8000</div>
          <div>已完成</div>
        </div>
      </div>
      <style jsx>{`
        .btn-brown {
          height: 40px;
        }
      `}</style>
    </>
  );
}
