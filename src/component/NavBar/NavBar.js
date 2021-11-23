import React from 'react'
import './NavBar.css'
import {Link, useHistory} from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

const NavBar = () => {
    const {logout} = useAuth()
    const history = useHistory()
    async function handleLogOut(){
        try{
            await logout()
            history.push("/login")
        }
        catch{
            console.log('Failed to log out')
        }
    }
    
    const changeColor = (color) => {
        var icon = document.getElementById("icon");
        switch (color) {
            case "yellow":
                icon.style.color = "#F1C40F";
                break;
            case "green":
                icon.style.color = "#16A085";
                break;
            case "red":
                icon.style.color = "#E74C3C";
                break;
            case "blue":
                icon.style.color = "#2980B9";
                break;
            case "purple":
                icon.style.color = "#8110CD";
                break;
            default:
                console.log("default");
        }
    }

    return (
        <div className="Navbar">
            <h2 id="icon">Icon</h2>
            <ul>
                <li><Link to="/" onClick={() => changeColor("yellow")}>Home</Link></li>
                <li><Link to="/detail" onClick={() => changeColor("green")}>My vaccine</Link></li>
                <li><Link to="#guide" onClick={() => changeColor("red")}>Walk In</Link></li>
                <li><Link to="/contact" onClick={() => changeColor("blue")}>Contact us</Link></li>
                <li><Link to="/logout" onClick={handleLogOut}>Log Out</Link></li>
            </ul>
        </div>
    );
}        


export default NavBar;

// ReactDOM.render(
//     <Router>
//       <NavBar />
//     </Router>
//     , document.getElementById('root'));