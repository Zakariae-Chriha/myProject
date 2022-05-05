import React, { useContext } from 'react'

import { AuthContext } from '../context/AuthContext'
import '../styles/Profil.css'
import { Link } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

function Profile() {
  const { logout, loggedIn } = useContext(AuthContext)

  console.log(loggedIn)
  const handleLogout = () => {
    logout()
  }

  if (!loggedIn) return <Navigate to='/login' />
  return (
    <div className='Profil '>
      <details>
        <div className='Profil'>
          <img
            src='http://1.gravatar.com/avatar/47db31bd2e0b161008607d84c74305b5?s=96&d=mm&r=g'
            alt='userimg'
          />
        </div>
        <summary></summary>
        <nav className='menu'>
          <li>
            <Link to='/add-book'>Add Book</Link>
          </li>
          <li>
            <Link to='/my-books'>My Books</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
          <li onClick={handleLogout}>Logout</li>
        </nav>
      </details>
    </div>
  )
}

export default Profile
