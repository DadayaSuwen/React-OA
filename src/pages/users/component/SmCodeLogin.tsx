import React from 'react'
import IconMap from '@/components/IconMap'

const SmCodeLogin = props => {
  const { Input, FormItem, Button } = props
  return (
    <>
      <FormItem>
        <Input placeholder='请输入手机号码' prefix={IconMap.mobile} />
      </FormItem>
      <FormItem>
        <Input placeholder='请输入验证码' prefix={IconMap.password} addonAfter={<Button>获取验证码</Button>} />
      </FormItem>
    </>
  )
}

export default SmCodeLogin
