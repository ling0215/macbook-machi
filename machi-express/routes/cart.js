import express from 'express'
const router = express.Router()

// 檢查空物件, 轉換req.params為數字
import { getIdParam } from '#db-helpers/db-tool.js'

import authenticate from '#middlewares/authenticate.js'
import sequelize from '#configs/db.js'
const { CartItem } = sequelize.models

// 獲得某會員id的有加入到購物清單中的商品id們
// 此路由只有登入會員能使用
router.get('/cart', authenticate, async (req, res) => {
  console.log('Received user ID:', req.query.user_id)
  try {
    const userId = req.query.user_id // 从查询参数中获取用户 ID
    const cartItems = await CartItem.findAll({
      where: {
        user_id_fk: userId, // 使用用户 ID 作为过滤条件
      },
    })
    res.json({ status: 'success', data: cartItems })
  } catch (error) {
    console.error('Error fetching cart items:', error)
    res.status(500).json({ status: 'error', message: 'Internal server error' })
  }
})

export default router
