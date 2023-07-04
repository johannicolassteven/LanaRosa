import { SIDEBAR_CLOSE, SIDEBAR_OPEN } from "../utils/actions";

const reducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN){
    return {...state,isSidebarOpen : true}
  }
  if (action.type === SIDEBAR_CLOSE){
    return {...state,isSidebarOpen : false}
  }
}

export default reducer;