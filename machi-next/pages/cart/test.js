import React from 'react'
import { useCart } from '@/hooks/use-cart-state'
import { useEffect, useState } from 'react'

export default function CartList() {
  const { cart, items, decrement, increment, removeItem } = useCart()

  // 添加一些假数据22
  useEffect(() => {
    const fakeItems = [
      { id: 1, name: '商品1', price: 10, quantity: 2, subtotal: 20 },
      { id: 2, name: '商品2', price: 15, quantity: 1, subtotal: 15 },
      { id: 3, name: '商品3', price: 20, quantity: 3, subtotal: 60 },
    ]

    // 将假数据添加到购物车中
    items.forEach((item) => {
      removeItem(item.id)
    })
    fakeItems.forEach((item) => {
      increment(item)
    })
  }, [])

  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setHydrated(true)
  }, [])

  if (!hydrated) {
    return null
  }
  // 修正 end

  return (
    <div>
      <table
        className="table"
        cellPadding="0"
        border="0"
        width="100%"
        cellSpacing="0"
      >
        <thead>
          <tr>
            <th>id</th>
            <th>名稱</th>
            <th>單價</th>
            <th>數量</th>
            <th>小計</th>
            <th>移除</th>
          </tr>
        </thead>
        <tbody>
          {items.map((v, i) => {
            return (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.name} </td>
                <td>{v.price}</td>
                <td>
                  <div className="btn-group mr-2" role="group">
                    <button
                      type="button"
                      className="btn btn-light"
                      onClick={() => {
                        decrement(v.id)
                      }}
                    >
                      -
                    </button>
                    <button type="button" className="btn btn-light">
                      {v.quantity}
                    </button>
                    <button
                      type="button"
                      className="btn btn-light"
                      onClick={() => {
                        increment(v.id)
                      }}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>{v.subtotal}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-light"
                    onClick={() => {
                      removeItem(v.id)
                    }}
                  >
                    x
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div>
        items: {cart.totalItems} / total: {cart.totalPrice}
        <br />
        {cart.isEmpty && '購物車為空'}
        <hr />
      </div>
    </div>
  )
}
