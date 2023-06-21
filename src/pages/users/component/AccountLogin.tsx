import React from 'react'
import IconMap from '@/components/IconMap'

const AccountLogin = props => {
  const { Input, FormItem } = props
  return (
    <>
      <FormItem>
        <Input placeholder='请输入用户名' prefix={IconMap.user} />
      </FormItem>
      <FormItem>
        <Input placeholder='请输入密码' prefix={IconMap.password} />
      </FormItem>
    </>
  )
}

export default AccountLogin
