import express from 'express'
import multer from 'multer'
import { v4 as uuidv4 } from 'uuid'
import path from 'path'
import { JSDOM } from 'jsdom'
import { Op } from 'sequelize'

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
  let { title, author, article, category } = req.body

  if (Array.isArray(category)) {
    category = category.join(',')
  }

  try {
    const newArticle = await Article.create({
      //article_id: 1, // 因為是自動增加的，所以不用提供
      user_id_fk: author,
      article_title: title,
      article_content: article,
      article_status: 1, // 假設新文章的狀態總是 1
      subcategory_id_fk: 1,
      category_id_fk: 1,
      article_category: category,
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
    const articlesWithFirstImage = articles.map((article) => {
      const dom = new JSDOM(article.article_content)
      const firstImage = dom.window.document.querySelector('img')
      let firstImageUrl = ''

      if (firstImage) {
        firstImageUrl = firstImage.getAttribute('src')
      }
      // console.log(firstImage)
      // 將文章物件轉換為 JSON 格式，並加入 firstImageUrl 屬性
      return { ...article.toJSON(), firstImageUrl }
    })
    res.status(200).json(articlesWithFirstImage)
    // console.log(articlesWithFirstImage)
  } catch (error) {
    console.error('處理過程中發生錯誤:', error)
    res.status(500).json({ message: '伺服器錯誤' })
  }
})

router.get('/articles/better', async (req, res) => {
  const {
    search = '', // string, 對應 name 欄位, `name LIKE '%search%'`
    start = '01/01/1970', // 新增的查詢參數
    end = '01/01/2050', // 新增的查詢參數
    selectedCategories = '', // 新增的查詢參數
  } = req.query
  console.log(req.query)
  // !!注意: 以下都要檢查各query參數值的正確性，或給定預設值，要不然可能會產生資料庫查詢錯誤
  // 建立例如: `CONCAT(",", color, ",") REGEXP ",(1|2),"`
  const genConcatRegexp = (param, column) => {
    return sequelize.where(
      sequelize.fn('CONCAT', ',', sequelize.col(column), ','),
      {
        [Op.regexp]: `,(${param.split(',').join('|')}),`,
      }
    )
  }

  // const selectedCategoriesCondition = genConcatRegexp(
  //   selectedCategories,
  //   'article_category'
  // )

  // 建立各where條件從句用
  const genClause = (key, value) => {
    switch (key) {
      case 'search':
        return {
          article_title: {
            [Op.like]: `%${value}%`,
          },
        }
      case 'selectedCategories': // 新增的條件
        return genConcatRegexp(value, 'article_category')
      case 'date': // 新增的條件
        return {
          article_createtime: {
            // 使用你提供的欄位名
            [Op.between]: [start, end],
          },
        }
      default:
        return ''
    }
  }

  // where各條件(以AND相連)
  const conditions = []

  if (search) {
    conditions.push(genClause('search', search))
  }

  if (selectedCategories) {
    // 新增的條件
    conditions.push(genClause('selectedCategories', selectedCategories))
  }

  if (start) {
    // 如果有提供 start 和 end 參數，則添加日期範圍過濾條件
    conditions.push(genClause('date', [start, end]))
  }

  console.log(conditions)

  // 分頁用
  const page = Number(req.query.page) || 1
  const perpage = Number(req.query.perpage) || 16
  const offset = (page - 1) * perpage
  const limit = perpage

  // 排序用
  const orderDirection = 'ASC'
  const sortField = 'article_createtime'
  const orderArray = [[sortField, orderDirection]]

  // 避免sql查詢錯誤導致後端當掉，使用try/catch語句
  try {
    const { count, rows } = await Article.findAndCountAll({
      where: { [Op.and]: conditions },
      raw: true, // 只需要資料表中資料,
      // logging: (msg) => console.log(msg.bgWhite),
      offset,
      limit,
      order: orderArray,
    })

    if (req.query.raw === 'true') {
      return res.json(rows)
    }

    // 計算總頁數
    const pageCount = Math.ceil(count / Number(perpage)) || 0

    // const data = {
    //   total: count,
    //   pageCount,
    //   page,
    //   perpage,
    //   articles: rows,
    // }
    // console.log(data)

    const rowsWithFirstImage = rows.map((article) => {
      const dom = new JSDOM(article.article_content)
      const firstImage = dom.window.document.querySelector('img')
      let firstImageUrl = ''

      if (firstImage) {
        firstImageUrl = firstImage.getAttribute('src')
      }

      // 將文章物件轉換為 JSON 格式，並加入 firstImageUrl 屬性
      return { ...article, firstImageUrl }
    })

    // console.log(rowsWithFirstImage)

    return res.json({
      status: 'success',
      data: {
        total: count,
        pageCount,
        page,
        perpage,
        articles: rowsWithFirstImage,
      },
    })
  } catch (e) {
    console.log(e)

    return res.json({
      status: 'error',
      message: '無法查詢到資料，查詢字串可能有誤',
    })
  }
})

router.get('/:id', async (req, res) => {
  const articleId = req.params.id // 從路由參數中獲取文章的 ID
  try {
    const article = await Article.findByPk(articleId) // 使用文章 ID 查詢單筆文章資料
    if (!article) {
      // 如果找不到文章，返回 404 錯誤
      return res.status(404).json({ message: '文章不存在' })
    }
    // 如果找到文章，以 JSON 格式返回
    res.status(200).json(article)
    console.log(article)
  } catch (error) {
    console.error('處理過程中發生錯誤:', error)
    res.status(500).json({ message: '伺服器錯誤' })
  }
})

//留言
router.post('/commit', (req, res) => {
  const message = req.body.message

  // 在這裡處理你的留言，例如保存到數據庫

  res.json({ status: 'success', message: '留言已接收' })
})
export default router
