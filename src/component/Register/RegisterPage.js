import React from 'react'
// import { Button } from 'react-bootstrap';
import './RegisterPage.css'

const RegisterPage = () => {
    // string object inplace of user object as a example. Users = user data as an array.
    const users = ["Vaccine Name #0001", "Vaccine Name #0002", "Vaccine Name #0003", "Vaccine Name #0004", "Vaccine Name #0005"]; 
    return (
        <div>
            <h1>Vaccine Status</h1>
            <ul>
            {users.map(user => (
                <div>
                    <ul>{user}</ul>
                    <ul>Sample: Name Surname</ul>
                    <ul>Adress: .....</ul>
                    <ul>Timestamp: ......</ul>
                    <br/>
                </div>
            ))}
            </ul>
            <button>Register</button>
        </div>
      );
};
export default RegisterPage