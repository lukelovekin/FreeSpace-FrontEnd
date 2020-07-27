import React, { useReducer, useEffect, useState } from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import { stateReducer,  UserContext, ErrorContext, StateContext } from './store'

import './App.css';
// import Home from './Home'
import Portfolios from './components/Portfolios'
import CreatePortfolio from './components/CreatePortfolio'
import NoMatch from './components/NoMatch'
import api from './api'
import Login from './components/Login'
import SignUp from './components/SignUp'
import ArtistProfile from './components/ArtistProfile'
// import Upload from './components/Upload'
// import ImageUpload from './components/ImageUpload'
import About from './components/About'
import Portfolio from './components/Portifolio'
import Navbar from './components/Navbar'


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

  return (
    <>
    <StateContext.Provider value={{state, dispatch}}>
    <UserContext.Provider value={{user, setUser, handleLogIn, handleGoogleAuth, handleSignUp, handleLogOut}}>
    <ErrorContext.Provider value={{error, setError}}>

        <Navbar />

        <Switch>
          <Route exact path="/" component={Portfolios}/>
          <Route exact path="/login" component={Login} />
          <Route exact path="/about" component={About} />
          <Route exact path="/sign_up" component={SignUp} />
          <Route exact path="/artist_portal" component={ArtistProfile} />
          <Route exact path="/portfolios/new" component={CreatePortfolio} />
          <Route exact path="/portfolios/:port_id" component={Portfolio}/>
          {/* <Route exact path="/upload" component={Upload} /> */}
          <Route component={NoMatch} />
             
        </Switch>
      </ErrorContext.Provider>
    </UserContext.Provider >
    </StateContext.Provider>
    </>
  );
}

export default App;
