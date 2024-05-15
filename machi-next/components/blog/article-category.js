import React from 'react'

export default function ArticleCategory({ handleCategoryClick }) {
  const categories = ['蛋糕', '泡芙', '餅乾', '教學']

  return (
    <>
      <div className="article-category py-2">
        {categories.map((category) => (
          <div key={category}>
            <input
              type="checkbox"
              name={category}
              onClick={() => handleCategoryClick(category)}
            />
            <span className="mx-3">{category}</span>
          </div>
        ))}
      </div>
    </>
  )
}
