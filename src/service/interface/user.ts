import ajax from '../http'

// 用户登录请求
export const userLogin = params => ajax.post('/login', params)
