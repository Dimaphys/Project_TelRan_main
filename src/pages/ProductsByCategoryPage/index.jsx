import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsByCategory, getTitleByCategory} from '../../async_actions/products_req'
import { useParams } from 'react-router-dom';
import { CategoryContainer } from '../../components/CategoryConteiner';



export default function ProductsByCategoryPage() {

  const dispatch = useDispatch();

  const { category } = useParams();

  

  
  useEffect(() => dispatch(getProductsByCategory(category)), []);
  useEffect(() => dispatch(getTitleByCategory(category)))

  const products_by_category_state = useSelector(store => store.productsByCategory);
  const title_by_category_state = useSelector((store) => store.titleByCategory);

  return (
    <div>

      <CategoryContainer products_by_category_state={products_by_category_state}  title_by_category_state={title_by_category_state}/>
    </div>
  )
}
