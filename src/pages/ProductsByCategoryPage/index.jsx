import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsByCategory } from '../../async_actions/products_req'
import { useParams } from 'react-router-dom';
import { CategoryContainer } from '../../components/CategoryConteiner';


export default function ProductsByCategoryPage() {

  const dispatch = useDispatch();

  const { category } = useParams();

  useEffect(() => dispatch(getProductsByCategory(category)), []);

  const products_state = useSelector(state => state.productsByCategory);

  return (
    <div>
      <CategoryContainer products_state={products_state.data} />
    </div>
  )
}
