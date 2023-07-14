import { SIDEBAR_CLOSE, SIDEBAR_OPEN , CARTBAR_OPEN, CARTBAR_CLOSE} from "../Utils/actions";

const reducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN){
    return {...state,isSidebarOpen : true}
  }
  if (action.type === SIDEBAR_CLOSE){
    return {...state,isSidebarOpen : false}
  }
  if (action.type === CARTBAR_OPEN){
    return {...state,isCartbarOpen : true}
  }
  if (action.type === CARTBAR_CLOSE){
    return {...state,isCartbarOpen : false}
  }
}

export default reducer;