import IconMap from '@/components/IconMap'
import { loginRule } from '@/utils/rules'
import { useState } from 'react'

const SmCodeLogin = props => {
  const { Input, FormItem, Button, form, Space } = props
  const [disabled, setDisabled] = useState<boolean>(true)
  const [currentStatus, setCurrentStatus] = useState<boolean>(true)
  const [currentTime, setCurrentTime] = useState<number>(60)

  /**
   * 检测手机号是否成功
   */
  const checkMobile = async () => {
    try {
      const status = await form.validateFields(['mobile'])
      setDisabled(!status)
    } catch (err) {
      setDisabled(true)
    }
  }
  /**
   * 发送验证码
   */
  const _sendSmcode = () => {
    setCurrentStatus(false)
    setDisabled(true)
    runTime()
  }

  const runTime = () => {
    let copyCurrentTime = currentTime
    const timer = setInterval(() => {
      if (copyCurrentTime <= 0) {
        clearInterval(timer)
        setCurrentStatus(true)
        setCurrentTime(60)
        setDisabled(false)
        return
      }
      setCurrentTime(--copyCurrentTime)
    }, 1000)
  }

  return (
    <>
      <FormItem name='mobile' rules={loginRule.mobileRule} hasFeedback>
        <Input placeholder='请输入手机号码' prefix={IconMap.mobile} onChange={checkMobile} />
      </FormItem>
      <FormItem name='code' rules={loginRule.codeRule} hasFeedback>
        <Space.Compact>
          <Input placeholder='请输入验证码' prefix={IconMap.password} />
          <Button disabled={disabled} type='primary' ghost onClick={_sendSmcode}>
            {currentStatus ? '获取验证码' : `${currentTime}秒后重发送`}
          </Button>
        </Space.Compact>
      </FormItem>
    </>
  )
}

export default SmCodeLogin
