import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from '@/components/blog/article-list.module.scss'
import { FaCaretRight } from 'react-icons/fa'

const ArticlesList = ({ articles, selectedCategories }) => {
  const stripHtmlTagsAndEntities = (htmlContent) => {
    return htmlContent.replace(/<[^>]*>/g, '').replace(/&[^;]+;/g, '')
  }

  const newArticles = articles.articles || []
  const filteredArticles = selectedCategories
    ? articles.filter((article) =>
        selectedCategories.includes(article.category)
      )
    : articles

  const [isOpen, setIsOpen] = useState(false)
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
        {filteredArticles.map((article) => (
          <li key={article.article_id}>
            <div className="list-array">
              <div className="article-content">
                <div>
                  <img src={article.firstImageUrl} alt="" />
                </div>
                <div className="mx-4 article-text">
                  <ul className="article-list acticle-tag">
                    <li className="p-1 me-2">{article.article_category}</li>
                    
                    
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
