import React from "react";
import {CiHeart} from "react-icons/ci";
import styles from './classcard1.module.scss'
import Image from "next/image";
import Link from "next/link";
import {IoCartOutline, IoHeartOutline} from "react-icons/io5";
import { addFav, removeFav, getFavs } from '@/services/user'
import { useCart } from '@/hooks/cart-type-state'
import { AuthProvider, useAuth } from '@/hooks/use-auth'



export default function CourseCard1({course}) {
  const imageUrl = `/images/course/slide/${course.course_id}_1.jpg`//暫時標記
 //我的最愛
 const { favorites, setFavorites } = useAuth()
 const isFavorite = favorites.includes(course.course_id)

 const handleFavoriteClick = async () => {
   if (isFavorite) {
     await removeFav(course.course_id)
   } else {
     await addFav(course.course_id)
   }
   const newFavorites = await getFavs()
   // console.log(newFavorites.data.data.favorites)
   setFavorites(newFavorites.data.data.favorites)
 }
 //我的最愛

    return (
        <div id="page-content-wrapper" className="col">
        <div className="container-fluid">
          <div className="row row-cols-1 row-cols-md-3 g-4 d-flex flex-column">
            <div class="card mb-3 w-100  no-border ">
              <div class="row g-0">
                <div class="col-md-4">
                <Link href={`/course/${course.course_id}`}>
            <Image
              src={imageUrl}
              className={styles.cardImg}
              alt="productImg"
              placeholder="blur"
              blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" 
              width={174} 
              height={230} 
            />
          </Link>
                </div>
                <div class="col-md-8" >
                  <div className={styles.cardbody}>
                    <h5 class="car d-title fw-bolder "
                    className={styles.cardtext1}>{course.course_name.slice(0, 20)}  {isFavorite ? (
                      <IoHeart
                        className={styles.heartIcon}
                        onClick={handleFavoriteClick}
                      />
                    ) : (
                      <IoHeartOutline
                        className={styles.heartIcon}
                        onClick={handleFavoriteClick}
                      />
                    )} </h5>
                    
                    <p class="card-text fw-bolder"
                    className={styles.cardtext1}>
                      課堂地點:台北市北投區裕民六路130號1樓
                    </p>
                    <p class="card-text fw-bolder"
                    className={styles.cardtext1}>課堂日期:2024/04/03</p>
                    <p class="card-text fw-bolder" className={styles.cardtext1}>講師:呂昇達</p>
                    <p class="card-text" className={styles.cardtext1} dangerouslySetInnerHTML={{ __html: course.course_description }}>
                    
                    </p>

                    <p class="text-end"  style={{
marginTop: '50px',
}}>
                      $2000
                      <Link href={`/course/${course.course_id}`}><button 
                      className={`${styles['btn-info']}`}
                     
>課程詳情</button></Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
  
          </div>
        </div>
      </div>
    )
}