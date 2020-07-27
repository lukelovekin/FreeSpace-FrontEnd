import React, { useContext } from 'react'
import  { StateContext } from '../store'
// import { Link } from 'react-router-dom'
// import { UserContext } from '../store'

export default function Portfolio(props) {
    const { port_id } = props.match.params
    const {state} = useContext(StateContext)
    // const { user } = useContext(UserContext)
    const portfolio = state.portfolios[port_id]

    return ( 
        <div>
        
        {/* This ternary operate fixes a React floor that doesnt find props immediately after a render */}
        {portfolio ? (
             <>
                { portfolio.name }
                < br />

                { portfolio.bio }
                < br />

                <img src={portfolio.imageUrl} alt="pic" style={{ width: "300px" }} />
                <br />

                <ul>
                {
                    Object.entries(portfolio.links[0]).map((link, i) => {
                        if (link[1])
                            return <li>{link[0]}, {link[1]}</li>

                    })
                }
                </ul>
            </>
         ) : (
            null
         ) }      
        </div>
        
    )
}

