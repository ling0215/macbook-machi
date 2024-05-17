import React, { useEffect, useState } from 'react'
import Adetail from '@/components/blog/article-detail/article-detail'
import MessageArea from '@/components/blog/article-detail/article-message-area'
import { useRouter } from 'next/router'
export default function ArticleDetail() {
  const router = useRouter()
  // const id = router.query.bid // 从路由参数中获取文章 ID
  // console.log({ id })const ArticleMessageArea = () => {

  const [articleId, setArticleId] = useState('')

  useEffect(() => {
    // 假設 articleId 是 URL 的路由參數
    setArticleId(router.query.articleId)
  }, [router.query.articleId])
  return (
    <>
      <Adetail articleId={router.query.bid} />
      <MessageArea />
    </>
  )
}
