import { loadProducts } from "../store/reducers/productReducer";
import { loadSingleProduct } from "../store/reducers/singleProductReducer";
import { loadProductsByCategory } from "../store/reducers/productsByCategoryReducer";

export const getProducts = (dispatch) => {
  fetch('http://localhost:3333/products/all')
    .then((res) => res.json())
    .then((json) => dispatch(loadProducts(json)))
};

export const getSingleProduct = (id) => {
  return dispatch => {
    fetch(`http://localhost:3333/products/${id}`)
      .then(res => res.json())
      .then(json => dispatch(loadSingleProduct(json)))
  }
}

export const getProductsByCategory = (category) => {
  return dispatch => {
    fetch(`http://localhost:3333/categories/${category}`)
      .then(res => res.json())
      .then(json => dispatch(loadProductsByCategory(json.products)))
  }
}
