import React, { useState, useContext, useEffect } from 'react'
import { StateContext, UserContext } from '../store'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom'
import api from '../api'

export default function ArtistProfile(props) {
	const { state, dispatch} = useContext(StateContext)
	const {user} = useContext(UserContext) //false
	
	let indexedPortfolio = []
	const portfolioFromArray = state.portfolios.indexOf(element => element.user === user._id)
	
	let url
	if (process.env.REACT_APP_ENV === 'development') {
		url = "http://localhost:3000"
	} else {
		url = "https://free-space.gq"
	}

	state.portfolios.forEach((item, index) => {
		if ( item.user === user._id)
			return indexedPortfolio.push(index)
	})
	
    return (
		<div>

			<div>
				{console.log(indexedPortfolio)}
				<h1>Your Portfolio/s</h1>
			</div>

			<div className="row">
				<div>
				{
				indexedPortfolio.map((item, index) => (
					<div className="input-group">
						<input type="text" value={`${url}/${item}`} disabled="disabled" />
						<CopyToClipboard text={`${url}/${item}`}>
							<button>Copy Link</button>
						</CopyToClipboard>
						<p>
							<Link to={`/portfolios/${item}`}><img src={state.portfolios[item].imageUrl[0]} alt="main" style={{ width: "300px" }} /></Link>
						</p>
					</div>

				))
				}
				</div>

					{/* <img src={item.imageUrl[0]} alt="artist" style={{ width: "300px" }} /><br />{item.name}</Link> */}

					
                
				{/* <div>
					<Link to="/portfolio/1"><button type="button">View</button></Link>
					<Link to="/portfolio/edit/1"><button type="button">Edit</button></Link>
				</div> */}
			</div>

		</div>
    )
}






