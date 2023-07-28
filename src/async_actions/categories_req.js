import { loadCategoriesAction } from "../store/reducers/categoryReducer";
import Host from "../common/Host";

export const getCategories = async (dispatch) => {
  try {
    const response = await fetch([Host(), '/categories/all'].join(""));
    const data = await response.json();
    dispatch(loadCategoriesAction(data));
  } catch (error) {
    console.error("Error fetching categories:", error);
  
  }
};
