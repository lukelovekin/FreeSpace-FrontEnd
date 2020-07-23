import React, { useState, useContext } from 'react'
import { StateContext } from '../store'
import api from '../api'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Portfolio from './Portifolio'
import { Link } from 'react-router-dom'

export default function ArtistProfile(props) {
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
	
    return (
		<div>
			<div>
				<h1>Portfolio Preview</h1>
				<h2>Your portfolio is ready.</h2>
			</div>
			<div className="row">
				<div className="input-group">
				    <input type="text" value="234wersd" disabled="disabled" />
					<CopyToClipboard text={"234345sdf"}>
					  <button>Copy Link</button>
					</CopyToClipboard>
				</div>
				<div className="input-group">
					<Link to="/portfolio/1"><button type="button">View</button></Link>
					<Link to="/portfolio/edit/1"><button type="button">Edit</button></Link>
					<Link to="/config/"><button type="button">Settings</button></Link>
				</div>
			</div>
			<div className="row">
				<div className="social">
				</div>
			</div>
			<div className="row portfolio-container">
				<Portfolio />
			</div>
		</div>
    )
}






