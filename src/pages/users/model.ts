import $http from '@/service/index'

export default {
  namespace: 'users',
  state: {
    useInfo: {}
  },
  reducers: {},
  effects: {
    *login({ payload }, { put, call, select }) {
      const data = yield call($http.userLogin, payload)
    }
  }
}
