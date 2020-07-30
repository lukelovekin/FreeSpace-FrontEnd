import React, { useState, useContext, useEffect } from 'react'
import { StateContext, /*UserContext,*/  } from '../store'
import api from '../api/api'


// this component could have been split into at least 2 components
export default function CreatePortfolio(props) {
    const {state, dispatch} = useContext(StateContext)
    const [imageAlt, setImageAlt] = useState(null)
    const [newPort, setNewPort ] = useState(true)
    
    let [portfolio, setPortfolio] = useState({
        name: "",
        bio: "",
        links: [{
            facebook: "",
            instagram: "",
            linkedin: "",
            email: "",
            twitter: "",
            youtube: "",
            other: ""
        }],
        imageUrl: []
        
    })

    const oldState = {...portfolio}
    
    let url
    if (process.env.REACT_APP_ENV === 'development') {
        url = "http://localhost:3000"
    } else {
        url = "https://free-space.gq"
    }

    //gets one portfolio if it matches portfolio id
    useEffect(() => {
        api.get(`portfolios/${props.match.params.port_id}`)
        .then(res => {setPortfolio(res.data)
            setNewPort(false)})
    }, [props.match.params.port_id])
    
    // a very ugle onchange method that i know i could have done a lot DRY if it didnt keep bugging out last minute
    const onChange = (e) => {  
        switch (e.target.name) {
            case "name":
                // can validate here
                setPortfolio({...oldState, name: e.target.value})
                break
            case "bio":
                // and here
                setPortfolio({ ...oldState, bio: e.target.value })

                // Very unDRY as REACT cant find oldState.links straight away and i run out of time to DRY up
                break
            case "facebook":                                             
                setPortfolio(oldState.links ? { ...oldState, links: [{ ...oldState.links[0], facebook: e.target.value }] } : { ...oldState, links: [{ ...oldState.links, facebook: e.target.value }] })
                break
            case "instagram":
                setPortfolio(oldState.links ? { ...oldState, links: [{ ...oldState.links[0], instagram: e.target.value }] } : { ...oldState, links: [{ ...oldState.links, instagram: e.target.value }] })
                break
            case "linkedin":
                setPortfolio(oldState.links ? { ...oldState, links: [{ ...oldState.links[0], linkedin: e.target.value }] } : { ...oldState, links: [{ ...oldState.links, linkedin: e.target.value }] })
                break
            case "email":
                setPortfolio(oldState.links ? { ...oldState, links: [{ ...oldState.links[0], email: e.target.value }] } : { ...oldState, links: [{ ...oldState.links, email: e.target.value }] })
                break
            case "twitter":
                setPortfolio(oldState.links ? { ...oldState, links: [{ ...oldState.links[0], twitter: e.target.value }] } : { ...oldState, links: [{ ...oldState.links, twitter: e.target.value }] })
                break
            case "youtube":
                setPortfolio(oldState.links ? { ...oldState, links: [{ ...oldState.links[0], youtube: e.target.value }] } : { ...oldState, links: [{ ...oldState.links, youtube: e.target.value }] })
                break
            case "other":
                setPortfolio(oldState.links ? { ...oldState, links: [{ ...oldState.links[0], other: e.target.value }] } : { ...oldState, links: [{ ...oldState.links, other: e.target.value }] })
                break
            default: 
                console.log("error")             
        }
    }

    //send new portfolio data to backend
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch({
            type: "setPortfolios",
            data: [...state.portfolios, portfolio]
        })
        api.post("portfolios", portfolio, { withCredentials:true })
            .then(res => window.location.href = `${url}/artist_portal`)
                .catch(err => console.log(err))
    }

    //patches portfolio data to backend
    const onEdit = (e) => {
        e.preventDefault()
        api.patch(`portfolios/${props.match.params.port_id}`, portfolio, { withCredentials: true })
            .then(res => window.location.href = `${url}/artist_portal`)
            .catch(err => console.log(err))
    }

    //uploads images to cloudinary
    const handleImageUpload = () => {
        const { files } = document.querySelector('input[type="file"]')
        const formData = new FormData()
        formData.append('file', files[0])
        // replace this with your upload preset name
        formData.append('upload_preset', 'zuqwnlys')
        const oldState = { ...portfolio }

        const options = {
            method: 'POST',
            body: formData,
        }

        return fetch('https://api.Cloudinary.com/v1_1/dchrr8nak/image/upload', options)
            .then(res => res.json())
            .then(res => {
                setPortfolio({...oldState, imageUrl: [res.secure_url]})
                setImageAlt(`An image of ${res.original_filename}`)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            
            <section className="right-side">
                {portfolio.imageUrl && (
                    portfolio.imageUrl.map((pic, i) => (
                         <img src={pic} alt={imageAlt} className="displayed-image" style={{ width: "300px" }} key={i} />
                    ))
                )}
            </section>

            <form onSubmit={onSubmit} className="form-container">
                <h6>Upload images</h6>
                <input type="file" />
                <button type="button" className="btn" onClick={handleImageUpload}>Submit</button>

                <br/>
                <div className="input-group">
                    <label htmlFor="name">Name</label>
                    <input onChange={onChange} value={portfolio.name} type="text" name="name" id="name" />
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
                    <input onChange={onChange} value={portfolio.links ? portfolio.links[0].facebook : null} type="text" name="facebook" id="facebook"  />
                </div>
                <div className="input-group">
                    <label htmlFor="instagram">Instagram</label>
                    <input onChange={onChange} value={portfolio.links ? portfolio.links[0].instagram : null} type="text" name="instagram" id="instagram"  />
                </div>
                <div className="input-group">
                    <label htmlFor="linkedin">Linkedin</label>
                    <input onChange={onChange} value={portfolio.links ? portfolio.links[0].linkedin : null} type="text" name="linkedin" id="linkedin" />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input onChange={onChange} value={portfolio.links ? portfolio.links[0].email : null} type="text" name="email" id="email" />
                </div>
                <div className="input-group">
                    <label htmlFor="twitter">Twitter</label>
                    <input onChange={onChange} value={portfolio.links ? portfolio.links[0].twitter : null} type="text" name="twitter" id="twitter"  />
                </div>
                <div className="input-group">
                    <label htmlFor="youtube">Youtube</label>
                    <input onChange={onChange} value={portfolio.links ? portfolio.links[0].youtube : null} type="text" name="youtube" id="youtube" />
                </div>
                <div className="input-group">
                    <label htmlFor="other">Other</label>
                    <input onChange={onChange} value={portfolio.links ? portfolio.links[0].other : null} type="text" name="other" id="other"  />
                </div>
                <div className="input-group">
                    <label htmlFor="bio">Bio</label>
                            <textarea onChange={onChange} value={portfolio.bio} type="text" name="bio" id="bio" />
                </div>

                {oldState.links ? (
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






