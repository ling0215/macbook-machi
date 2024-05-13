import React, { useState } from 'react';
import styles from '../member.module.css'
import Link from 'next/link'
import { requestOtpToken } from '@/services/user'
import { resetPassword } from '@/services/user'

function ForgetPasswordForm() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [verificationCodeError, setVerificationCodeError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleGetVerificationCode = async () => {
    try {
      await requestOtpToken(email); // 呼叫 requestOtpToken 函數並將 email 作為參數傳遞
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // 檢查每個欄位的有效性
    if (!email || !email.includes('@')) {
      setEmailError('請輸入有效的註冊會員電子郵件地址。');
    } else {
      setEmailError('');
    }
    if (!verificationCode) {
      setVerificationCodeError('請輸入驗証碼。');
    } else {
      setVerificationCodeError('');
    }
    if (!password) {
      setPasswordError('請輸入新密碼。');
    } else {
      setPasswordError('');
    }
    if (!confirmPassword) {
      setConfirmPasswordError('請輸入確認密碼。');
    } else if (confirmPassword !== password) {
      setConfirmPasswordError('確認密碼不一致。');
    } else {
      setConfirmPasswordError('');
    }
    // 如果所有欄位都有效，則處理表單提交，例如發送 API 請求
    if (!emailError && !verificationCodeError && !passwordError && !confirmPasswordError) {
      try {
        await resetPassword(email, password, verificationCode); // 呼叫 resetPassword 函數並將 email、password 和 verificationCode 作為參數傳遞
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <main className={`form-member w-100 m-auto text-center`}>
      <div className="card my-5 border-0 shadow">
        <div className="card-body">
          <h5 className="text-center fw-bold mx-5 mt-3 mb-4 text-brown border-bottom">重設密碼</h5>
          <p className={`text-center mb-3 text-primary-dark`}>
            輸入你的會員電子郵件地址，按下&quot;取得驗証碼&ldquo;按鈕後，我們會將密碼重設指示寄送給你。
          </p>
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col-sm-12">
                <input
                  type="email"
                  className={`form-control w-100 ${styles['form-control']} ${emailError ? styles['invalid'] : ''}`}
                  placeholder="電子郵件地址"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {emailError && <div className={`${styles['error']} my-2 text-start`}>{emailError}</div>}
            </div>
            <div className="row mb-3">
              <div className="col-sm-12">
                <div className="input-group">
                  <input
                    type="text"
                    className={`form-control ${styles['form-control']} ${verificationCodeError ? styles['invalid'] : ''}`}
                    placeholder="電子郵件驗證碼"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                  />
                  <button
                    className="btn btn-outline-brown"
                    type="button"
                    id="button-addon2"
                    onClick={handleGetVerificationCode}
                  >
                    取得驗証碼
                  </button>
                </div>
              </div>
              {verificationCodeError && <div className={`${styles['error']} my-2 text-start`}>{verificationCodeError}</div>}
            </div>
            <div className="row mb-3">
              <div className="col-sm-12">
                <input
                  type="password"
                  className={`form-control w-100 ${styles['form-control']} ${passwordError ? styles['invalid'] : ''}`}
                  placeholder="新密碼"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {passwordError && <div className={`${styles['error']} my-2 text-start`}>{passwordError}</div>}
            </div>
            <div className="row mb-3">
              <div className="col-sm-12">
                <input
                  type="password"
                  className={`form-control w-100 ${styles['form-control']} ${confirmPasswordError ? styles['invalid'] : ''}`}
                  placeholder="確認新密碼"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              {confirmPasswordError && <div className={`${styles['error']} my-2 text-start`}>{confirmPasswordError}</div>}
            </div>
            <button type="submit" className="btn btn-brown text-white w-100">
              確定
            </button>
            <div className="row mt-4">
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
    </main>
  )
}

export default ForgetPasswordForm;