import React from 'react'
import styles from './member.module.css'
import Link from 'next/link'
import LineLogo from '@/components/icons/line-logo'
import GoogleLogo from '@/components/icons/google-logo'
import FacebookLogo from '@/components/icons/facebook-logo'
import { useState } from 'react'
import { login } from '@/services/user'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await login({ email, password })
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
          <h5 className="text-center fw-bold mb-3 mt-5 text-brown">會員登入</h5>
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col-sm-12">
                <input
                  type="email"
                  className={`form-control w-100 bg-light-grey ${styles['form-control']} `}
                  placeholder="電子郵件地址"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {/* <div className={`${styles['error']} my-2 text-start`}>
            請輸入有效的電子郵件地址。
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
              <div className="col-sm-6 text-start">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck1"
                  />
                </div>
              </div>
              <div className="col-sm-4 offset-sm-2 test-end">
                <Link
                  href="/member/forget-password"
                  className={`text-primary-dark ${styles['notice']}`}
                >
                  忘記密碼？
                </Link>
              </div>
            </div>

            <button type="submit" className=" text-white btn btn-brown w-100">
              登入
            </button>

            <div className="row mt-2">
              <p className={`text-primary-dark ${styles['notice']}`}>
                還不是會員？
                <Link className="text-primary-dark" href="/member/register">
                  加入我們
                </Link>
                。
              </p>
            </div>
          </form>
        </div>
      </div>
      <div className={` mt-5 text-primary-dark ${styles['hr-sect']}`}>
        快速登入
      </div>
      <div className="row mb-2">
        <div className="col-sm-12 text-start">
          <div className="d-flex justify-content-center">
            <LineLogo className="mx-3" />
            <GoogleLogo className="mx-3" />
            <FacebookLogo className="mx-3" />
          </div>
        </div>
      </div>
    </main>
  )
}
