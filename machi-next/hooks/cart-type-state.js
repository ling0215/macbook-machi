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
import { fetchCart } from '@/services/cart'
import { useAuth } from '@/hooks/use-auth'

const CartContext = createContext(null)

export const CartTypeProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const [cartState, setCartState] = useState(init([]))
  const [error, setError] = useState(null)
  const { auth } = useAuth()
  const [formattedCartItems, setFormattedCartItems] = useState([])

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
              id: item.cart_item_id,
              quantity: item.product_count,
              price: item.product_price,
              name: item.product_name,
              image: '',
              type: 'product',
            }
          } else if (item.class_id_fk) {
            return {
              id: item.cart_item_id,
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
              id: item.cart_item_id,
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

  const addItem = (item) => {
    setCartItems(addOne(cartItems, item))
  }

  const removeItem = (id, type) => {
    setCartItems(removeOne(cartItems, id, type))
  }

  const updateItem = (item) => {
    setCartItems(updateOne(cartItems, item))
  }

  const updateItemQty = (id, quantity) => {
    const item = findOneById(cartItems, id)
    if (!item.id) return
    const updateItem = { ...item, quantity }
    setCartItems(updateOne(cartItems, updateItem))
  }

  const clearCart = () => {
    setCartItems([])
  }

  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id)
  }

  const increment = (id, type) => {
    setCartItems(incrementOne(cartItems, id, type))
  }

  const decrement = (id, type) => {
    setCartItems(decrementOne(cartItems, id, type))
  }

  return (
    <CartContext.Provider
      value={{
        cart: cartState,
        items: cartItems,
        addItem,
        removeItem,
        updateItem,
        updateItemQty,
        clearCart,
        isInCart,
        increment,
        decrement,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
