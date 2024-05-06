import Article from '@/components/blog/article-detail/article-detail'
import styles from '@/styles/blog/article-detail.module.scss'
import { useRouter } from 'next/router'
export default function ArticleDetail() {
  const router = useRouter()
  const { id } = router.query.bid // 从路由参数中获取文章 ID
  console.log('這個')
  console.log(router)
  console.log(router.query)
  console.log(router.query.bid)
  console.log(id)
  console.log('這個')
  return (
    <>
      <Article articleId={router.query.bid} />
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
