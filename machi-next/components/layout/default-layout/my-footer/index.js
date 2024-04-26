import styles from './footer.module.scss'
import Link from 'next/link'
import Image from 'next/image'

// ICON
import { FaInstagram } from 'react-icons/fa6'
import { FaSquareFacebook } from 'react-icons/fa6'
import { FaLine } from 'react-icons/fa'
import { FiMapPin } from 'react-icons/fi'
import { MdOutlineMail } from 'react-icons/md'
import { FiPhone } from 'react-icons/fi'
import { MdOutlineAccessTime } from 'react-icons/md'

export default function MyFooter() {
  return (
    <>
      <footer className={`${styles.machi_footer} footer mt-auto py-3`}>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="mt-4" />
              <div className={`${styles['logo-machi']} mb-3  mx-auto`}>
                {/* LOGO */}
                <Image
                  src="/machi.svg"
                  alt=""
                  width={145}
                  height={50}
                  priority
                />
              </div>
              <div className="d-flex justify-content-center">
                {/* 三個小圖標 */}
                <FaInstagram color="white" size={36} />

                <FaSquareFacebook color="white" size={36} className="mx-3" />

                <FaLine color="white" size={36} />
              </div>
            </div>
            <div className="col">
              <Link
                href="#"
                className={`${styles['highlight']} d-block mb-2 text-decoration-none`}
              >
                會員專區
              </Link>
              <div className={`${styles['divider']}`} />
              <Link
                href="#"
                className="d-block mb-2 text-decoration-none text-white"
              >
                我的帳戶
              </Link>
              <Link
                href="#"
                className="d-block mb-2 text-decoration-none text-white"
              >
                訂單查詢
              </Link>
              <Link
                href="#"
                className="d-block mb-2 text-decoration-none text-white"
              >
                收藏清單
              </Link>
              <Link
                href="#"
                className="d-block mb-2 text-decoration-none text-white"
              >
                專屬優惠券
              </Link>
            </div>
            <div className="col">
              <Link
                href="#"
                className={`${styles['highlight']} d-block mb-2 text-decoration-none`}
              >
                客戶服務
              </Link>
              <div className={`${styles['divider']}`} />
              <Link
                href="#"
                className="d-block mb-2 text-decoration-none text-white"
              >
                宅配須知
              </Link>
              <Link
                href="#"
                className="d-block mb-2 text-decoration-none text-white"
              >
                退款政策
              </Link>
              <Link
                href="#"
                className="d-block mb-2 text-decoration-none text-white"
              >
                服務條款
              </Link>
            </div>
            <div className="col">
              <Link
                href="#"
                className={`${styles['highlight']} d-block mb-2 text-decoration-none`}
              >
                關於我們
              </Link>
              <div className={`${styles['divider']}`} />
              <Link
                href="#"
                className="d-block mb-2 text-decoration-none text-white"
              >
                <FiMapPin size={20} />
                320桃園市中壢區新生路421號
              </Link>
              <Link
                href="#"
                className="d-block mb-2 text-decoration-none text-white"
              >
                <MdOutlineMail size={20} />
                machi@gmail.com
              </Link>
              <Link
                href="#"
                className="d-block mb-2 text-decoration-none text-white"
              >
                <FiPhone size={20} />
                (03)452-1234
              </Link>
              <Link
                href="#"
                className="d-block mb-2 text-decoration-none text-white"
              >
                <MdOutlineAccessTime size={20} />
                12:00-20:00
              </Link>
            </div>
          </div>
          <div className="text-white text-center">
            machi © All rights reserved.{' '}
          </div>
        </div>
      </footer>
    </>
  )
}
