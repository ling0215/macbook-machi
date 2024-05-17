import React, { useState } from 'react'
import Link from 'next/link'

export default function Sidebar({ setCategory, setPriceRange }) {
  const [sliderValue, setSliderValue] = useState(4000);


  function handleRangeChange(event) {
    // 從事件對象中獲取滑塊的值
    setSliderValue(event.target.value);

    const range = event.target.value

    // 更新 priceRange 狀態變量
    setPriceRange(range)
  }
  const handleCategoryChange = (value) => {
    setCategory(value)
  }

  

  return (
    <>
      {/* 左側篩選 */}
      <div className="row">
        <div className="col-sm-12">
          <div className="d-flex" id="wrapper">
            <div className="bg-white me-3" id="sidebar-wrapper">
              <div className="scroll sticky-md-top">
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
                        課程類別
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseOne"
                      className="accordion-collapse collapse"
                    >
                      <div className="accordion-body px-1">
                        <div
                          role="button"
                          tabIndex={0}
                          className="text-decoration-none text-primary d-block hover-button"
                          onClick={() => handleCategoryChange('蛋糕')}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') handleCategoryChange('蛋糕')
                          }}
                        >
                          蛋糕
                        </div>
                        <div
                          role="button"
                          tabIndex={0}
                          className="text-decoration-none text-primary d-block hover-button"
                          onClick={() => handleCategoryChange('餅乾')}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') handleCategoryChange('餅乾')
                          }}
                        >
                          餅乾
                        </div>
                        
                        <div
                          role="button"
                          tabIndex={0}
                          className="text-decoration-none text-primary d-block hover-button"
                          onClick={() => handleCategoryChange('麵包')}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') handleCategoryChange('麵包')
                          }}
                        >
                          麵包
                        </div>
                        <div
                          role="button"
                          tabIndex={0}
                          className="text-decoration-none text-primary d-block hover-button"
                          onClick={() => handleCategoryChange('精緻點心')}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') handleCategoryChange('精緻點心')
                          }}
                        >
                          精緻點心
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
                        aria-expanded="false"
                        data-bs-target="#panelsStayOpen-collapseTwo"
                        aria-controls="panelsStayOpen-collapseTwo"
                      >
                        報名狀態
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseTwo"
                      className="accordion-collapse collapse"
                    >
                      <div className="accordion-body px-1">
                        <div
                          role="button"
                          tabIndex={0}
                          className="text-decoration-none text-primary d-block hover-button"
                          onClick={() => handleCategoryChange('蛋糕')}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter')
                              handleCategoryChange('蛋糕')
                          }}
                        >
                          蛋糕
                        </div>
                        <div
                          role="button"
                          tabIndex={0}
                          className="text-decoration-none text-primary d-block hover-button"
                          onClick={() => handleCategoryChange('餅乾')}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter')
                              handleCategoryChange('餅乾')
                          }}
                        >
                          餅乾
                        </div>
                        <div
                          role="button"
                          tabIndex={0}
                          className="text-decoration-none text-primary d-block hover-button"
                          onClick={() => handleCategoryChange('乳酪蛋糕')}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter')
                              handleCategoryChange('乳酪蛋糕')
                          }}
                        >
                          台北市
                        </div>
                        <div
                          role="button"
                          tabIndex={0}
                          className="text-decoration-none text-primary d-block hover-button"
                          onClick={() => handleCategoryChange('提拉米蘇')}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter')
                              handleCategoryChange('提拉米蘇')
                          }}
                        >
                          提拉米蘇
                        </div>
                        <div
                          role="button"
                          tabIndex={0}
                          className="text-decoration-none text-primary d-block hover-button"
                          onClick={() => handleCategoryChange('慕斯蛋糕')}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter')
                              handleCategoryChange('慕斯蛋糕')
                          }}
                        >
                          慕斯蛋糕
                        </div>
                        <div
                          role="button"
                          tabIndex={0}
                          className="text-decoration-none text-primary d-block hover-button"
                          onClick={() => handleCategoryChange('磅蛋糕')}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter')
                              handleCategoryChange('磅蛋糕')
                          }}
                        >
                          磅蛋糕
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
                        aria-expanded="false"
                        data-bs-target="#panelsStayOpen-collapseThree"
                        aria-controls="panelsStayOpen-collapseThree"
                      >
                        講師選擇
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseThree"
                      className="accordion-collapse collapse"
                    >
                      <div className="accordion-body px-1">
                        <div
                          role="button"
                          tabIndex={0}
                          className="text-decoration-none text-primary d-block hover-button"
                          onClick={() => handleCategoryChange('達克瓦茲')}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter')
                              handleCategoryChange('達克瓦茲')
                          }}
                        >
                          呂昇達
                        </div>
                        <div
                          role="button"
                          tabIndex={0}
                          className="text-decoration-none text-primary d-block hover-button"
                          onClick={() => handleCategoryChange('曲奇餅乾')}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter')
                              handleCategoryChange('曲奇餅乾')
                          }}
                        >
                          威力
                        </div>
                        <div
                          role="button"
                          tabIndex={0}
                          className="text-decoration-none text-primary d-block hover-button"
                          onClick={() => handleCategoryChange('蘋果')}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter')
                              handleCategoryChange('蘋果')
                          }}
                        >
                          蘋果
                        </div>
                      </div>
                    </div>
                  </div>

                 

                  <label htmlFor="range" className="form-label mt-3">
                    價格區間<p> {sliderValue}元以下</p>
                  </label>
                  <input
        type="range"
        className="form-range"
        min={4000}
        max={10000}
        step={1000}
        id="range"
        value={sliderValue}
        onChange={handleRangeChange}
      />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
