import ajax from '../http'

// 用户登录请求
export const userLogin = (params: any) => ajax.post('/login', params)
