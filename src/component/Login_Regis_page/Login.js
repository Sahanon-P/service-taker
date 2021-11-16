import React from 'react'
import './Login.css'

const Login = () => {
    return (
        <div className='container'>
            <div className='login'>
                <h2>Create Account</h2>
                <ul>Service-Taker application, get the vaccine on time.
                    <br/>
                    Now more secure, smarter and easier to use, 
                    helping you save time with service taker application.
                </ul>
                <br/>
                <button>Create account</button>
            </div>

            <div className='login'>
                <h2>SIGN IN</h2>
                <label><b>Email</b></label>
                <input type="text" placeholder="Enter your email address" required/>
                <label><b>Password </b></label>
                <input type='password' placeholder="Enter your password"required/>
                <br/>
                <button>Sign in</button>
            </div>
        </div>
    )
};

export default Login
