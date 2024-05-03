import React, { useState } from 'react'
// eslint-disable-next-line import/no-unresolved
import CartPage1 from '@/components/cart/cart-page1'
import CartPage2 from '@/components/cart/cart-page2'
import CartPage3 from '@/components/cart/cart-page3'
import CartList from '@/components/cart/list'
<<<<<<< HEAD
export default function Text1() {
  const [ShowPage, setShowPage] = useState(true)
  const handleClick = () => {
    setShowPage(!ShowPage)
  }
  return (
    <div>{ShowPage ? <CartPage1 onClick={handleClick} /> : <CartPage2 />}</div>
=======

export default function Text1() {
  return (
    <CartList></CartList>
    // <CartPage1></CartPage1>
    // <CartPage2></CartPage2>
    // <CartPage3></CartPage3>
>>>>>>> cart_dev
  )
}
