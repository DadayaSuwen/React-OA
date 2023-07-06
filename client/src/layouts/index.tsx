import { selectLayout } from '@/utils/selectLayout'
import { useLocation, Outlet, useSelector } from 'umi'
import BaseLayout from './BaseLayout'
import LoginLayout from './LoginLayout'
// 引入loading组件
import React from 'react'
import Loading from '@/components/loading/loading'

/**
 * 主入口选择布局
 */
const Layout = props => {
  // 获取当前路由
  const location = useLocation()
  // 获取全局loading状态
  const loading = useSelector(state => state.loading)

  const LayoutMap = { BaseLayout, LoginLayout }

  const Container = LayoutMap[selectLayout(location.pathname)]
  return (
    <Container>
      <Outlet />
      <Loading isShow={loading.global} />
    </Container >
  )
}

export default Layout
