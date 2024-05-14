import React from "react";
import {CiHeart} from "react-icons/ci";
import styles from './classcard1.module.scss'
import Image from "next/image";
import Link from "next/link";
import {IoCartOutline, IoHeartOutline} from "react-icons/io5";



export default function CourseCard1({course}) {
  const imageUrl = `/images/course/card/${course.course_id}_1.jpg`//暫時標記
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
                    <h5 class="car d-title fw-bolder ">{course.course_name.slice(0, 8)}  <IoHeartOutline className={styles.heartIcon} /></h5>
                    
                    <p class="card-text fw-bolder ">
                      課堂地點:台北市北投區裕民六路130號1樓
                    </p>
                    <p class="card-text fw-bolder">課堂日期:2024/04/03</p>
                    <p class="card-text fw-bolder">講師:呂昇達</p>
                    <p class="card-text">
                      <small class="text-muted">
                        呂昇達老師在這次課程之中使用了自大正時代創立至今，具有百年歷史的《葵製茶》！以有機抹茶《蒼竹》讓同學們在課程中體驗抹茶的魅力
                      </small>
                    </p>

                    <p class="text-end"  style={{
marginTop: '50px',
}}>
                      $2000<button 
                      className={`${styles['btn-info']}`}
                     
>課程詳情</button>
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