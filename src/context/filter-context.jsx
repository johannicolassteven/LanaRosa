import React, { useEffect, useContext, useReducer } from "react";
import reducer from "./filter-reducer";
import { SET_GRIDVIEW, SET_LISTVIEW ,  } from "../Utils/actions";

const initialState = {
  filtered_products: [], 
  load : null,
  grid_view: true,
 
}

const FilterContext = React.createContext()

export const FilterProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState)


 
  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW })
  }
  const setListView = () => {
    dispatch({ type: SET_LISTVIEW })
  }
 
  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext)
}