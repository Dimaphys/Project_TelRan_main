const LOAD_PRODUCTS = '[PRODUCTS_BY_CATEGORY] LOAD_PRODUCTS';

export const loadProductsByCategory = payload => ({ type: LOAD_PRODUCTS, payload });

export const productsByCategoryReducer = (state = [], action) => {
  if(action.type === LOAD_PRODUCTS){
    return action.payload
    
  } else {
    return state
  }
}
