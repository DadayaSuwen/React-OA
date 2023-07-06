import $http from '@/service/index'
import { message } from 'antd'

export default {
  namespace: 'users',
  state: {
    useInfo: JSON.stringify(sessionStorage.getItem('userProflie')) || null
  },
  reducers: {},
  effects: {
    *login({ payload }, { put, call, select }) {
      const { data, msg } = yield call($http.userLogin, payload)
      if (!data) return message.error(msg)
      sessionStorage.setItem('userProflie', JSON.stringify(data))
    }
  }
}
