import { useState } from 'react'

type UserAuth = {
    name: string,
    email: string
}

const User = () => {
    const [userAuth, setUserAuth] = useState<UserAuth | null>(null);
    // const [userAuth, setUserAuth] = useState<UserAuth>({} as UserAuth); //Type assertion
 
    const handleLogin = () => {
        setUserAuth({
            name: 'Nixon Lim',
            email: 'nixon@gmail.com'
        });
    };

    const handleLogout = () => {
        setUserAuth(null);
    }

  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <p>Name: {userAuth?.name}</p>
        <p>Email: {userAuth?.email}</p>
    </div>
  )
}

export default User