import React from 'react'
import './Form.css'
import Select from 'react-select';

const options = [
    {value: '2021-10-15', label: '2021-10-15'},
    {value: '2021-10-16', label: '2021-10-16'},
    {value: '2021-10-17', label: '2021-10-17'},
    {value: '2021-10-18', label: '2021-10-18'},
    {value: '2021-10-19', label: '2021-10-19'}
]

const Form = () => {
    return (
        <form action="" method="POST">
            <div className="container">
                <h1>New Booking</h1>
                <p>Please fill in this form to create an account.</p>
                <hr/>

                <label><b>Name</b></label>
                <input type="text" placeholder="Enter your name" required/>

                <label><b>Surname</b></label>
                <input type="text" placeholder="Enter your surname" required/>

                <label><b>Citizen ID</b></label>
                <input type="text" placeholder="Enter your citizen ID" required/>

                <label><b>Occupation</b></label>
                <input type="text" placeholder="Enter your job" required/>

                <label><b>Address</b></label>
                <input type="text" placeholder="Enter your Address" required/>

                <label><b>Reservation Date</b></label>
                <Select options={options}/>
                <hr/>

                <button type="submit" class="registerbtn">Submit</button>
            </div>
        </form>
    )
};

export default Form