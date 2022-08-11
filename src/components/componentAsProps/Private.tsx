import React from 'react'
import Login from './Login'
import { ProfileProps } from './Profile'

type PrivateProps = {
    isLogin: boolean
    component: React.ComponentType<ProfileProps>
}

const Private = ({isLogin, component: Component,}: PrivateProps) => {

  return (
    <div>
        <h2>Private</h2>
        {isLogin ?
            <Component name="Nixon!!"/>
        :
            <Login/>
        }
    </div>
  )
}

export default Private