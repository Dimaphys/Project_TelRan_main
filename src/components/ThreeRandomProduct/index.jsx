import React, { useEffect } from 'react'

import s from "./style.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../async_actions/products_req';
import { ProductItem } from '../ProductItem';

  
  function getRandomInt(max) {

    return Math.floor(Math.random() * max);
  }
 
export default function ThreeRandomProducts() {

    const dispatch = useDispatch();

  const products_state = useSelector((store) => store.products);
  
  useEffect(() => {
    dispatch(getProducts)
  }, []);
  const ids = [];

  while (ids.length < 3) {
    const randomId = getRandomInt(Math.max(products_state.length-1,3));
    if(!ids.includes(randomId+1)){
      ids.push(randomId+1);
    }
  }

  return (
    <div className={s.container}>
    
        {products_state
        .filter(el => el.show_item)
        .filter((item) => ids.includes(item.id))
        .map((item) => (
          <ProductItem key={item.id} {...item} />
        ))}
      
       
    </div>
  )
}