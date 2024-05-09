import React, { useState, useRef, useEffect } from 'react'
import Latest from '@/components/blog/latest-article'
import Category from '@/components/blog/article-category'
import List from '@/components/blog/article-list'
import Date from '@/components/blog/article-date'
import { searchArticles } from '@/services/blog'

import { FaSearch } from 'react-icons/fa'
import { FaCaretLeft } from 'react-icons/fa'
import { FaCaretRight } from 'react-icons/fa'

export default function BlogIndex() {
  const [articles, setArticles] = useState([])
  const searchInput = useRef()

  const handleSearch = async () => {
    const keyword = searchInput.current.value
    const data = await searchArticles(keyword)
    // 將包含關鍵字的文章放到最上面
    // data.sort((a, b) => {
    //   const aContainsKeyword = a.title.includes(keyword)
    //   const bContainsKeyword = b.title.includes(keyword)

    //   if (aContainsKeyword && !bContainsKeyword) {
    //     return -1
    //   } else if (!aContainsKeyword && bContainsKeyword) {
    //     return 1
    //   } else {
    //     return 0
    //   }
    // })
    setArticles(data)
  }

  function AirDatepickerReact(props) {
    let $input = useRef()
    let dp = useRef()

    useEffect(() => {
      dp.current = new AirDatepicker($input.current, { ...props })
    }, [])

    useEffect(() => {
      dp.current.update({ ...props })
    }, [props])
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="input-container">
              <input
                type="text"
                placeholder="請輸入關鍵字"
                className="form-control"
                style={{
                  width: '100%',
                  height: '40px',
                  backgroundColor: 'white',
                  borderColor: 'light-brown',
                }}
                // ref={searchInput}
                // onChange={handleSearch}
              />
              <button className="article-btn" onClick={handleSearch}>
                <FaSearch
                  style={
                    {
                      // marginLeft: '-30px',
                    }
                  }
                />
              </button>
            </div>
            <br />
            <div className="">
              <h6 className="article-sidebar pt-2">最新文章</h6>
              <Latest />
              <h6 className="article-sidebar pt-2">文章分類</h6>
              <Category />
              <h6 className="article-sidebar pt-2">日期區間</h6>
              <div>
                <Date range={true} />
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="container ">
              <ul className="article-list">
                <List />
              </ul>
            </div>
            <div className="pagination">
              <button className="page-btn">
                <FaCaretLeft />
              </button>
              <button className="page-btn">1</button>
              <button className="page-btn">2</button>
              <button className="page-btn">
                <FaCaretRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
