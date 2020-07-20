import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <h1>Welcome to Freespace</h1>
            <Link to="/sign_up"><button><h2>Sign up to build portfolio</h2></button></Link>
            <br />
            <Link to="/login"><button>Already have an account?</button></Link>
        </div>
    )
}
