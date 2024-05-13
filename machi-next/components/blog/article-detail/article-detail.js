import { useEffect, useState } from 'react'
import { fetchRawArticle } from '@/services/blog'
import styles from '@/styles/blog/article-detail.module.scss'
import DOMPurify from 'dompurify'

const ArticleDetail = ({ articleId }) => {
  // console.log(articleId)
  const [article, setArticle] = useState(null)
  useEffect(() => {
    const getArticleData = async () => {
      try {
        const articleData = await fetchRawArticle(`${articleId}`)
        console.log('Article Data:', articleData)
        if (articleData) {
          setArticle(articleData)
        } else {
          console.error('Failed to fetch article data')
        }
      } catch (error) {
        console.error('Error fetching article:', error)
      }
    }

    getArticleData()
  }, [articleId])

  if (!article) {
    return <p>Loading...</p>
  }

  const cleanHTML = DOMPurify.sanitize(article.article_content)
  const categories = article.article_category.split(',')
  console.log(categories)
  return (
    <div className={`container ${styles['article-text']}`}>
      <div className={styles['article-user']}>
        <img src="" alt="" />
        <span>{article.user_id_fk}</span>
      </div>
      <div className={styles['article-btn']}>
        {categories.map((category, index) => (
          <button key={index}>{category}</button>
        ))}
      </div>
      <div className={styles['article-title']}>
        <h3>{article.article_title}</h3>
        <span>{article.article_createtime}</span>
      </div>
      <div>
        <div dangerouslySetInnerHTML={{ __html: cleanHTML }} />
      </div>
    </div>
  )
}

export default ArticleDetail
