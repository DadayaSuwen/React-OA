import { defineConfig } from 'umi'

export default defineConfig({
  dva: {},
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],
  fastRefresh: true,
  proxy: {
    '/api': {
      target: 'http://localhost:7001'
    }
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true
  },
  lessLoader: { javascriptEnabled: true },
  // 配置主题
  antd: {
    theme: {
      token: {
        colorPrimary: '#2329D6',
        colorLink: '#2329D6'
      }
    },
    // 暗黑主题
    dark: false,
    // theme: {},
    style: 'less',
    // 应用程序的配置对象
    appConfig: {},
    // Transform DayJS to MomentJS
    momentPicker: true
  }
})
