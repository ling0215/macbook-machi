import React from 'react'

export default function ArticleList() {
  return (
    <>
      <li>
        <div className="list-array">
          <div className='article-content'>
            <div>
              <img src="/images/blog/article2.jpg" alt="" />
            </div>
            <div className="mx-4 article-list">
              <ul className="article-list acticle-tag">
                <li
                  className="p-1 me-3"
                >
                  蛋糕
                </li>
                <li className="p-1">
                  蛋糕
                </li>
              </ul>
              <h3 className="pt-4">甜點控注意！信義安和站甜點咖啡廳 Top 7：肉桂捲、司康、可麗露</h3>
              <div className="py-2">time</div>
              <p>
                現代人人手一杯咖啡已是常態，不只品嚐咖啡的美味，更成為手上時髦單品。
                除了求快的上班族需要來一杯「手拿式咖啡」，更多的是要坐下來好好享受一下午後美好的悠閒時光，來杯溫暖的手沖咖啡，配上美味的甜點，浪費一整個下午的時間都不覺得奢侈。
                今天則推薦 7
                家捷運信義安和站咖啡廳，不只咖啡好喝甜點也迷人，尤其是肉桂捲更是讓人難忘。
              </p>
              <div className="more">
                <a type="button">READ MORE</a>
              </div>
            </div>

          </div>
        </div>
      </li>

    </>
  )
}
