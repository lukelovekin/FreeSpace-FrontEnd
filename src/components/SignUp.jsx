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
                                    <h4>Register</h4>
                                    <form onSubmit={handleSignUp}>
                                        <label>Username</label>
                                        <input />
                                        <label>Password</label>
                                        <input />
                                        <button>Sign up</button>
                                    </form>
                                    
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