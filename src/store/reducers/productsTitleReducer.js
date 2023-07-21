const LOAD_TITLE = "LOAD_TITLE"


export const loadTitleByCategory = payload => ({ type: LOAD_TITLE, payload });


export const titleByCategoryReducer = (state = "", action) => {
    if(action.type === LOAD_TITLE){
      return action.payload
      
    } else {
      return state
    }
  }
  

