import React from 'react'
import styles from '@/components/blog/article-detail/article-message-area.module.scss'

export default function ArticleMessageArea() {
  return (
    <>
      {/* 未登入狀態
      <div className={`container`}>
        <div className={styles['message-area']}>
          <h4>留言區</h4>
          <p>我要留言</p>
        </div>
        <div className={styles['message']}>
          <p>請先登入後留言..</p>
          <button>登入</button>
        </div>
      </div> */}

      <div className={`container`}>
        <h4>留言區</h4>
        <div className={styles['message-area']}>
          <div className={styles[`user-message`]}>
            <div className={styles[`user-name`]}>
              <div>
                <img src="" alt="" />
                111
                <span>使用者名稱</span>
              </div>
              <div>create-time</div>
            </div>
            <div className={styles['message-content']}>
              <p>留言內容</p>
            </div>
          </div>
        </div>
        <div>
          <button className="btn btn-primary">回覆留言</button>
          <button className="btn btn-primary">修改</button>
        </div>
        <p>我要留言</p>

        <div className={styles['message']}>
          <p>輸入留言...</p>
        </div>
      </div>
    </>
  )
}
