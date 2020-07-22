import React, { useReducer, useEffect } from 'react'
import * as Bts from 'react-bootstrap'
import { stateReducer, StateContext } from './store'
import api from './api'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/style.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

var link = "";
var data = [];

export default function ArtistProfile(props) {
	//console.log(props.match.params.id);
	const [state, dispatch] = useReducer(stateReducer, { portfolios: [] })

	// at the moment all this is doing is console logging the database data.
	useEffect(() => {
	api.get('/portfolios/'+props.match.params.id, { params: { id: props.match.params.id } })
	  .then(res => {
	    data = res.data;
	    console.log(res);
	    // update portfolios in the reducer with the value res.data
	    dispatch({
	      type: 'setPortfolios',
	      data: res.data
	    })
	  })
	}, []) 
  	return (
		<Bts.Container>
			<Bts.Row>
				<Bts.Col xs={12} sm={6} md={8}>
					<h1>{(data.length > 0)?data[0].id:"No Name"}</h1>
				</Bts.Col>
				<Bts.Col xs={12} sm={6} md={4}>
					<Bts.Row>
						{link.length > 0 &&
						<Bts.Col>
							<a href="{link}" target="_blank">
								<i className="fab fa-2x fa-facebook"></i>
							</a>
						</Bts.Col>
						}{link.length > 0 &&
						<Bts.Col>
							<a href="{link}" target="_blank">
								<i className="fab fa-2x fa-instagram"></i>
							</a>
						</Bts.Col>
						}{link.length > 0 &&
						<Bts.Col>
							<a href="{link}" target="_blank">
								<i className="fab fa-2x fa-twitter"></i>
							</a>
						</Bts.Col>
						}{link.length > 0 &&
						<Bts.Col>
							<a href="{link}" target="_blank">
								<i className="fab fa-2x fa-youtube"></i>
							</a>
						</Bts.Col>
						}{link.length > 0 &&
						<Bts.Col>
							<a href="{link}" target="_blank">
								<i className="fab fa-2x fa-github"></i>
							</a>
						</Bts.Col>
						}
					</Bts.Row>
				</Bts.Col>
			</Bts.Row>
			<Bts.Row>
				<Bts.Col>
					<Bts.Image src="https://destinonegocio.com/br/wp-content/uploads/2015/05/windows-XP.jpg" rounded />
				</Bts.Col>
				<Bts.Col>
					<p className="text-justify">{(data.length > 0)?data[0].bio:"No Bio"}</p>
				</Bts.Col>
			</Bts.Row>
			<Bts.Row>
				<Bts.Col xs={6} md={3}>
					<Bts.Image src="https://destinonegocio.com/br/wp-content/uploads/2015/05/windows-XP.jpg" rounded />
				</Bts.Col>
				<Bts.Col xs={6} md={3}>
					<Bts.Image src="https://destinonegocio.com/br/wp-content/uploads/2015/05/windows-XP.jpg" rounded />
				</Bts.Col>
				<Bts.Col xs={6} md={3}>
					<Bts.Image src="https://destinonegocio.com/br/wp-content/uploads/2015/05/windows-XP.jpg" rounded />
				</Bts.Col>
				<Bts.Col xs={6} md={3} >
					<Bts.Image src="https://destinonegocio.com/br/wp-content/uploads/2015/05/windows-XP.jpg" rounded />
				</Bts.Col>
			</Bts.Row>
		</Bts.Container>
	)
}