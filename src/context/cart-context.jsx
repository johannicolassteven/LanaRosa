import React, { useContext, createContext, useState } from "react";

const CartContext = createContext();

const initialState = []
const reducer = (state, action) => {
  return state
}

export function CartProvider ({ children }) {
 
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

const cleartoCart = product => {
  const productInCart = cart.findIndex(item => item.id === product.id)
    if (cart[productInCart].quantity > 0){
      const newCart = structuredClone(cart)
      newCart[productInCart].quantity -=1
      return setCart (newCart)
    }
}



  const removeFromCart = product =>{
    setCart(prevState => prevState.filter(item => item.id !== product.id))
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, clearCart, removeFromCart, cleartoCart}}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
