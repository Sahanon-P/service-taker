import React from 'react'
import NavBar from './component/NavBar/NavBar'
import Header from './component/Reservation/Header'
import ReserveInfo from './component/Reservation/ReserveInfo'


const Reservation = () => {
    return (
        <div>
            <NavBar/>
            <Header title={'My Vaccine'}/ >
            <ReserveInfo/>
        </div>
    );
}


export default Reservation
