import React from 'react'
import { logout } from '@/services/user'

export default function Logout() {
  return (
    <>
      <button onClick={logout}>Logout</button>
    </>
  )
}
