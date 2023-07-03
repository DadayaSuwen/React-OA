import { defineConfig } from 'umi'
const { resolve } = require('path')

export default defineConfig({
  nodeModulesTransform: {
    type: 'none'
  },
  dva: {
    immer: true
  },
  alias: {
    utils: resolve(__dirname, './src/utils')
  },
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],
  fastRefresh: {},
  proxy: {
    '/api': {
      target: 'http://localhost:7001',
      changeOrigin: true
    }
  }
})
