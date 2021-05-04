import React from 'react'
import LoginBox from '../../components/LoginBox'

import './styles.scss'

export default function Login() {
  /**
   * 登录
   */
  function handleLogin(values) {
    console.log(values);
    // 保存全局状态
    
  }

  return (
    <div className="login">
      <LoginBox login={handleLogin}/>
    </div>
  )
}

