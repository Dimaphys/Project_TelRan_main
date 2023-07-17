import { loadCategoriesAction } from "../store/reducers/categoryReducer";
import Host from "../common/Host";


export const getCategories = (dispatch) => {
  fetch([Host(),'/categories/all'].join(""))
    .then((res) => res.json())
    .then((json) => dispatch(loadCategoriesAction(json)))
};
