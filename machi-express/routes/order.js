import express from 'express'
const router = express.Router()

// 檢查空物件, 轉換req.params為數字
import { getIdParam } from '#db-helpers/db-tool.js'

import authenticate from '#middlewares/authenticate.js'
import sequelize from '#configs/db.js'

const { Order, OrderItem } = sequelize.models

// 獲得某會員id的有加入到購物清單中的商品id們
// 此路由只有登入會員能使用
router.post('/', async (req, res) => {
  try {
    const userId = req.query.user_id // 从查询参数中获取用户 ID
    /*
    
    
    */
    const cartData = await Order.create({
      user_id_fk: req.query.user_id,
      order_payment: req.body.data.payment,
      order_username: req.body.data.username,
      order_address: req.body.data.address,
      order_phone: req.body.data.phone,
      order_amount: req.body.data.amount,
      order_total: req.body.data.total,
      // }).then(await OrderItem.create() => {
    })
    res.json({ status: 'success', data: cartData, Items: cartData })
  } catch (error) {
    console.error('Error fetching cart items:', error)
    res.status(500).json({ status: 'error', message: 'Internal server error' })
  }
})

export default router
