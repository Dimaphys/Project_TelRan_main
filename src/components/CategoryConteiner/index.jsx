import React from 'react';
import { ProductByCategoryItem } from '../ProductsByCategoryItem'; 
import s from './style.module.css'
import Container from '../UI/Container';
import FilterForm from '../FilterForm';





export const CategoryContainer = ({products_by_category_state,  title_by_category_state}) =>{
 
 

  return (
    <Container className={s.container}>
    <div>
    <h2>{title_by_category_state}</h2>
      <div>
       <FilterForm/>
      <div className={s.products_container}>
        {products_by_category_state
        .filter(el => el.show_item)
        .map((item) => (
          <ProductByCategoryItem key={item.id} {...item} />
        ))}
      </div>
    </div>

   </div>
   </Container>
  );
};
