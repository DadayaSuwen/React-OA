import React from 'react'
import './loading.less'
import cn from 'classnames'

interface LoadingProps {
  isShow: boolean
}

/**
 * 全屏loading组件
 */
const Loading: React.FC<LoadingProps> = (props) => {
  const { isShow } = props
  return (
    <div className={cn({
      'loader': true,
      'full-screen': true,
      'hidden': !isShow
    })}>
      <div className='wrapper'>
        <div className='inner'></div>
        <div className='text'>Loading</div>
      </div>
    </div>
  )
}

export default Loading
