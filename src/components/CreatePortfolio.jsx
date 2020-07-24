import React, { useState, useContext } from 'react'
import { StateContext } from '../store'
import api from '../api'
import ImageUpload from './ImageUpload'

export default function CreatePortfolio(props) {
    const [name, setName] = useState("")
    const [bio, setBio] = useState("")
    // const [images, setImages] = useState([])
    const [links, setLinks] = useState({
        facebook: "",
        instagram: "",
        linkedin: "",
        email: "",
        twitter: "",
        youtube: "",
        other: ""
    })
    const {state, dispatch} = useContext(StateContext)

    // const oldState = links

    const oldState = links

    const onChange = (e) => {
        switch (e.target.name) {
            case "name":
                // can validate here
                setName(e.target.value)
                break
            case "bio":
                // and here
                setBio(e.target.value)
                break
            // case "images":
            //     setImages("")
            //     break
            case "facebook":
                setLinks({ ...oldState, facebook: e.target.value})
                break
            case "instagram":
                setLinks({ ...oldState, instagram: e.target.value })
                break
            case "linkedin":
                setLinks({ ...oldState, linkedin: e.target.value })
                break
            case "email":
                setLinks({ ...oldState, email: e.target.value })
                break
            case "twitter":
                setLinks({ ...oldState, twitter: e.target.value })
                break
            case "youtube":
                setLinks({ ...oldState, youtube: e.target.value })
                break
            case "other":
                setLinks({ ...oldState, other: e.target.value })
                break
            default: 
                console.log("error")             
        }
    }

    const onSubmit = (e) => {
        const portfolio = { name, bio, links }

        e.preventDefault()
        dispatch({
            type: "setPortfolios",
            data: [...state.portfolios, portfolio]
        })
        api.post("portfolios", portfolio, {withCredentials: true})
            // .then(res => props.history.push('/portfolios'))
            .then(res => props.history.push('/portfolios'))
            .catch(err => console.log(err.response.data))
    }



    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor="name">name</label>
                <input onChange={onChange} value={name} type="text" name="name" id="name" />

                <label htmlFor="facebook">Facebook</label>
                <input onChange={onChange} value={links.facebook} type="text" name="facebook" id="facebook" />

                <label htmlFor="instagram">Instagram</label>
                <input onChange={onChange} value={links.instagram} type="text" name="instagram" id="instagram" />

                <label htmlFor="linkedin">Linkedin</label>
                <input onChange={onChange} value={links.linkedin} type="text" name="linkedin" id="linkedin" />

                <label htmlFor="email">email</label>
                <input onChange={onChange} value={links.email} type="text" name="email" id="email" />

                <label htmlFor="twitter">twitter</label>
                <input onChange={onChange} value={links.twitter} type="text" name="twitter" id="twitter" />

                <label htmlFor="youtube">youtube</label>
                <input onChange={onChange} value={links.youtube} type="text" name="youtube" id="youtube" />

                <label htmlFor="other">other</label>
                <input onChange={onChange} value={links.other} type="text" name="other" id="other" />
{/* 
                <label htmlFor="images">images</label>
                <input onChange={onChange} value={images} type="text" name="images" id="images" /> */}

                <label htmlFor="bio">bio</label>
                <textarea onChange={onChange} value={bio} type="text" name="bio" id="bio" />
                
                <ImageUpload />
                
                <button>Create</button>
            </form>
        </div>
    )
}






