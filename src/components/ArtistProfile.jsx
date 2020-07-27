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

			<div>
				{
				indexedPortfolio.map((item, index) => (
					<div>
						<input type="text" value={`${url}/${item}`} disabled="disabled" />
						<CopyToClipboard text={`${url}/${item}`}>
							<button>Copy Link</button>
						</CopyToClipboard>

						

						<div>
							<Link to={`/portfolios/${item}`}>
								<iframe width="500" height="300" src={`/portfolios/${item}`} title="portfolio page" frameborder="0" allowfullscreen></iframe><br />{state.portfolios[item].name}</Link>
						</div>
					</div>



				))
				}
			</div>

		</div>
    )
}






