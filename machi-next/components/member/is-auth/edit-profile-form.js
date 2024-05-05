import React, { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/use-auth';
import { updateProfile } from '@/services/user';

function EditProfileForm() {
  const { auth } = useAuth();
  const { setAuth } = useAuth();
  const [form, setForm] = useState({
    user_account: '',
    user_password: '',
    user_email: '',
    user_gender: '',
    user_birthday: '',
    user_phone: '',
    user_address: '',
  });

  useEffect(() => {
    // 在元件掛載時設定預設值
    setForm({
      user_account: auth.userData.user_account,
      user_password: '',
      user_email: auth.userData.user_email,
      user_gender: auth.userData.user_gender,
      user_birthday: auth.userData.user_birthday,
      user_phone: auth.userData.user_phone,
      user_address: auth.userData.user_address,
    });
  }, [auth]);

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await updateProfile(auth.userData.user_id, form);

    if (response && response.data && response.data.newToken) {
      // 更新 auth 狀態中的令牌
      setAuth(prevAuth => ({
        ...prevAuth,
        token: response.data.newToken,
      }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className='mx-5'>
      <div>
        <label>
          帳號:
          <input type="text" name="user_account" value={form.user_account} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          密碼:
          <input type="password" name="user_password" value={form.user_password} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          電子郵件:
          <input type="email" name="user_email" value={form.user_email} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          性別:
          <input type="text" name="user_gender" value={form.user_gender} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          生日:
          <input type="date" name="user_birthday" value={form.user_birthday} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          手機號碼:
          <input type="tel" name="user_phone" value={form.user_phone} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          地址:
          <input type="text" name="user_address" value={form.user_address} onChange={handleChange} />
        </label>
      </div>
      <button type="submit">更新資料</button>
    </form>
  );
}

export default EditProfileForm;