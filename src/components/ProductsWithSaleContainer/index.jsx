import React, { useEffect } from 'react';
import { ProductItem } from '../ProductItem'; 
import s from './style.module.css'
import Container from '../UI/Container';
import FilterForm from '../FilterForm';



export const ProductsWithSaleContainer = ({products_state}) => {

console.log(products_state)


  return (
    <Container className={s.container}>
    <div>
    <h2>{products_state.title}</h2>
      <div>
       <FilterForm/>
      <div className={s.products_container}>
        {products_state
        .map((item) => (
          <ProductItem key={item.id} {...item} />
        ))}
      </div>
    </div>

   </div>
   </Container>
  );
};
