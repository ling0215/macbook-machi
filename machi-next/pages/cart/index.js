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
  const [cartItems, setCartItems] = useState({ items: [] }) // 初始化时给一个默认的对象，包含空数组的items
  const [formattedCartItems, setFormattedCartItems] = useState([])

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
            setCartItems(data || { items: [] }) // 确保 data 有值，否则设置为包含空数组的对象
          }
        })
        .catch((error) => {
          setError('加载购物车数据失败')
          console.error(error)
        })
    }
  }, [auth.userData])

  // 定义 newformattedCartItems 在 useEffect 内部，确保 cartItems 已更新
  useEffect(() => {
    const newformattedCartItems = cartItems.items
      .map((item) => {
        if (item.product_id_fk) {
          return {
            id: item.product_id_fk,
            quantity: item.product_count,
            price: item.product_price,
            name: item.product_name,
            image: '',
            type: 'product',
          }
        } else if (item.class_id_fk) {
          return {
            id: item.class_id_fk,
            quantity: item.class_count,
            price: item.class_price,
            name: item.class_name,
            image: '',
            type: 'class',
            classtime: '2024/08/10',
            address: '復興堡',
          }
        } else if (item.custom_id_fk) {
          return {
            id: item.custom_id_fk,
            quantity: item.custom_count,
            price: item.custom_price,
            name: item.custom_name,
            image: 'item.custom_image',
            type: 'custom',
          }
        }
        return null
      })
      .filter((item) => item !== null)
    setFormattedCartItems(newformattedCartItems)
  }, [cartItems])
  // console.log(cartItems)
  console.log(formattedCartItems)
  const handleClick = () => {
    setShowPage(!showPage)
  }

  const handleSelectedItems = (items) => {
    setSelectedItems(items)
  }

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
