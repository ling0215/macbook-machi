import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useAuth } from '@/hooks/use-auth'

// only redirect to member/login
export default function MemberIndex() {
  const { auth } = useAuth() // 使用 useAuth hook 來獲取 auth 狀態
  const router = useRouter()

  // 使用 useEffect 來監聽 auth.isAuth 的變化
  useEffect(() => {

    if (typeof window !== 'undefined') {
      if (!auth.isAuth) {
        router.push('/member/login') // 如果 auth.isAuth 為 true，則導向會員中心
      } else {
        router.push('/member/account')
      }
    }
  }, [auth.isAuth, router])

  return <></>
}
