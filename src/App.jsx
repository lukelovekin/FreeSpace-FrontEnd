import React, { useReducer, useEffect, useState } from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import { stateReducer,  UserContext, ErrorContext, StateContext } from './store'

import './App.css';
import api from './api'
import Login from './components/Login'
import About from './components/About'
import SignUp from './components/SignUp'
import NoMatch from './components/NoMatch'
import Portfolio from './components/Portifolio'
import Portfolios from './components/Portfolios'
import ArtistProfile from './components/ArtistPortal'
import EditPortfolio from './components/EditPortfolio'
import CreatePortfolio from './components/CreatePortfolio'


function App() {
  const [state, dispatch] = useReducer(stateReducer, { portfolios:[] })
  const [user, setUser] = useState(UserContext) //false
  const [error, setError] = useState(ErrorContext) //false

  let url
if (process.env.REACT_APP_ENV==='development') {
   url = "http://localhost:4000"
} else {
   url = "https://free-space-api.herokuapp.com"
}
  
  // at the moment all this is doing is console logging the database data.
  useEffect(() => {
    api.get('portfolios')
      .then(res => {
        // console.log(res.data)
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
          <Route exact path="/login" component={Login} />
          <Route exact path="/about" component={About} />
          <Route exact path="/sign_up" component={SignUp} />
          <Route exact path="/artist_portal" component={ArtistProfile} />
          <Route exact path="/portfolios/new" component={CreatePortfolio} />
          <Route exact path="/portfolios/edit" component={EditPortfolio} />
          <Route exact path="/portfolios/:port_id" component={Portfolio} />
          {/* Sprinkle */}
          {/* <Route exact path="/portfolios/:port_name" component={Portfolio} /> */}
          <Route component={NoMatch} />
        </Switch>
      </ErrorContext.Provider>
    </UserContext.Provider >
    </StateContext.Provider>
    </>
  );
}

export default App;
