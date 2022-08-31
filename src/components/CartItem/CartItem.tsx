import React from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { addProductsToCart, removeProductsFromCart, deleteProductsFromCart } from '../../features/Cart/cartSlice';
import { cartItemProps } from '../../features/types';
import './cartItem.css';

interface itemProps {
  item: cartItemProps;
}

const CartItem:React.FC<itemProps> = ({item}) => {
  const dispatch = useAppDispatch();
  const listItems = useAppSelector(state => state.cart.productsList)

  const handleAddProduct = (itemClicked:cartItemProps) => {  
    var newAmount = listItems.map(itemAdded =>(
      itemAdded.id === itemClicked.id 
      ?{...itemAdded, amount: itemAdded.amount + 1} 
      :{...itemAdded}
    )) 
    dispatch(addProductsToCart([...newAmount]))
  }

  const handleRemoveProduct = (clickedId: number) => {
    const newAmount = listItems.map(itemAdded =>(
      itemAdded.id === clickedId
      ? {...itemAdded, amount: itemAdded.amount - 1} 
      : {...itemAdded}
    )) 
    dispatch(removeProductsFromCart([...newAmount]))
    newAmount.forEach(feId =>(
      feId.id === clickedId?(feId.amount===0?dispatch(deleteProductsFromCart([feId.id, feId.amount])):null):null
    ))   
  };

  const handleDeleteProduct = (clickedId: number, clickedAmount: number) => {
    dispatch(deleteProductsFromCart([clickedId, clickedAmount]))
  }

  return (
    <div className='cartItem__container'>
      <div className='cartItem__info'>
        <h3>{item.nombre||item.nombrePromo}</h3>

        <div className='cartItem__info-price'>
          <p>Precio: ${item.precio||item.precioFinal}</p>
          <p>Total: ${((item.precio||item.precioFinal||0)*item.amount).toFixed(2)}</p>
        </div>

        <div className='cartItem__info-btn'>
          <button onClick={()=>{handleRemoveProduct(item.id)}} className='cartItem__btn btn-minus'>-</button>
          <p>{item.amount}</p>
          <button onClick={()=>{handleAddProduct(item)}} className='cartItem__btn btn-plus'>+</button>
        </div>
        
        <div className='cartItem__info-delete'>
          <button onClick={()=>{handleDeleteProduct(item.id, item.amount)}} className='cartItem__btn btn-del'>Eliminar</button>
        </div>
      </div>
      <div className='cartItem__img'>
        <img src={item.linkImagen} alt={item.nombre||item.nombrePromo} />
      </div>
    </div>
  )
}

export default CartItem