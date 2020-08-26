import React, { useContext } from 'react'
import { StateContext } from '../store'
import { Link } from 'react-router-dom'
import { UserContext } from '../store'

//home page, list of all the portfolios from the backend
export default function Portfolios() {
const { state } = useContext(StateContext)
const { user, handleGoogleAuth } = useContext(UserContext)
    
    //onclick method that changes the URL.
    const newPage = () => {
        window.location.href = `portfolios/new`
    }
    
    return (
        <div>
            {user ? (
                    <>
                        <h3>Welcome to Freespace</h3>
                        <h5>Logged in as {user.displayName || user.username}</h5>
                        <button onClick={newPage}><h5>Create a Portfolio</h5></button>
                    </>
            ) : (
                    <>
                        <h1>Welcome to Freespace</h1>
                        <button onClick={handleGoogleAuth}><h2>Create a Portfolio</h2></button>
                        <br />
                    </>
            )}

            <ul>     
            {
                state.portfolios.map((item, index) => (
                    <li key={index}>
                        {console.log(item)}
           
                        <Link to={`/portfolios/${item._id}`}><img src={item.imageUrl[0]} alt="artist" style={{ width: "300px" }}/><br/>{item.name}</Link>             

                    </li>
                ))
            }
            </ul>
        </div>
    )
}
