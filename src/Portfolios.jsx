import React, { useContext } from 'react'
import { StateContext } from './store'

export default function Portfolios() {
    const {state/*, dispatch*/} = useContext(StateContext)

    return (
        <div>
            <h1>Portfolios</h1>
            {
                state.portfolios.map((item, index) => (
                    <article key={index}>
                        <p>{item.name}</p>
                    </article>
                ))
            }
        </div>
    )
}
