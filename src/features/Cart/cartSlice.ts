import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { cartItemProps } from '../types';

// Define a type for the slice state
interface cartProps {
  totalProducts: number,
  cartOpen: boolean,
  productsList: (Array<cartItemProps>)
}


// Define the initial state using that type
const initialState: cartProps = {
  totalProducts: 0,
  cartOpen: false,
  productsList: []
}

export const cartSlice = createSlice({
  name: 'cart', 
  initialState,
  reducers: {
    hydrate:(state, action:PayloadAction<cartProps>) => {
      return action.payload
    },
    addProductsToCart: (state, action:PayloadAction<Array<cartItemProps>>) => {
      state.productsList = action.payload;
      state.totalProducts += 1;
    },
    removeProductsFromCart: (state, action:PayloadAction<Array<cartItemProps>>) => {
      state.productsList = action.payload;
      state.totalProducts -= 1;
    },
    deleteProductsFromCart: (state, action:PayloadAction<[number, number]>) => {
      const productId = action.payload[0];
      state.totalProducts -= action.payload[1];
      state.productsList = state.productsList.filter(product => product.id != productId)
    },
    handleCartOpen: (state) => {
      state.cartOpen = !state.cartOpen
    }
  },
})

export const { addProductsToCart, removeProductsFromCart, deleteProductsFromCart, handleCartOpen, hydrate } = cartSlice.actions;

export default cartSlice.reducer;
