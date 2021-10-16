import './ContactProfile.css';
import Ping from './Ping.jpg';
import Pooh from './Pooh.jpg';
import Pund from './Pund.jpg';
import Yo from './Yo.jpg';
import Beom from './Beom.jpg';
import M from './M.jpg';
import First from './First.jpg';
import React from 'react';

const ContactProfile = () => {
    return (
        <div className='container' >
        
            <div className='profile1'>
                <img src={Beom} alt='profile pic' className='pic'></img>
                <p>Scrum Master</p>
                <p>Potchara Jomjailek</p>
                <p>Github</p>
                <p>Tel.</p>         
            </div>
            
            <div className="line2">
                <div className='profile2'>
                    <img src={Pund} alt='profile pic' className='pic'></img>
                    <p>Project Manager</p>
                    <p>Panitan Plengkham</p>
                    <p>Github</p>
                    <p>Tel.</p>      
                </div>
              
                <div className='profile3'> 
                    <img src={Ping} alt='profile pic' className='pic'></img> 
                    <p>Tech Lead</p>
                    <p>Sahanon Phisetpakasit</p>
                    <p>Github</p>
                    <p>Tel.</p>     
                </div>
            </div>

            <div className="line3">
                <div className='profile4'>
                    <img src={M} alt='profile pic' className='pic'></img> 
                    <p>Dev</p>
                    <p>Thornthep Chomchuen</p>
                    <p>Github</p>
                    <p>Tel.</p> 
                </div>

                <div className='profile5'>
                    <img src={First} alt='profile pic' className='pic'></img> 
                    <p>Dev</p>
                    <p>Sorawichaya Tiratrakoonwichaya</p>
                    <p>Github</p>  
                    <p>Tel.</p>    
                </div>
            </div>

            <div className="line4">
                <div className='profile6'>
                    <img src={Yo} alt='profile pic' className='pic'></img> 
                    <p>Dev</p>
                    <p>Chayayot Saerejittima</p>
                    <p>Github</p>
                    <p>Tel.</p>      
                </div>

                <div className='profile7'>
                    <img src={Pooh} alt='profile pic' className='pic'></img> 
                    <p>Dev</p>
                    <p>Sirapop Kunjiak</p>
                    <p>Github</p>
                    <p>Tel.</p>        
                </div>
            </div>

        </div>
        
    )
}

export default ContactProfile
