import { useState } from 'react'

const LoggedIn = () => {
    const [isLogin, setIsLogin] = useState(false);

    const handleLogin = () => {
        setIsLogin(true);
    };

    const handleLogout = () => {
        setIsLogin(false);
    }

  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <p>The is {isLogin ? 'Logged in!' : 'Please login!'}</p>
    </div>
  )
}

export default LoggedIn