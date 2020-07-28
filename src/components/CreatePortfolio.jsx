import React, { useState, useContext } from 'react'
import { StateContext } from '../store'
import api from '../api'

export default function CreatePortfolio(props) {
    const [name, setName] = useState("")
    const [bio, setBio] = useState("")
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
    const [imageUrl, setImageUrl] = useState([])
    const [imageAlt, setImageAlt] = useState(null)
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

    let url
    if (process.env.REACT_APP_ENV === 'development') {
        url = "http://localhost:3000"
    } else {
        url = "https://free-space.gq"
    }

    const onSubmit = (e) => {
        const portfolio = { name, bio, links, imageUrl }

        e.preventDefault()
        dispatch({
            type: "setPortfolios",
            data: [...state.portfolios, portfolio]
        })
        api.post("portfolios", portfolio, {withCredentials: true})
            //.then(res => props.history.push('/portfolios'))
            .then(res => window.location.href = `${url}`)
            .catch(err => console.log(err))
    }

    const handleImageUpload = () => {
        const { files } = document.querySelector('input[type="file"]')
        const formData = new FormData()
        formData.append('file', files[0])
        // replace this with your upload preset name
        formData.append('upload_preset', 'zuqwnlys')

        const options = {
            method: 'POST',
            body: formData,
        }

        return fetch('https://api.Cloudinary.com/v1_1/dchrr8nak/image/upload', options)
            .then(res => res.json())
            .then(res => {
                setImageUrl([...imageUrl, res.secure_url])
                setImageAlt(`An image of ${res.original_filename}`)
            })
            .catch(err => console.log(err))
    }


    return (
        <div>
            <section className="right-side">
                <p>The resulting image will be displayed here</p>
                {imageUrl && (

                    imageUrl.map((pic) => (
                         <img src={pic} alt={imageAlt} className="displayed-image" style={{ width: "300px" }} />
                    ))
                )}
            </section>

            <form onSubmit={onSubmit} class="form-container">

                <h3>Upload an image (first image will be display pic)</h3>
                <input type="file" />
                <button type="button" className="btn" onClick={handleImageUpload}>Submit</button>
                {/* <button type="button" className="btn widget-btn">Upload Via Widget</button> */}

                <br/>
                <div class="input-group">
                    <label htmlFor="name">Name</label>
                    <input onChange={onChange} value={name} type="text" name="name" id="name" />
                </div>
                <div class="input-group">
                    <label htmlFor="facebook">Facebook</label>
                    <input onChange={onChange} value={links.facebook} type="text" name="facebook" id="facebook" />
                </div>
                <div class="input-group">
                    <label htmlFor="instagram">Instagram</label>
                    <input onChange={onChange} value={links.instagram} type="text" name="instagram" id="instagram" />
                </div>
                <div class="input-group">
                    <label htmlFor="linkedin">Linkedin</label>
                    <input onChange={onChange} value={links.linkedin} type="text" name="linkedin" id="linkedin" />
                </div>
                <div class="input-group">
                    <label htmlFor="email">Email</label>
                    <input onChange={onChange} value={links.email} type="text" name="email" id="email" />
                </div>
                <div class="input-group">
                    <label htmlFor="twitter">Twitter</label>
                    <input onChange={onChange} value={links.twitter} type="text" name="twitter" id="twitter" />
                </div>
                <div class="input-group">
                    <label htmlFor="youtube">Youtube</label>
                    <input onChange={onChange} value={links.youtube} type="text" name="youtube" id="youtube" />
                </div>
                <div class="input-group">
                    <label htmlFor="other">Other</label>
                    <input onChange={onChange} value={links.other} type="text" name="other" id="other" />
                </div>
                <div class="input-group">
                    <label htmlFor="bio">Bio</label>
                    <textarea onChange={onChange} value={bio} type="text" name="bio" id="bio" />
                </div>
                <div class="input-group">    
                    <button type="submit" class="btn">Create</button>
                </div>
            </form>

        </div>
    )
}






