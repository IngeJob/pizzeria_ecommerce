import React from 'react';
import { Link } from 'react-router-dom';
import logoMenu from '../../assets/logo_menu.svg';
import ourMenu1 from '../../assets/ourMenu1.jpg';
import ourMenu2 from '../../assets/ourMenu2.jpg';
import './ourMenu.css';

const OurMenu = () => {
  return (
    <div className='ourMenu section__padding' id='Menu'>
        <div className='ourMenu__content'>
          <span className='about__desc-title'>
            <h2 className='p__title'>Menú</h2>
            <img src={logoMenu} alt="logo menu" />
          </span>
          <p className='p__text'>La masa recién horneada y los quesos derretidos llenan el comedor con aromas culinarios que seguramente harán gruñir el estómago. El horno de ladrillo abierto de Pizza House es la pieza central del restaurante y produce algunas de las mejores pizzas artesanales asadas y horneadas y platos principales en Wilmington Riverfront. Disfrute de las delicias elaboradas por Pizza House tanto para el almuerzo como para la cena.</p>
        </div>
        <div className='ourMenu__img'>
          <img src={ourMenu1} alt="ourMenu1" />
          <img src={ourMenu2} alt="ourMenu2" />
        </div>
        <Link className='custom__button btn_menu' to='menu'>Revisa aquí nuestro menú</Link>
    </div>
  )
}

export default OurMenu