import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { handleCartOpen } from '../../features/Cart/cartSlice';
import CartItem from '../CartItem/CartItem';
import { cartItemProps } from '../../features/types';
import './cart.css';

const Cart = () => {

  const totalItems = useAppSelector(state => state.cart.productsList)

  const dispatch = useAppDispatch();
  const handleCart = () => {
    dispatch(handleCartOpen())
  }

  const calculateTotal = (items: cartItemProps[]) =>
  items.reduce((ack: number, item) => ack + item.amount * (item.precio||item.precioFinal||0), 0);

  return (
    <div className='cart__container'>
      <h2>Carrito de Compras</h2>
      {totalItems.length ===0?<p>No hay artículos en el carrito</p>:null}
      {totalItems?.map((item) => (
        <CartItem item={item} />
      )
      )}
      <h2>Total: ${calculateTotal(totalItems).toFixed(2)}</h2>
      <span className='close-menu'><button onClick={handleCartOpen} className='btn-menu'>X</button></span>
    </div>
  )
}

export default Cart