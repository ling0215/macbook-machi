import { useState } from 'react'
import styles from '@/components/blog/article-category.module.scss'

export default function ArticleCategory({ setSelectedCategories }) {
  const categories = ['蛋糕', '泡芙', '餅乾', '教學']

  const handleCheckboxChange = (event) => {
    const category = event.target.name
    const isChecked = event.target.checked
    setSelectedCategories((prevSelectedCategories) =>
      isChecked
    ? [...prevSelectedCategories, category]
    : prevSelectedCategories.filter((c) => c !== category)
  )
  }


  //   return (
  //     <>
  //       <div className="article-category py-2">
  //         <div>
  //           <input type="checkbox" />
  //           <span className="mx-3">蛋糕</span>
  //         </div>

  //         <div>
  //           <input type="checkbox" />
  //           <span className="mx-3">泡芙</span>
  //         </div>

  //         <div>
  //           <input type="checkbox" />
  //           <span className="mx-3">餅乾</span>
  //         </div>

  //         <div>
  //           <input type="checkbox" />
  //           <span className="mx-3">教學</span>
  //         </div>
  //       </div>

  //     </>
  //   )
  // }
  return (
    <>
      <div className="article-category py-2">
        {categories.map((category) => (
          <div key={category}>
            <input
              type="checkbox"
              name={category}
              onChange={handleCheckboxChange}
            />
            <span className="mx-3">{category}</span>
          </div>
        ))}
      </div>
    </>
  )
}

