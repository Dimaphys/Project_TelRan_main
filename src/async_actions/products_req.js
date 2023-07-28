import { loadProducts } from "../store/reducers/productReducer";
import { loadSingleProduct } from "../store/reducers/singleProductReducer";
import { loadProductsByCategory, loadTitleByCategory } from "../store/reducers/productsByCategoryReducer";
import Host from "../common/Host";


// Получение всех продуктов и присвоением им свойства show_item

export const getProducts = (dispatch) => {
  fetch([Host(),'/products/all'].join(""))
    .then((res) => res.json())
    .then((json) => {
      const new_json = json.map(el => ({
          ...el,
          show_item:true
      }));
      dispatch(loadProducts(new_json))})
  
}

//Получение одного продукта

export const getSingleProduct = (id) => {
  return dispatch => {
    fetch([Host(),`/products/${id}`].join(""))
      .then(res => res.json())
      .then(json => dispatch(loadSingleProduct(json[0])))
      
  }
}

//Получение всех продуктов по категории

export const getProductsByCategory = (id) => {
  return dispatch => {
    fetch([Host(),`/categories/${id}`].join(""))
      .then(res => res.json())
      .then((json)  => {
        const new_json = json.data.map(el=>({
          ...el,
          show_item:true
        }));
        dispatch(loadProductsByCategory(new_json))})
      }
}  

//Получение чистого id категории

export const getTitleByCategory = (id) => {
  return dispatch => {
    fetch([Host(),`/categories/${id}`].join(""))
      .then(res => res.json())
      .then((json)  => {
        const new_json = json.category.title;
        dispatch(loadTitleByCategory(new_json))})
      }
} 
  

// 