import React, { useState, useEffect } from 'react'

import CartPage1 from '@/components/cart/cart-page1'
import CartPage2 from '@/components/cart/cart-page2'

export default function CartMain() {
  const [showPage, setShowPage] = useState(true)
  const [selectedItems, setSelectedItems] = useState()

  // 定义 newformattedCartItems 在 useEffect 内部，确保 cartItems 已更新
  const handleClick = () => {
    setShowPage(!showPage)
  }

  const handleSelectedItems = (items) => {
    setSelectedItems(items)
  }

  return showPage ? (
    <CartPage1
      onClickPage={handleClick}
      selectedItems={selectedItems}
      onSelectItems={handleSelectedItems}
    />
  ) : (
    <CartPage2
      onClickPage={handleClick}
      selectedItems={selectedItems}
      onSelectItems={handleSelectedItems}
    />
  )
}
