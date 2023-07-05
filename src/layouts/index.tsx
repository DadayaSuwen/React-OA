import { selectLayout } from '@/utils/selectLayout'
import { Outlet, useLocation } from 'umi'
import BaseLayout from './BaseLayout'
import LoginLayout from './LoginLayout'

const Layout = props => {
  const { children, history } = props
  const location = useLocation()
  const LayoutMap = { BaseLayout, LoginLayout }

  const Container = LayoutMap[selectLayout(location.pathname)]
  return (
    <Container>
      <Outlet />
    </Container>
  )
}

export default Layout
