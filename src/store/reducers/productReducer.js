import { FinalPrice } from "../../common/FinalPrice";

const initialState = [];

const LOAD_PRODUCTS = "[PRODUCTS_CONTAINER] LOAD_PRODUCTS";
const SORT_PRODUCTS = "SORT_PRODUCTS";
const FILTER__PRODUCTS_BY_PRICE = "FILTER__PRODUCTS_BY_PRICE";
const GET_DISCONT_PRODUCTS = "GET_DISCONT_PRODUCTS";

export const loadProducts = (payload) => ({
  type: LOAD_PRODUCTS,
  payload,
});

export const sortProductAction = (payload) => ({
  type: SORT_PRODUCTS,
  payload,
});

export const filterProductsByPriceAction = (payload) => ({
  type: FILTER__PRODUCTS_BY_PRICE,
  payload,
});

export const getDiscountProductsAction = (payload) => ({
  type: GET_DISCONT_PRODUCTS,
  payload,
});

export const productsReducer = (state = initialState, action) => {
  if (action.type === LOAD_PRODUCTS) {
    return action.payload;
  } else if (action.type === SORT_PRODUCTS) {
    const newState = [...state];
    // console.log(newState)
    if (action.payload === "title") {
      newState.sort((a, b) => a[action.payload].localeCompare(b[action.payload]));
    } else if (action.payload === "price_asc") {
      newState.sort((a, b) => FinalPrice(a) - FinalPrice(b));
    } else if (action.payload === "price_desc") {
      newState.sort((a, b) => FinalPrice(b) - FinalPrice(a));
    }
    return newState;
  } else if (action.type === FILTER__PRODUCTS_BY_PRICE) {
    const { min_value, max_value, discount } = action.payload;

    return state.map((el) => {
      if (
        FinalPrice(el) >= min_value &&
        FinalPrice(el) <= max_value &&
        (!discount || el.discont_price)
      ) {
        el.show_item = true;
      } else {
        el.show_item = false;
      }
      return el;
    });
  } else {
    return state;
  }
};
