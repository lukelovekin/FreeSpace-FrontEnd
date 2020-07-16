import React from 'react';
import logo from './logo.svg';
import './App.css';
// import api from './api'

function App() {
  // const [state, dispatch] = useReducer(stateReducer, { portfolios: [] })

  // useEffect(() => {
  //   api.get('portfolios')
  //     .then(res => {
  //       console.log(res)
  //       // update portfolios in the reducer with the value res.data
  //       dispatchEvent({
  //         type: 'setPortfolios',
  //         data: res.data
  //       })
  //     })
  // }, [])        when this is uncommented and working it should display whats in the portfolio db

  return (
    <div className="App">
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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
