import { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { handleCartOpen } from '../../features/Cart/cartSlice';
import { Link } from 'react-router-dom';
import pizzaApi from '../../common/api/pizzaApi';
import ProductsListing from '../../components/ProductsListing/ProductsListing';
import BackToTop from '../../components/BackToTop/BackToTop';

import { Badge, Drawer } from '@mui/material';
import { CircularProgress } from '@mui/material';
import { GiShoppingCart } from 'react-icons/gi';
import './menu.css';
import Cart from '../../components/Cart/Cart';

const Menu = () => {
  const [menuShow, setMenuShow] = useState(false);
  const [ allProducts, setAllProducts ] = useState([]); 

  useEffect(()=>{
      const request = async () => {
        const response = await pizzaApi
        .get('/productos')    
        .catch((err) => {
          console.log("Error: ", err)
        })  
        setAllProducts(response?.data.productos)
    }
    request();
  },[]);

  const [ promo, setPromo ] = useState([]); 
  useEffect(()=>{
      const request = async () => {
        const responsePromo = await pizzaApi
        .get('/productos-promo')     
        .catch((err) => {
          console.log("Error: ", err)
        })  
        setPromo(responsePromo?.data.promo)
    }
    request();
  },[]);

  const dispatch = useAppDispatch();
  const isCartOpen = useAppSelector(state => state.cart.cartOpen)
  const totalProducts = useAppSelector(state => state.cart.totalProducts)
  const handleCart = () => {
    dispatch(handleCartOpen())
  }
  
  return (
    <div className='menu-page' id='menu'>
      <div className='menu-page__header p__title'>
        <h1>Nuestro Menu</h1>
      </div>
      <div className='menu-page__links'>
        <Link to='/pizzeria_ecommerce/' className='toHome'>Ir a la página principal</Link>
        <span className='menu-page__cart' onClick={handleCart}>
          <Badge badgeContent={totalProducts} color='error'>
            <GiShoppingCart/>
          </Badge>
        </span>
      </div>
      <div className='menu-page__nav p__text'>      
        <h3 onClick={()=>setMenuShow(false)}>Menu Completo</h3>
        <h3 onClick={()=>setMenuShow(true)}>Promociones</h3>
      </div>
      <div className={allProducts.length==0?'loading':'hidden'}>
        <h1>Cargando....</h1>
        <CircularProgress color='success' size='100px' />
      </div>
      <ProductsListing allProducts={menuShow?promo:allProducts} /> 

      <Drawer anchor='right' open={isCartOpen} onClose={handleCart}>
        <Cart />
      </Drawer> 

      <BackToTop /> 
    </div>
  )
}

export default Menu