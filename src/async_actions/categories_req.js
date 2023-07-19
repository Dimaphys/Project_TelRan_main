import { loadCategoriesAction } from "../store/reducers/categoryReducer";
import Host from "../common/Host";

export const getCategories = async (dispatch) => {
  try {
    const response = await fetch([Host(), '/categories/all'].join(""));
    const data = await response.json();
    dispatch(loadCategoriesAction(data));
  } catch (error) {
    // Handle errors here
    console.error("Error fetching categories:", error);
    // You can dispatch an error action here if needed
  }
};
// export const getCategories = (dispatch) => {
//   fetch([Host(),'/categories/all'].join(""))
//     .then((res) => res.json())
//     .then((json) => dispatch(loadCategoriesAction(json)))
// };


