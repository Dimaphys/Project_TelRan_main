import React, { useEffect}from 'react'
import { ProductsWithSaleContainer } from '../../components/ProductsWithSaleContainer'
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../async_actions/products_req';


export default function ProductsWithSalePage() {
  const products_state = useSelector((store) => store.products);

    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getProducts)


    }, []); return (
   
    <div><ProductsWithSaleContainer/></div>
  )
}
