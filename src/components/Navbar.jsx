import React from 'react'
import { Link } from 'react-router-dom'





import api from './api'

export default function Navbar() {
    
    const handleSignUp = (e) => {
        e.preventDefault()
    
        //axios post to url/register
        api.post(`/users/register`, {
          username: e.target[0].value,
          password: e.target[1].value
        }, {
          withCredentials: true
        })
          .then(res => {
            if (res.data.fail) {
              setError(res.data.fail)
            } else {
              setUser(res.data)
            }
          })
          .catch(err => {
            console.log(err)
          })
      }
      const handleLogIn = (e) => {
        e.preventDefault()
        api.post(`/users/login`, {
          username: e.target[0].value,
          password: e.target[1].value
        }, {
          withCredentials: true
        })
          .then(res => {
            setUser(res.data)
          })
          .catch(err => {
            setError(err.response.data)
          })
      }
      const handleLogOut = (e) => {
        e.preventDefault()
        api.get(`/users/logout`, {
          withCredentials: true
        })
          .then(() => {
            setUser(false)
            setError(false)
          })
      }
      const handleGoogleAuth = (e) => {
        window.location = `${url}/users/auth/google`
      }
    
    return (
        <nav>
          <Link to="/"> Home </Link>
          <Link to ="/about"> About </Link>
          {user ? (
            <>
              <Link to="/artist_portal"> Portal </Link>
              <button onClick={handleLogOut}>Log Out</button>
            </>
          ) : (
            <>  
              <button onClick={handleGoogleAuth}>Google Auth</button>
            </>
          )}        
        </nav>
    )
}