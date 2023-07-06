import IconMap from '@/components/IconMap'
import { Button, Checkbox, Col, Form, Input, Row, Space } from 'antd'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'umi'
import AccountLogin from './component/AccountLogin'
import SmCodeLogin from './component/SmCodeLogin'
import './css/login.less'

const Login = () => {
  const FormItem = Form.Item
  const [form] = Form.useForm()
  const [type, setType] = useState<number>(0)
  const dispatch = useDispatch()
  const loading = useSelector(state => state.loading)
  const submintUserInfo = async () => {
    const data = await form.validateFields()
    dispatch({
      type: 'users/login',
      payload: {
        ...data,
        type
      }
    })
  }

  // 通过type来判断是账户名登录还是手机号登录
  const ComponentSelector = props => (!type ? <AccountLogin {...props} /> : <SmCodeLogin {...props} />)
  return (
    <>
      <div className='form'>
        <div className='logo'>
          {IconMap.logo}
          <span>{!type ? '用户登录' : '验证码登录'}</span>
        </div>
        <Form form={form} onFinish={submintUserInfo}>
          {ComponentSelector({ form, FormItem, Input, Checkbox, Button, Space })}
          <Row>
            <Button block type='primary' htmlType='submit' loading={loading.effects['users/login']}>
              登录
            </Button>
          </Row>
          <Row className='ft-12'>
            <Col span={6}>忘记密码？</Col>
            <Col span={18} className='align-right' onClick={() => setType(!type ? 1 : 0)}>
              {!type ? `使用手机加验证码登录` : `使用账户密码登录`}
              {IconMap.arrRowRight}
            </Col>
          </Row>
        </Form>
      </div>
    </>

  )
}

export default Login
