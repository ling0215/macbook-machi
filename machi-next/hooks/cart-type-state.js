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
import {
  fetchCart,
  updateCartItem,
  removeFromCart,
  addToCart,
} from '@/services/cart'
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
          } else if (item.course_id_fk) {
            return {
              uid: auth.userData.user_id,
              id: item.course_id_fk,
              quantity: item.course_count,
              price: item.course_price,
              name: item.course_name,
              image: '',
              type: 'course',
              coursetime: '2024/08/10',
              address: '復興堡',
            }
          } else if (item.cart_item_id) {
            return {
              uid: auth.userData.user_id,
              id: item.cart_item_id,
              quantity: item.custom_count,
              price: item.custom_price,
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

  //,尚未測試
  let isAddingItem = false

  const addItem = async (item) => {
    // 確保用戶數據已加載
    if (!auth.userData || !auth.userData.user_id) {
      console.error('User data is not available')
      return // 提前返回，防止執行後續代碼
    }
    if (cartItems.length == 0) {
      console.error('User data is not available')
      return // 提前返回，防止執行後續代碼
    }

    // 檢查是否正在添加商品，防止反彈
    if (isAddingItem) {
      console.warn('Add item operation is already in progress')
      return
    }

    // 設置旗標，表示正在添加商品
    isAddingItem = true

    let userId = auth.userData.user_id
    let newItem = await { uid: userId }

    if (item.product_id_fk) {
      newItem = {
        uid: userId,
        id: item.product_id_fk,
        quantity: item.product_count,
        price: item.product_price,
        name: item.product_name,
        image: '等待設定',
        type: 'product',
      }
    } else if (item.course_id_fk) {
      newItem = {
        uid: userId,
        id: item.course_id_fk,
        quantity: item.course_count,
        price: item.course_price,
        name: item.course_name,
        image: '',
        type: 'course',
        coursetime: '2024/08/10',
        address: '復興堡',
      }
    } else if (item.cart_item_id) {
      newItem = {
        uid: userId,
        id: item.cart_item_id,
        quantity: item.custom_count,
        price: item.custom_price,
        name: item.custom_name,
        image: '',
        type: 'custom',
      }
    }

    // 執行添加或更新購物車項目
    const index = cartItems.findIndex(
      (cartItem) =>
        cartItem.uid === newItem.uid &&
        cartItem.id === newItem.id &&
        cartItem.type === newItem.type &&
        cartItem.price === newItem.price
    )

    if (index !== -1) {
      const newQuantity = cartItems[index].quantity + newItem.quantity
      const response = await updateCartItem(
        newItem.uid,
        newItem.id,
        newQuantity,
        newItem.type
      )
      console.log(response)
      setCartItems(addOne(cartItems, newItem))
      isAddingItem = false // 重置旗標
      return
    } else {
      const response = await addToCart(newItem.uid, newItem)
      console.log(index)
      console.log(response)
    }

    setCartItems(addOne(cartItems, newItem))
    isAddingItem = false // 重置旗標
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
