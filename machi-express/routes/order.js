import express from 'express'
const router = express.Router()

// 检查空物件, 转换req.params为数字
import { getIdParam } from '#db-helpers/db-tool.js'

import authenticate from '#middlewares/authenticate.js'
import sequelize from '#configs/db.js'

const { Order, OrderItem } = sequelize.models

// 获取某会员id的已加入购物清单中的商品id们
// 此路由只有登录会员能使用
router.post('/', async (req, res) => {
  try {
    const userId = req.query.user_id // 从查询参数中获取用户 ID

    // 创建订单
    const order = await Order.create({
      user_id_fk: req.body.data.data.user_id_fk,
      order_payment: req.body.data.data.payment,
      order_username: req.body.data.data.username,
      order_address: req.body.data.data.address,
      order_phone: req.body.data.data.phone,
      order_amount: req.body.data.data.amount,
      order_total: req.body.data.data.total,
    })

    // 获取订单项数据
    const orderItemsData = req.body.data.items // 假设订单项的数据在这个数组中

    // 为每个订单项添加order_id_fk字段
    const orderItems = orderItemsData.map((item) => ({
      order_id_fk: order.order_id, // 使用生成的order.id
      order_product_type: item.product_type,
      order_product_id: item.product_id,
      order_product_name: item.product_name,
      order_product_detail: item.product_detail,
      order_product_count: item.product_count,
      order_product_price: item.product_price,
    }))

    // 创建OrderItem
    const createdOrderItems = await OrderItem.bulkCreate(orderItems) // 使用 bulkCreate 一次性创建多个 OrderItem

    // 返回成功响应
    res.json({ status: 'success', data: order, items: orderItems })
  } catch (error) {
    // 捕获并处理错误
    console.error('Error creating order and order items:', error)
    res.status(500).json({
      status: 'error',
      message: 'Internal server error',
      error: error.message,
    })
  }
})

export default router
