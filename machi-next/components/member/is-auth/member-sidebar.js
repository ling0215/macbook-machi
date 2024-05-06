import React from 'react';
import Link from 'next/link';

function MemberSidebar() {
  return (
    <nav style={{ left: 0, top: 0, height: '100%', width: '200px', backgroundColor: '#f5f5f5' }}>
      <ul className='d-flex flex-column list-unstyled'>
        <Link href="/member/profile"><li className='p-2'>會員資料</li></Link>
        <Link href="/member/order-query"><li className='p-2'>訂單查詢</li></Link>
        <Link href="/member/favorite-products"><li className='p-2'>收藏商品</li></Link>
        <Link href="/member/favorite-articles"><li className='p-2'>收藏文章</li></Link>
        <Link href="/member/coupons"><li className='p-2'>專屬優惠券</li></Link>
      </ul>
    </nav>
  );
}

export default MemberSidebar;