import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from '@/components/blog/article-list.module.scss'
import { FaCaretRight } from 'react-icons/fa'

const ArticlesList = ({ articles, selectedCategories, category }) => {
  // console.log(category)

  const stripHtmlTagsAndEntities = (htmlContent) => {
    return htmlContent.replace(/<[^>]*>/g, '').replace(/&[^;]+;/g, '')
  }

  const [isOpen, setIsOpen] = useState(false)
  // const categories = newArticles.article_category.split(',')
  // console.log(category)
  return (
    <>
      <div className={styles[`list-h`]}>
        <div className={styles[`menu`]}>
          <button
            className={`btn`}
            id="listview"
            onClick={() => setIsOpen(!isOpen)}
          >
            <i className="bi bi-list"></i>
          </button>
          {isOpen && (
            <div className="dropdown-menu">
              <button onClick={() => console.log('選項1被點擊')}>選項1</button>
              <button onClick={() => console.log('選項2被點擊')}>選項2</button>
              <button onClick={() => console.log('選項3被點擊')}>選項3</button>
            </div>
          )}
        </div>
        {articles.map((article) => (
          <li key={article.article_id}>
            <div className="list-array">
              <div className="article-content">
                <div>
                  <img src={article.firstImageUrl} alt="" />
                </div>
                <div className="mx-4 article-text">
                  <ul className="article-list acticle-tag">
                    {article.article_category?.split(',').map((category, index) => (
                      <li key={index} className="p-1 me-2">{category}</li>
                    ))}
                  </ul>
                  <h4 className="pt-2">{article.article_title}</h4>
                  <span>
                    {article.article_createtime
                      ? article.article_createtime.split('T')[0]
                      : ''}
                  </span>
                  <p>
                    {article.article_content
                      ? stripHtmlTagsAndEntities(article.article_content)
                      : ''}
                  </p>
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
      </div>
    </>
  )
}

export default ArticlesList
