import React, { useEffect } from 'react';
import { ProductItem } from '../ProductItem'; 
import s from './index.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../async_actions/products_req';


export const ProductsContainer = () => {
  const store = useSelector((store) => store.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts)
  }, []);

  return (
    <div>
    <h2>All products</h2>
    <div className={s.container}>
      {store.map((item) => (
        <ProductItem key={item.id} {...item} />
      ))}
    </div>
    </div>
  );
};
