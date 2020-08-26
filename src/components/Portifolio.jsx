import React, { useContext } from 'react'
import  { StateContext, UserContext } from '../store'
import api from '../api/api'

export default function Portfolio(props) {
    const { port_id } = props.match.params
    const {state} = useContext(StateContext)
    const { user } = useContext(UserContext)
    const portfolio = state.portfolios.find(element => element._id === port_id)

    //move to a env file
    //environments
    let url
    if (process.env.REACT_APP_ENV === 'development') {
        url = "http://localhost:3000"
    } else {
        url = "https://free-space.gq"
    }

    //deletes the portfolio
    const deletePortfolio = () => {
        api.delete(`portfolios/${portfolio._id}` )
        	.then(res => window.location.href = `${url}/artist_portal`)
        	.catch(err => console.log(err))
    }

    //onclick this redirects
    const editPage = () => {
        window.location.href = `${port_id}/edit`
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

                {portfolio.links[0] ? (
                        <ul>
                            {
                                Object.entries(portfolio.links[0]).map((link, i) => {
                                    if (link[1]) {
                                        return <li key={i}>{link[0]}, {link[1]}</li>
                                    } else {
                                        return null
                                    }

                                })

                            }
                        </ul>
                ) : (
                    null
                )}

                
                {portfolio.imageUrl && (
                    portfolio.imageUrl.map((pic, i) => (
                        <img src={pic} alt='artist' className="displayed-image" style={{ width: "300px" }} key={i}/>
                    ))
                )}
                <br />
                
                {console.log(user)}
                {console.log(portfolio)}
                
                {user._id === portfolio.user ? (
                    <>
                        <button onClick={deletePortfolio}>Delete</button>
                            <button onClick={editPage}>Edit</button>
                    </>
                ) : (
                    null
                )}
                
            </>
         ) : (
            null
         ) }      
        </div>
        
    )
}

