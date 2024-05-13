import axiosInstance from './axios-instance'
import useSWR from 'swr'

// 从服务器获取购物车数据的函数
// 修改 fetchCart 函数以接受 user_id 参数
export const fetchCart = async (userId) => {
  console.log('Sending request for user ID:', userId)

  return axiosInstance
    .get(`/cart?user_id=${userId}`)
    .then((res) => res.data)
    .catch((error) => {
      console.error('获取购物车数据时出错:', error)
      return { error }
    })
}

// 添加商品到购物车的函数 待實裝
export const addToCart = async (productId, quantity) => {
  return axiosInstance
    .post('/cart', { productId, quantity })
    .then((res) => res.data)
    .catch((error) => {
      console.error('添加到购物车时出错:', error)
      return { error }
    })
}

// 更新购物车中商品数量的函数
export const updateCartItem = async (itemId, quantity, type) => {
  return axiosInstance
    .put(`/cart`, { id: itemId, quantity: quantity, type: type }) // 确保传递所有必要的参数
    .then((res) => res.data)
    .catch((error) => {
      console.error('更新购物车项目时出错:', error)
      return { error }
    })
}

// 从购物车中移除商品的函数 測試中
export const removeFromCart = async (itemId) => {
  return axiosInstance
    .delete(`/cart?id=${itemId}`) // 使用查询字符串传递 itemId
    .then((res) => res.data)
    .catch((error) => {
      console.error('从购物车移除项目时出错:', error)
      return { error }
    })
}

// // 自定义钩子，用于管理和访问购物车数据
// export function useCartUpdate() {
//   const { data, error, mutate } = useSWR('/cart', fetchCart)

//   // 刷新购物车数据的函数
//   const refreshCart = () => {
//     mutate()
//   }

//   return {
//     cartItems: data?.items || [],
//     total: data?.total || 0,
//     error,
//     refreshCart,
//   }
// }
