import { qs } from 'qs'
import { message } from 'antd'
import { history } from 'umi'

const fetch = require('dva').fetch

const checkStatus = (response: any) => {
  if (response.status >= 200 && response.status < 300) {
    return response
  }
  message.error(`网络请求错误${response.status}`)
  throw new Error(response.statusText)
}

const judegStatus = async (response: any) => {
  const cloneRes = await response.clone().json()
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
        Authorization: sessionStorage.get('token') || ''
      }
    }
    if (options.method === 'POST' || options.method === 'PUT') {
      defaultOptions.headers['Content-Type'] = 'application/json;charset=UTF-8'
    }
    const newOptions = { ...defaultOptions, ...options }

    return fetch(url, newOptions)
      .then(checkStatus)
      .then(judegStatus)
      .then(res => {
        const token = res.headers.get('Authorization')
        token && sessionStorage.setItem('token', token) // 更新token
      })
      .catch(errorHandler)
  }

  post(url: string, params: any = {}, option: any = {}) {
    const options = Object.assign({ method: 'POST' }, option)
    options.body = JSON.stringify(params)
    return Http.staticFetch(url, options)
  }

  put(url: string, params: any = {}, option: any = {}) {
    const options = Object.assign({ method: 'PUT' }, option)
    options.body = JSON.stringify(params)
    return Http.staticFetch(url, options)
  }

  get(url: string, option: any = {}) {
    const options = Object.assign({ method: 'GET' }, option)
    Object.keys(option) && (url += '?' + qs.stringify(option))
    return Http.staticFetch(url, options)
  }

  del(url: string, option: any = {}) {
    const options = Object.assign({ method: 'DELETE' }, option)
    Object.keys(option) && (url += '?' + qs.stringify(option))
    return Http.staticFetch(url, options)
  }
}

const http = new Http()

export default http
