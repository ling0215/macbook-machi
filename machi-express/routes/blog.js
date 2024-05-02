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
    cb(null, 'public/images/article')
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

export default router
