import React from 'react';
import Link from 'next/link';

function LoginNavBar() {
  return (
    <nav>
      <ul className='d-flex flex-column flex-md-row justify-content-center list-unstyled'>
        <Link className='bg-light-brown p-2 px-4 mx-2 text-primary-dark text-decoration-none' href="/member/login"><li>會員登入</li></Link>
        <Link className='bg-light-brown p-2 px-4 mx-2 text-primary-dark text-decoration-none' href="/member/register"><li>會員註冊</li></Link>
        <Link className='bg-light-brown p-2 px-4 mx-2 text-primary-dark text-decoration-none' href="/member/forget-password"><li>忘記密碼</li></Link>
        <Link className='bg-light-brown p-2 px-4 mx-2 text-primary-dark text-decoration-none' href="/member/order-query"><li>訂單查詢</li></Link>
      </ul>
    </nav>
  );
}

export default LoginNavBar;