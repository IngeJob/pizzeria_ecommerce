import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import video from '../../assets/video_pizza2.mp4';

import { BsChevronDoubleDown } from "react-icons/bs";
import './header.css'

const Header = () => {
  return (
    <div className='header' id='Home'>
      <Navbar />
      <div className='header__title'>     
        <h1 className='ht_h1'>Pizza house</h1>
        <div className='header__title-see'>
        <a href='/#About' className='custom__button ht_a'>Ver más</a>
          <BsChevronDoubleDown className='ht_arrow' />
        </div>
      </div>
      <video muted autoPlay loop playsInline>
        <source 
          src={video}
          type="video/mp4"
        />
      </video>
      <div className='header__layer'></div>
    </div>
  )
}

export default Header