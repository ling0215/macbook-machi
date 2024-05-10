import express from 'express'
const router = express.Router()

// 檢查空物件, 轉換req.params為數字
import { getIdParam } from '#db-helpers/db-tool.js'

import authenticate from '#middlewares/authenticate.js'
import sequelize from '#configs/db.js'
const { CartItem } = sequelize.models

// 獲得某會員id的有加入到購物清單中的商品id們
// 此路由只有登入會員能使用
router.get('/', authenticate, async (req, res) => {
  try {
    const carttotal = await CartItem.findAll({
      attributes: ['cart_item_id'],
      where: {
        user_id_fk: req.user.user_id,
      },
      raw: true,
    })

    const cartitem = carttotal.map((v) => v.cart_item_id)
    res.json({ status: 'success', data: { cartitem } })
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Internal server error' })
  }
})

export default router
