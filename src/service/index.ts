//- webpack 的require.context 方法 提取模块内容

const requireApi = require.context('.', true, /.ts$/)

const module: any = {}

requireApi.keys().forEach(key => {
  if (key === './index.ts' || key === './http.ts') return
  Object.assign(module, requireApi(key))
})
export default module
