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
  console.log('Received user ID:', req.query.user_id)
  try {
    const userId = req.query.user_id // 从查询参数中获取用户 ID
    const cartItems = await CartItem.findAll({
      where: {
        user_id_fk: userId, // 使用用户 ID 作为过滤条件
      },
    })
    res.json({ status: 'success', items: cartItems })
  } catch (error) {
    console.error('Error fetching cart items:', error)
    res.status(500).json({ status: 'error', message: 'Internal server error' })
  }
})

// 更新購物車 待測試

router.put('/:id', authenticate, async (req, res) => {
  try {
    const itemId = req.params.id // 從URL參數中取得商品ID
    const newQuantity = req.body.quantity // 從請求體中取得新的商品數量
    const newType = req.body.type // 從請求體中取得類型

    // 檢查數量有效性
    if (!newQuantity || newQuantity < 1) {
      return res
        .status(400)
        .json({ status: 'error', message: 'Invalid quantity provided' })
    }

    // 根據 newType 確定要更新的欄位名稱
    let fieldName
    switch (newType) {
      case 'product':
        fieldName = 'product_count'
        break
      case 'class':
        fieldName = 'class_count'
        break
      case 'custom':
        fieldName = 'custom_count'
        break
      default:
        return res
          .status(400)
          .json({ status: 'error', message: 'Invalid type provided' })
    }

    // 更新資料庫
    const updatedItem = await CartItem.update(
      { [fieldName]: newQuantity },
      { where: { id: itemId } }
    )

    // 檢查更新是否成功
    if (updatedItem[0] > 0) {
      res.json({
        status: 'success',
        message: `${fieldName} updated successfully`,
      })
    } else {
      res.status(404).json({ status: 'error', message: 'Cart item not found' })
    }
  } catch (error) {
    console.error('Error updating cart item:', error)
    res.status(500).json({ status: 'error', message: 'Internal server error' })
  }
})

export default router
