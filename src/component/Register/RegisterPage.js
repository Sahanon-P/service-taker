import React, {useState, useEffect}from 'react'
import NavBar from '../NavBar/NavBar';
import './RegisterPage.css'
import { db } from '../../firebase';
import {useAuth} from '../../contexts/AuthContext'
import axios from 'axios'

const request = axios.create()

const RegisterPage = () => {
    const {currentUser} = useAuth()
    const [id,setId] = useState()
    const [password, setPassword] = useState()
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
        setId(id)
        setPassword(pass)
    }
    useEffect (() => {
        setState()
        axios.get(`https://flamxby.herokuapp.com/user/${id}`).then(resp => {
        setData(resp.data);
        });
    })
    // string object inplace of user object as a example. Users = user data as an array.
    const users = ["Vaccine Name #0001", "Vaccine Name #0002", "Vaccine Name #0003", "Vaccine Name #0004", "Vaccine Name #0005"]; 
    return (
        <div>
            <NavBar/>
            <h1>Vaccine Status</h1>
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