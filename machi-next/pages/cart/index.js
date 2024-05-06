import React, { useState, useEffect } from 'react'
import dataCartItems from '@/data/cart/test.json'
import { CartTypeProvider } from '@/hooks/cart-type-state'
import CartPage1 from '@/components/cart/cart-page1'
import CartPage2 from '@/components/cart/cart-page2'

export default function Text1() {
  const [showPage, setShowPage] = useState(true)
  const [selectedItems, setSelectedItems] = useState()

  const handleClick = () => {
    setShowPage(!showPage)
  }

  const handleSelectedItems = (items) => {
    setSelectedItems(items)
  }

  const formattedCartItems = dataCartItems.map((item) => {
    if (item.product_id) {
      return {
        id: item.product_id,
        quantity: item.product_quantity,
        price: item.product_price,
        name: item.prodcut_name,
        image: item.prodcut_image,
        type: 'product',
        checkType: false,
      }
    } else if (item.calss_id) {
      return {
        id: item.calss_id,
        quantity: item.class_quantity,
        price: item.class_price,
        name: item.class_name,
        image: item.class_image,
        type: 'class',
        checkType: false,
        classtime: '2024/08/10',
        address: '復興堡',
      }
    } else if (item.custom_id) {
      return {
        id: item.custom_id,
        quantity: item.custom_quantity,
        price: item.custom_price,
        name: item.custom_name,
        image: item.custom_image,
        type: 'custom',
        checkType: false,
      }
    }
  })

  return (
    <CartTypeProvider initialCartItems={formattedCartItems}>
      {showPage ? (
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
      )}
    </CartTypeProvider>
  )
}
