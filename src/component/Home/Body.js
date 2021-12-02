import React from 'react'
import './Body.css'
import {Link} from 'react-router-dom';


const Body = () => {
    return (
        <div className="container">
            <table>
                <tr>
                    <th colspan="2">
                        <div className="box">
                            <h2><Link to="/detail">My vaccine</Link></h2>
                        </div>
                    </th>
                </tr>
                <tr>
                    <td><div className="box">
                        <h2><Link to="/walkin">Walk In</Link></h2>
                    </div></td>
                    <td><div className="box">
                        <h2><Link to="/contact">Contact Us</Link></h2>
                    </div></td>
                </tr>
            </table>
        </div>
    )
};

export default Body;