import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { productsReducer } from './reducers/productReducer';
import { singleProductReducer } from './reducers/singleProductReducer';
import { cartReducer } from './reducers/cartReducer';
import { categoryReducer } from './reducers/categoryReducer';
import { productsByCategoryReducer } from './reducers/productsByCategoryReducer';
import thunk from 'redux-thunk';
import postReqReducer from './reducers/postReqReducer';
import { titleByCategoryReducer } from './reducers/productsTitleReducer';

const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  const state = store.getState();
  localStorage.setItem('reduxState', JSON.stringify(state));
  return result;
};

const rootReducer = combineReducers({
  products: productsReducer,
  singleProduct: singleProductReducer,
  cart: cartReducer,
  categories: categoryReducer,
  productsByCategory: productsByCategoryReducer,
  couponRequest: postReqReducer,
  order: postReqReducer,
  titleByCategory: titleByCategoryReducer,
});

// Проверяем, есть ли у localStorage какое-либо состояние, и используем его в качестве начального состояния
const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {};

export const store = createStore(
  rootReducer,
  persistedState,
  compose(applyMiddleware(thunk, localStorageMiddleware))
);