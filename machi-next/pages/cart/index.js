import React, { useState } from 'react'
// eslint-disable-next-line import/no-unresolved
import CartPage1 from '@/components/cart/cart-page1'
import CartPage2 from '@/components/cart/cart-page2'
import CartPage3 from '@/components/cart/cart-page3'
import CartList from '@/components/cart/list'

export default function Text1() {
  const [ShowPage, setShowPage] = useState(true)
  const handleClick = () => {
    setShowPage(!ShowPage)
  }
  return (
    <div>
      {ShowPage ? <CartPage1 onClickPage2={handleClick} /> : <CartPage2 />}
    </div>
  )
}
