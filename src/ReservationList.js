import React from 'react'
import NavBar from './component/NavBar/NavBar'
import Header from './component/Header/Header'
import ReserveList from './component/Register/ReserveList'


const ReservationList = () => {
    return (
        <div>
            <NavBar/>
            <Header title={'Vaccine Status'}/ >
            <ReserveList/>
        </div>
    );
}


export default ReservationList