import React from 'react'
import GoogleLogin from 'react-google-login'


const responseGoogle = (response) => {
    console.log(response)
  }

export default function SignUp() {
    return (
        <div>
            <h1>Sign Up Page</h1>
            <h2>Login with google</h2>
            <GoogleLogin
                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    )
}