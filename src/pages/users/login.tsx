import React, { useState } from 'react'
import AccountLogin from './component/AccountLogin'
import SmCodeLogin from './component/SmCodeLogin'
import { Form, Button, Checkbox, Input, Row, Col } from 'antd'
import IconMap from '@/components/IconMap'
import Logo from '@/assets/logo.png'
import '@/pages/users/css/login.less'
const Login = () => {
  const FormItem = Form.Item
  const [form] = Form.useForm()
  const [type, setType] = useState<number>(0)
  const submintUserInfo = () => {
    console.log(form.getFieldsValue())
  }
  // 通过type来判断是账户名登录还是手机号登录
  const ComponentSelector = props => (!type ? <AccountLogin {...props} /> : <SmCodeLogin {...props} />)
  return (
    <div className='form'>
      <div className='logo'>
        <img src={Logo} />
        <span>OA 管理系统</span>
      </div>
      <Form form={form} onFinish={submintUserInfo}>
        {ComponentSelector({ form, FormItem, Input, Checkbox })}
        <Row>
          <Button block type='primary'>
            登录
          </Button>
        </Row>
        <Row className='ft-12'>
          <Col span={6}>忘记密码？</Col>
          <Col span={18} className='align-right'>
            {!type ? `使用账户名加密码形式登录` : `使用账户密码登录`}
            {IconMap.arrRowRight}
          </Col>
        </Row>
      </Form>
    </div>
  )
}

export default Login
