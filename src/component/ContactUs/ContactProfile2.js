import './ContactProfile2.css';
import Ping from './Ping.jpg';
import Pooh from './Pooh.jpg';
import Pund from './Pund.jpg';
import Yo from './Yo.jpg';
import Beom from './Beom.jpg';
import M from './M.jpg';
import First from './First.jpg';
import React from 'react';
 
const ContactProfile2 = () => {
    return (
        <div className='container-contact' >
            <div className="container-contact1">
                <img src={Beom} alt='profile pic' className='pic1'></img>
                <div className='profile-detail1'>
                        <h2>Scrum Master</h2>
                        <p>Potchara Jomjailek</p>
                        <a href='https://github.com/VonKiar' 
                        target="_blank" 
                        rel="noreferrer">
                        Github: VonKiar
                        </a>
                        <p>Tel. 080-010-0341</p>         
                </div>
            </div>

            <div className="container-contact2">
                <div className='profile-detail2'>
                    <h2>Project Manager</h2>
                    <p>Panitan Plengkham</p>
                    <a href='https://github.com/PanitanPlengkham' 
                    target="_blank" 
                    rel="noreferrer">
                    Github: PanitanPlengkham
                    </a>
                    <p>Tel. 086-519-4261</p>      
                </div>
                <img src={Pund} alt='profile pic' className='pic2'></img>
            </div>

            <div className="container-contact3">
                <img src={Ping} alt='profile pic' className='pic3'></img> 
                <div className='profile-detail3'> 
                    <h2>Tech Lead</h2>
                    <p>Sahanon Phisetpakasit</p>
                    <a href='https://github.com/Sahanon-P' 
                    target="_blank" 
                    rel="noreferrer">
                    Github: Sahanon-P
                    </a>
                    <p>Tel. 087-096-6531</p>     
                </div>
            </div>
        
            <div className="container-contact4">
                <div className='profile-detail4'>
                    <h2>Dev</h2>
                    <p>Thornthep Chomchuen</p>
                    <a href ='https://github.com/Raikirieiei'
                    target='_blank'
                    rel='noreferrer'>
                    Github: Raikirieiei
                    </a>
                    <p>Tel. 081-350-8294</p> 
                </div>
                <img src={M} alt='profile pic' className='pic4'></img> 
            </div>

            <div className="container-contact5">
                <img src={First} alt='profile pic' className='pic5'></img> 
                <div className='profile-detail5'>
                    <h2>Dev</h2>
                    <p>Sorawichaya Tiratrakoonwichaya</p>
                    <a href='https://github.com/Firstyfirst'
                    target='_blank'
                    rel='noreferrer'>
                    Github: Firstyfirst
                    </a>  
                    <p>Tel. 097-145-8461</p>    
                </div>
            </div>

            <div className="container-contact6">
                <div className='profile-detail6'>
                    <h2>Dev</h2>
                    <p>Chayayot Saerejittima</p>
                    <a href='https://github.com/chayayot123'
                    target='_blank'
                    rel='noreferrer'>
                    Github: Chayayot123
                    </a>
                    <p>Tel. 091-018-9449</p>      
                </div>
                <img src={Yo} alt='profile pic' className='pic6'></img> 
            </div>
            
            <div className="container-contact7">
                <img src={Pooh} alt='profile pic' className='pic7'></img> 
                <div className='profile-detail7'>  
                    <h2>Dev</h2>
                    <p>Sirapop Kunjiak</p>
                    <a href='https://github.com/bemyXmas'
                    target='_blank'
                    rel='noreferrer'>
                    Github: bemyXmas
                    </a>
                    <p>Tel. 098-394-2623</p>        
                </div>
            </div>

        </div>
    
        
    )
}

export default ContactProfile2