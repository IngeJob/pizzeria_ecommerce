import React from 'react'
import Contact from '../Contact/Contact';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <Contact />
      <div className='footer__copy'>
      <p className='p__text'>Copyright © 2022 Pizza House. - All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer