import React, { useState, useEffect } from 'react'
import styles from '@/components/blog/article-detail/article-message-area.module.scss'
import { postMessage } from '@/services/blog'
import { checkAuth } from '@/services/user'
import Swal from 'sweetalert2'
import { fetchComments } from '@/services/blog'

import { TiMessages } from 'react-icons/ti'
import { IoIosSend } from 'react-icons/io'

export default function ArticleMessageArea({ articleId }) {
  const [message, setMessage] = useState('')
  const [articleCommentId, setArticleCommentId] = useState('')
  const [articleIdFk, setArticleIdFk] = useState('')
  const [userIdFk, setUserIdFk] = useState('')
  const [articleCommentContent, setArticleCommentContent] = useState('')
  const [articleCommentCreateTime, setArticleCommentCreateTime] = useState('')

  const [comments, setComments] = useState([])

  useEffect(() => {
    const getComments = async () => {
      const data = await fetchComments(articleId)
      setComments(data)
      // console.log(articleId)
    }
    getComments()
  }, [articleId])

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await checkAuth()
      if (response.data.data.user) {
        // console.log(response.data.data.user.user_id);
        const userId = response.data.data.user.user_id
        setUserIdFk(userId)
        console.log('user_id_fk:', userId)

        const currentTime = new Date().toISOString() // 假設用戶的 ID 存儲在 response.data.data.user.user_id
        setArticleCommentCreateTime(currentTime) // 使用當前時間作為留言的創建時間
        setArticleIdFk(articleId) // 假設文章的 ID 存儲在 articleId 變量中
        console.log(articleId)
        setArticleCommentContent(message)
        // 用戶已經登入，繼續提交留言
        // console.log(response.data.data.user);
        await postMessage({
          article_comment_id: articleCommentId,
          article_id_fk: articleId,
          user_id_fk: userId,
          article_comment_content: message,
          article_comment_createtime: currentTime,
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
                <span>1213</span>
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
