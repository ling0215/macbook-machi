import React from 'react'
import Link from 'next/link'
import styles from './product.module.scss'
import Image from 'next/image'
import { IoCartOutline, IoHeartOutline } from 'react-icons/io5'
import { checkAuth } from '@/services/user'
import { addToCart } from '@/services/cart'
import Swal from 'sweetalert2'

export default function ProductCard({ product }) {
  const imageUrl = `/images/product/card/${product.product_id}1.jpg`

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    },
  })

  return (
    <>
      <div className="col-6">
        <div className={`${styles.cardBody}`}>
          <Link href={`/product/${product.product_id}`} passHref>
            <Image
              src={imageUrl}
              className={styles.cardImg}
              alt="productImg"
              placeholder="blur"
              blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" // 這是一個空白的 GIF，你需要根據你的需求來設定這個值
              width={230} // 你需要根據你的需求來設定這個值
              height={230} // 你需要根據你的需求來設定這個值
            />
          </Link>
          <div className={styles.cardInfo}>
            <IoHeartOutline className={styles.heartIcon} />
            <h5 className={styles.cardText}>{product.product_name}</h5>
            <p className={styles.typeText}>{product.product_category}</p>
            <h5 className={styles.currency}>
              NT${product.product_price_small}
            </h5>
            <button
              className={`${styles.cartBtn}`}
              onClick={async () => {
                const response = await checkAuth()
                if (response.data.status === 'success') {
                  const uid = response.data.data.user.user_id
                  const data = {
                    type: 'product',
                    id: product.product_id,
                    name: product.product_name, // 產品名稱
                    price: product.product_price_small, // 產品價格
                    quantity: 1, // 數量
                    subtitle: product.product_subtitle_middle ? '6吋' : '', // 產品副標題
                  }
                  addToCart(uid, data)
                    .then((response) => {
                      console.log('添加成功:', response)
                      Toast.fire({
                        icon: 'success',
                        title: '成功加入購物車',
                      })
                    })
                    .catch((error) => {
                      console.error('添加失敗:', error)
                    })
                } else {
                  console.log('用戶未登入')
                  // 這裡可以添加提示用戶登入的程式碼
                }
              }}
            >
              <IoCartOutline className={styles.cartIcon} /> 加入購物車
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
