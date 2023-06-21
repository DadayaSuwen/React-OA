import React from 'react'

const AccountLogin = props => {
  const { Input, FormItem } = props
  return (
    <>
      <FormItem>
        <Input placeholder='请输入用户名' />
      </FormItem>
      <FormItem>
        <Input placeholder='请输入密码' />
      </FormItem>
    </>
  )
}

export default AccountLogin
