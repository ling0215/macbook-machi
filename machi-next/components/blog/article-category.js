import React, { useEffect, useState } from 'react'
import styles from '@/components/blog/article-category.module.scss'
import { fetchArticles } from '@/services/blog'

import { FaChevronDown } from 'react-icons/fa'

export default function ArticleCategory() {
  // const [isOpen, setIsOpen] = useState(false)

  // const ArticlesList = () => {
  //   const [category, setCategory] = useState([])
  //   useEffect(() => {
  //     const getCategorys = async () => {
  //       const data = await fetchArticles()
  //       if (data) {
  //         setCategory(data)
  //       }
  //     }

  //     getCategorys()
  //   }, [])

    return (
      <>
        <div className="article-category py-2">
          {/* <div onClick={() => setIsOpen(!isOpen)}> */}
          <div>
            <input type="checkbox" />
            <span className="mx-3">蛋糕</span>
            <FaChevronDown />
          </div>
          <div>
          <input type="checkbox" />
          <span className="mx-3">蛋糕</span>
          <FaChevronDown />
        </div>

        {/* {isOpen && (
          <div className={styles['submenu']}>
            <input type="checkbox" />
            <span>123</span>
            <br />
            <input type="checkbox" />
            <span>123</span>
            <br />
            <input type="checkbox" />
            <span>123</span>
          </div>
        )} */}
        </div>
      </>
    )
  }
  // return <ArticleCategory />
// }
