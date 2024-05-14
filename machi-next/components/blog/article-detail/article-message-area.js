import React from 'react'
import styles from '@/components/blog/article-detail/article-message-area.module.scss'

export default function ArticleMessageArea() {
    return (
        <><div className={`container`}>
            <div className={styles['message-area']}>
                <h4>留言區</h4>
                <p>我要留言</p>
            </div>
            <div className={styles['message']}>
                <p>請先登入後留言..</p>
                <button>登入</button>
            </div>
        </div></>
    )
}
