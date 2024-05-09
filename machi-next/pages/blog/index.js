import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Latest from '@/components/blog/latest-article'
import Category from '@/components/blog/article-category'
import List from '@/components/blog/article-list'
import Date from '@/components/blog/article-date'

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
                className="input-field"
                placeholder="請輸入關鍵字"
                style={{ flex: '1' }}
              />
              <FaSearch />
            </div>
            <br />
            <div className="">
              <h6 className="article-sidebar pt-2">最新文章</h6>
              <Latest />
              <h6 className="article-sidebar pt-2">文章分類</h6>
              <Category />
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
