import React from 'react'
import './register.css'


const Register = () => {
    return (
        <div className='register'>
            <h1>Create Account</h1>
            <label><b>email</b></label>
            <input type='text' placeholder='example.user@ku.th'required/>
            <label><b>username</b></label>
            <input type='text' placeholder='example.username'required/>
            <label><b>password </b></label>
            <input type='password' placeholder='example.password'required/>
            <br/>
            <button>continue</button>
        </div>
    )
};

export default Register