import React, {useRef, useState} from 'react'
import './Register.css'
import {Form , Alert} from 'react-bootstrap'
import {useAuth} from '../../contexts/AuthContext'
import {useHistory} from 'react-router-dom'



const Register = () => {
    const emailRef = useRef()
    const nameRef = useRef()
    const surnameRef = useRef()
    const idRef = useRef()
    const dateRef = useRef()
    const occupationRef = useRef()
    const addressRef = useRef()
    const passwordRef = useRef()
    const {signup} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e){
        const email = emailRef.current.value
        const name = nameRef.current.value
        const surname = surnameRef.current.value
        const id = idRef.current.value
        const date = dateRef.current.value
        const occupation = occupationRef.current.value
        const address = addressRef.current.value
        const password = passwordRef.current.value
        e.preventDefault();
        try{
            setError('')
            setLoading(true)
            await signup(email,password,name,surname,id,date,occupation,address)
            history.push("/login")
        }
        catch{
            console.log(e)
            setError('Failed to create an account')
        }
        setLoading(false)
    }
    function back(){
        history.push("/")
    }
    return (
            <div className='register'>
            <Form onSubmit={handleSubmit}>
                <h1>Create Account</h1>
                {error && <Alert variant = "danger" >{error}</Alert>}
                <Form.Label><b>Name</b></Form.Label>
                <input type='text' placeholder='Name' ref = {nameRef} required/>
                <Form.Label><b>Surname</b></Form.Label>
                <input type='text' placeholder='Surname' ref = {surnameRef} required/>
                <Form.Label><b>Citizen Id</b></Form.Label>
                <input type='text' placeholder='Citizen Id' ref = {idRef} required/>
                <Form.Label><b>Birth Date</b></Form.Label>
                <input type='date' ref = {dateRef} required/>
                <Form.Label><b>Occupation</b></Form.Label>
                <input type='text' placeholder='Occupation' ref = {occupationRef} required/>
                <Form.Label><b>Address</b></Form.Label>
                <input type='text' placeholder='Address' ref = {addressRef} required/>
                <Form.Label><b>Email</b></Form.Label>
                <input type='text' placeholder='example.user@ku.th' ref = {emailRef} required/>
                <Form.Label><b>Password</b></Form.Label>
                <input type='password' placeholder='Password' ref = {passwordRef} required/>
                <hr/>
                <button type = "submit" disabled = {loading} >Register</button>
                <button className="back-btn" onClick = {back}>Back</button>
            </Form>
            </div>
    )
};

export default Register
