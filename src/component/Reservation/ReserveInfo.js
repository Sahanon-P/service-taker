import React, {useState, useEffect} from 'react'
import './ReserveInfo.css'
import axios from 'axios'
import { useHistory } from 'react-router'

const ReserveInfo = ({id}) => {
    const history = useHistory()
    const [data, setData] = useState({
        "reservation_id": 0,
        "register_timestamp": "",
        "name": "",
        "surname": "",
        "birth_date": "",
        "citizen_id": "",
        "occupation": "",
        "address": "",
        "priority": "",
        "vaccinated": false,
        "vac_time": 0
    })
    useEffect(()=>{
        axios.get(`https://suchonsite-server.herokuapp.com/people/by_reservationID/${id}`).then(resp => {
            console.log("setting")
            if(resp.data){
                console.log(resp.data)
                setData(resp.data)
            }
        });
    },[id])

    return (
        <div>
            <div className="subhead1">
                {/* <p> {data} </p> */}
                <p1 >Vaccine Reservation Detail</p1>
                <p>ID: {id}</p>
                <p>Date: </p>
                <p>Schedule: {data.vac_time===0? "Not queue yet": `${data.vac_time}:00`}</p>
                <p>Status: {data.vaccinated ? "vaccinated" : "not vaccinated"}</p>
                <button onClick = {()=> {
                    history.push("/detail")
                }}>Back</button>
            </div>
        </div>
    )
}

export default ReserveInfo
