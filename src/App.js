import React from 'react';
import './App.css';
import portfolio from './images/portfolioexample1.png'

function HomePage() {
  return (
    <section>
      <h1>Welcome to Freespace</h1>
      <button><h2>Signup to build portfolio</h2></button>
      <br />
      <button>Already have an account?</button>  
    </section>
  )
}

function Portfolios() {
  return (
    <section id="portfolios">
      <h3>Browse portfolios</h3>
      <h4>Portfolios will be appear here</h4>
      <img src={portfolio} alt="portfolio example 1" />
      <img src={portfolio} alt="portfolio example 1" />
      <img src={portfolio} alt="portfolio example 1" />
      
    </section>
  )
}

function App() {
  return (
    <>
      <HomePage />
      <Portfolios />
    </>  
  )
}

export default App;
