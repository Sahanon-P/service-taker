import React from 'react'
import './Body.css'
import {useHistory} from 'react-router-dom';

const Body = () => {
    const history = useHistory();
    const detailClick = () => history.push('/detail');
    const contactClick = () => history.push('/contact');

    return (
        <div className="container">
            <table>
                <tr>
                    <th colspan="2">
                        <button type="button" className="btn" onClick={() => detailClick()}>My vaccine</button>
                    </th>
                </tr>
                <tr>
                    <td>
                        <button type="button" className="btn">Walk In</button>
                    </td>
                    <td>
                        <button type="button" className="btn" onClick={() => contactClick()}>Contact Us</button>
                    </td>
                </tr>
            </table>
        </div>
    )
};

export default Body;