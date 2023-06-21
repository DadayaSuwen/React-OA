import React from 'react'
import { selectLayout } from '@/utils/selectLayout'
import BaseLayout from './BaseLayout'
import LoginLayout from './LoginLayout'

const Layout = props => {
  const { children, history, location } = props
  const LayoutMap = { BaseLayout, LoginLayout }

  const Container = LayoutMap[selectLayout(location.pathname)]
  return <Container>{children}</Container>
}

export default Layout
