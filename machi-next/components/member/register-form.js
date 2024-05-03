import { useState } from 'react'
import styles from './member.module.css'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { register } from '@/services/user'

export default function RegisterForm() {
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await register({ account, password, email })
      // 登入成功，處理 response
      console.log(response)
    } catch (error) {
      // 登入失敗，處理 error
      console.error(error)
    }
  }

  return (
    <main className={`form-member w-100 m-auto text-center`}>
      <div className="card mt-5 border-0 shadow">
        <div className="card-body">
          <h5 className="text-center fw-bold mb-3 mt-5 text-brown">會員註冊</h5>
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col-sm-12">
                <input
                  type="text"
                  className={`form-control w-100 ${styles['form-control']}  `}
                  placeholder="帳號"
                  value={account}
                  onChange={(e) => setAccount(e.target.value)}
                />
              </div>
              {/* <div className={`${styles['error']} my-2 text-start`}>
            請輸入密碼。
          </div> */}
            </div>

            <div className="row mb-3">
              <div className="col-sm-12">
                <input
                  type="password"
                  className={`form-control w-100 ${styles['form-control']}  `}
                  placeholder="密碼"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {/* <div className={`${styles['error']} my-2 text-start`}>
            請輸入密碼。
          </div> */}
            </div>

            <div className="row mb-3">
              <div className="col-sm-12">
                <input
                  type="password"
                  className={`form-control w-100 ${styles['form-control']}  `}
                  placeholder="確認密碼"
                  value={confirmPassword} // 使用新的狀態變數 confirmPassword
                  onChange={(e) => setConfirmPassword(e.target.value)} // 使用新的設置函數 setConfirmPassword
                />
              </div>
              {/* <div className={`${styles['error']} my-2 text-start`}>
請輸入確認密碼。
</div> */}
            </div>

            <div className="row mb-3">
              <div className="col-sm-12">
                <input
                  type="email"
                  className={`form-control w-100 ${styles['form-control']} `}
                  placeholder="電子郵件地址"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {/* <div className={`${styles['error']} my-2 text-start`}>
            請輸入有效的電子郵件地址。
          </div> */}
            </div>

            <button type="submit" className=" text-white btn btn-brown w-100">
              註冊
            </button>

            <div className="row mt-2">
              <p className={`text-primary-dark ${styles['notice']}`}>
                已經是會員了？
                <Link className="text-primary-dark" href="/member/login">
                  登入
                </Link>
                。
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}
