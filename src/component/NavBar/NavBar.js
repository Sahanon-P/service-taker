import React from 'react'
import './NavBar.css'

const NavBar = () => {
    
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
        }
    }

    return (
        <div className="Navbar">
            <h2 id="icon">Icon</h2>
            <ul>
                <li><a to="#home" onClick={() => changeColor("yellow")}>Home</a></li>
                <li><a to="#vaccine" onClick={() => changeColor("green")}>My vaccine</a></li>
                <li><a to="#guide" onClick={() => changeColor("red")}>Guide</a></li>
                <li><a to="#contract" onClick={() => changeColor("blue")}>Contract us</a></li>
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