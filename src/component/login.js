import React from 'react'
import './login.css'

const Login = () => {
    return (
        <div className='login'>
            <h1>SIGN IN</h1>
            <label><b>email</b></label>
            <input type='text' placeholder='example.user@ku.th' required/>
            <label><b>password </b></label>
            <input type='password' placeholder='example.password'required/>
            <br/>
            <button>continue</button>
        </div>
    )
};

export default Login