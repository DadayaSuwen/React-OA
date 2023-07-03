import React from 'react'
import IconMap from '@/components/IconMap'
import { loginRule } from '@/utils/rules'

const AccountLogin = props => {
  const { Input, FormItem } = props
  return (
    <>
      <FormItem name='accountName' rules={loginRule.userRule} hasFeedback>
        <Input placeholder='请输入用户名' prefix={IconMap.user} />
      </FormItem>
      <FormItem name='password' rules={loginRule.passwordRule} hasFeedback>
        <Input placeholder='请输入密码' prefix={IconMap.password} type='password' />
      </FormItem>
    </>
  )
}

export default AccountLogin
