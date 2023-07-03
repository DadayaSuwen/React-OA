const requireApi = require.context('.', true, /\.ts$/)

const model = {}

requireApi.keys().forEach(key => {
  if (key === './index.ts' || key === './http.ts') return
  Object.assign(model, requireApi(key))
})

export default model
