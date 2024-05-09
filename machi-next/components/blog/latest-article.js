import Reactㄝ, { useEffect, useState } from 'react'
import styles from '@/components/blog/article-list.module.scss'
import { fetchArticles } from '@/services/blog'

export default function LatestArticles() {
  const ArticlesList = () => {
    const [articles, setArticles] = useState([])
    useEffect(() => {
      const getArticles = async () => {
        const data = await fetchArticles()
        if (data) {
          setArticles(data)
        }
      }

      getArticles()
    }, [])

    const stripHtmlTagsAndEntities = (htmlContent) => {
      // 去除 HTML 标签
      const htmlContentTag = htmlContent.replace(/<[^>]*>/g, '')
      // 去除特殊字符实体
      const htmlContentCharacters = htmlContentTag.replace(/&[^;]+;/g, '')
      return htmlContentCharacters
    }

    const newArticles = articles.reverse().slice(0, 3)

    return (
      <>
        <ul className="article-list">
          {newArticles.map((article) => (
            <li key={article.article_id}>
              <div className={styles[`image-text`]}>
                <div className={styles[`image`]}>
                  <img src={article.firstImageUrl} alt="" />
                </div>
                <p>{stripHtmlTagsAndEntities(article.article_content)}</p>
              </div>
            </li>
          ))}
        </ul>
      </>
    )
  }

  return <ArticlesList />
}
