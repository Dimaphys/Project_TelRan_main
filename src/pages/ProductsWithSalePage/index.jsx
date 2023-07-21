import React, { useEffect}from 'react'
import { ProductsWithSaleContainer } from '../../components/ProductsWithSaleContainer'
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../async_actions/products_req';


export default function ProductsWithSalePage() {
 

    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getProducts)}, []);
      const products_state = useSelector((store) => store.products);

     return (
   
    <div><ProductsWithSaleContainer products_state={products_state.filter((el) => el.discont_price)}/></div>
  )
}
