import { message } from 'antd'
import axios from 'axios'
import qs from 'qs'
import { history } from 'umi'

const checkStatus = (response: any) => {
  if (response && response.status >= 200 && response.status < 300) {
    return response
  }
  message.error(`网络请求错误${response ? response.status : 'Unknown'}`)
  throw new Error(response ? response.statusText : 'Unknown error')
}

const judegStatus = async (response: any) => {
  const cloneRes = response.data
  if (cloneRes.code !== 0) {
    message.error(`${cloneRes.message}${cloneRes.code}`)
    history.replace('/users/login')
    sessionStorage.clear()
  }
  return response
}

// 错误处理
const errorHandler = (error: any) => {
  if (error instanceof TypeError) {
    message.error(`网络请求错误${error.message}}`)
  }
  return {
    code: -1,
    data: false
  }
}

class Http {
  static async staticFetch(url: string = '', options: any = {}) {
    url = '/api' + url
    const defaultOptions = {
      mode: 'cors',
      headers: {
        Authorization: sessionStorage.getItem('token') || ''
      }
    }
    if (options.method === 'POST' || options.method === 'PUT') {
      defaultOptions.headers['Content-Type'] = 'application/json'
    }
    const newOptions = { ...defaultOptions, ...options }

    try {
      const res = await axios(url, newOptions)
      checkStatus(res)
      judegStatus(res)
      const token = res.headers['Authorization']
      token && sessionStorage.setItem('token', token) // 更新token
      return res.data
    } catch (error) {
      return errorHandler(error)
    }
  }

  post(url: string, params: any = {}, option: any = {}) {
    const options = Object.assign({ method: 'POST' }, option)
    options.data = params
    return Http.staticFetch(url, options)
  }

  put(url: string, params: any = {}, option: any = {}) {
    const options = Object.assign({ method: 'PUT' }, option)
    options.data = params
    return Http.staticFetch(url, options)
  }

  get(url: string, option: any = {}) {
    const options = Object.assign({ method: 'GET' }, option)
    if (Object.keys(option).length) {
      url += '?' + qs.stringify(option)
    }
    return Http.staticFetch(url, options)
  }

  del(url: string, option: any = {}) {
    const options = Object.assign({ method: 'DELETE' }, option)
    if (Object.keys(option).length) {
      url += '?' + qs.stringify(option)
    }
    return Http.staticFetch(url, options)
  }
}

const http = new Http()

export default http
