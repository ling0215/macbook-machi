import React from 'react'
import { logout } from '@/services/user'
import { useAuth } from '@/hooks/use-auth'

export default function Logout() {
  const { setAuth } = useAuth()

  const handleLogout = async () => {
    await logout()
    setAuth(null)
  }

  return (
    <>
      <button onClick={handleLogout}>Logout</button>
    </>
  )
}
