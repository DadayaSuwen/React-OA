export const loginRule = {
  userRule: [
    {
      required: true,
      message: '请输入用户名'
    },
    {
      max: 16,
      message: '用户名最大长度为16位'
    },
    {
      min: 4,
      message: '用户名最小长度为4位'
    }
  ],
  passwordRule: [
    {
      required: true,
      message: '请输入密码'
    },
    {
      max: 16,
      message: '密码最大长度为16位'
    },
    {
      min: 4,
      message: '密码最小长度为4位'
    }
  ],
  mobileRule: [
    {
      required: true,
      message: '请填写手机号'
    },
    {
      pattern: /^1[3456789]\d{9}$/,
      message: '手机号格式错误'
    }
  ],
  // moblieRule: [
  //   {
  //     vilidator: (rule, val) => {
  //       const mobileReg = /^1[3456789]\d{9}$/
  //       switch (true) {
  //         case !Boolean(val):
  //           return Promise.reject('请填写手机号')
  //         case !mobileReg.test(val):
  //           return Promise.reject('手机号格式错误')
  //         default:
  //           return Promise.resolve()
  //       }
  //     }
  //   }
  // ],
  codeRule: [
    { required: true, message: '请输入验证码' },
    { max: 6, message: '验证码最大长度为6位' },
    { min: 6, message: '验证码最小长度为6位' }
  ]
}
