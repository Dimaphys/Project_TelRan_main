import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendOrder } from '../../async_actions/post_req';
import s from "./style.module.css"

const PostOrderForm = () => {
  const [orderData, setOrderData] = useState({});
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart); 
  


  const handleChange = (e) => {
    setOrderData({ ...orderData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(orderData).length === 0) {
      console.log('Проверьте данные');
      return;
    }else if(cart.length === 0) 
    {
      console.log('Корзина пуста. Запрос не отправлен.');
      return;
    }
    dispatch(sendOrder(orderData));
  };

  return (
    <div className={s.order_form}>
      <form onSubmit={handleSubmit}>
        <input type="text" name="field1" value={orderData.field1} onChange={handleChange} />
        <button type="submit">Order</button>
      </form>
    </div>
  );
};

export default PostOrderForm;