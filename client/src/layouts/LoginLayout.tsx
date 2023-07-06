import React from 'react'
import Loading from '@/components/loading/loading'
import { useSelector, Outlet } from 'umi'

const LoginLayout = props => {
  const { children } = props
  const loading = useSelector(state => state.loading)
  return (
    <>
      <Loading isShow={loading.effects['users/login']} />
      <Outlet />
    </>
  )
}

export default LoginLayout
