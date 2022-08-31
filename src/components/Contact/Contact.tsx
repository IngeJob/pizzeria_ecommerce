import React from 'react';

import halfPizza from '../../assets/halfPizza2.png';
import insta from '../../assets/insta.svg'
import wa from '../../assets/wa.svg'
import fb from '../../assets/fb.svg'
import './contact.css';

const Contact = () => {
  return (
    <div className='contact' id='Contact'>
        <img src={halfPizza} alt="halfPizza" />
        <div className='contact__title'>
            <h1 className='contact__h1'>Pizza house</h1>
            <p className='p__text'>Cordova, Av. Simon Bolivar y Sudamerica</p>
        </div>
        <div className='contact__icons'>
            <a href='https://www.facebook.com/profile.php?id=100082913294031' target='_blank' rel='noreferrer' ><img src={fb} alt="fb" /></a>
            <a href='https://www.instagram.com/testdevworld/' target='_blank' rel='noreferrer' ><img src={insta} alt="insta" /></a>
            <a href="/"><img src={wa} alt="wa" /></a>            
        </div>
    </div>
  )
}

export default Contact