import React, { useContext } from 'react'
import { StateContext } from '../store'
import { Link } from 'react-router-dom'
import { UserContext } from '../store'

export default function Portfolios() {
const {state /*, dispatch*/} = useContext(StateContext)
const { user } = useContext(UserContext)

    return (
        <div>
            {user ? (
                    <>
                        <h1>Welcome to Freespace</h1>
                        <h2>Logged in as {user.displayName || user.username}</h2>
                        <Link to='/portfolios/new'><button><h2>Create a Portfolio</h2></button></Link>
                    </>
            ) : (
                    <>
                        <h1>Welcome to Freespace</h1>
                        <Link to="/sign_up"><button><h2>Create a Portfolio</h2></button></  Link>
                        <br />
                        {/* <Link to="/login"><button>Already   have an account?</button></Link> */}
                        </>
            )}

            <h1>Portfolios Below, list or carousel,</h1>
            {
                state.portfolios.map((item, index) => (
                    <article key={index}>
                        {console.log(item)}
                        <p>{item.name}</p>
                        <p>{item.bio}</p>
                        {item.links.map((link) => (
                            <div>
                                <p>{link.facebook}</p>
                                <p>{link.twitter}</p>
                                <p>{link.instagram}</p>
                            </div>
                        ))}
                        <hr/>


                    </article>
                ))
            }
        </div>
    )
}
