import { Outlet } from 'umi'

const LoginLayout = props => {
  const { children } = props
  return (
    <>
      <Outlet />
    </>
  )
}

export default LoginLayout
