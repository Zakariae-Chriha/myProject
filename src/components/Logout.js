import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Link } from 'react-router-dom'

function Logout() {
  const { logout, loggedIn, user } = useContext(AuthContext)
  return (
    <div>
      {loggedIn ? (
        <>
          {user.name}
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <button>
            <Link to='/home'>Login</Link>
          </button>
        </>
      )}
    </div>
  )
}

export default Logout
