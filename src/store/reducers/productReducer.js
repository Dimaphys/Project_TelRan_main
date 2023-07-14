const initialState = [];

const LOAD_PRODUCTS = '[PRODUCTS_CONTAINER] LOAD_PRODUCTS';
const SORT_PRODUCTS = "SORT_PRODUCTS";
const FILTER__PRODUCTS_BY_PRICE = "FILTER__PRODUCTS_BY_PRICE";
const GET_DISCONT_PRODUCTS = "GET_DISCONT_PRODUCTS";


export const loadProducts = payload => ({
  type: LOAD_PRODUCTS,
  payload
});

export const sortProductAction = payload => ({
  type: SORT_PRODUCTS, payload
});

export const filterProductsByPriceAction = payload => ({
  type: FILTER__PRODUCTS_BY_PRICE, payload
});

export const getDiscountProductsAction = payload => ({
  type: GET_DISCONT_PRODUCTS, payload
});




export const productsReducer = (state = initialState, action) => {
  if(action.type === LOAD_PRODUCTS) {
    return action.payload
  } else if(action.type === SORT_PRODUCTS){
    if(action.payload === "title"){
        state.sort((a,b) => a[action.payload].localeCompare(b[action.payload]))
    }
    else if(action.payload === "price_asc"){
        state.sort((a, b) => a.price -b.price)
    }
    else if(action.payload === "price_desc"){
        state.sort((a, b) => b.price -a.price)
    }
    return [...state]

}else if(action.type === FILTER__PRODUCTS_BY_PRICE) 
{
  const { min_value, max_value, discount } = action.payload;
  return state.map(el => {
      if(el.price >= min_value && el.price <= max_value && (!discount || el.discont_price))
      {
          el.show_item = true
      }
      else{
          el.show_item = false
      }
      return el;
  })
}
 else {
    return state;
  }
 }
// } else if(action.type === GET_DISCONT_PRODUCTS){
//   if(action.payload){
    
//       return state.map(el => {
//           if(!el.discont_price){
//               el.show_item = false
//           } else{
//               el.show_item = true
//           }
//           return el
//       })
//   } else {
//       return state.map(el => {
//           el.show_item = true;
//           return el;
//       })
//   }
// }
//   else {
//   return state;
// }
// }


// else if (action.type === FILTER__PRODUCTS_BY_PRICE) {
//   const { minPrice, maxPrice } = action.payload;
  
//   return state.map((el) => {
//     if (el.price >= minPrice && el.price <= maxPrice) {
//       el.show_item = true;
//     } else {
//       el.show_item = false;
//     }
//     return el;
//   });
// }
// else{
//   return state;
// }
// }

// else if(action.type === FILTER__PRODUCTS_BY_MIN_PRICE)
// {

//     const { min_value } = action.payload;
//     return state.map(el => {
//         if(el.price >= min_value || min_value === undefined)
//         {
//             el.show_item = true;
//         }
//         else{
//             el.show_item = false
//         }
//         return el;
//     })
//   }
//     else if(action.type === FILTER__PRODUCTS_BY_MAX_PRICE)
// {

//     const { max_value } = action.payload;
//     return state.map(el => {
//         if(el.price <= max_value || max_value === undefined)
//         {
//             el.show_item = true;
//         }
//         else{
//             el.show_item = false
//         }
//         return el;
//     })