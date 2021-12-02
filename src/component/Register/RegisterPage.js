import React, {useState, useEffect}from 'react'
import NavBar from '../NavBar/NavBar';
import './RegisterPage.css'
import { db } from '../../firebase';
import {useAuth} from '../../contexts/AuthContext'
import axios from 'axios'
import { useHistory } from 'react-router';

const RegisterPage = () => {
    const {currentUser} = useAuth()
    const [id,setId] = useState()
    const [token, setToken] = useState()
    const history = useHistory()
    const [data, setData] = useState({
        citizen_id : "",
        name : "",
        surname: "",
        occupation: "",
        address: "",
        reservations: [],
    })
    function reservation() {
        var check = window.confirm("Do you want to register for a vaccine?")
        if (check){
            var today = new Date().toISOString()
            console.log(today)
            const body = {"register_timestamp":today}
            const headers = {"Authorization": "Bearer " + token,}
            axios.post('https://flamxby.herokuapp.com/reservation', body, {
                headers: headers
            })
            history.push("/")
        }
    }
    useEffect (() => {
        axios.get(`https://flamxby.herokuapp.com/user/${id}`).then(resp => {
        setData(resp.data);
        });
    })
    useEffect (() => {
        async function fetch() {
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
                var temp = JSON.parse(body)
                setToken(temp['access_token'])
            })
            setId(id)
        }
        fetch();
    },[currentUser])
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
                    <button id = "cancel-btn" onClick= {()=>{
                        var check = window.confirm("Do you want to delete")
                        if (check){
                            const headers = {"Authorization": "Bearer " + token,}
                            axios.delete(`https://flamxby.herokuapp.com/reservation/${reservation.reservation_id}`, {
                                headers: headers
                            })
                            axios.patch(`https://suchonsite-server.herokuapp.com/people/cancel/:date/${reservation.reservation_id}`)
                            history.push("/")
                        }}}> Cancel </button>

                    <button id = "show-btn" onClick={() => {history.push(`reservation/${reservation.reservation_id}`)}}>Show</button>
                </div>
            ))}
            </ul>
            <button id = "register-btn" onClick={reservation}>Register</button>
        </div>
      );
};
export default RegisterPage