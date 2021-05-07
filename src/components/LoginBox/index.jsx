import React from 'react'
import { Form, Input, Button } from 'antd'

import './styles.scss'

export default function LoginBox(props) {
  const onFinish = (values) => {
    // console.log('Success:', values);
    props.login(values)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div className="login-box">
      <div className="sign-btns">
        <div className="sign-btn sign-up-btn active">登录</div>
        <div className="sign-btn sign-in-btn">注册</div>
      </div>
      <div className="avatar-wrap">
        <div className="avatar" />
      </div>
      <div className="">
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item name="username" rules={[{ required: true, message: '请输入用户名' }]}>
            <Input placeholder="请输入用户名" />
          </Form.Item>

          <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
            <Input.Password placeholder="请输入密码" />
          </Form.Item>

          <Form.Item>
            <Button className="submit-btn" type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
