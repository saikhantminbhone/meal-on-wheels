import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../Login/Auth'

const SignOut = () => {
    const auth = useAuth()
   const navigate = useNavigate

    const handleLogout =()=>{
        auth.logout()
        navigate('/')
      }
  return (
    <ul className="navbar-nav ml-auto">
    {/* Sign out button */}
    <button type="submit" onClick={handleLogout} className="btn btn-info">
        <span className="fas fa-sign-out-alt"></span> Sign Out
    </button>
</ul>
  )
}

export default SignOut