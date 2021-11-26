import React, {useState} from 'react'
import './NavBar.css'
import {useHistory} from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

const NavBar = () => {
    const [error, setError] = useState("")
    const {currentUser, logout} = useAuth()
    const history = useHistory()
    const homeClick = () => history.push('/')
    const detailClick = () => history.push('/detail')
    const contactClick = () => history.push('/contact')
    async function handleLogOut(){
        setError('')
        try{
            await logout()
            history.push("/login")
        }
        catch{
            setError('Failed to log out')
        }
    }
    
    const changeColor = (color) => {
        var icon = document.getElementById("icon");
        switch (color) {
            case "yellow":
                homeClick();
                icon.style.color = "#F1C40F";
                break;
            case "purple":
                detailClick();
                icon.style.color = "#8110CD";
                break;
            case "red":
                icon.style.color = "#E74C3C";
                break;
            case "blue":
                contactClick();
                icon.style.color = "#2980B9";
                break;
            
        }
    }

    return (
        <div className="Navbar">
            <h3 id="icon">Service Taker</h3>
            <ul>
                <li><a onClick={() => changeColor("yellow")}>Home</a></li>
                <li><a onClick={() => changeColor("purple")}>My vaccine</a></li>
                <li><a onClick={() => changeColor("red")}>Walk In</a></li>
                <li><a onClick={() => changeColor("blue")}>Contact us</a></li>
                <li><button onClick={handleLogOut}>Log Out</button></li>
            </ul>
        </div>
    );
}        

export default NavBar;
