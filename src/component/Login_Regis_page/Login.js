import React from 'react'
import './Login.css'

const Login = () => {
    return (
        <div className='container'>
            <div className='login'>
                <h1>Create Account</h1>
                <ul>Service-Taker application, get the vaccine on time.
                    <br/>
                    Now more secure, smarter and easier to use, 
                    helping you save time with service taker application.
                </ul>
                <br/>
                <button>Create account</button>
            </div>

            <div className='login'>
                <h1>SIGN IN</h1>
                <label><b>Email</b></label>
                <input type='text' placeholder='example.user@ku.th' required/>
                <label><b>Password </b></label>
                <input type='password' placeholder='example.password'required/>
                <br/>
                <button>Sign in</button>
            </div>
        </div>
    )
};

export default Login