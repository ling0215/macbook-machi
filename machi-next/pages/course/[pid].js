import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { data } from 'jquery'
import React from 'react'
import Carousel from '@/components/product/carousel'
import {IoCartOutline, IoHeartOutline} from 'react-icons/io5'
import { useCart } from '@/hooks/use-cart-state'
import styles from './course-detail.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

// import required modules
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules'

export default function Detail() {
  const [course, setCourse] = useState({
   status:'',
   data:{course:{
    course_id:'',
    course_name:'',
    course_description:'',
    course_description_full:'',
    course_category:'',
    teacher_id_fk:'',
    course_location:'',
    course_price:'',
    course_enroll_start:'',
    course_enroll_end:'',
    course_start_time:'',
    course_end_time:'',
    course_status:'',

   }}
  })

  const router = useRouter()

  const getCourse = async (pid) => {
    const url = `http://localhost:3005/api/course/${pid}`

    try {
      const res = await fetch(url)
      const data = await res.json()
      
      if (typeof data === 'object' && data !== null) {
        setCourse(data)
      } else {
        console.log('伺服器回傳資料類型錯誤，無法設定到狀態中')
      }
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    if (router.isReady) {
      getCourse(router.query.pid)
    }
    // eslint-disable-next-line
  }, [router.isReady])
  const [activeButton, setActiveButton] = useState('intro');

  const handleButtonClick = (eventKey) => {
      setActiveButton(eventKey);
  };

  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  return (
    <>
      <div className="row mt-5 mx-2 d-flex justify-content-center ">
        <div className="col-md-5">
          <div className="position-sticky" style={{ top: '2rem' }}>
          <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Autoplay, FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src="/images/product/slide/p1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/product/slide/p2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/product/slide/p3.jpg" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/images/product/slide/p1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/product/slide/p2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/product/slide/p3.jpg" />
        </SwiperSlide>
      </Swiper>
          </div>
        </div>
        <div className="col-md-6 ms-3 product-info">
          <h4 className="text-primary-dark mt-2">{course.data.course.course_name}</h4>
          <p className="text-muted">{course.data.course.course_category}</p>
          <p className="product-desc mb-4">
          {course.data.course.course_description}
          </p>
          <div className="mb-4">
       
          </div>
          {/* 數量按鈕 */}
          <div className={`d-flex g-3 justify-content-between align-items-center mb-4 addbuton`}>
            <div
              className={`btn-group d-flex   `}
              role={`group`}
              aria-label={`Basic mixed styles example `}
              style={{
                width: '128px',
                height: '48px',
              }}
            >
              <button
                className={` btn btn-outline-light text-primary-dark h4 mb-0 border-brown`}
                style={{ width: '28px' }}
                // onClick={() => decrement(item.id, item.type)} // 减少数量的点击事件
              >
                -
              </button>
              <button
                className={` btn btn-outline-light text-primary-dark h4 mb-0 border-brown`}
              >
                {/* {item.quantity} */}
              </button>
              <button
                className={` btn btn-outline-light text-primary-dark h4 mb-0 border-brown`}
                style={{ width: '28px' }}
                // onClick={() => increment(item.id, item.type)} // 增加数量的点击事件
              >
                +
              </button>
            </div>
            {/* <div className={` h4 `}>小計NT${item.subtotal}</div> */}
            <div className="col-md-5 d-flex justify-content-center align-items-center text-primary-dark">
              <p className="pe-2">售價</p>
              <h4 className="text-primary-dark">{course.data.course.course_price}</h4>
            </div>
            
          </div>
          

          <div className="mb-4 d-flex justify-content-center align-items-center ">
            <div className="col-6 pe-2">
              <button className="btn btn-outline-brown btn-lg w-100 cartBtn">
                  <IoCartOutline className="fs-3 text-brown" /> 加入購物車
              </button>
            </div>
            <div className="col-6 ps-2">
                <button className="btn btn-brown text-white btn-lg w-100 buynowBtn">立即購買</button>
            </div>
          </div>
          <button className="btn btn-outline-gary col-md-6 text-start text-primary-dark">
            <IoHeartOutline className="fs-3 text-primary-dark" /> 加入追蹤清單
          </button>
        </div>
      </div>
      <div className="row mt-5"> 
      <div className="label">
            <button
                    onClick={() => handleButtonClick('intro')}
                    className={`${styles.intro} ${activeButton === 'intro' ? styles.buttonActive : ''}`}
                    title="商品介紹">
                    課程介紹
                </button>
                <button
                    onClick={() => handleButtonClick('other')}
                    className={`${styles.other} ${activeButton === 'other' ? styles.buttonActive : ''}`}
                    title="運送與注意事項">
                    運送與注意事項
                </button>
            </div>
            <div className="content" style={{ display: activeButton === 'intro' ? 'block' : 'none' }}>
                <div
                    className="list-group-flush p-2 py-3 mb-4 border">
                    <h4 id="title">商品介紹內文</h4>
                    
                </div>
            </div>
            <div className="content" style={{ display: activeButton === 'other' ? 'block' : 'none' }}>
                <div
                    className="list-group-flush p-2 py-3 mb-4 border">
                    <h4 id="title">｜產品尺寸｜</h4>
                    <p className="list-group-item">&nbsp;6吋 - 13cm(Φ)x7cm(h)
                    <br/> &nbsp;9吋 (產品以手工製作，尺寸僅供參考，略有誤差屬正常現象)</p>
                    <h4 id="title">｜保存與享用｜</h4>
                    <p className="list-group-item">
                        為確保品質，將以低溫宅配運送，收到產品後，可選擇冷藏或冷凍擇一方式保存</p>
                    <p className="list-group-item">◼︎ 冷藏 |  3天內為最佳賞味期間</p>
                    <p className="list-group-item">◼︎ 冷凍 |  2週內，請密封保存避免冰箱異味影響風味</p>
                    <h4 id="title">｜運送與注意事項｜</h4>
                    <p className="list-group-item">
                        ◼︎ 為確保商品新鮮及配送安全，宅配產品全程將使用低溫冷凍配送，部分商品因損壞風險較大，恕無法宅配。</p>
                    <p className="list-group-item">
                        ◼︎ 自取時間為營業日的PM14:00-20:00。</p>
                    <p className="list-group-item">◼︎ 宅配金額$190-$240、桃園以外線市快遞金額，將依照您的里程數計算</p>
                    <p className="list-group-item">◼︎ 訂單送出後，請在24小時內完成付款，付款完成才開始安排訂單製作唷</p>
                    <p className="list-group-item">◼︎ 商品皆為新鮮製作，因此最快出貨日為下單後3個工作天</p>
                    <p className="list-group-item">◼︎ 急單請電洽，聯繫電話 (03)452-1234，夥伴們將跟您確認收貨日期相關事宜</p>
                    <h4 id="title">｜宅 配 延 遲｜</h4>
                    <p className="list-group-item">因疫情升級造成物流繁忙，恕無法於指定日期配送到貨，在商品送達前，敬請多留意黑貓宅配之聯繫電話，也建議您提前預留到貨時間，以確保趕得上您的時程安排。此段期間，商品若有延誤，恕不接受退換貨申請，敬請見諒。若有急單或需於指定日期送達，建議您多加利用快遞服務或前往店面自取。</p>
                    <h4 id="title">｜風 險 說 明｜</h4>
                    <p className="list-group-item">宅配商品皆進行多次配送實驗，並給予最完善的包裝，配送過程仍有一定的風險，如遇蛋糕位移、側邊損傷或裝飾掉落、微損，或因宅配繁盛期延遲到貨與毀損，均不在毀壞補償範圍內，風險須自行承擔</p>
                </div>
            </div>
      </div>
    </>
  )
}
