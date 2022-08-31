import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { handleCartOpen } from '../../features/Cart/cartSlice';

import logo from '../../assets/logo.svg';
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu, GiShoppingCart } from "react-icons/gi";
import { Badge, Drawer } from '@mui/material';
import './navbar.css';
import Cart from '../Cart/Cart';

const Navbar = () => {
  const[menuHamb, setMenuHamb] = useState(false);

  const dispatch = useAppDispatch();
  const totalProducts = useAppSelector(state => state.cart.totalProducts)
  const isCartOpen = useAppSelector(state => state.cart.cartOpen)

  const handleCart = () => {
    dispatch(handleCartOpen())
  }

  const closeHamb = () =>{
    setMenuHamb(false)
  }

  const openHamb = () =>{
    setMenuHamb(true)
  }

  const[navColor, setNavColor] = useState(false); 
      const changeColor = () => {
        if(window.scrollY >=window.innerHeight){
          setNavColor(true)
        } else {
          setNavColor(false)
        }
      }
    window.addEventListener("scroll", changeColor)

  return (
    <nav className='navbar'>
      <div className={navColor?'navbar__color ':'navbar__container padding__nav'}>
        <div className='navbar__logo'>
          <a className={navColor?'logo-link_fix':'logo-link'} href="#Home">
            <img className='a' src={logo} alt="logo" />
          </a>
        </div>

          <ul className='navbar__links-ul p__nav'>
            <li className='navbar__links-li'><a href='#About'>Nosotros</a></li>          
            <li className='navbar__links-li'><a href="#Menu">Menú</a></li>
            <li className='navbar__links-li'><a href="#Contact">Contacto</a></li>
            <li className='navbar__links-li cart-custom' style={{marginRight: '0'}} onClick={handleCart}> 
              <Badge badgeContent={totalProducts} color='error'>
                <GiShoppingCart/>
              </Badge>
            </li>
          </ul>

        <div className='navbar__hamb'>
          <span className='link-cart cart-custom' onClick={handleCart}>
            <Badge badgeContent={totalProducts} color='error'>
              <GiShoppingCart />
            </Badge>           
          </span>
          {menuHamb
            ? <AiOutlineClose onClick={closeHamb} />
            : <GiHamburgerMenu onClick={openHamb} />  
          }
          {menuHamb&&
            <ul className='navbar__hamb__links-ul'>
              <li className='navbar__hamb__links-li'><a href='#About' onClick={closeHamb}>Nosotros</a></li>
              <li className='navbar__hamb__links-li'><a href="#Menu" onClick={closeHamb}>Menú</a></li>
              <li className='navbar__hamb__links-li'><a href="#Contact" onClick={closeHamb}>Contacto</a></li>
            </ul>
          }        
        </div>
      </div>
      <Drawer anchor='right' open={isCartOpen} onClose={handleCart}>
        <Cart />
      </Drawer>
    </nav>
  )
}

export default Navbar