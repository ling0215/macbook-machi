import React from 'react'
import Link from 'next/link'
import styles from './course.module.scss'
import Image from 'next/image'
import { IoCartOutline, IoHeartOutline } from 'react-icons/io5'

export default function CourseCard({ course }) {
  const imageUrl = `/images/course/card/${course.course_id}_1.jpg`//暫時標記
  return (
    <>
    
      <div className="col-6">
        
        <div className={styles.cardBody}>
        <Link href={`/course/${course.course_id}`}>
            <Image
              src={imageUrl}
              className={styles.cardImg}
              alt="productImg"
              placeholder="blur"
              blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" // 這是一個空白的 GIF，你需要根據你的需求來設定這個值
              width={174} // 你需要根據你的需求來設定這個值
              height={230} // 你需要根據你的需求來設定這個值
            />
          </Link>
          <div className={styles.cardInfo}>
            
          
            <IoHeartOutline className={styles.heartIcon} />
            
            {course.course_name && (
  <h5 className={styles.cardText}>{course.course_name.slice(0, 8)}</h5>
)}
            <p className={styles.typeText}>{course.course_category}</p>
            <h5 className={styles.currency}>NT${course.course_price}</h5>
            
            <button className={styles.cartBtn}>
              <IoCartOutline className={styles.cartIcon} /> 加入購物車
            </button>
            
          </div>
        </div>
      </div>
    </>
  )
}
