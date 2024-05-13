// pages/index.js
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import HomeCarousel from '@/components/homepage/home-carousel'
import Featured from '@/components/homepage/featured'
import CategoryCard from '@/components/homepage/category-card'
import CustomizeLayout from '@/components/layout/customize/customize-layout'
import PlaceholderText from '@/components/common/placeholder-text'
import { fetchCategory } from '@/services/index'
 // 請根據實際路徑進行調整

function Home() {
  const [category, setCategory] = useState([]) //[變數名稱, 狀態變數]
  useEffect(() => { // 當狀態變動時執行
    fetchCategory().then((response) => { //services的fetchCategory()方法
        console.log(response) // 打印後端的回應
        setCategory(response) // 更新狀態
      })
  }, []);
  return (
    <>
      <HomeCarousel />
      <div className="container col-xxl-10 px-4 py-2">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-lg-6 about">
            <h2 className="fw-bold lh-1 mb-3 about-title">關於 Machi</h2>
            <p className="about-text">Since 2015</p>
            <p className="about-text">
              「machi」的名字源自日語中的「街」，象徵著一條小街道，充滿了美好的氛圍與風情，就像來到一個溫馨舒適的地方，您可以在這裡放鬆身心，品嚐法式甜點的絕妙滋味。
              <br />
              每一個甜點都是我們匠心獨具的手工製作，融合了優質的食材和法式烘焙的精髓。無論是我們的招牌歐式酥皮、精緻巧克力蛋糕還是香濃卡布奇諾，都是我們用心製作的甜點藝術品，讓您的味蕾享受到一場獨特的美食之旅。
              <br />
              <br />
              我們希望「machi」不僅僅是一個甜點店，更是您享受甜蜜時光的去處，無論是與摯友共度閒暇時光，或是獨自一人沉浸在書本與甜點之間，我們都將竭盡所能，為您帶來最愉悅的體驗。
            </p>
            <div className="d-flex d-grid gap-2 d-md-flex justify-content-md-start justify-content-center">
              <Link
                href="/about"
                className="btn btn-brown btn-lg px-4 me-md-2 about-btn"
              >
                {' '}
                Learn more
              </Link>
            </div>
          </div>
          <div className="col-10 col-sm-8 col-lg-6 mx-auto">
            <Image
              src="/images/heroes/aboutphoto.svg"
              className="d-block mx-lg-auto img-fluid "
              alt="about photo"
              width="400"
              height="300"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="px-4 py-5 full-background">
        {/* <div className="container col-xxl-10 px-5 py-5 featured"> */}
          <div className="container text-center px-5 my-5 article-section">
            <h2 className="pb-2 mb-5 text-center section-heading"
                style={{ borderBottom: '1px solid #785e4c' }}>最新消息</h2>
            <div className="article-block">
              <div className="row row-cols-1 row-cols-md-2 d-flex py-4 align-items-center article-card">
                <div className="col-md-6 d-flex justify-content-center">
                  <Link
                    href="/blog/detail"
                    passHref
                    className="no-underline d-flex align-items-center"
                  >
                    <img
                      loading="lazy"
                      src="/course.jpg"
                      className="img-fluid"
                      alt="文章圖片"
                    />
                  </Link>
                </div>
                <div className="col-md-6 article-right">
                  <div className="mt-2 mb-2 d-flex article-title">
                    踏入春日的序曲，編寫生活的篇章
                  </div>
                  <br />
                  <div className="d-flex mb-3 article-date">2024.02.20</div>
                  <button className="btn btn-grey read-more btn-sm">
                    閱讀更多
                  </button>
                </div>
              </div>

              <div className="row row-cols-1 row-cols-md-2 d-flex py-4 align-items-center article-card">
                <div className="col-md-6 d-flex justify-content-center">
                  <Link
                    href="/blog/detail"
                    passHref
                    className="no-underline d-flex align-items-center"
                  >
                    <img
                      loading="lazy"
                      src="/course.jpg"
                      className="img-fluid"
                      alt="文章圖片"
                    />
                  </Link>
                </div>
                <div className="col-md-6 article-right">
                  <div className="mt-2 mb-2 d-flex  article-title">
                    踏入春日的序曲，編寫生活的篇章
                  </div>
                  <br />
                  <div className="d-flex mb-3 article-date">2024.02.20</div>
                  <button className="btn btn-grey read-more btn-sm">
                    閱讀更多
                  </button>
                </div>
              </div>
            </div>
          </div>
        {/* </div> */}
      </div>
        <div className="container col-xxl-10 px-5 py-5 mt-5 featured">
          <div className="container text-center">
            <h2 className="pb-2 mb-5 text-center mt-2 section-heading"
                style={{ borderBottom: '1px solid #785e4c' }}>熱銷商品</h2>
            <div className="row row-cols-2 row-cols-md-4 d-flex ">
              <div className="col-md-3 d-flex justify-content-center mb-4">
                <div className="w-350 no-border f-16 featured-card">
                  <Link
                    href="/product/detail"
                    passHref
                    className="no-underline"
                  >
                    <img
                      src="/images/product/list/strawberry-tart-01.jpg"
                      className="card-img-top"
                      alt=""
                    />
                    <div className="card-body no-space-x">
                      <p className="card-text note-text  mt-1">新品上市</p>
                      <h5 className="card-text fw-bold card-title">
                        草莓優格塔
                      </h5>
                      <p className="card-text type-text  mb-2">塔派甜點</p>
                      <p className="h-currency bold h-now">
                        NT$1,050 &nbsp;
                        <span className="text-decoration-line-through type-text">
                          NT$1,250
                        </span>
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-3 d-flex justify-content-center mb-4">
                <div className="w-350 no-border f-16 featured-card">
                  <Link
                    href="/product/detail"
                    passHref
                    className="no-underline"
                  >
                    <img
                      src="/images/product/list/strawberry-tart-01.jpg"
                      className="card-img-top"
                      alt=""
                    />
                    <div className="card-body no-space-x">
                      <p className="card-text note-text  mt-1">新品上市</p>
                      <h5 className="card-text fw-bold card-title">
                        草莓優格塔
                      </h5>
                      <p className="card-text type-text  mb-2">塔派甜點</p>
                      <p className="h-currency bold h-now">
                        NT$1,050 &nbsp;
                        <span className="text-decoration-line-through type-text">
                          NT$1,250
                        </span>
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-3 d-flex justify-content-center mb-4">
                <div className="w-350 no-border f-16 featured-card">
                  <Link
                    href="/product/detail"
                    passHref
                    className="no-underline"
                  >
                    <img
                      src="/images/product/list/strawberry-tart-01.jpg"
                      className="card-img-top"
                      alt=""
                    />
                    <div className="card-body no-space-x">
                      <p className="card-text note-text  mt-1">新品上市</p>
                      <h5 className="card-text fw-bold card-title">
                        草莓優格塔
                      </h5>
                      <p className="card-text type-text  mb-2">塔派甜點</p>
                      <p className="h-currency bold h-now">
                        NT$1,050 &nbsp;
                        <span className="text-decoration-line-through type-text">
                          NT$1,250
                        </span>
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-3 d-flex justify-content-center mb-4">
                <div className="w-350 no-border f-16 featured-card">
                  <Link
                    href="/product/detail"
                    passHref
                    className="no-underline"
                  >
                    <img
                      src="/images/product/list/strawberry-tart-01.jpg"
                      className="card-img-top"
                      alt=""
                    />
                    <div className="card-body no-space-x">
                      <p className="card-text note-text mt-1">新品上市</p>
                      <h5 className="card-text fw-bold card-title">
                        草莓優格塔
                      </h5>
                      <p className="card-text type-text  mb-2">塔派甜點</p>
                      <p className="h-currency bold h-now">
                        NT$1,050 &nbsp;
                        <span className="text-decoration-line-through type-text">
                          NT$1,250
                        </span>
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="container text-center">
            <h2 className="pb-2 mb-5 text-center mt-5 section-heading"
                style={{ borderBottom: '1px solid #785e4c' }}>
              熱門課程
            </h2>
            <div className="row row-cols-2 row-cols-md-4 g-4">
              {/* 這層加d-flex justify-content-center */}
              <div className="col-md-3 d-flex justify-content-center mb-4">
                <div className="w-350 no-border f-16 jusity-content-center featured-card">
                  <Link href="/class/detail" passHref className="no-underline">
                    <img src="/course.jpg" className="card-img-top" alt="" />
                    <div className="card-body no-space-x">
                      <h5 className="card-text fw-bold card-title mt-3">
                        法式甜點課程
                      </h5>
                      <p className="card-text type-text mb-2">講師：呂昇達</p>
                      <p className="h-currency bold h-now">
                        NT$2,000 &nbsp;
                        <span className="text-decoration-line-through type-text">
                          NT$2,500
                        </span>
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-3 d-flex justify-content-center mb-4">
                <div className="w-350 no-border f-16 featured-card">
                  <Link href="/class/detail" passHref className="no-underline">
                    <img src="/course.jpg" className="card-img-top" alt="" />
                    <div className="card-body no-space-x">
                      <h5 className="card-text fw-bold card-title mt-3">
                        法式甜點課程
                      </h5>
                      <p className="card-text type-text mb-2">講師：呂昇達</p>
                      <p className="h-currency bold h-now">
                        NT$2,000 &nbsp;
                        <span className="text-decoration-line-through type-text">
                          NT$2,500
                        </span>
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-3 d-flex justify-content-center mb-4">
                <div className="w-350 no-border f-16 featured-card">
                  <Link href="/class/detail" passHref className="no-underline">
                    <img src="/course.jpg" className="card-img-top" alt="" />
                    <div className="card-body no-space-x">
                      <h5 className="card-text fw-bold card-title mt-3">
                        法式甜點課程
                      </h5>
                      <p className="card-text type-text mb-2">講師：呂昇達</p>
                      <p className="h-currency bold h-now">
                        NT$2,000 &nbsp;
                        <span className="text-decoration-line-through type-text">
                          NT$2,500
                        </span>
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-3 d-flex justify-content-center mb-4">
                <div className=" no-border f-16 featured-card">
                  <Link href="/class/detail" passHref className="no-underline">
                    <img src="/course.jpg" className="card-img-top" alt="" />
                    <div className="card-body no-space-x">
                      <h5 className="card-text fw-bold card-title mt-3">
                        法式甜點課程
                      </h5>
                      <p className="card-text type-text mb-2">講師：呂昇達</p>
                      <p className="h-currency bold h-now">
                        NT$2,000 &nbsp;
                        <span className="text-decoration-line-through type-text">
                          NT$2,500
                        </span>
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* <Featured /> */}
      <CategoryCard category={category}/>

      <style global jsx>
        {`
          .card-cover {
            background-repeat: no-repeat;
            background-position: center center;
            background-size: cover;
          }

          .text-shadow-1 {
            text-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.25);
          }
          .text-shadow-2 {
            text-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.25);
          }
          .text-shadow-3 {
            text-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.25);
          }
        `}
      </style>
    </>
  )
}
Home.getLayout = function getLayout(page) {
  return <CustomizeLayout>{page}</CustomizeLayout>
}

export default Home