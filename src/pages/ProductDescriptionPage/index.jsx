import React, { useEffect } from 'react'
import { getSingleProduct } from '../../async_actions/products_req'
import { addToCartAction } from '../../store/reducers/cartReducer';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import s from './style.module.css'
import { Link } from 'react-router-dom';
import Host from '../../common/Host';

export default function ProductDescriptionPage() {

  const dispatch = useDispatch();
  const { id } = useParams();
  const product_state = useSelector(state => state.singleProduct[0]);
  console.log(product_state)
  const { title, description, price, image, category } = product_state;
  console.log(product_state)
  const img_link = [Host(),image].join("");
  const add_to_cart = () => dispatch(addToCartAction({ id: +id, title, price, image }))

  useEffect(() => {
    dispatch(getSingleProduct(id))
  }, []);


  return (
    <div className={s.product}>
       <img src={img_link} alt={title} />
      <p>Title: {title}</p>
      <p>Description: {description}</p>
      <p>Price: {price}$</p>
      <Link to={`/categories/${category}`}>
        <div className={s.category}>{ category }</div>
      </Link>
      <div 
        className={s.add_btn}
        onClick={add_to_cart}
      >
        Add to cart
      </div>
    </div>
  )
}
