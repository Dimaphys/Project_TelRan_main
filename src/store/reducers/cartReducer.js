const ADD_TO_CART = '[PRODUCT_ITEM] ADD_TO_CART';
const DELETE_CART_ITEM = '[CART_ITEM] DELETE_CART_ITEM';
const CLEAR_CART = '[CART_CONTAINER] CLEAR_CART';
const INCREMENT_COUNT = '[CART_ITEM] INCREMENT_COUNT'
const DECREMENT_COUNT = '[CART_ITEM] DECREMENT_COUNT'

export const addToCartAction = payload => ({ type: ADD_TO_CART, payload });
export const deleteCartItemAction = payload => ({ type: DELETE_CART_ITEM, payload });
export const clearCartAction = () => ({ type: CLEAR_CART });
export const incrementCountAction = payload => ({ type: INCREMENT_COUNT, payload });
export const decrementCountAction = payload => ({ type: DECREMENT_COUNT, payload });

const checkProduct = (state, payload) => {
  const target_product = state.find(el => el.id === payload.id);
  if(!target_product){
    return [...state, {...payload, count: 1}]
  } else {
    target_product.count++
    return [...state]
  }
}

export const cartReducer = (state = [], action) => {
  if (action.type === ADD_TO_CART){
    return checkProduct(state, action.payload)
  } else if(action.type === DELETE_CART_ITEM) {
    return state.filter(el => el.id !== action.payload)
  } else if(action.type === CLEAR_CART) {
    return []
  } else if(action.type === INCREMENT_COUNT) {
    state.find(el => el.id === action.payload).count++
    return [...state]
  } else if(action.type === DECREMENT_COUNT){
    const target_card = state.find(el => el.id === action.payload);
    if (target_card.count === 1){
      return state.filter(el => el.id !== action.payload)
    } else {
      target_card.count--
      return [...state]
    }
  } else {
    return state
  }
}
