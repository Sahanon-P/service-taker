import React from 'react'
import { useParams } from 'react-router'
import NavBar from './component/NavBar/NavBar'
import Header from './component/Reservation/Header'
import ReserveInfo from './component/Reservation/ReserveInfo'


const Reservation = () => {
    let {id} = useParams();
    return (
        <div>
            <NavBar/>
            <Header title={'My Vaccine'}/ >
            <ReserveInfo id={id}/>
        </div>
    );
}


export default Reservation
