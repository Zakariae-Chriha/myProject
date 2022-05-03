import React from 'react'
import '../styles/Profil.css'
import { Link } from 'react-router-dom'

function Profil() {
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
          <Link to='/add-book'>Add Book</Link>
          <Link to='/my-books'>My Books</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/logout'>Logout</Link>
        </nav>
      </details>
    </div>
  )
}

export default Profil
