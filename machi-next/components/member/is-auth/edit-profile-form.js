import React, { useState, useEffect } from 'react'
import { useAuth } from '@/hooks/use-auth'
import { updateProfile } from '@/services/user'
import { getUserById } from '@/services/user'

function EditProfileForm() {
  const { auth } = useAuth()
  const { setAuth } = useAuth()
  const [form, setForm] = useState({
    user_account: '',
    user_password: '',
    user_email: '',
    user_gender: '',
    user_birthday: '',
    user_phone: '',
    user_address: '',
  })

  const fetchUserData = async () => {
    // 確保 auth 和 auth.userData.user_id 存在
    if (auth && auth.userData && auth.userData.user_id) {
      const response = await getUserById(auth.userData.user_id) // 使用 getUserById 函式來獲取使用者資料
      if (
        response &&
        response.data &&
        response.data.data &&
        response.data.data.user
      ) {
        setForm({
          user_account: response.data.data.user.user_account,
          user_password: '',
          user_email: response.data.data.user.user_email,
          user_gender: response.data.data.user.user_gender,
          user_birthday: response.data.data.user.user_birthday,
          user_phone: response.data.data.user.user_phone,
          user_address: response.data.data.user.user_address,
        })
      } else {
        console.log('Error: response.data.data.user is undefined')
      }
    } else {
      console.log('Error: auth or auth.userData.user_id is undefined')
    }
  }

  useEffect(() => {
    fetchUserData()
  }, [auth])

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const response = await updateProfile(auth.userData.user_id, form)

    if (response && response.data && response.data.newToken) {
      // 更新 auth 狀態中的令牌
      setAuth((prevAuth) => ({
        ...prevAuth,
        token: response.data.newToken,
      }))
    }

    // 在更新資料後取得新的使用者資料
    fetchUserData()
  }

  return (
    <form onSubmit={handleSubmit} className="mx-5">
      <div>
        <label>
          帳號:
          <input
            type="text"
            name="user_account"
            value={form.user_account}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          密碼:
          <input
            type="password"
            name="user_password"
            value={form.user_password}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          電子郵件:
          <input
            type="email"
            name="user_email"
            value={form.user_email}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          性別:
          <input
            type="text"
            name="user_gender"
            value={form.user_gender}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          生日:
          <input
            type="date"
            name="user_birthday"
            value={form.user_birthday}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          手機號碼:
          <input
            type="tel"
            name="user_phone"
            value={form.user_phone}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          地址:
          <input
            type="text"
            name="user_address"
            value={form.user_address}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">更新資料</button>
    </form>
  )
}

export default EditProfileForm
