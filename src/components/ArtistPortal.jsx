import React, { useContext } from 'react'
import { StateContext, UserContext } from '../store'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom'

export default function ArtistProfile(props) {
	const { state} = useContext(StateContext)
	const {user} = useContext(UserContext) //false
	
	let artistsPortfolio = []
	
	let url
	if (process.env.REACT_APP_ENV === 'development') {
		url = "http://localhost:3000"
	} else {
		url = "https://free-space.gq"
	}

	state.portfolios.forEach((item, index) => {
		if ( item.user === user._id)
			return artistsPortfolio.push(item)
	})

    return (
		<div>
				<h1>Your Portfolio/s</h1>

			<div>
				{
				artistsPortfolio.map((item, i) => (
					<div key={i}>
						<input type="text" value={`${url}/portfolios/${item._id}`} disabled="disabled" />
						<CopyToClipboard text={`${url}/portfolios/${item._id}`}>
							<button>Copy Link</button>
						</CopyToClipboard>

						<div>
							<Link to={`/portfolios/${item._id}`}>
								<iframe width="500" height="300" src={`/portfolios/${item._id}`} title="portfolio page" frameBorder="0" allowFullScreen></iframe><br />{item.name}</Link>
						</div>
					</div>
				))
				}
			</div>

		</div>
    )
}






