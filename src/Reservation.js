import React from 'react'
import Footer from './component/Footer/Footer'
import Header from './component/Reservation/Header'
import ReserveInfo from './component/Reservation/ReserveInfo'
import Navbar from './component/nav_bar/NavBar'

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
