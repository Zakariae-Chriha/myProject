import React, { useContext } from 'react'
import slide7 from '../assets/user.png'
import { AuthContext } from '../context/AuthContext'
import '../styles/Profil.css'
import { Link } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import AddBoxIcon from '@mui/icons-material/AddBox'
import HomeIcon from '@mui/icons-material/Home'
import ContactMailIcon from '@mui/icons-material/ContactMail'
import LogoutIcon from '@mui/icons-material/Logout'
function Profile() {
  const { logout, loggedIn } = useContext(AuthContext)

  const handleLogout = () => {
    logout()
  }

  if (!loggedIn) return <Navigate to='/login' />
  return (
    <div className='Profil row '>
      <>
        <nav className='menu col d-flex justify-content-lg-around mt-4 '>
          <li>
            <Link to='/login' onClick={handleLogout}>
              <LogoutIcon />
              Logout
            </Link>
          </li>
          <li>
            <Link to='/contact'>
              <ContactMailIcon />
              Contact
            </Link>
          </li>
          <li>
            <Link to='/my-books'>
              <HomeIcon />
              My Books
            </Link>
          </li>

          <li>
            <Link to='/add-book'>
              <AddBoxIcon />
              Add Book
            </Link>
          </li>
        </nav>
      </>
      <div className=' img col d-flex justify-content-end m-2 '>
        <img src={slide7} alt='userimg' />
      </div>
    </div>
  )
}

export default Profile
