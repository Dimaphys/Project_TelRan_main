import React, { useEffect } from 'react';
import { ProductItem } from '../ProductItem'; 
import s from './style.module.css'
import Container from '../UI/Container';
import FilterForm from '../FilterForm';



export const ProductsContainer = ({products_state}) => {

  

  return (
    <Container className={s.container}>
    <div>
    <h2>All products</h2>
      <div>
       <FilterForm/>
      <div className={s.products_container}>
        {products_state
        .filter(el => el.show_item)
        .map((item) => (
          <ProductItem key={item.id} {...item} />
        ))}
      </div>
    </div>

   </div>
   </Container>
  );
};

