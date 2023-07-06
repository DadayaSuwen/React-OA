import React from 'react'

const BaseLayout = props => {
  const { children } = props
  return (
    <>
      <h1>头部</h1>
      <div>侧边栏</div>
      {children}
    </>
  )
}

export default BaseLayout
