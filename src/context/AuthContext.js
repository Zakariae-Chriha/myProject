import { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export const AuthContext = createContext()

function AuthState({ children }) {
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState({})
  const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem('token')

    const verifySession = async () => {
      try {
        const res = await axios.get(
          'https://communitybook.herokuapp.com/user/verify-session',
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        )
        if (res.data.success) {
          const userInfo = await axios.get(
            'https://communitybook.herokuapp.com/user/me',
            {
              headers: {
                Authorization: `${token}`,
              },
            }
          )
          setLoggedIn(true)
          setUser(userInfo.data)
        }
      } catch (err) {
        console.log(err)
      }
    }

    token && verifySession()
  }, [])

  const login = async (user, nextPage) => {
    try {
      const res = await axios.post(
        'https://communitybook.herokuapp.com/user/login',
        user
      )
      localStorage.setItem('token', res.data.token)

      const userInfo = await axios.get(
        'https://communitybook.herokuapp.com/user/me',
        {
          headers: {
            Authorization: `${res.data.token}`,
          },
        }
      )

      setLoggedIn(true)
      setUser(userInfo.data)
      console.log(nextPage)
      navigate(nextPage)
    } catch (err) {
      console.log(err)
    }
  }

  const signup = async (user) => {
    try {
      const res = await axios.post(
        'https://communitybook.herokuapp.com/user/register',
        user
      )
      localStorage.setItem('token', res.data.token)
      const userInfo = await axios.get(
        'https://communitybook.herokuapp.com/user/me',
        {
          headers: {
            Authorization: `${res.data.token}`,
          },
        }
      )
      localStorage.setItem('token', res.data.token)
      setLoggedIn(true)
      setUser(userInfo.data)
    } catch (err) {
      console.log(err)
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    setLoggedIn(false)
    setUser({})
    navigate('/')
  }

  return (
    <AuthContext.Provider value={{ logout, loggedIn, user, signup, login }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthState
