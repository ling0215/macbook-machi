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
  initialCartItems = [],
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

  const removeItem = (id,type) => {
    setCartItems(removeOne(cartItems, id,type))
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

  const increment = (id,type) => {
    setCartItems(incrementOne(cartItems, id,type))
  }

  const decrement = (id,type) => {
    setCartItems(decrementOne(cartItems, id,type))
    console.log(type)
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
