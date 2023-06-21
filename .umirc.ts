import { defineConfig } from 'umi'
const { resolve } = require('path')

export default defineConfig({
  nodeModulesTransform: {
    type: 'none'
  },
  alias: {
    utils: resolve(__dirname, 'src')
  },
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],
  fastRefresh: {}
})
