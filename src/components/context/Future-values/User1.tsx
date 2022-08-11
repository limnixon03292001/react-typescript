import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const User1 = () => {
  const userContext = useContext(UserContext);

  const handleLogin = () => {
    userContext?.setUser({
      name: 'Nixon',
      email: 'nixon@gmail.com',
    })
    userContext?.setName({
      name: 'Nixonnnnnnn!!!'
    })
  }

  const handleLogout = () => {
    userContext?.setUser(null);
  }

  return (
    <div>
        <h1>User Context</h1>
        <p>x {userContext?.name?.name}</p>
        <h5>Name: {userContext?.user?.name}</h5>
        <h6>Email: {userContext.user?.email}</h6>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default User1