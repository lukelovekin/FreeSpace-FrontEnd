import React, { useReducer, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
import Home from './Home'
import Portfolios from './Portfolios'
import CreatePortfolio from './CreatePortfolio'
import NoMatch from './NoMatch'
import { stateReducer, StateContext } from './store'
import api from './api'
import Login from './Login'
import SignUp from './SignUp'
import ImageUpload from './ImageUpload'
import Form from './components/Form'


function App() {
  const [state, dispatch] = useReducer(stateReducer, { portfolios: [] })


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


  return (

    <StateContext.Provider value={{state, dispatch}}>
    <Switch>
    <Form />  
      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React GAB
          </a>
        </header>
      </div> */}
      <Route exact path="/" component={Home} />
      <Route exact path="/portfolios" component={Portfolios} />
      <Route exact path="/portfolios/new" component={CreatePortfolio} />
      <Route exact path="/sign_up" component={SignUp} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/imageupload" component={ImageUpload} />
      <Route component={NoMatch} />
    </Switch >
    </StateContext.Provider >
  );
}

export default App;
