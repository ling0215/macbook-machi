import React, { useState, useEffect } from 'react'
import { useAuth } from '@/hooks/use-auth'
import { updateProfile } from '@/services/user'
import { getUserById } from '@/services/user'
import { FaDisplay } from 'react-icons/fa6'

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

  const handleReset = (e) => {
    e.preventDefault(); // 阻止表单提交
    setForm({
      user_account: '',
      user_password: '',
      user_email: '',
      user_gender: '',
      user_birthday: '',
      user_phone: '',
      user_address: ''
    });
  };
  

  return (
    <div className="row ms-5 w-75 border d-flex justify-content-center align-items-center">
      <div className="col p-2">
        <form onSubmit={handleSubmit} className="d-flex flex-column mx-5 my-3">
          <div className="form-group my-3 text-primary-dark fw-bold">
          <label>
              帳號
              <input
                className="form-control"
                type="text"
                name="user_account"
                value={form.user_account}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="form-group my-3 text-primary-dark fw-bold">
            <label>
              密碼
              <input
                className="form-control"
                type="password"
                name="user_password"
                value={form.user_password}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="form-group my-3 text-primary-dark fw-bold">
            <label>
              電子郵件
              <input
                className="form-control"
                type="email"
                name="user_email"
                value={form.user_email}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="form-group my-3 text-primary-dark fw-bold">
            <label>
              性別
              <input
                className="form-control"
                type="text"
                name="user_gender"
                value={form.user_gender}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="form-group my-3 text-primary-dark fw-bold">
            <label>
              生日
              <input
                className="form-control"
                type="date"
                name="user_birthday"
                value={form.user_birthday}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="form-group my-3 text-primary-dark fw-bold">
            <label>
              手機號碼
              <input
                className="form-control"
                type="tel"
                name="user_phone"
                value={form.user_phone}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="form-group my-3 text-primary-dark fw-bold">
            <label>
              地址
              <input
                className="form-control"
                type="text"
                name="user_address"
                value={form.user_address}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="form-group my-3 text-primary-dark fw-bold d-flex justify-content-center">
            <button className="btn btn-brown w-50 text-white mt-3 me-4" type="submit" onClick={handleReset}>重新填寫</button>
            <button className="btn btn-brown w-50 text-white mt-3" type="submit">確定修改</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditProfileForm
