import Article from '@/components/blog/article-detail/article-detail'
import styles from '@/styles/blog/article-detail.module.scss'
import { useRouter } from 'next/router'
export default function ArticleDetail() {
  const router = useRouter()
  const { id } = router.query // 从路由参数中获取文章 ID
  // console.log(router.query)
  return (
    <>
      {id && <Article articleId={id} />}
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
