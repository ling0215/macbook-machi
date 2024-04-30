import React from 'react'
import styles from '@/styles/blog/detail.module.scss'

export default function ArticleDetail() {
  return (
    <>
      <div className={`container ${styles['article-text']}`}>
        <div className={styles['article-user']}>
          <img src="" alt="" />
          <span>晚安小吉</span>
        </div>
        <div className={styles['article-btn']}>
          <button>按鈕</button>
          <button>按鈕</button>
          <button>按鈕</button>
          <button>按鈕</button>
          <button>按鈕</button>
          <button>按鈕</button>
          <button>按鈕</button>
          <button>按鈕</button>
        </div>
        <div className={styles['article-title']}>
          <h3>甜點控注意！信義安和站甜點咖啡廳 Top 7：肉桂捲、司康、可麗露</h3>
          <span>2022-10-10</span>
        </div>
        <div>
          <div className={styles['article-img']}>
            <img src="/machi-next/public/images/blog/article2.jpg" alt="" />
          </div>
          <p>
            Congrats Café
            在信義安和站這邊小有名氣，不只白天營業，更能讓夜貓族半夜也能品嚐到好咖啡，一路營業要到晚上
            12 點才打烊。
            除了咖啡出名之外，店內的甜點也堪稱一絕，焦糖布丁最擄獲少女的心，尤其是肉桂捲更讓人一吃愛上。
          </p>
          <div className={styles['article-img']}>
            <img src="/machi-next/public/images/blog/article2.jpg" alt="" />
          </div>
          <p>
            若你是懂吃又懂拍的女孩的話，近期火紅的「Kōhī Bar」將會是你的新地標！
            採外帶式設計，但店門外有一整排的座位區，可供客人休息，下午時間陽光灑下超舒適。療癒的雪人可可不只好喝還很好拍，店內的甜點也堪稱一絕，還有號稱有甜點迷心中前三名的司康。
          </p>
          <div className={styles['article-img']}>
            <img src="/machi-next/public/images/blog/article2.jpg" alt="" />
          </div>
          <p>
            「STONE espresso bar &amp; coffee
            roaster」走一個溫暖窩心的風格有點復古感，微昏黃的燈光讓人忍不住陷入店內的咖啡香氣內。
            店內含有販售袋裝咖啡豆，讓喜愛咖啡的民眾可以買回家沖泡。「鹽之花巧克力蛋糕」，將焦糖、巧克力交融，最上層再擠上鹹奶油，巧克力的甜香之中帶點鹹味，吃一塊絕對會不夠。
          </p>
        </div>
      </div>
      <div className={`container ${styles['message-container']}`}>
        <div className={styles['message-area']}>
          <h4>留言區</h4>
          <p>我要留言</p>
        </div>
        <div className={styles['message']}>
          <p>請先登入後留言..</p>
          <button>登入</button>
        </div>
      </div>
    </>
  )
}
