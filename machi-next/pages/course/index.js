// ProductPage.js
import React, { useState, useEffect } from 'react'
import CourseList from '@/components/course/course-list'
import SearchBar from '@/components/course/course-list/search-bar'
import Sidebar from '@/components/course/course-list/side-bar'
import Pagination from '@/components/course/course-list/pagination'
import { getCourses } from '@/services/course' // 請根據實際路徑進行調整

export default function CoursePage() {
  const [courses, setCourses] = useState([
    { id: 1, name: 'Default Course 1', price: 100 },
  ])
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')
  const [priceRange, setPriceRange] = useState(4000)

  const [sort, setSort] = useState('')
  const [order, setOrder] = useState('')
  const [view, setView] = useState('')

  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  // 狀態觀察
  useEffect(() => {
    console.log('Search:', search)
    console.log('Category:', category)
    console.log('Price Range:', priceRange)
    console.log('Sort:', sort)
    console.log('Order:', order)
    console.log('View:', view)
    console.log('Page:', page)
    console.log('Total Pages:', totalPages)
  }, [
    courses,
    search,
    category,
    priceRange,
    sort,
    order,
    view,
    page,
    totalPages,
  ])

  useEffect(() => {
    getCourses(sort, order, search, category, page, 16, priceRange)
      .then((response) => {
        console.log(response.data) // 打印後端的回應
        return response.data
      })
      .then((data) => {
        if (data && data.data && data.data.courses && data.data.pageCount) {
          setCourses(data.data.courses)
          setTotalPages(data.data.pageCount)
        } else {
          // 設置一個預設值或者顯示一個錯誤消息
          setCourses([])
          setTotalPages(0)
          console.error('No data returned from the server.')
        }
      })
  }, [search, category, sort, order, page, priceRange])

  return (
    <div>
      <SearchBar
        setSearch={setSearch}
        setSort={setSort}
        setOrder={setOrder}
        setView={setView}
      />
      <div style={{ display: 'flex' }}>
        <Sidebar setCategory={setCategory} setPriceRange={setPriceRange} />
        <CourseList courses={courses} view={view} />
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={page}
        onPageChange={setPage}
      />
    </div>
  )
}
