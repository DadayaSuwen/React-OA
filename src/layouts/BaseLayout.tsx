import { Outlet } from 'umi'

const BaseLayout = props => {
  const { children } = props
  return (
    <>
      <h1>头部</h1>
      <div>侧边栏</div>
      <Outlet />
    </>
  )
}

export default BaseLayout
