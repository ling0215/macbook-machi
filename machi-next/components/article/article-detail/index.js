import React from 'react'
import styles from './detail.module.scss'

export default function ArticleDetail() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.articleUser}>
          <img src="/images/blog/article1.jpg"></img>
          <span>userName</span>
        </div>
      </div>
        <div className={styles.container}>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
        </div>
    </>
  )
}
