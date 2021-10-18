import React from 'react'
import './Register.css'


const Register = () => {
    return (
        <div className='register'>
            <h1>Create Account</h1>
            <label><b>Email</b></label>
            <input type='text' placeholder='example.user@ku.th'required/>
            <label><b>Username</b></label>
            <input type='text' placeholder='example.username'required/>
            <label><b>Password </b></label>
            <input type='password' placeholder='example.password'required/>
            <br/>
            <button>Register</button>
        </div>
    )
};

export default Register