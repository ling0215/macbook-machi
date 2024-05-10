// pages/index.js
import Link from 'next/link'
import Image from 'next/image'
import HomeCarousel from '@/components/homepage/home-carousel'
import Featured from '@/components/homepage/featured'
import CustomizeLayout from '@/components/layout/customize/customize-layout'
import PlaceholderText from '@/components/common/placeholder-text'

function Home() {
  return (
    <>
      <HomeCarousel />
      <div className="container col-xxl-10 px-1 py-2">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-lg-6 about">
            <h2 className="about-title fw-bold lh-1 mb-3">關於 Machi</h2>
            <p className="lead">Since 2015</p>
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
      {/* 熱銷商品區塊 */}
      <div className="px-4 py-5 full-background">
        <div className="container col-xxl-10 px-1 py-5 featured">
          <div className="container text-center">
            <h2 className="pb-2 border-bottom mb-5 text-center mt-2 section-heading">
              熱銷商品
            </h2>
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
            <h2 className="pb-2 border-bottom mb-5 text-center mt-5 section-heading">
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
      </div>
      <Featured />
      <div className="px-4 py-5 full-background">
        <div className="container col-xxl-10 px-1 py-5 featured">
          <div className="container text-center mt-3 mb-5 article-section">
            <h2 className="pb-2 border-bottom mb-5 text-center section-heading">
              最新消息
            </h2>
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
        </div>
      </div>

      <div className="container px-4 py-5" id="custom-cards">
        <h2 className="pb-2 border-bottom text-center section-heading">商品類別</h2>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 py-5 align-items-stretch">
          <div className="col-md-6 d-flex justify-content-center">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark text-center rounded-4 shadow-lg"
              style={{
                width: "18rem",
                backgroundImage: "url('/images/customize/pexels-katrin-bolovtsova-5702721.jpg')",
                //圖片效果 
                filter: 'brightness(0.5)',
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 justify-content-center text-white text-shadow-1">
                <h4 className="display-6 lh-1 fw-bold">
                  塔派甜點
                </h4>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{
                backgroundImage: "url('/images/customize/pexels-katrin-bolovtsova-5702721.jpg')",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 justify-content-center text-white text-shadow-1">
                <h4 className="display-6 lh-1 fw-bold">
                  蛋糕
                </h4>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{
                backgroundImage: "url('/images/features/unsplash-photo-3.jpg')",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  Another longer title belongs here
                </h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      src="https://github.com/twbs.png"
                      alt="Bootstrap"
                      width="32"
                      height="32"
                      className="rounded-circle border border-white"
                    />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <i className="bi bi-geo-fill me-2"></i>
                    <small>California</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="bi bi-calendar3 me-2"></i>
                    <small>5d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{
                backgroundImage: "url('/images/features/unsplash-photo-3.jpg')",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  Another longer title belongs here
                </h3>
                <ul className="d-flex list-unstyled mt-auto">
                  {/* <li className="me-auto">
                    <img
                      src="https://github.com/twbs.png"
                      alt="Bootstrap"
                      width="32"
                      height="32"
                      className="rounded-circle border border-white"
                    />
                  </li> */}
                  <li className="d-flex align-items-center me-3">
                    <i className="bi bi-geo-fill me-2"></i>
                    <small>California</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="bi bi-calendar3 me-2"></i>
                    <small>5d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      

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