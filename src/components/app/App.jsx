import React, { useReducer, useEffect, useState } from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import { stateReducer,  UserContext, ErrorContext, StateContext } from '../../store'

import './App.css';
import api from '../../api/api'
import About from '../About'
// import SignUp from './components/SignUp'
import NoMatch from '../NoMatch'
import Portfolio from '../Portifolio'
import Portfolios from '../Portfolios'
import ArtistProfile from '../ArtistPortal'
import CreatePortfolio from '../CreatePortfolio'


function App() {
  const [state, dispatch] = useReducer(stateReducer, { portfolios:[] })
  const [user, setUser] = useState(UserContext) //false
  const [error, setError] = useState(ErrorContext) //false

  // move to an env file
  //setting up environment
  let url
if (process.env.REACT_APP_ENV==='development') {
   url = "http://localhost:4000"
} else {
   url = "https://free-space-api.herokuapp.com"
}
  
//getting all portfolio data and storing it in a reducer
  useEffect(() => {
    api.get('portfolios')
      .then(res => {
        dispatch({
          type: 'setPortfolios',
          data: res.data
        })
      })
    }, [])    

    // this useEffect and next four functions are all required for user auth     
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
    <StateContext.Provider value={{state, dispatch}}>
    <UserContext.Provider value={{user, setUser, handleLogIn, handleGoogleAuth, handleSignUp, handleLogOut}}>
    <ErrorContext.Provider value={{error, setError}}>
        <nav>
          {user ? (
              <>
                <Link to="/"> Home </Link>
                <Link to="/artist_portal"> Portal </Link>
                <Link to ="/about">About</Link>
                <button onClick={handleLogOut}>Log Out</button>
              </>
          ) : (
              <>
                {/* <Link to="/sign_up">SignUp</Link>
                <Link to="/login">Login</Link> */}
                <button onClick={handleGoogleAuth}>Google Auth</button>
              </>
          )}            
        </nav>
        <Switch>
          <Route exact path="/" component={Portfolios}/>
          <Route exact path="/about" component={About} />
          {/* <Route exact path="/sign_up" component={SignUp} /> */}
          <Route exact path="/artist_portal" component={ArtistProfile} />
          <Route exact path="/portfolios/new" component={CreatePortfolio} />
          <Route exact path="/portfolios/:port_id/edit" component={CreatePortfolio} />
          <Route exact path="/portfolios/:port_id" component={Portfolio} />
          <Route component={NoMatch} />
        </Switch>
      </ErrorContext.Provider>
    </UserContext.Provider >
    </StateContext.Provider>
    </>
  )
}

export default App;
