
import React, { useContext, useEffect, useReducer } from 'react'
import reducer from './products-reducer.jsx'
import { SIDEBAR_OPEN, SIDEBAR_CLOSE,CARTBAR_OPEN, CARTBAR_CLOSE} from '../Utils/actions.jsx'


const initialState = {
  isSidebarOpen: false,
  isCartbarOpen: false,
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

  const openCartbar = () => {
    dispatch({ type: CARTBAR_OPEN })
  }
  const closeCartbar = () => {
    dispatch({ type: CARTBAR_CLOSE })
  }


  
 
  return (
    <ProductsContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        openCartbar,
        closeCartbar
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
