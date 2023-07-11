import React, { useContext, useReducer, useState } from "react";

const CartContext = React.createContext();

export const useCartContext = () => {
    return useContext(CartContext)
}


const initialState = {
  allProducts: 0,
  total: 0,
  countProducts: 0,
};

const reducer = (state, action) => {
    return state;
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [cart, setCart] = useState([])

  const addToCart = product => {

    const productInCart = cart.findIndex(item => item.id === product.id)

    if (productInCart >= 0){
        const newCart = structuredClone(cart)
        newCart[productInCart].quantity += 1
        return setCart(newCart)
    }

    setCart(prevState => ([
        ...prevState,
        {
            ...product,
            quantity : 1
        }
    ]))
  }

  const removeFromCart = product =>{
    setCart(prevState => prevState.filter(item => item.id === product.id))
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, clearCart, removeFromCart}}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
