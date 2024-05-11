import React, { useState, useEffect } from 'react'
import { fetchCart } from '@/services/cart'
import dataCartItems from '@/data/cart/test.json'
import { CartTypeProvider } from '@/hooks/cart-type-state'
import { useAuth } from '@/hooks/use-auth'
import CartPage1 from '@/components/cart/cart-page1'
import CartPage2 from '@/components/cart/cart-page2'

export default function CartMain() {
  const [showPage, setShowPage] = useState(true)
  const [selectedItems, setSelectedItems] = useState()
  const [cartItems, setCartItems] = useState([])

  //導入使用的Hook
  const [error, setError] = useState(null)
  const [total, setTotal] = useState(0)
  const { auth } = useAuth()
  useEffect(() => {
    console.log(auth.userData.user_id)
  }, [])
  useEffect(() => {
    if (auth.userData && auth.userData.user_id) {
      fetchCart(auth.userData.user_id)
        .then((data) => {
          if (data.error) {
            setError('获取购物车数据失败')
          } else {
            setCartItems(data || []) // 假设返回的数据中有 items 字段
          }
        })
        .catch((error) => {
          setError('加载购物车数据失败')
          console.error(error)
        })
    }
  }, [auth.userData])

  console.log(cartItems)

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
