import React, { useState, useContext, useEffect } from 'react'
import { StateContext, /*UserContext,*/  } from '../store'
import api from '../api'

export default function CreatePortfolio(props) {
    const [name, setName] = useState("")
    const [bio, setBio] = useState("")
    const [links, setLinks] = useState({
        facebook: undefined,
        instagram: undefined,
        linkedin: undefined,
        email: undefined,
        twitter: undefined,
        youtube: undefined,
        other: undefined
    })
    const {state, dispatch} = useContext(StateContext)
    const [imageUrl, setImageUrl] = useState([])
    const [imageAlt, setImageAlt] = useState(null)
    // const {user} = useContext(UserContext)
    const oldState = links

    let [portfolio, setPortfolio] = useState({})

    useEffect(() => {
        api.get(`portfolios/${props.match.params.port_id}`)
        .then(res => setPortfolio(res.data))
    }, [props.match.params.port_id])

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
        api.post("portfolios", portfolio, { withCredentials:true })
            .then(res => window.location.href = `${url}/artist_portal`)
                .catch(err => console.log(err))
    }

    const onEdit = (e) => {
        const portfolio = { name, bio, links, imageUrl }

        e.preventDefault()
        dispatch({
            type: "setPortfolios",
            data: [...state.portfolios, portfolio]
        })
        api.patch(`portfolios/${props.match.params.port_id}`, portfolio, { withCredentials: true })
            .then(res => window.location.href = `${url}/artist_portal`)
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
                {portfolio.imageUrl ? (
                    portfolio.imageUrl.map((item, i) => (
                        <img src={item} alt="" key={i} style={{ width: "300px" }}/>
                    ))
                ) : (
                        null
                    )}
                {imageUrl && (
                    imageUrl.map((pic, i) => (
                         <img src={pic} alt={imageAlt} className="displayed-image" style={{ width: "300px" }} key={i} />
                    ))
                )}
            </section>

            <form onSubmit={onSubmit} className="form-container">
                <h3>Upload an image (first image will be display pic)</h3>
                <input type="file" />
                <button type="button" className="btn" onClick={handleImageUpload}>Submit</button>

                <br/>
                <div className="input-group">
                    <label htmlFor="name">Name</label>
                    <input onChange={onChange} value={name} type="text" name="name" id="name" placeholder={portfolio.name} />
                </div>
                {/* Extremely DRYer method just doesnt quite work  */}
                {/* {
                    Object.entries(portfolio.links ? portfolio.links[0] : links).map((link, i) => {
                            return <div className="input-group" key={i}>
                                        <label htmlFor={link}>{link}</label>
                                        <input onChange={onChange} value={links.link} type="text" name={link} id={link} placeholder={portfolio.link} />
                                    </div>
                    })
                } */}
                <div className="input-group">
                    <label htmlFor="facebook">Facebook</label>
                    <input onChange={onChange} value={links.facebook} type="text" name="facebook" id="facebook" placeholder={portfolio.links ? portfolio.links[0].facebook : null} />
                </div>
                <div className="input-group">
                    <label htmlFor="instagram">Instagram</label>
                            <input onChange={onChange} value={links.instagram} type="text" name="instagram" id="instagram" placeholder={portfolio.links ? portfolio.links[0].instagram : null} />
                </div>
                <div className="input-group">
                    <label htmlFor="linkedin">Linkedin</label>
                    <input onChange={onChange} value={links.linkedin} type="text" name="linkedin" id="linkedin" placeholder={portfolio.links ? portfolio.links[0].linkedin : null} />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                            <input onChange={onChange} value={links.email} type="text" name="email" id="email" placeholder={portfolio.links ? portfolio.links[0].email : null}/>
                </div>
                <div className="input-group">
                    <label htmlFor="twitter">Twitter</label>
                            <input onChange={onChange} value={links.twitter} type="text" name="twitter" id="twitter" placeholder={portfolio.links ? portfolio.links[0].twitter : null} />
                </div>
                <div className="input-group">
                    <label htmlFor="youtube">Youtube</label>
                            <input onChange={onChange} value={links.youtube} type="text" name="youtube" id="youtube" placeholder={portfolio.links ? portfolio.links[0].youtube : null} />
                </div>
                <div className="input-group">
                    <label htmlFor="other">Other</label>
                            <input onChange={onChange} value={links.other} type="text" name="other" id="other" placeholder={portfolio.links ? portfolio.links[0].other : null} />
                </div>
                <div className="input-group">
                    <label htmlFor="bio">Bio</label>
                            <textarea onChange={onChange} value={bio} type="text" name="bio" id="bio" placeholder={portfolio.bio} />
                </div>

                {portfolio.name ? (
                    <div className="input-group">    
                    <   button  className="btn" onClick={onEdit}>Submit</button>
                    </div>

                ) : (
                    <div className="input-group">
                        <button className="btn" onClick={onSubmit}>Create</button>
                    </div>
                )}

            </form>
        </div>
    )
}






