import React from 'react'
import './ReserveInfo.css'

const ReserveInfo = ({data}) => {
    return (
        <div>
            <div className="subhead1">
                <p1 >Vaccine Reservation Detail</p1>
                <p>ID: </p>
                <p>Schedule: </p>
                <p>Vaccine: </p>
                <p>Registered: </p>
                <p>Status: </p>
            </div>

            <div className="subhead2">
                <p1 >User's Information</p1>
                <p>Citizen: </p>
                <p>Name: </p>
                <p>Date: </p>
                <p>Phone: </p>
                <p>Email: </p>
                <p>Occupation: </p>
                <p>Address: </p>
            </div>
        </div>
    )
}

export default ReserveInfo
