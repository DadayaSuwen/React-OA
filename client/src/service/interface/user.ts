import ajax from '../http'

// 用户登录请求
export const userLogin = async params => await ajax.post('/login', params)
