import React, { useState, useContext, createContext, useEffect } from 'react'
import {
  init,
  initState,
  addOne,
  findOneById,
  updateOne,
  removeOne,
  incrementOne,
  decrementOne,
  generateCartState,
} from './cart-reducer-state'
import useLocalStorage from './use-localstorage'

const CartContext = createContext(null)

export const CartProvider = ({
  children,
  initialCartItems = [
    { id: 1, name: '商品1', price: 10, quantity: 2, subtotal: 20 },
    { id: 2, name: '商品2', price: 15, quantity: 1, subtotal: 15 },
    { id: 3, name: '商品3', price: 20, quantity: 3, subtotal: 60 },
  ],
  localStorageKey = 'cart',
}) => {
  let items = initialCartItems

  if (!items.length) {
    try {
      if (typeof window !== 'undefined') {
        const item = window.localStorage.getItem(localStorageKey)
        items = item ? JSON.parse(item) : []
      }
    } catch (error) {
      items = []
      console.log(error)
    }
  }

  const [cartItems, setCartItems] = useState(items)
  const [cartState, setCartState] = useState(init(initialCartItems))
  const [storedValue, setValue] = useLocalStorage(localStorageKey, items)

  useEffect(() => {
    if (JSON.stringify(cartItems) !== storedValue) {
      setValue(cartItems)
    }
    setCartState(generateCartState(cartState, cartItems))
  }, [cartItems])

  const addItem = (item) => {
    setCartItems(addOne(cartItems, item))
  }

  const removeItem = (id) => {
    setCartItems(removeOne(cartItems, id))
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

  const increment = (id) => {
    setCartItems(incrementOne(cartItems, id))
  }

  const decrement = (id) => {
    setCartItems(decrementOne(cartItems, id))
  }

  return (
    <CartContext.Provider
      value={{
        cart: cartState,
        items: cartState.items,
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
