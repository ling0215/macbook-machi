import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from '@/components/blog/article-list.module.scss'
import { fetchArticles } from '@/services/blog'
import { FaCaretRight } from 'react-icons/fa'

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

  return (
    <>
      {articles.map((article) => (
        <li key={article.article_id}>
          <div className="list-array">
            <div className="article-content">
              <div>
                <img src={article.firstImageUrl} alt="" />
              </div>
              <div className="mx-4 article-text">
                <ul className="article-list acticle-tag">
                  <li className="p-1 me-2">蛋糕</li>
                  <li className="p-1 ">蛋糕</li>
                </ul>
                <h4 className="pt-2">{article.article_title}</h4>

                <span>{article.article_createtime.split('T')[0]}</span>
                <p>{stripHtmlTagsAndEntities(article.article_content)}</p>

                <div className="more">
                  <Link
                    href={`/blog/${article.article_id}`}
                    type="button"
                    className={styles[`link-style`]}
                  >
                    READ MORE
                    <FaCaretRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </li>
      ))}
    </>
  )
}

export default ArticlesList
