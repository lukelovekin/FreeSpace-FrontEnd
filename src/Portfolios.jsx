import React, { useContext } from 'react'
import { StateContext } from './store'
import { Link } from 'react-router-dom'

export default function Portfolios() {
const {state /*, dispatch*/} = useContext(StateContext)

    return (
        <div>
            <h1>Portfolios</h1>
            <Link to='/portfolios/new'>New Portfolio</Link>
            {
                state.portfolios.map((item, index) => (
                    <article key={index}>
                        {console.log(item)}
                        <p>{item.id}</p>
                    </article>
                ))
            }
        </div>
    )
}
