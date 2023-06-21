import React from 'react'

const Layout = props => {
  const { children } = props
  console.log(props)
  return <div>{children}</div>
}

export default Layout
