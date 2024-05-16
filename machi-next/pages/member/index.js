import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useAuth } from '@/hooks/use-auth'

export default function MemberIndex() {
  const { auth } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!auth.isAuth) {
      router.push('/member/login')
    } else {
      router.push('/member/account')
    }
  }, [auth.isAuth, router])

  return <></>
}
