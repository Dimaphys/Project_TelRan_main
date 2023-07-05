const initialState = [];

const ADD_PRODUCT = '[PRODUCT] ADD_PRODUCT';
const DELETE_PRODUCT = '[PRODUCT_ITEM] DELETE_PRODUCT';
const LOAD_PRODUCTS = '[PRODUCTS_CONTAINER] LOAD_PRODUCTS';

export const addProduct = (payload) => ({
  type: ADD_PRODUCT,
  payload,
});

export const deleteProduct = (payload) => ({
  type: DELETE_PRODUCT,
  payload,
});

export const loadProducts = payload => ({
  type: LOAD_PRODUCTS,
  payload
});



export const productsReducer = (state = initialState, action) => {
  if (action.type === ADD_PRODUCT) {
    return [...state, action.payload]
  } else if(action.type === DELETE_PRODUCT) {
    return state.filter(({id}) => id !== action.payload)
  } else if(action.type === LOAD_PRODUCTS) {
    console.log(action)
    console.log(action.payload)
    return action.payload
  } else {
    return state
  }
};

