import React, { useEffect } from 'react';
import { ProductItem } from '../ProductItem'; 
import s from './index.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../async_actions/products_req';
import Container from '../UI/Container';
import FilterForm from '../FilterForm';



export default function ProductsContainer() {



  const dispatch = useDispatch();

 

  const products_state = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts)
  }, []);

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

