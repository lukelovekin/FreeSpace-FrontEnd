import React, { useState, useContext } from 'react'
import { StateContext } from '../store'
import api from '../api'

export default function CreatePortfolio(props) {
    const [id, setUid] = useState("")
    const [bio, setBio] = useState("")
    const {state, dispatch} = useContext(StateContext)

    const onChange = (e) => {
        switch (e.target.name) {
            case "id":
                // can validate here
                setUid(e.target.value)
                break
            case "bio":
                // and here
                setBio(e.target.value)
                break
            default: 
                console.log("error")
        }
    }

    const onSubmit = (e) => {
        const portfolio = { id, bio }

        e.preventDefault()
        dispatch({
            type: "setPortfolios",
            data: [...state.portfolios, portfolio]
        })
        api.post("portfolios", portfolio)
            .then(res => props.history.push('/portfolios'))
            .catch(err => console.log(err))
    }


    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor="id">id</label>
                <input onChange={onChange} value={id} type="text" name="id" id="id" />
                <label htmlFor="bio">bio</label>
                <textarea onChange={onChange} value={bio} type="text" name="bio" id="bio" />
                <button>Create</button>
            </form>
        </div>
    )
}






