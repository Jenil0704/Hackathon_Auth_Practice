import React from 'react'
import Login from '../Components/Login'
import Register from '../Components/Register'

const AuthPage = () => {
  const [login, setLogin] = useState(false)
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
        {login ? <Login state={setLogin} /> : <Register state={setLogin} />}
    </div>
  )
}

export default AuthPage
