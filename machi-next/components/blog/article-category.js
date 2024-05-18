import React from 'react'

export default function ArticleCategory({ handleCategoryClick }) {
  const categories = ['蛋糕', '泡芙', '塔派', '餅乾', '點心', '馬卡龍', '教學']


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
              onClick={() => handleCategoryClick(category)}
            />
            <span className="mx-3">{category}</span>
          </div>
        ))}
      </div>
    </>
  )
}

