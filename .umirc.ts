import { defineConfig } from 'umi'
const { resolve } = require('path')

export default defineConfig({
  nodeModulesTransform: {
    type: 'none'
  },
  alias: {
    utils: resolve(__dirname, './src/utils')
  },
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],
  fastRefresh: {}
})
