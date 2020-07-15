import React from 'react'
import './App.css'
import portfolio from './images/portfolioexample1.png'


function HomePage() {
  return (
    // <ReactRouter>
      <section class="HomePage">
        <h1>Welcome to Freespace</h1>
        <button><h2>Signup to build portfolio</h2></button>
        <br />
        <button>Already have an account?</button>
      </section>
    // </ReactRouter>
  )
}

function Portfolios() {
  return (
    <section id="portfolios">
      <h3>Browse portfolios</h3>
      <img src={portfolio} alt="portfolio example 1" />
      <img src={portfolio} alt="portfolio example 1" />
      <img src={portfolio} alt="portfolio example 1" />
      
    </section>
  )
}

function App() {
  return (
    <>
      <HomePage name="HomePage" />
      <Portfolios name="Portfolios" />
    </>  
  )
}

export default App
