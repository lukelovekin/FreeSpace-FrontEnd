import React, { useReducer, useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as Bts from 'react-bootstrap'
import { stateReducer, StateContext } from './store'
import api from './api'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/style.css'

var data = [];

export default function Portfolios() {
    const [state, dispatch] = useReducer(stateReducer, { portfolios: [] })

    // at the moment all this is doing is console logging the database data.
    useEffect(() => {
    api.get('portfolios')
      .then(res => {
        data = res.data;
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
                    <h1>Portfolios</h1>
                </Bts.Col>
                <Bts.Col xs={12} sm={6} md={4}>
                    <Bts.Button variant="primary" size="lg" href='/portfolios/new'>New Portfolio</Bts.Button>
                </Bts.Col>
            </Bts.Row>
            <Bts.Row>
                {
                    state.portfolios.map((item, index) => (
                        <Bts.Col xs={6} md={3}>
                            <Link to={"/profile/"+item.id}>
                                <Bts.Image src="https://destinonegocio.com/br/wp-content/uploads/2015/05/windows-XP.jpg" rounded />
                            </Link>
                        </Bts.Col>
                    ))
                }
            </Bts.Row>
        </Bts.Container>
    )
}
