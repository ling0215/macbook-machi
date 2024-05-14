import { useState } from 'react'
import Link from 'next/link'
import styles from '@/components/blog/article-list.module.scss'
import { FaCaretRight } from 'react-icons/fa'
import Image from 'next/image'

const ArticlesList = ({ articles }) => {
  const [isOpen, setIsOpen] = useState(false)
  // console.log(category)

  const stripHtmlTagsAndEntities = (htmlContent) => {
    return htmlContent.replace(/<[^>]*>/g, '').replace(/&[^;]+;/g, '')
  }

  // const categories = newArticles.article_category.split(',')
  // console.log(category)
  return (
    <>
      <div className={styles[`list-h`]}>
        <div className={styles[`menu`]}>
          <button
            className={`btn`}
            id="listview"
            onClick={() => {
              console.log('Button was clicked')
              setIsOpen((prevIsOpen) => {
                console.log(
                  'isOpen was',
                  prevIsOpen,
                  'and will be',
                  !prevIsOpen
                )
                return !prevIsOpen
              })
            }}
          >
            <i className="bi bi-list"></i>
          </button>
          <div className={styles[`dropdown-position`]}>
            {isOpen && (
              <div className={styles[`dropdown-menu`]}>
                <button onClick={() => console.log('選項1被點擊')}>
                  {/* <Link
                  href={`/blog/${article.article_id}`}
                  type="button"
                  className={styles[`link-style`]}
                >
                  <p>{stripHtmlTagsAndEntities(article.article_content)}</p>
                </Link>  */}
                  我的文章{' '}
                </button>
                <Link
                  href={`/blog/publish`}
                  type="button"
                  className={styles[`link-style`]}
                >
                  <button onClick={() => console.log('選項2被點擊')}>
                    新增文章
                  </button>
                </Link>{' '}
              </div>
            )}
          </div>
        </div>
        {articles.map((article) => (
          <li key={article.article_id}>
            <div className="list-array">
              <div className="article-content">
                <div>
                  <Image
                    src={article.firstImageUrl || '/images/blog/article2.jpg'}
                    alt=""
                    width={500}
                    height={300}
                    priority
                  />
                </div>
                <div className="mx-4 article-text">
                  <ul className="article-list acticle-tag">
                    {article.article_category?.split(',').map((category) => (
                      <li key={category} className="p-1 me-2">
                        {category}
                      </li>
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
