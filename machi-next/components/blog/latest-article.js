import React, { useEffect, useState } from 'react'
import styles from '@/components/blog/latest-article.module.scss'
import { fetchArticles } from '@/services/blog'
import Link from 'next/link'

export default function LatestArticles() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const getArticles = async () => {
      const data = await fetchArticles()
      if (data) {
        // 反轉和切片文章陣列
        const newArticles = data.reverse().slice(0, 3)
        setArticles(newArticles)
      }
    }

    getArticles()
  }, [])

  const ArticlesList = () => {
    const stripHtmlTagsAndEntities = (htmlContent) => {
      return htmlContent.replace(/<[^>]*>/g, '').replace(/&[^;]+;/g, '')
    }

    return (
      <>
        <ul className={`article-list ${styles['latest-article']}`}>
          {articles.map((article) => (
            <li key={article.article_id}>
              <div className={styles[`image-text`]}>
                <div className={styles[`image`]}>
                  <img src={article.firstImageUrl} alt="" />
                </div>
                <Link
                  href={`/blog/${article.article_id}`}
                  type="button"
                  className={styles[`link-style`]}
                >
                  <p>{stripHtmlTagsAndEntities(article.article_content)}</p>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </>
    )
  }

  return <ArticlesList />
}
