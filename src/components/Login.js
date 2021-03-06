import '../styles/Login.css'
import React, { useState, useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

function Login() {
  const [userInput, setUserInput] = useState({ username: '', password: '' })
  const { login, loggedIn, signup } = useContext(AuthContext)
  const { state } = useLocation()
  const nextPage = state?.nextPage

  const handleLogin = (e) => {
    e.preventDefault()
    login(userInput, nextPage)
  }

  const handleSignup = () => {
    signup(userInput)
  }

  if (loggedIn) return <Navigate to={nextPage ? nextPage : '/profile'} />

  return (
    <div className='row'>
      <div className='col-md-6 mx-auto p-0'>
        <div className='card'>
          <div className='login-box'>
            <div className='login-snip'>
              <input
                id='tab-1'
                type='radio'
                name='tab'
                className='sign-in'
                checked
                readOnly
              />
              <label htmlFor='tab-1' className='tab'>
                Login
              </label>
              <input
                id='tab-2'
                type='radio'
                name='tab'
                className='sign-up'
                readOnly
              />
              <label htmlFor='tab-2' className='tab'>
                Sign Up
              </label>
              <div className='login-space'>
                <form className='login'>
                  <div className='group'>
                    <label htmlFor='user' className='label'>
                      Username
                    </label>
                    <input
                      id='login-user'
                      type='text'
                      className='input'
                      name='username'
                      placeholder='Enter your username'
                      onChange={(e) =>
                        setUserInput({
                          username: e.target.value,
                          password: userInput.password,
                        })
                      }
                    />
                  </div>
                  <div className='group'>
                    <label htmlFor='pass' className='label'>
                      Password
                    </label>
                    <input
                      id='login-pass'
                      type='password'
                      name='password'
                      className='input'
                      data-type='password'
                      placeholder='Enter your password'
                      autoComplete='on'
                      onChange={(e) =>
                        setUserInput({
                          username: userInput.username,
                          password: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className='group'>
                    <input id='check' type='checkbox' className='check' />
                    <label htmlFor='check'>
                      <span className='icon'></span> Keep me Signed in
                    </label>
                  </div>
                  <div className='group'>
                    <input
                      type='submit'
                      className='button'
                      value='Sign In'
                      onClick={handleLogin}
                    />
                  </div>
                  <div className='hr'></div>
                  <div className='foot'>
                    <a href='/'>Forgot Password?</a>
                  </div>
                </form>
                <form className='sign-up-form'>
                  <div className='group'>
                    <label htmlFor='user' className='label'>
                      Username
                    </label>
                    <input
                      id='user'
                      type='text'
                      name='username'
                      className='input'
                      placeholder='Create your Username'
                      onChange={(e) =>
                        setUserInput({
                          username: e.target.value,
                          password: userInput.password,
                        })
                      }
                    />
                  </div>
                  <div className='group'>
                    <label htmlFor='pass' className='label'>
                      Password
                    </label>
                    <input
                      id='pass'
                      type='password'
                      className='input'
                      data-type='password'
                      placeholder='Create your password'
                      autoComplete='on'
                      onChange={(e) =>
                        setUserInput({
                          username: userInput.name,
                          password: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className='group'>
                    <input
                      type='submit'
                      className='button'
                      value='Sign Up'
                      onClick={handleSignup}
                    />
                  </div>
                  <div className='hr'></div>
                  <div className='foot'>
                    <label htmlFor='tab-1'>Already Member?</label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
