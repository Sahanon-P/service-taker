// import { Button } from 'react-bootstrap';
import React, {useState, useEffect}from 'react'
import NavBar from '../NavBar/NavBar';
import './RegisterPage.css'
import { db } from '../../firebase';
import {useAuth} from '../../contexts/AuthContext'
import axios from 'axios'

const RegisterPage = () => {
    const {currentUser} = useAuth()
    const [id,setId] = useState()
    const [token, setToken] = useState()
    const [data, setData] = useState({
        citizen_id : "",
        name : "",
        surname: "",
        occupation: "",
        address: "",
        reservations: [],
    })
    async function setState(){
        const query = await db.collection("users").where("uid", "==", currentUser.uid).get();
        const id = query.docs[0].data().citizen_id
        const pass = query.docs[0].data().password
        var req = require('request');
        req.post({
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            url: 'https://flamxby.herokuapp.com/login',
            body: `username=${id}&password=${pass}`
        }, function(error, response, body){
            setToken(body.access_token)
        })
        console.log(token)
        setId(id)
    }
    useEffect (() => {
        setState()
        axios.get(`https://flamxby.herokuapp.com/user/${id}`).then(resp => {
        setData(resp.data);
        });
    })
    // string object inplace of user object as a example. Users = user data as an array.
    return (
        <div className="register-page-container">
            <NavBar/>
            <h2 className="header-text">Vaccine Status</h2>
            <ul>
            <p>Citizen: {data.citizen_id}</p>
            <p>Name: {data.name} {data.surname}</p>
            <p>Occupation: {data.occupation} </p>
            <p>Address: {data.address}</p>
            {data.reservations.map(reservation => (
                <div>
                    <ul> Reservation {reservation.reservation_id} </ul>
                    <ul>{reservation.register_timestamp}</ul>
                    <br/>
                </div>
            ))}
            </ul>
            <button>Register</button>
        </div>
      );
};
export default RegisterPage