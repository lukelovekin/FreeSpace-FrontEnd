import React, { useContext } from 'react'
import  { StateContext, UserContext } from '../store'
import api from '../api'
// import { Link } from 'react-router-dom'
// import { UserContext } from '../store'

export default function Portfolio(props) {
    const { port_id } = props.match.params
    const {state} = useContext(StateContext)
    const { user } = useContext(UserContext)
    const portfolio = state.portfolios.find(element => element._id === port_id)
    

    let url
    if (process.env.REACT_APP_ENV === 'development') {
        url = "http://localhost:3000"
    } else {
        url = "https://free-space-api.herokuapp.com"
    }

    const deletePortfolio = () => {
        api.delete(`portfolios/${portfolio._id}` )
        	.then(res => window.location.href = `${url}/artist_portal`)
        	.catch(err => console.log(err))
    }
    

    return ( 
        <div>
        {/* This ternary operate fixes a React floor that doesnt find props immediately after a render */}
        {portfolio ? (
             <>
                { portfolio.name }
                < br />

                { portfolio.bio }
                < br />

                <ul>
                {
                    Object.entries(portfolio.links[0]).map((link, i) => {
                        if (link[1])
                            return <li key={i}>{link[0]}, {link[1]}</li>
                        
                    })
                    
                }
                </ul>
                
                {portfolio.imageUrl && (
                    portfolio.imageUrl.map((pic, i) => (
                        <img src={pic} alt='artist' className="displayed-image" style={{ width: "300px" }} key={i}/>
                    ))
                )}
                <br />
                
                <button onClick={deletePortfolio}>Delete</button>
            </>
         ) : (
            null
         ) }      
        </div>
        
    )
}

