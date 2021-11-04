import React from 'react'
import './Body.css'

// const Box = (name) => {
//     return (
        
//     )
// }

const Body = () => {
    return (
        // <div className="container">
            <table>
                <tr>
                    <th colspan="2">
                        <div className="box">
                            <h2>My vaccine</h2>
                        </div>
                    </th>
                </tr>
                <tr>
                    {/* <td><div className="box">
                        <h2>Profile</h2>
                    </div></td> */}
                    <td><div className="box">
                        <h2>Guide</h2>
                    </div></td>
                    <td><div className="box">
                        <h2>Contract us</h2>
                    </div></td>
                </tr>
            </table>
        // </div>
    )
};

export default Body;