import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter as Router } from 'react-router-dom';
import { hydrate } from './features/Cart/cartSlice';
import { cartItemProps } from './features/types';
import './index.css'

//Redux
import { Provider } from 'react-redux';
import { store }  from './app/store';

interface cartProps {
  cart: {totalProducts: number,
    cartOpen: boolean,
    productsList: (Array<cartItemProps>)};
}

const getTodosFromLocalStorage = () => {
  try { 
    const persistedState = localStorage.getItem('reduxState') 
    if (persistedState){
      const res:cartProps = JSON.parse(persistedState)
      return (res.cart)
    } 
  }
  catch (e){ 
    console.log(e)
  }
}

const todos = getTodosFromLocalStorage();
if(todos){
  store.dispatch(hydrate(todos))
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
)
