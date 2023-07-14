import React, { useContext } from "react";
import CartContext from "./cart-context";

export const useCart = () =>  {
    const context = useContext(CartContext)

    if (context === undefined){
        throw new Error("use cart must be used whithin a CartProvider")
    }
    
    return context
}