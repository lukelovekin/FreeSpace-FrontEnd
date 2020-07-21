import React from 'react'
import * as Bts from 'react-bootstrap'
import { StateContext } from './store'
import api from './api'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/style.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

var link = "123";

export default function artistProfile(props) {
	return (
		<Bts.Container>
			<Bts.Row>
				<Bts.Col xs={12} sm={6} md={8}>
					<h1>Artist Profile</h1>
				</Bts.Col>
				<Bts.Col xs={12} sm={6} md={4}>
					<Bts.Row>
						{link.length > 0 &&
						<Bts.Col>
							<a href="{link}" target="_blank">
								<i class="fab fa-2x fa-facebook"></i>
							</a>
						</Bts.Col>
						}{link.length > 0 &&
						<Bts.Col>
							<a href="{link}" target="_blank">
								<i class="fab fa-2x fa-instagram"></i>
							</a>
						</Bts.Col>
						}{link.length > 0 &&
						<Bts.Col>
							<a href="{link}" target="_blank">
								<i class="fab fa-2x fa-twitter"></i>
							</a>
						</Bts.Col>
						}{link.length > 0 &&
						<Bts.Col>
							<a href="{link}" target="_blank">
								<i class="fab fa-2x fa-github"></i>
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
					<p class="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus diam dui, non vestibulum nunc lacinia quis. Quisque efficitur, diam sit amet vehicula blandit, dolor ipsum cursus risus, convallis rhoncus massa nibh eu lacus. Cras eu augue nec orci finibus interdum nec ut mauris. Duis auctor vel felis sit amet vestibulum.</p>
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