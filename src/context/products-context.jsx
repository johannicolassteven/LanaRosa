
import React, { useContext, useEffect, useReducer } from 'react'
import reducer from './products-reducer.jsx'
import { SIDEBAR_OPEN, SIDEBAR_CLOSE,LOAD_PRODUCTS } from '../Utils/actions.jsx'
import { tops } from '../../db.jsx'


const initialState = {
  isSidebarOpen: false,
  products : tops
}

const ProductsContext = React.createContext()

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN })
  }
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE })
  }


  
 
  return (
    <ProductsContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext)
}
