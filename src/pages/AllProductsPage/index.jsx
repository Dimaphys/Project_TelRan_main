import React, { useEffect } from 'react'
import { ProductsContainer }  from '../../components/ProductsContainer'
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../async_actions/products_req';

export default function AllProductsPage() {
  const products_state = useSelector((store) => store.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts)
  }, []);
  return (
    <div>
      <ProductsContainer products_state={products_state}/>
    </div>
  )
}
