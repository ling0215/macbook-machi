import React, { useState, useEffect } from 'react'
import styles from '@/components/blog/article-detail/article-message-area.module.scss'
import { postMessage } from '@/services/blog'
import { checkAuth } from '@/services/user'
import Swal from 'sweetalert2'
import { useRouter } from 'next/router'

import { TiMessages } from 'react-icons/ti'
import { IoIosSend } from 'react-icons/io'

export default function ArticleMessageArea() {
  const [message, setMessage] = useState('')
  const [articleCommentId, setArticleCommentId] = useState('')
  const [articleIdFk, setArticleIdFk] = useState('')
  const [userIdFk, setUserIdFk] = useState('')
  const [articleCommentContent, setArticleCommentContent] = useState('')
  const [articleCommentCreateTime, setArticleCommentCreateTime] = useState('')

  const router = useRouter()
  const [articleId, setArticleId] = useState('')

  useEffect(() => {
    // 假設 articleId 是 URL 的路由參數
    if (router.query.articleId) {
      setArticleId(router.query.articleId)
    }
  }, [router.query.articleId])

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await checkAuth()
      if (response.data.data.user) {
        setUserIdFk(response.data.data.user.user_id) // 假設用戶的 ID 存儲在 response.data.data.user.user_id
        setArticleCommentCreateTime(new Date().toISOString()) // 使用當前時間作為留言的創建時間
        setArticleIdFk(articleId) // 假設文章的 ID 存儲在 articleId 變量中
        console.log(articleId);
        setArticleCommentContent(message)
        // 用戶已經登入，繼續提交留言
        await postMessage({
          article_comment_id: articleCommentId,
          article_id_fk: articleIdFk,
          user_id_fk: userIdFk,
          article_comment_content: message,
          article_comment_createtime: articleCommentCreateTime,
        })
        // 清空留言輸入框
        setMessage('')
        setArticleCommentId('')
        setArticleIdFk('')
        setUserIdFk('')
        setArticleCommentContent('')
        setArticleCommentCreateTime('')
      } else {
        // 用戶未登入，顯示提示訊息
        Swal.fire({
          icon: 'warning',
          title: '請先登入',
          confirmButtonText: '確定',
        })
      }
    } catch (error) {
      // 處理錯誤
      console.error(error)
      Swal.fire({
        icon: 'error',
        title: '請先登入',
        confirmButtonText: '確定',
      })
    }
  }

  return (
    <>
      {/* 未登入狀態
      <div className={`container`}>
        <div className={styles['message-area-n']}>
          <h4>留言區</h4>
        </div>
          <p>我要留言</p>
        <div className={styles['message-n']}>
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
                <button className="" onClick={handleSubmit}>
                  回覆留言
                  <TiMessages
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
