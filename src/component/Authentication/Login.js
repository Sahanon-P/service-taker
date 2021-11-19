import './Login.css'
import React, {useRef, useState} from 'react'
import './Register.css'
import {Form , Alert} from 'react-bootstrap'
import {useAuth} from '../../contexts/AuthContext'
import {useHistory} from 'react-router-dom'
const Login = () => {
    const emailRef = useRef()
    const idRef = useRef()
    const {login} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    async function handleSubmit(e){
        e.preventDefault();
        try{
            setError('')
            setLoading(true)
            await login(emailRef.current.value, idRef.current.value)
            history.push("/")
        }
        catch{
            setError('Failed to Log In')
        }
        setLoading(false)
    }
    function createAccount(){
        history.push("/signup")
    }
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
                <button onClick = {createAccount}>Create account</button>
            </div>
                <div className='login'>
                <Form onSubmit = {handleSubmit}>
                    <h1>SIGN IN</h1>
                    {error && <Alert variant = "danger" >{error}</Alert>}
                    <Form.Label><b>Citizen Id</b></Form.Label>
                    <input type='text' placeholder='example.user@ku.th' ref = {emailRef} required/>
                    <Form.Label><b>Password</b></Form.Label>
                    <input type='password' placeholder='password' ref = {idRef} required/>
                    <br/>
                    <button type = "submit" disabled = {loading} >Log In</button>
                </Form>
                </div>
        </div>
    )
};

export default Login
