import React, { useState, useEffect } from 'react'
import { useAuth } from '@/hooks/use-auth'
import { updateProfile } from '@/services/user'
import { getUserById } from '@/services/user'
import { updateProfileAvatar } from '@/services/user'
// import { FaDisplay } from 'react-icons/fa6'

function EditProfileForm() {
  const { auth } = useAuth()
  const { setAuth } = useAuth()
  const [form, setForm] = useState({
    user_account: '',
    user_email: '',
    user_gender: '',
    user_birthday: '',
    user_phone: '',
    user_address: '',
    user_avatar: '', // 新增的頭像欄位
  })
  const [avatarSelected, setAvatarSelected] = useState(false)
  const setGender = (gender) => {
    setForm((prevForm) => ({
      ...prevForm,
      user_gender: gender,
    }))
  }

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

  const handleAvatarChange = async (event) => {
    const file = event.target.files[0]
    if (file) {
      // 創建一個代表選擇的檔案的 URL
      const previewUrl = URL.createObjectURL(file)
      setForm((prevForm) => ({ ...prevForm, user_avatar: previewUrl }))
      setAvatarSelected(true)

      const formData = new FormData()
      formData.append('avatar', file)
      const response = await updateProfileAvatar(formData)
      const newAvatarUrl = response.data.avatarUrl // 請根據你的 API 回應來調整這裡的屬性名稱
      setForm((prevForm) => ({ ...prevForm, user_avatar: newAvatarUrl }))
    }
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
  console.log(form.user_birthday) // 檢查 form.user_birthday 的值
  const handleReset = (e) => {
    e.preventDefault() // 阻止表单提交
    setForm({
      user_account: '',
      user_email: '',
      user_gender: '',
      user_birthday: '',
      user_phone: '',
      user_address: '',
    })
  }

  return (
    <div className="row ms-5 w-75 border d-flex justify-content-center align-items-center">
      <div className="col p-2">
        <form onSubmit={handleSubmit}>
          <div className="d-flex justify-content-center my-3">
            <img
              src={form.user_avatar}
              alt="User Avatar"
              className="user-avatar"
              key={form.user_avatar} // 新增的 key 屬性
              style={{
                maxWidth: '250px',
                maxHeight: '250px',
                borderRadius: '50%',
              }} // 這裡設定圖片的最大寬度和最大高度，並設定 border-radius 為 50% 使其變為圓形
            />
          </div>
          <div className="d-flex justify-content-center my-3">
            <input
              type="file"
              id="fileInput" // 給輸入元素一個 id
              onChange={handleAvatarChange}
              style={{ display: 'none' }} // 隱藏原生的檔案選擇按鈕
            />
            <label htmlFor="fileInput" className="btn btn-primary-dark mx-2">
              選擇頭像
            </label>
            {avatarSelected && (
              <button type="submit" className="btn btn-primary-dark ml-3 mx-2">
                確定上傳
              </button>
            )}
          </div>
        </form>
      </div>

      <div className="col p-2">
        <form onSubmit={handleSubmit} className="d-flex flex-column mx-5 my-3">
          <div className="form-group my-2 text-primary-dark fw-bold">
            <label>
              電子郵件
              <p>{form.user_email}</p>
            </label>
          </div>
          <div className="form-group my-1 text-primary-dark fw-bold">
            <label>
              帳號
              <p>{form.user_account}</p>
            </label>
          </div>

          <div className="form-group my-2 mb-5 text-primary-dark fw-bold">
            <button
              type="button"
              className="btn btn-primary-dark"
              onClick={() => {}}
            >
              修改密碼
            </button>
          </div>
          <div className="btn-group" role="group" aria-label="Gender selection">
            <button
              type="button"
              className={`btn ${
                form.user_gender === '男性'
                  ? 'btn-primary-dark'
                  : 'btn-outline-primary-dark'
              } `}
              onClick={() => setGender('男性')}
            >
              男性
            </button>
            <button
              type="button"
              className={`btn ${
                form.user_gender === '女性'
                  ? 'btn-primary-dark'
                  : 'btn-outline-primary-dark'
              }`}
              onClick={() => setGender('女性')}
            >
              女性
            </button>
            <button
              type="button"
              className={`btn ${
                form.user_gender === '不願透露'
                  ? 'btn-primary-dark'
                  : 'btn-outline-primary-dark'
              }`}
              onClick={() => setGender('不願透露')}
            >
              不願透露
            </button>
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
            <button
              className="btn btn-brown w-50 text-white mt-3 me-4"
              type="submit"
              onClick={handleReset}
            >
              重新填寫
            </button>
            <button
              className="btn btn-brown w-50 text-white mt-3"
              type="submit"
            >
              確定修改
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditProfileForm
