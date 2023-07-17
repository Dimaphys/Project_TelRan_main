import React, { useEffect } from 'react';
import { ProductItem } from '../ProductItem'; 
import s from './style.module.css'
import Container from '../UI/Container';
import FilterForm from '../FilterForm';



export const CategoryContainer = ({products_state}) => {




  return (
    <Container className={s.container}>
    <div>
    <h2>Категория</h2>
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
