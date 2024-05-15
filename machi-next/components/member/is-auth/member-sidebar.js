import React from 'react';
import Link from 'next/link';
import styles from '../member.module.scss';

function MemberSidebar() {
  return (
    <div className={`${styles['menu']} d-none d-lg-block col-lg-5 me-lg-5`}>
      <ul className='d-flex flex-column list-unstyled'>
        <li className='p-2'>
          <Link href="/member/account" className={`${styles['member-sidebar']} p-2`} >會員資料</Link>
        </li>
        <li className='p-2'>
          <Link href="/member/account/order-query" className={`${styles['member-sidebar']} p-2`} >訂單查詢</Link>
        </li>
        <li className='p-2'>
          <Link href="/member/account/favorite-products" className={`${styles['member-sidebar']} p-2`} >收藏商品</Link>
        </li>
        <li className='p-2'>
          <Link href="/member/account/favorite-articles" className={`${styles['member-sidebar']} p-2 `} >收藏文章</Link>
        </li>
        <li className='p-2'>
          <Link href="/member/account/coupons" className={`${styles['member-sidebar']} p-2`} >專屬優惠券</Link>
        </li>
      </ul>
    </div>
  );
}

export default MemberSidebar;