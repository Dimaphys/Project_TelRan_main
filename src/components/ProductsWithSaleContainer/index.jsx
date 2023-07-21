import React, { useEffect } from 'react';

import s from './style.module.css'
import Container from '../UI/Container';
import FilterFormDiscount from '../FilterFormDiscount';
import { ProductItem } from '../ProductItem';



export const ProductsWithSaleContainer = ({products_state}) => {

  return (
    <Container className={s.container}>
    <div>
    <h2>Products with sale</h2>
      <div>
       <FilterFormDiscount/>
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
