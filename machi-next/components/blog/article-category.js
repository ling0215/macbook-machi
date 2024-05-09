import { useState } from 'react'
import styles from '@/components/blog/article-category.module.scss'

import { FaChevronDown } from 'react-icons/fa'

export default function ArticleCategory() {
  // const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="article-category py-2">
        {/* <div onClick={() => setIsOpen(!isOpen)}> */}
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
