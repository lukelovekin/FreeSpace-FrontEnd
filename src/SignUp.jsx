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
                clientId="6695301446-u56bqeioca9b5tl14lki1cgigmsmttk5.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    )
}