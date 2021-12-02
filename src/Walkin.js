import React, {useState, useEffect} from 'react'
import NavBar from './component/NavBar/NavBar'
import Header from './component/Reservation/Header'
import axios from 'axios'
import { db } from './firebase'
import { useAuth } from './contexts/AuthContext'
import { useHistory } from 'react-router'
export default function Walkin() {
    const [id, setId] = useState()
    const {currentUser} = useAuth()
    const today = new Date().toISOString()
    const sub_today = today.substring(0,10)
    const [total, setTotal] = useState()
    const history = useHistory()
    const [data, setData] = useState({
        citizen_id : "",
        name : "",
        surname: "",
        occupation: "",
        address: "",
        reservations: [],
    })
    useEffect(()=>{
        axios.get(`https://suchonsite-server.herokuapp.com/people/count/walkin/${sub_today}`).then((resp) =>{
            setTotal(resp.data['total_walkin'])
        })
    },[sub_today,total])
    useEffect (() => {
        async function fetch() {
            const query = await db.collection("users").where("uid", "==", currentUser.uid).get();
            const id = query.docs[0].data().citizen_id
            setId(id)
        }
        fetch();
    },[currentUser])
    useEffect (() => {
        axios.get(`https://flamxby.herokuapp.com/user/${id}`).then(resp => {
        setData(resp.data);
        });
    })
    return (
        <div>
            <NavBar/>
            <Header title={'Walk in'}/ >
            <h1 style = {{fontSize: "30px" , textAlign: "center"}}>Total walkin today: {total}</h1>
        </div>
    )
}
