import React, { useReducer, useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Home from './Home'
import Portfolios from './Portfolios'
import CreatePortfolio from './CreatePortfolio'
import NoMatch from './NoMatch'
import { stateReducer, StateContext } from './store'
import api from './api'
import Login from './Login'
import SignUp from './SignUp'

function App() {
  const [state, dispatch] = useReducer(stateReducer, { 
    portfolios: []
   })
  const [user, setUser] = useState(false)
  const [error, setError] = useState(false)
  // const url = "http://localhost:4000"

  // let url = "http://localhost:4000"
  let url = "https://free-space-api.herokuapp.com"
  

  // at the moment all this is doing is console logging the database data.
  useEffect(() => {
    api.get('portfolios')
      .then(res => {
        console.log(res)
        // update portfolios in the reducer with the value res.data
        dispatch({
          type: 'setPortfolios',
          data: res.data
        })
      })
  }, [])     

  useEffect(() => {
    api.get(`/users/me`, {
      withCredentials: true
    })
      .then(result => {
        setUser(result.data)
      })
  }, [])

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
    <>
      <div>
        {user ? (
          <>
            <h2>Logged in as {user.displayName || user.username}</h2>
            <button onClick={handleLogOut}>Log Out</button>
          </>
        ) : (
            <>
              <h2>Register</h2>
              <form onSubmit={handleSignUp}>
                <label>Username</label>
                <input />
                <label>Password</label>
                <input />
                <button>Sign up</button>
              </form>
              <h2>Login</h2>
              <form onSubmit={handleLogIn}>
                <label>Username</label>
                <input />
                <label>Password</label>
                <input />
                <button>Sign In</button>
              </form>
              <button onClick={handleGoogleAuth}>Google Auth</button>
              {error ? (
                <div>
                  <h4>{error.name}</h4>
                  <p>{error.message}</p>
                </div>
              ) : (null)}
            </>
          )}
      </div>
    <StateContext.Provider value={{state, dispatch}}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/portfolios" component={Portfolios} />
      <Route exact path="/portfolios/new" component={CreatePortfolio} />
      <Route exact path="/sign_up" component={SignUp} />
      <Route exact path="/login" component={Login} />
      <Route component={NoMatch} />
    </Switch >
    </StateContext.Provider >
    </>
  );
}

export default App;
