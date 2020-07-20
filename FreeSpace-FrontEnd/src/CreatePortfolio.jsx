import React, { useState, useContext } from 'react'
import { StateContext } from './store'
import api from './api'

export default function CreatePortfolio(props) {
    const [uid, setUid] = useState("")
    const [bio, setBio] = useState("")
    const {state, dispatch} = useContext(StateContext)

    const onChange = (e) => {
        switch (e.target.name) {
            case "uid":
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
        const portfolio = { uid, bio }

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
                <label htmlFor="uid">uid</label>
                <input onChange={onChange} value={uid} type="text" name="uid" id="uid" />
                <label htmlFor="bio">bio</label>
                <textarea onChange={onChange} value={bio} type="text" name="bio" id="bio" />
                <button>Create</button>
            </form>
        </div>
    )
}






