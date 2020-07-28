import React, { useContext } from 'react'
import { StateContext } from '../store'
import { Link } from 'react-router-dom'
import { UserContext } from '../store'


export default function Portfolios() {
const {state /*, dispatch*/} = useContext(StateContext)
const { user } = useContext(UserContext)

    // const onChange = (e) => {
    //     switch (e.target.name) {
    //         case "artist_name":
    //             break
    //         case "portfolio_type":
    //             break;
    //         case "order":
    //             console.log("Aqui trocou oredem");
    //             break;
    //         default: 
    //             console.log("error")             
    //     }
    // }
    
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

            <ul>
                
            {
                state.portfolios.map((item, index) => (
                    <li key={index}>
                        {console.log(item)}

                        <Link to={`/portfolios/${index}`}><img src={item.imageUrl[0]} alt="artist" style={{ width: "300px" }}/><br/>{item.name}</Link>             
                        <Link to={`/portfolios/${item._id}`}><img src={item.imageUrl[0]} alt="artist" style={{ width: "300px" }}/><br/>{item.name}</Link>

                        <hr style={{width: "50%"}}/>               

                    </li>
                ))
            }
            </ul>
        </div>
    )
}
