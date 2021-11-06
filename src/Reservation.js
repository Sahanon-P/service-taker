import React from 'react'
import Footer from './component/Reservation/Footer'
import Navbar from './component/Reservation/Navbar'
import Header from './component/Reservation/Header'
import ReserveInfo from './component/Reservation/ReserveInfo'

const Reservation = () => {
    return (
        <div>
            <Navbar/>
            <Header title={'My Vaccine'}/ >
            <ReserveInfo/>
            <Footer/>
            
        </div>
    );
}


export default Reservation
