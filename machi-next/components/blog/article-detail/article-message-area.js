import React, { useState, useEffect } from 'react'
import styles from '@/components/blog/article-detail/article-message-area.module.scss'
import { postMessage } from '@/services/blog'

import { TiMessages } from 'react-icons/ti'
import { IoIosSend } from 'react-icons/io'

export default function ArticleMessageArea() {
  const [message, setMessage] = useState('')
  const [articleCommentId, setArticleCommentId] = useState('')
  const [articleIdFk, setArticleIdFk] = useState('')
  const [userIdFk, setUserIdFk] = useState('')
  const [articleCommentContent, setArticleCommentContent] = useState('')
  const [articleCommentCreateTime, setArticleCommentCreateTime] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      // 傳送留言到後端
      await postMessage({
        article_comment_id: articleCommentId,
        article_id_fk: articleIdFk,
        user_id_fk: userIdFk,
        article_comment_content: message,
        article_comment_createtime: articleCommentCreateTime,
      })
      console.log(articleCommentId)
      console.log(articleIdFk)
      console.log(userIdFk)
      console.log(articleCommentContent)
      console.log(articleCommentCreateTime)
      // 清空留言輸入框
      setMessage('')
      setArticleCommentId('')
      setArticleIdFk('')
      setUserIdFk('')
      setArticleCommentContent('')
      setArticleCommentCreateTime('')
    } catch (error) {
      // 處理錯誤
    }
  }
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
              <div className={styles[`img-s`]}>
                <img src="/images/blog/article1.jpg" alt="" />
                <span>使用者名稱</span>
              </div>
              <div className={styles[`create-time`]}>create-time</div>
            </div>
            <div className={styles['message-content']}>
              <p>留言內容</p>
            </div>
            <div className={styles[`message-btn`]}>
              <div>
                <button className="">
                  回覆留言
                  <TiMessages
                    style={{
                      fontSize: '1rem',
                      marginLeft: '5px',
                      marginBottom: '4px',
                    }}
                  />
                </button>
                {/* <button className="btn btn-primary">修改</button> */}
              </div>
            </div>
          </div>
        </div>
        <p>我要留言</p>
        <div className={styles[`message-input`]}>
          <div className={styles['message']}>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="輸入留言..."
            />
          </div>
          <div className={styles[`btn-end`]}>
            <button onClick={handleSubmit}>
              送出留言
              <IoIosSend
                style={{
                  fontSize: '1rem',
                  marginLeft: '5px',
                  marginBottom: '4px',
                }}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
