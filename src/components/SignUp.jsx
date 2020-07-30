import React, {useContext} from 'react'
import {  UserContext, ErrorContext } from '../store'

//Not in use at the moment
export default function SignUp() {

    const { user, handleLogOut, handleSignUp, handleLogIn, handleGoogleAuth } = useContext(UserContext)
    const { error } = useContext(ErrorContext)


    return (
                <div>
                    <div>
                        {user ? (
                            <>
                                <h2>Logged in as {user.displayName || user.username}</h2>
                                <button onClick={handleLogOut}>Log Out</button>
                            </>
                        ) : (
                                <>
                                    <h2>Register</h2>
                                    <form onSubmit={handleSignUp}>
                                        <label>Username</label>
                                        <input />
                                        <label>Password</label>
                                        <input />
                                        <button>Sign up</button>
                                    </form>
                                    <h2>Login</h2>
                                    <form onSubmit={handleLogIn}>
                                        <label>Username</label>
                                        <input />
                                        <label>Password</label>
                                        <input />
                                        <button>Sign In</button>
                                    </form>
                                    <button onClick={handleGoogleAuth}>Google Auth</button>
                                    {error ? (
                                        <div>
                                            <h4>{error.name}</h4>
                                            <p>{error.message}</p>
                                        </div>
                                    ) : (null)}
                                </>
                            )}
                    </div>
                </div>
    )
}


// import GoogleLogin from 'react-google-login'

// const responseGoogle = (response) => {
//     console.log(response)
//   }


//  <h1>Sign Up Page</h1>
//             <h2>Login with google</h2>
//             <GoogleLogin
//                 clientId="6695301446-u56bqeioca9b5tl14lki1cgigmsmttk5.apps.googleusercontent.com"
//                 buttonText="Login"
//                 onSuccess={responseGoogle}
//                 onFailure={responseGoogle}
//                 cookiePolicy={'single_host_origin'}
//             /> 