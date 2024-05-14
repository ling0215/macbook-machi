import React, { useState, useContext, createContext, useEffect } from 'react'
import {
  init,
  addOne,
  findOneById,
  updateOne,
  removeOne,
  incrementOne,
  decrementOne,
} from './cart-type-state-reducer'
import { fetchCart, updateCartItem, removeFromCart } from '@/services/cart'
import { useAuth } from '@/hooks/use-auth'

const CartContext = createContext(null)

export const CartTypeProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const [cartState, setCartState] = useState(init([]))
  const [error, setError] = useState(null)
  const { auth } = useAuth()
  const [formattedCartItems, setFormattedCartItems] = useState([])
  console.log(auth)
  useEffect(() => {
    // 当组件加载和 auth.userData 更新时，尝试从数据库获取购物车数据
    const loadCartData = async () => {
      if (auth.userData && auth.userData.user_id) {
        try {
          const data = await fetchCart(auth.userData.user_id)
          if (data.error) {
            setError('获取购物车数据失败')
          } else {
            setFormattedCartItems(data || [])
            setCartState(init(data || []))
          }
        } catch (error) {
          setError('加载购物车数据失败')
          console.error(error)
        }
      }
    }

    loadCartData()
  }, [auth.userData])
  console.log(formattedCartItems)
  console.log(cartState)
  useEffect(() => {
    // 确保 formattedCartItems.items 存在并且是一个数组
    if (formattedCartItems.items && Array.isArray(formattedCartItems.items)) {
      const newFormattedCartItems = formattedCartItems.items
        .map((item) => {
          if (item.product_id_fk) {
            return {
              uid: auth.userData.user_id,
              id: item.product_id_fk,
              quantity: item.product_count,
              price: item.product_price,
              name: item.product_name,
              image: '',
              type: 'product',
            }
          } else if (item.class_id_fk) {
            return {
              uid: auth.userData.user_id,
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
              uid: auth.userData.user_id,
              id: item.custom_id_fk,
              quantity: item.custom_count,
              price: item.custom_price,
              name: item.custom_name,
              image: '',
              type: 'custom',
            }
          }
          return null
        })
        .filter((item) => item !== null)
      setCartItems(newFormattedCartItems)
    }
  }, [formattedCartItems]) // 正确设置依赖项
  console.log(cartItems)

  useEffect(() => {
    // 更新 cartState 以匹配最新的 cartItems
    setCartState(init(cartItems))
  }, [cartItems])


  //新增實作中
  const addItem = (item) => {
    setCartItems(addOne(cartItems, item))
  }

  //刪除導這隻
  const removeItem = async (uid, id, type) => {
    const item = cartItems.find(
      (item) => item.id === id && item.type === type && item.uid === uid
    )
    if (!item) {
      console.error('Item not found in cart:', { uid, id, type })
      return // 如果没有找到项目，提前返回
    }

    const response = await removeFromCart(uid, id, type)
    if (response.error) {
      console.error('Failed to increment item quantity:', response.error)
    } else {
      // 如果后端更新成功，更新前端状态
      setCartItems(removeOne(cartItems, uid, id, type))
    }
  }

  // const updateItem = (item) => {
  //   setCartItems(updateOne(cartItems, item))
  // }

  // const updateItemQty = (id, quantity) => {
  //   const item = findOneById(cartItems, id)
  //   if (!item.id) return
  //   const updateItem = { ...item, quantity }
  //   setCartItems(updateOne(cartItems, updateItem))
  // }

  const clearCart = () => {
    setCartItems([])
  }

  //省略isInCart,直接在addItem中判斷
  // const isInCart = (id) => {
  //   return cartItems.some((item) => item.id === id)
  // }

  const increment = async (uid, id, type) => {
    // 找到需要增加数量的项
    const item = cartItems.find(
      (item) => item.id === id && item.type === type && item.uid === uid
    )
    if (!item) {
      console.error('Item not found in cart')
      return // 如果没有找到项目，提前返回
    }

    const newQuantity = item.quantity + 1 // 假设每次增加1

    // 更新购物车项
    const response = await updateCartItem(uid, id, newQuantity, type)
    if (response.error) {
      console.error('Failed to increment item quantity:', response.error)
    } else {
      // 如果后端更新成功，更新前端状态
      setCartItems(incrementOne(uid, cartItems, id, type))
    }
  }

  const decrement = async (uid, id, type) => {
    // 找到需要增加数量的项
    const item = cartItems.find(
      (item) => item.id === id && item.type === type && item.uid === uid
    )
    if (!item) {
      console.error('Item not found in cart')
      return // 如果没有找到项目，提前返回
    }

    const newQuantity = item.quantity - 1 // 假设每次增加1

    // 更新购物车项
    const response = await updateCartItem(uid, id, newQuantity, type)
    if (response.error) {
      console.error('Failed to increment item quantity:', response.error)
    } else {
      // 如果后端更新成功，更新前端状态
      setCartItems(decrementOne(uid, cartItems, id, type))
    }
  }

  return (
    <CartContext.Provider
      value={{
        cart: cartState,
        items: cartItems,
        addItem,
        removeItem,
        clearCart,
        increment,
        decrement,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
