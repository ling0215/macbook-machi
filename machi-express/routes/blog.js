import express from 'express'
import multer from 'multer'
import { v4 as uuidv4 } from 'uuid'
import path from 'path'

import { QueryTypes } from 'sequelize'
import sequelize from '#configs/db.js'
const { Article } = sequelize.models

const router = express.Router()

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../machi-next/public/images/blog/article')
  },
  filename: function (req, file, cb) {
    const fileExt = path.extname(file.originalname)
    const filename = uuidv4() + fileExt
    cb(null, filename)
  },
})

const upload = multer({ storage: storage })

router.post('/publish', upload.single('articleImage'), async (req, res) => {
  const { title, author, article } = req.body

  try {
    const newArticle = await Article.create({
      //article_id: 1, // 因為是自動增加的，所以不用提供
      user_id_fk: author,
      article_title: title,
      article_content: article,
      article_status: 1, // 假設新文章的狀態總是 1
      subcategory_id_fk: 1,
      category_id_fk: 1,
      article_category: 'AAA',
    })

    res.status(200).json(newArticle)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: '無法發布文章' })
  }
})

router.post('/upload', upload.single('articleImage'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: '檔案未上傳成功' })
    }
    let params = {
      message: '檔案上傳成功',
      url: '/images/blog/article/' + req.file.filename,
    }
    res.status(200).json(params)
  } catch (error) {
    console.error('處理過程中發生錯誤:', error)
    res.status(500).json({ message: '伺服器錯誤' })
  }
})

router.get('/articles', async (req, res) => {
  try {
    const articles = await Article.findAll()
    res.status(200).json(articles)
  } catch (error) {
    console.error('處理過程中發生錯誤:', error)
    res.status(500).json({ message: '伺服器錯誤' })
  }
})

router.get('/blog/:id', async (req, res) => {
  const articleId = req.params.id // 從路由參數中獲取文章的 ID
  try {
    console.log(req.params.id)
    const article = await Article.findById(articleId) // 使用文章 ID 查詢單筆文章資料
    if (!article) {
      // 如果找不到文章，返回 404 錯誤
      return res.status(404).json({ message: '文章不存在' });
    }
    // 如果找到文章，以 JSON 格式返回
    res.status(200).json(article)
  } catch (error) {
    console.error('處理過程中發生錯誤:', error);
    res.status(500).json({ message: '伺服器錯誤' })
  }
})

export default router
