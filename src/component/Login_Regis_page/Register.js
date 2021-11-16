import React from 'react'
import './Register.css'



const Register = () => {
    return (
        <form action="" method="POST">
            <div className="container">
                <h2>Registeration</h2>
                <p>Please fill in this form to create an account.</p>
                <hr/>

                <label><b>Email</b></label>
                <input type="text" placeholder="Enter your email address" required/>

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

                <hr/>

                <button type="submit" class="registerbtn">Submit</button>
            </div>
        </form>
    )
};

export default Register
