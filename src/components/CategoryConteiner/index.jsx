import React, { useEffect } from 'react';
import { ProductItem } from '../ProductItem'; 
import s from './style.module.css'
import Container from '../UI/Container';
import FilterForm from '../FilterForm';
import { getCategories } from '../../async_actions/categories_req';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';




export const CategoryContainer = ({products_state, category}) =>{
  const dispatch = useDispatch();

  console.log(category);
  useEffect(() => {
    dispatch(getCategories);
  }, []);
  
 
  const categories_state = useSelector((state) => state.categories);
  console.log(categories_state)

  return (
    <Container className={s.container}>
    <div>
    <h2>{categories_state[category-1].title}</h2>
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
