import React, {useState, useEffect} from 'react'
import NavBar from './component/NavBar/NavBar'
import Header from './component/Reservation/Header'
import axios from 'axios'
export default function Walkin() {
    const today = new Date().toISOString()
    const year = today.substring(0,4)
    const month = today.substring(5,7)
    const day = today.substring(8,10)
    const result = `${day}-${month}-${year}`
    const [total, setTotal] = useState()
    useEffect(()=>{
        axios.get(`https://suchonsite-server.herokuapp.com/people/count/walkin/${result}`).then((resp) =>{
            setTotal(resp.data['total_walkin'])
        })
    },[result])
    return (
        <div>
            <NavBar/>
            <Header title={'Walk in'}/ >
            <h1 style = {{fontSize: "30px" , textAlign: "center"}}>Total walkin today: {total}</h1>
        </div>
    )
}
