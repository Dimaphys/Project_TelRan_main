import React from 'react';
import { useDispatch } from 'react-redux';
import s from './index.module.css'
import { Link } from 'react-router-dom';
import { addToCartAction } from '../../store/reducers/cartReducer';


export const ProductItem = ({ id, title, description, price, discont_price, image }) => {

  const dispatch = useDispatch();

  // const delete_product = (e) => {
  //   dispatch(deleteProduct(id));
  //   e.stopPropagation()
  // }
  const host_link = "http://localhost:3333"
  const add_to_cart = () => dispatch(addToCartAction({ id, title, price, image }));

  const img_link = [host_link,image].join("");
  const product_route = `/product/${id}`;
  console.log(img_link);
  const discont_value = (price - discont_price) / price * 100;
  return (
    <div>
        
        <div className={s.card}>
              
              <img src={img_link} alt={title}/>
              <p></p> 
              <p>Title: {title}</p>
              <p className={s.main_price}>
                {discont_value !== 100 ?
                discont_price : price}
              </p>
              <p className={s.discont_p}>
              {discont_value !== 100 ?
               price : 0}
              </p>

        
        </div>
    </div>
  );
};
