import React, { useState } from 'react'

import CartPage1 from '@/components/cart/cart-page1'
import CartPage2 from '@/components/cart/cart-page2'
import CartPage3 from '@/components/cart/cart-page3'

export default function CartMain() {
  const [showPage, setShowPage] = useState(1)
  const [selectedItems, setSelectedItems] = useState()

  const handleClick = (page) => {
    setShowPage(page)
  }

  const handleSelectedItems = (items) => {
    setSelectedItems(items)
  }

  const renderPage = () => {
    switch (showPage) {
      case 1:
        return (
          <CartPage1
            onClickPage={() => handleClick(2)}
            selectedItems={selectedItems}
            onSelectItems={handleSelectedItems}
          />
        )
      case 2:
        return (
          <CartPage2
            onClickPageTo1={() => handleClick(1)}
            onClickPageTo3={() => handleClick(3)}
            selectedItems={selectedItems}
            onSelectItems={handleSelectedItems}
          />
        )
      case 3:
        return (
          <CartPage3
            selectedItems={selectedItems}
            onSelectItems={handleSelectedItems}
          />
        )
      default:
        return null
    }
  }

  return renderPage()
}
