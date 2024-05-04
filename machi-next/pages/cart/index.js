import React, { useState } from 'react'
import dataCartItems from '@/data/cart/test.json'
import { CartProvider } from '@/hooks/use-cart-state'
import CartPage1 from '@/components/cart/cart-page1'
import CartPage2 from '@/components/cart/cart-page2'
import CartList from '@/components/cart/list'

// 剛剛格式化後的購物車初始項目

export default function Text1() {
  const [ShowPage, setShowPage] = useState(true)
  const handleClick = () => {
    setShowPage(!ShowPage)
  }

  const formattedCartItems = dataCartItems.map(item => {
    if (item.product_id) {
      return {
        id: item.product_id,
        quantity: item.product_quantity,
        price: item.product_price,
        name: item.prodcut_name,
        image: item.prodcut_image,
        type: 'product'
      };
    } else if (item.calss_id) {
      return {
        id: item.calss_id,
        quantity: item.class_quantity,
        price: item.class_price,
        name: item.class_name,
        image: item.class_image,
        type: 'class'
      };
    } else if (item.custom_id) {
      return {
        id: item.custom_id,
        quantity: item.custom_quantity,
        price: item.custom_price,
        name: item.custom_name,
        image: item.custom_image,
        type: 'custom'
      };
    }
  });
  
  return (
    <CartProvider initialCartItems={formattedCartItems}>
      {ShowPage ? <CartPage1 onClickPage2={handleClick} /> : <CartPage2 />}
    </CartProvider>
  )
}