import React, { useState, useContext } from 'react'
import { StateContext } from './store'
import Axios from 'axios'
import api from './api'

// export default function CreatePortfolio(props) {
//     const [name, setName] = useState("")
//     const [bio, setBio] = useState("")
//     etc
//     etc

//     const onChange = (e) => {
//         switch (e.target.name) {
//             case "name":
//                 setName(e.target.value)
//                 break
//             case "bio":
//                 setBio(e.target.value)
//                 break
                
//         }
//     }

//     const onSubmit = (e) => {
//         const portfolio = {}

//         // e.preventDefault()
//         dispatch({
//             type: "setPortfolios",
//             data: [...state.bookmarks, portfolio]
//         })
//         api.post("portfolios", portfolio)
//             .then(res => prop.history.push('/portfolios'))
//             .catch(err => console.log(err))
//     }


//     return (
//         <div>
//             <form onSubmit={Submit}>
//                 <label htmlFor=""></label>
//                 <input onChange={onChange} value={} type="text" />
//             </form>
//         </div>
//     )
// }






