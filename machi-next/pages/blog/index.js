import React, { useState, useRef, useEffect } from 'react'
import Latest from '@/components/blog/latest-article'
import Category from '@/components/blog/article-category'
import List from '@/components/blog/article-list'
import Date from '@/components/blog/article-date'
import { searchArticles } from '@/services/blog'
import { fetchBetterArticles } from '@/services/blog'
import Pagination from '@/components/product2/product-list/pagination'

import { FaSearch } from 'react-icons/fa'
import { FaCaretLeft } from 'react-icons/fa'
import { FaCaretRight } from 'react-icons/fa'

export default function BlogIndex() {
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
                {/* style={{ flex: '1' }}
                onChange={(event) => setSearch(event.target.value)}
              /> */}
              <FaSearch />
            </div>
            <br />
            <div className="">
              <h6 className="article-sidebar pt-2">最新文章</h6>
              <Latest />
              <h6 className="article-sidebar pt-2">文章分類</h6>
              <Category />
              <h6 className="article-sidebar pt-2">日期區間</h6>
              <div>
                <Date
                  range={true}
                  setStartDate={setStartDate}
                  setEndDate={setEndDate}
                />
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="container ">
              <ul className="article-list">
                <List dataa={articless} />
              </ul>
            </div>
            <Pagination
              totalPages={totalPages}
              currentPage={page}
              onPageChange={setPage}
            />
          </div>
        </div>
      </div>
    </>
  )
}
