import React from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { addProductsToCart } from '../../features/Cart/cartSlice';
import { cartItemProps } from '../../features/types';

import { Button } from '@mui/material';
import './itemDetail.css';

interface itemProps {
    item: cartItemProps;
}

const ItemDetail: React.FC<itemProps> = ({item}) => {
  const dispatch = useAppDispatch();
  const listItems = useAppSelector(state => state.cart.productsList)

  const handleAddProduct = (itemClicked:cartItemProps) => {
    const isItemInCart = listItems.find(itemInCart => itemInCart.id === itemClicked.id)
    if(isItemInCart){   
        var newAmount = listItems.map(itemAdded =>(
          itemAdded.id === itemClicked.id 
          ?{...itemAdded, amount: itemAdded.amount + 1} 
          :{...itemAdded}
        )) 
        dispatch(addProductsToCart([...newAmount]))
    } else {
      dispatch(addProductsToCart([...listItems, { ...itemClicked, amount: 1}]))
    }
  }
  
  return (
    <div className='itemDetail__container'>
        <span className='itemDetail__img'>
          <img src={item.linkImagen} alt={item.nombre} />
        </span>
        <div className='itemDetail__info'>
            <span className='itemDetail__info-title menu__title'>
              <h3>{item.nombre||item.nombrePromo}</h3>
              <p>$ {item.precio||item.precioFinal}</p>
            </span>
            <p className='menu__text'>{item.descripcion}</p>
            <Button variant='outlined' color='success' onClick={()=>{handleAddProduct(item)} } >Añadir al carrito</Button>
        </div>
    </div>
  )
}

export default ItemDetail

